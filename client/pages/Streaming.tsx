import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Sun,
  Moon,
  ArrowLeft,
  Monitor,
  PlayCircle,
  Tv,
  Download,
  Globe,
} from "lucide-react";

const streamingCategories = [
  {
    icon: Monitor,
    title: "Streaming Services",
    count: "26 platforms",
    links: [
      { name: "Cineby", url: "https://www.cineby.app/" },
      { name: "2Flix", url: "https://www.cineby.su/" },
      { name: "BroFlix", url: "https://broflix.cc/" },
      { name: "NetMirror", url: "https://netmirror.app/" },
      { name: "Freek", url: "https://freek.to/" },
      { name: "HydraHD", url: "https://hydrahd.com/" },
      { name: "NEPU", url: "https://nepu.to/" },
      { name: "Smashystream", url: "https://smashystream.com/" },
      { name: "Cineb", url: "https://cineb.rs/" },
      { name: "Watch2Day", url: "https://watch2day.online/" },
      { name: "456movie", url: "https://456movie.com/" },
      { name: "7x Stream", url: "https://cinema.7xtream.com/" },
      { name: "7x Movies", url: "https://movies.7xtream.com/" },
      { name: "YupMovies", url: "https://yupmovies.in" },
      { name: "345Movie", url: "https://www.345movie.net/" },
      { name: "BrocoFlix", url: "https://brocoflix.com/" },
      { name: "Filmex", url: "https://filmex.to/" },
      { name: "Heartive", url: "https://heartive.pages.dev/" },
      {
        name: "movie-web",
        url: "https://erynith.github.io/movie-web-instances/",
      },
      { name: "MovieUwU", url: "https://movieuwutv.top/" },
      { name: "Putlocker", url: "https://putlocker.pe/" },
      { name: "ShowboxMovies", url: "https://www.showboxmovies.net/" },
      { name: "VidPlay", url: "https://vidplay.org/" },
      { name: "xpWatch", url: "https://xpwatch-v2.pages.dev/" },
      { name: "YoYoMovies", url: "https://Yoyomovies.net/" },
      { name: "Zoechip", url: "https://zoechip.org/" },
    ],
  },
  {
    icon: PlayCircle,
    title: "Additional Platforms",
    count: "23 platforms",
    links: [
      { name: "AutoEmbed", url: "https://watch.autoembed.cc/" },
      { name: "BingeMaster", url: "https://bingemaster.netlify.app/" },
      { name: "BingeFlex", url: "https://bingeflex.vercel.app/" },
      { name: "BooFlix", url: "https://www.booflix.to/" },
      { name: "BrocoFlix", url: "https://brocoflix.xyz/" },
      { name: "Cataz", url: "https://cataz.to/" },
      { name: "Cineby RU", url: "https://www.cineby.ru/" },
      { name: "CucuFlix", url: "https://cucuflix.xyz/" },
      { name: "DashFlix", url: "https://dashflix.top/" },
      { name: "Donkey", url: "https://donkey.to/" },
      { name: "DopeBox", url: "https://dopebox.to/" },
      { name: "456movie", url: "https://456movie.net/" },
      { name: "CinemaDeck", url: "https://cinemadeck.com/" },
      { name: "FMovies", url: "https://fmovies-hd.to/" },
      { name: "KipStream", url: "https://kipstream.lol/" },
      { name: "Resources", url: "https://rentry.co/megathread-movie-web" },
      { name: "NetMirror", url: "https://iosmirror.cc/" },
      { name: "PopcornMovies", url: "https://popcornmovies.org/" },
      { name: "RgShows", url: "https://rgshows.vercel.app/" },
      { name: "Streamflix", url: "https://watch.streamflix.one/" },
      { name: "Watchug", url: "https://watch.ug/" },
      { name: "YesMovies", url: "https://yesmovies.ag/" },
      { name: "yuPPow", url: "https://yuppow.com/" },
    ],
  },
  {
    icon: Tv,
    title: "More Services",
    count: "21 platforms",
    links: [
      { name: "GoMovies", url: "https://gomovies.sx/" },
      { name: "HiMovies", url: "https://himovies.sx/" },
      { name: "HuraWatch", url: "https://hurawatchz.to/" },
      { name: "KipFlix", url: "https://kipflix.xyz/" },
      { name: "KipWatch", url: "https://kipwatch.xyz/" },
      { name: "LetStream", url: "https://www.letstream.site/" },
      { name: "LookMovie", url: "https://lookmovie2.to/" },
      { name: "MappleTV", url: "https://mapple.tv/" },
      { name: "FShareTV", url: "https://fsharetv.co/" },
      { name: "Soap2Day", url: "https://ww25.soap2day.day/" },
      { name: "SFlix", url: "https://sflix.to/" },
      { name: "GoKuTV", url: "https://gokutv.pics" },
      { name: "Goku", url: "https://goku.sx/" },
      { name: "Bingeflix", url: "https://bingeflix.tv/" },
      { name: "Guide", url: "https://a.imagem.app/3rEfOV.png" },
      { name: "M-Zone", url: "https://m-zone.org/" },
      { name: "Nunflix", url: "https://nunflix-ey9.pages.dev/" },
      { name: "PressPlay", url: "https://www.pressplay.top/" },
      { name: "Rive", url: "https://rivestream.xyz/" },
      { name: "UniqueStream", url: "https://uniquestream.net/" },
      { name: "XPrime", url: "https://xprime.tv/" },
    ],
  },
  {
    icon: Download,
    title: "Direct Downloads",
    count: "14 sites",
    links: [
      { name: "Cinema of the World", url: "https://worldscinema.org/" },
      { name: "Light Downloads", url: "https://lightdl.xyz/" },
      { name: "Mkv Cinemas", url: "https://mkvcinemas.kim/" },
      { name: "UHDMovies", url: "https://uhdmovies.bet/" },
      { name: "Vadapav", url: "https://vadapav.mov/" },
      { name: "Vegamovies", url: "https://vegamovies.diet/" },
      { name: "mkvCinemas", url: "https://mkvcinemas.how/" },
      { name: "Pahe", url: "https://pahe.ink/" },
      { name: "PSArips", url: "https://psa.wf/" },
      { name: "rarefilmm", url: "https://rarefilmm.com/" },
      { name: "Movie Channel", url: "https://free-movies.to/" },
      { name: "UHDMovies", url: "https://uhdmovies.fans/" },
      { name: "Vegamovies", url: "https://vegamovies.ms/" },
      { name: "Vidnaija", url: "https://vidnaija.com.ng/" },
    ],
  },
  {
    icon: Globe,
    title: "Asian Content",
    count: "10 platforms",
    links: [
      { name: "AsiaFlix", url: "https://asiaflix.net/" },
      { name: "Kisskh", url: "https://kisskh.co/" },
      { name: "DramaHood", url: "https://kdramahood.com/" },
      { name: "Einthusan", url: "https://einthusan.tv/" },
      { name: "MyAsianTv", url: "https://myasiantv.ac/" },
      { name: "MkvDrama", url: "https://mkvdrama.org/" },
      { name: "DramaDay", url: "https://dramaday.me/" },
      { name: "Dramanice", url: "https://ww3.dramanice.video/" },
      { name: "345Movie", url: "https://www.345movie.net/" },
      { name: "456movie", url: "https://456movie.net/" },
    ],
  },
];

