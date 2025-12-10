import { useEffect, useRef, useState } from "react";

interface Star {
  x: number;
  y: number;
  y0: number; // Original Y position
  z: number;
  vz: number;
  baseOpacity: number;
  currentOpacity: number;
  vx: number;
  vy: number;
  mass: number;
}

export function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const starsRef = useRef<Star[]>([]);
  const mouseRef = useRef({ x: 0, y: 0, vx: 0, vy: 0 });
  const lastMouseRef = useRef({ x: 0, y: 0 });
  const animationRef = useRef<number>();
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    // Check if desktop on mount
    const checkDesktop = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    checkDesktop();
    window.addEventListener("resize", checkDesktop);
    return () => window.removeEventListener("resize", checkDesktop);
  }, []);

  useEffect(() => {
    if (!isDesktop) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Initialize stars - much more dense
    const starCount = Math.max(300, Math.min(800, Math.floor((window.innerWidth * window.innerHeight) / 3000)));
    starsRef.current = Array.from({ length: starCount }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      y0: Math.random() * canvas.height,
      z: Math.random(),
      vz: Math.random() * 0.008 + 0.003,
      baseOpacity: Math.random() * 0.5 + 0.15,
      currentOpacity: Math.random() * 0.5 + 0.15,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.2,
      mass: Math.random() * 0.5 + 0.5,
    }));

    // Mouse tracking with velocity
    const handleMouseMove = (e: MouseEvent) => {
      const newX = e.clientX;
      const newY = e.clientY;

      mouseRef.current.vx = newX - mouseRef.current.x;
      mouseRef.current.vy = newY - mouseRef.current.y;
      mouseRef.current.x = newX;
      mouseRef.current.y = newY;

      lastMouseRef.current.x = newX;
      lastMouseRef.current.y = newY;
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Animation loop
    const animate = () => {
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const stars = starsRef.current;
      const mouseX = mouseRef.current.x;
      const mouseY = mouseRef.current.y;
      const mouseVx = mouseRef.current.vx;
      const mouseVy = mouseRef.current.vy;
      const attractRadius = 300;
      const repelRadius = 80;

      stars.forEach((star) => {
        // Calculate distance to mouse
        const dx = mouseX - star.x;
        const dy = mouseY - star.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        // Intelligent cursor interaction
        if (distance < attractRadius) {
          // Attraction force at medium distance
          if (distance > repelRadius) {
            const influence = 1 - distance / attractRadius;
            const force = influence * 0.15;

            // Attract particles toward cursor movement direction
            star.vx += (dx / distance) * force * 0.5;
            star.vy += (dy / distance) * force * 0.5;

            // Also push in direction of cursor movement
            star.vx += mouseVx * 0.05;
            star.vy += mouseVy * 0.05;

            star.currentOpacity = star.baseOpacity + influence * 0.8;
          } else {
            // Repulsion force when too close
            const repelForce = (1 - distance / repelRadius) * 0.2;
            star.vx -= (dx / distance) * repelForce;
            star.vy -= (dy / distance) * repelForce;
            star.currentOpacity = star.baseOpacity + 0.5;
          }
        } else {
          star.currentOpacity = star.baseOpacity;
        }

        // Apply damping
        star.vx *= 0.92;
        star.vy *= 0.92;

        // Gentle gravity back to original Y
        const yDiff = star.y0 - star.y;
        star.vy += yDiff * 0.002;

        // Update position
        star.x += star.vx;
        star.y += star.vy;

        // Depth effect
        star.z += star.vz;
        if (star.z > 1) {
          star.z = 0;
          star.x = Math.random() * canvas.width;
          star.y = Math.random() * canvas.height;
          star.y0 = star.y;
          star.vx = 0;
          star.vy = 0;
          star.baseOpacity = Math.random() * 0.5 + 0.15;
        }

        // Wrap around edges
        if (star.x < -20) star.x = canvas.width + 20;
        if (star.x > canvas.width + 20) star.x = -20;
        if (star.y < -20) star.y = canvas.height + 20;
        if (star.y > canvas.height + 20) star.y = -20;

        // Calculate size based on depth
        const size = star.z * 1.8;

        // Draw star with subtle glow
        ctx.fillStyle = `rgba(150, 200, 255, ${star.currentOpacity * 0.4})`;
        ctx.beginPath();
        ctx.arc(star.x, star.y, Math.max(0.5, size * 1.3), 0, Math.PI * 2);
        ctx.fill();

        // Draw core
        ctx.fillStyle = `rgba(200, 230, 255, ${star.currentOpacity})`;
        ctx.beginPath();
        ctx.arc(star.x, star.y, Math.max(0.2, size), 0, Math.PI * 2);
        ctx.fill();
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isDesktop]);

  if (!isDesktop) return null;

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{
        zIndex: 1,
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
      }}
    />
  );
}
