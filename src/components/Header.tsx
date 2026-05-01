import { Link, useLocation, useNavigate } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const navItems = [
    { name: "Tournaments", path: "/tournaments" },
    { name: "Leaderboard", path: "/leaderboard" },
    { name: "Hall of Fame", path: "#" },
    { name: "Support", path: "#" },
  ];

  return (
    <header className="sticky top-0 w-full z-50 bg-[#0a0e2e]/80 backdrop-blur-md border-b border-[#00aaff]/20 shadow-[0_0_15px_rgba(0,170,255,0.1)]">
      <div className="flex justify-between items-center px-6 py-4 max-w-full">
        <Link to="/" className="text-2xl font-black text-white italic tracking-tighter uppercase font-h1">
          MH GAMING TELUGU
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`${
                location.pathname === item.path
                  ? "text-[#00aaff] border-b-2 border-[#00aaff]"
                  : "text-gray-400 hover:text-white"
              } pb-1 font-h1 uppercase tracking-wider text-label-caps transition-all duration-300`}
            >
              {item.name}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <button
            onClick={() => navigate("/tournaments")}
            className="bg-primary-container text-on-primary-container px-6 py-2 font-label-caps uppercase tracking-widest rounded-lg hover:shadow-[0_0_20px_rgba(0,170,255,0.4)] transition-all"
          >
            Join Tournament
          </button>
          <div className="hidden sm:flex gap-2">
            <span className="material-symbols-outlined text-gray-400 hover:text-[#00aaff] cursor-pointer transition-colors">
              notifications
            </span>
            <span className="material-symbols-outlined text-gray-400 hover:text-[#00aaff] cursor-pointer transition-colors">
              account_circle
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