export default function Streaming() {
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
        {/* Page Header */}
        <div className="mb-12 sm:mb-16">
          <h1 className="heading-lg text-[hsl(var(--text-primary))] mb-3">
            Streaming Resources
          </h1>
          <p className="text-base sm:text-lg text-[hsl(var(--text-secondary))]">
            Curated collection of streaming platforms and download sites
          </p>
        </div>

        {/* Categories */}
        <div className="space-y-8 sm:space-y-10">
          {streamingCategories.map((category) => {
            const IconComponent = category.icon;
            return (
              <section
                key={category.title}
                className="group rounded-xl border border-[hsl(var(--border))] bg-[hsl(var(--bg-card))] p-6 sm:p-8 transition-all duration-300 hover:border-[hsl(var(--text-secondary))] hover:shadow-[0_4px_12px_var(--shadow-hover)]"
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-2">
                  <IconComponent
                    size={24}
                    className="text-[hsl(var(--text-secondary))] transition-colors duration-300 group-hover:text-[hsl(var(--text-primary))]"
                  />
                  <h2 className="heading-md text-[hsl(var(--text-primary))]">
                    {category.title}
                  </h2>
                </div>
                <p className="text-sm text-[hsl(var(--text-muted))] mb-6 font-medium">
                  {category.count}
                </p>

                {/* Links Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
                  {category.links.map((link) => (
                    <a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-2 px-3 py-2.5 rounded-md text-sm font-medium text-[hsl(var(--text-secondary))] transition-all duration-300 hover:text-[hsl(var(--text-primary))] hover:bg-[hsl(var(--bg-secondary))]"
                    >
                      <span>{link.name}</span>
                      <svg
                        className="w-4 h-4 opacity-40 transition-all duration-300 group-hover:opacity-100"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3v-6"
                        />
                      </svg>
                    </a>
                  ))}
                </div>
              </section>
            );
          })}
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
                    className="hover:text-[hsl(var(--accent))] transition-colors font-medium"
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
                Streaming
              </h3>
              <p className="text-sm text-[hsl(var(--text-secondary))] leading-relaxed">
                Access the most comprehensive collection of streaming platforms
                and download resources.
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
