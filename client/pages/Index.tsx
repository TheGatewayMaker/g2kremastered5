import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Sun, Moon, ArrowUpRight } from "lucide-react";

const categories = [
  {
    name: "Streaming",
    path: "/streaming",
    description: "Stream movies and shows",
  },
  {
    name: "Apps & Softwares",
    path: "/apps",
    description: "Download applications",
  },
  {
    name: "Books & Novels",
    path: "/books",
    description: "Read and download books",
  },
  {
    name: "Artificial Intelligence",
    path: "/ai",
    description: "AI tools and resources",
  },
  {
    name: "Games",
    path: "/games",
    description: "Gaming content",
  },
  {
    name: "Torrents",
    path: "/torrents",
    description: "Torrent resources",
  },
  {
    name: "Dark Web",
    path: "/darkweb",
    description: "Coming soon",
    disabled: true,
  },
  {
    name: "Breach & Leaks",
    path: "/breaches",
    description: "Coming soon",
    disabled: true,
  },
];

export default function Index() {
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

  const handleCategoryClick = (e: React.MouseEvent, disabled: boolean) => {
    if (disabled) {
      e.preventDefault();
    }
  };

  return (
    <div className="min-h-screen flex flex-col transition-colors duration-200">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-[hsl(var(--border))] bg-[hsl(var(--bg-primary))] backdrop-blur-[20px] bg-opacity-80">
        <div className="flex items-center justify-between px-4 sm:px-6 lg:px-8 py-4">
          <Link
            to="/"
            className="text-sm font-medium text-[hsl(var(--text-secondary))] hover:text-[hsl(var(--text-primary))] transition-colors duration-200"
          >
            GATEWAY LINKS 2K25
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
        {/* Hero Section */}
        <div className="mb-16 sm:mb-20 lg:mb-24 relative">
          <div className="space-y-6 sm:space-y-8">
            <div className="space-y-2">
              <h1 className="heading-xl text-[hsl(var(--text-primary))] leading-tight">
                Gateway Links
              </h1>
              <h2 className="heading-lg text-[hsl(var(--text-primary))] leading-tight opacity-80">
                2K25
              </h2>
            </div>
            <p className="text-base sm:text-lg text-[hsl(var(--text-secondary))] max-w-2xl leading-relaxed">
              Your gateway to an extensive collection of streaming platforms,
              applications, books, AI tools, games, and more. Discover
              everything in one place with a clean, modern interface.
            </p>
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6">
          {categories.map((category) => (
            <Link
              key={category.name}
              to={category.path}
              onClick={(e) => handleCategoryClick(e, category.disabled)}
              className={`group relative rounded-xl border border-[hsl(var(--border))] bg-[hsl(var(--bg-card))] p-6 sm:p-7 lg:p-8 transition-all duration-300 ${
                category.disabled
                  ? "cursor-not-allowed opacity-50"
                  : "hover:border-[hsl(var(--text-secondary))] hover:shadow-[0_4px_12px_var(--shadow-hover)]"
              }`}
            >
              {/* Content */}
              <div className="space-y-3">
                <div className="flex items-start justify-between">
                  <h3 className="text-lg sm:text-xl font-bold text-[hsl(var(--text-primary))] leading-snug transition-colors duration-300">
                    {category.name}
                  </h3>
                  {!category.disabled && (
                    <ArrowUpRight
                      size={18}
                      className="text-[hsl(var(--text-secondary))] opacity-0 transition-all duration-300 group-hover:opacity-100"
                    />
                  )}
                </div>
                <p
                  className={`text-sm transition-colors duration-300 ${
                    category.disabled
                      ? "text-[hsl(var(--text-muted))]"
                      : "text-[hsl(var(--text-secondary))] group-hover:text-[hsl(var(--text-primary))]"
                  }`}
                >
                  {category.description}
                </p>
              </div>
            </Link>
          ))}
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
                  <Link
                    to="/streaming"
                    className="hover:text-[hsl(var(--accent))] transition-colors"
                  >
                    Streaming
                  </Link>
                </li>
                <li>
                  <Link
                    to="/apps"
                    className="hover:text-[hsl(var(--accent))] transition-colors"
                  >
                    Apps & Softwares
                  </Link>
                </li>
                <li>
                  <Link
                    to="/books"
                    className="hover:text-[hsl(var(--accent))] transition-colors"
                  >
                    Books & Novels
                  </Link>
                </li>
                <li>
                  <Link
                    to="/ai"
                    className="hover:text-[hsl(var(--accent))] transition-colors"
                  >
                    AI
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-[hsl(var(--text-primary))] mb-4">
                More
              </h3>
              <ul className="space-y-2 text-sm text-[hsl(var(--text-secondary))]">
                <li>
                  <Link
                    to="/games"
                    className="hover:text-[hsl(var(--accent))] transition-colors"
                  >
                    Games
                  </Link>
                </li>
                <li>
                  <Link
                    to="/torrents"
                    className="hover:text-[hsl(var(--accent))] transition-colors"
                  >
                    Torrents
                  </Link>
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
                Your gateway to discover and explore the world's most extensive
                collection of digital resources.
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
