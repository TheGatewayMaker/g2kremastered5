import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Sun, Moon, ArrowLeft } from "lucide-react";

interface CategoryPlaceholderProps {
  title: string;
  isDevelopment?: boolean;
}

export default function CategoryPlaceholder({
  title,
  isDevelopment = false,
}: CategoryPlaceholderProps) {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;
    const initialTheme = savedTheme || (prefersDark ? "dark" : "light");
    setTheme(initialTheme);
    document.documentElement.setAttribute("data-theme", initialTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <div className="min-h-screen flex flex-col transition-colors duration-200">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-[hsl(var(--border))] bg-[hsl(var(--bg-primary))] backdrop-blur-[20px] bg-opacity-80">
        <div className="flex items-center justify-between px-4 sm:px-6 lg:px-8 py-4">
          <Link
            to="/"
            className="flex items-center gap-2 text-sm font-medium text-[hsl(var(--text-secondary))] hover:text-[hsl(var(--text-primary))] transition-colors duration-200"
          >
            <ArrowLeft size={18} />
            Back
          </Link>
          <button
            onClick={toggleTheme}
            className="p-2 rounded-md transition-all duration-200 hover:bg-[hsl(var(--bg-secondary))] text-[hsl(var(--text-secondary))] hover:text-[hsl(var(--text-primary))]"
            aria-label="Toggle theme"
          >
            {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="text-center space-y-8">
          <div className="space-y-4">
            <h1 className="heading-lg text-[hsl(var(--text-primary))]">
              {title}
            </h1>
            {isDevelopment ? (
              <>
                <p className="text-lg sm:text-xl text-[hsl(var(--text-secondary))] max-w-2xl mx-auto">
                  This section is currently under development and undergoing
                  upgrades. Please check back soon for updates!
                </p>
                <div className="inline-block mt-4 px-6 py-3 rounded-lg bg-[hsl(var(--accent))] text-white font-medium">
                  🚀 Coming Soon
                </div>
              </>
            ) : (
              <p className="text-lg sm:text-xl text-[hsl(var(--text-secondary))] max-w-2xl mx-auto">
                This section is currently being populated. Check back soon or
                use the navigation to explore other categories!
              </p>
            )}
          </div>

          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-[hsl(var(--border))] text-[hsl(var(--text-primary))] hover:bg-[hsl(var(--bg-secondary))] transition-colors duration-200 font-medium"
          >
            <ArrowLeft size={18} />
            Return to Gateway
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-[hsl(var(--border))] bg-[hsl(var(--bg-secondary))] mt-auto">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-8 pb-8 border-b border-[hsl(var(--border))]">
            <div>
              <h3 className="text-sm font-semibold text-[hsl(var(--text-primary))] mb-4">
                Categories
              </h3>
              <ul className="space-y-2 text-sm text-[hsl(var(--text-secondary))]">
                <li>
                  <a
                    href="/"
                    className="hover:text-[hsl(var(--accent))] transition-colors"
                  >
                    Streaming
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="hover:text-[hsl(var(--accent))] transition-colors"
                  >
                    Apps & Softwares
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="hover:text-[hsl(var(--accent))] transition-colors"
                  >
                    Books & Novels
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="hover:text-[hsl(var(--accent))] transition-colors"
                  >
                    AI
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-[hsl(var(--text-primary))] mb-4">
                More
              </h3>
              <ul className="space-y-2 text-sm text-[hsl(var(--text-secondary))]">
                <li>
                  <a
                    href="/"
                    className="hover:text-[hsl(var(--accent))] transition-colors"
                  >
                    Games
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="hover:text-[hsl(var(--accent))] transition-colors"
                  >
                    Torrents
                  </a>
                </li>
                <li>
                  <span className="text-[hsl(var(--text-muted))] cursor-not-allowed">
                    Dark Web
                  </span>
                </li>
                <li>
                  <span className="text-[hsl(var(--text-muted))] cursor-not-allowed">
                    Breach & Leaks
                  </span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-[hsl(var(--text-primary))] mb-4">
                Gateway Links
              </h3>
              <p className="text-sm text-[hsl(var(--text-secondary))] leading-relaxed">
                Your gateway to discover and explore digital resources across
                multiple categories.
              </p>
            </div>
          </div>
          <div className="text-center">
            <p className="text-sm text-[hsl(var(--text-muted))]">
              © 2025 Gateway Links 2K25. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
