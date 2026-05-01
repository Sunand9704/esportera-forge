const TournamentDetailsPage = () => {
  const stats = [
    { icon: "sports_esports", label: "GAME", val: "BGMI Mobile" },
    { icon: "groups", label: "MODE", val: "SQUAD 4V4" },
    { icon: "payments", label: "ENTRY", val: "₹49 / SQUAD" },
    { icon: "trophy", label: "PRIZE", val: "₹25,000" },
  ];

  return (
    <main className="min-h-screen pb-32">
      <section className="relative h-[420px] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuC-HbwGKJxkCRiKXmcN3rxdH5ko6_xD_tvVrGxmFhkb8dIz4k66_wPY6vhDAXqYTXhrWbwmvFheQc3XfhedYs0yDjhudQlMzNFK1fHsZmVwIaeWVfEuY6e5R_JEmlHnj2YtgWMOV-aAojNbF26rDRcuzjVF-PqVhSOjFplBVcsHDtCJb9IR_2vj4MBUBnToIlq-Wf9YYMLxmhUtMAOBYW-_kjKhKOGmI3ZhZrWOpW9CFoh9GrwWK2pIwf4u_NwYawan0BGHxATtz68x"
            alt="Tournament banner"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
        </div>
        <div className="relative z-10 px-6 max-w-7xl mx-auto w-full pb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="pulse-live flex items-center gap-2 bg-red-600 text-white px-3 py-1 rounded-full font-label-caps text-xs">
              <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span> LIVE REGISTRATION
            </span>
            <span className="font-label-caps text-on-surface-variant">BGMI • SEASON 12</span>
          </div>
          <h1 className="font-h1 text-white text-4xl md:text-6xl uppercase">ULTIMATE TELUGU CHASE: PRO SCRIMS</h1>
          <p className="font-label-caps text-primary-container mt-4 tracking-widest">BY MH GAMING TELUGU ACADEMY</p>
        </div>
      </section>

      <section className="px-6 max-w-7xl mx-auto -mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((item, i) => (
              <div key={i} className="glass-card p-4 rounded-xl flex items-center gap-3">
                <span className="material-symbols-outlined text-primary-container text-3xl">{item.icon}</span>
                <div>
                  <p className="text-[10px] font-label-caps text-outline uppercase tracking-widest">{item.label}</p>
                  <p className="text-white font-bold">{item.val}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="glass-card p-6 rounded-xl">
              <h3 className="font-h3 text-white mb-4 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary-container">gavel</span> RULES
              </h3>
              <ul className="space-y-2 text-on-surface-variant">
                <li>• Level 40+ IDs required.</li>
                <li>• Emulators strictly prohibited.</li>
                <li>• Maps: Erangel, Miramar, Sanhok.</li>
                <li>• POV recording mandatory for Top 3.</li>
              </ul>
            </div>
            <div className="glass-card p-6 rounded-xl">
              <h3 className="font-h3 text-white mb-4 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary-container">stadium</span> TEAMS
              </h3>
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-on-surface-variant">64/100 Joined</span>
                  <span className="text-primary font-bold">64% Full</span>
                </div>
                <div className="h-3 w-full bg-surface-container rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-primary-container to-secondary-container" style={{ width: "64%" }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="glass-card p-6 rounded-xl text-center">
            <p className="font-label-caps text-outline uppercase tracking-widest mb-4">MATCH STARTS IN</p>
            <div className="flex justify-center items-end gap-2">
              <div>
                <p className="text-4xl font-h1 text-white font-bold">02</p>
                <p className="text-[10px] font-label-caps text-outline">DAYS</p>
              </div>
              <span className="text-3xl text-primary-container pb-4">:</span>
              <div>
                <p className="text-4xl font-h1 text-white font-bold">14</p>
                <p className="text-[10px] font-label-caps text-outline">HRS</p>
              </div>
              <span className="text-3xl text-primary-container pb-4">:</span>
              <div>
                <p className="text-4xl font-h1 text-white font-bold">52</p>
                <p className="text-[10px] font-label-caps text-outline">MINS</p>
              </div>
            </div>
          </div>
          <div className="glass-card p-6 rounded-xl">
            <h3 className="font-h3 text-white mb-4 flex items-center gap-2">
              <span className="material-symbols-outlined text-primary-container">military_tech</span> PRIZES
            </h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center p-3 bg-yellow-500/10 rounded-lg border border-yellow-500/30">
                <span className="text-white">Winner (#1)</span>
                <span className="text-yellow-400 font-bold">₹15,000</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-gray-400/10 rounded-lg border border-gray-400/30">
                <span className="text-white">Runner Up (#2)</span>
                <span className="text-gray-300 font-bold">₹7,500</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fixed Bottom CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-[#0a0e2e]/90 backdrop-blur-md border-t border-primary-container/30 p-4">
        <div className="max-w-7xl mx-auto flex justify-center">
          <button className="bg-gradient-to-r from-primary-container to-secondary-container text-on-primary-fixed font-h2 text-lg px-12 py-4 rounded-xl shadow-[0_0_30px_rgba(0,170,255,0.5)] hover:scale-105 transition-all flex items-center gap-2 uppercase">
            <span className="material-symbols-outlined">double_arrow</span>
            REGISTER NOW
          </button>
        </div>
      </div>
    </main>
  );
};

export default TournamentDetailsPage;
