const Footer = () => (
  <footer className="w-full py-12 border-t border-[#00aaff]/10 bg-[#050818] flex flex-col items-center gap-6">
    <div className="text-lg font-bold text-white font-h1 uppercase tracking-widest">MH GAMING TELUGU</div>
    <div className="flex flex-wrap justify-center gap-8 px-6">
      {["Privacy Policy", "Terms of Service", "Contact Us", "Discord", "YouTube"].map((label) => (
        <a
          key={label}
          className="text-gray-600 hover:text-[#00aaff] transition-colors font-h1 text-xs uppercase tracking-widest opacity-80 hover:opacity-100"
          href="#"
        >
          {label}
        </a>
      ))}
    </div>
    <div className="text-gray-600 font-h1 text-[10px] uppercase tracking-[0.3em] mt-4">
      © 2024 MH GAMING TELUGU. Rise to Glory.
    </div>
  </footer>
);

export default Footer;
