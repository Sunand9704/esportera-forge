const LeaderboardPage = () => {
  const rows = [
    { rank: "01", team: "Apex Predators", kills: 114, points: 186 },
    { rank: "04", team: "Neon Samurai", kills: 54, points: 104 },
    { rank: "05", team: "Viper Esports", kills: 48, points: 93 },
  ];

  return (
    <main className="min-h-screen px-6 py-12 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <span className="pulse-live flex items-center gap-2 bg-red-600 text-white px-3 py-1 rounded-full font-label-caps text-xs">
              <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span> LIVE
            </span>
            <h1 className="font-h1 text-4xl text-white uppercase">Leaderboard</h1>
          </div>
          <button className="flex items-center gap-1 text-primary-container font-label-caps">
            Pro League: Season 4
            <span className="material-symbols-outlined">expand_more</span>
          </button>
        </div>
        <div className="flex gap-4">
          <div className="glass-card p-4 rounded-xl text-center min-w-[120px]">
            <p className="text-[10px] font-label-caps text-outline uppercase">Total Teams</p>
            <p className="text-2xl font-bold text-white">48</p>
          </div>
          <div className="glass-card p-4 rounded-xl text-center min-w-[120px]">
            <p className="text-[10px] font-label-caps text-outline uppercase">Match Day</p>
            <p className="text-2xl font-bold text-white">04/07</p>
          </div>
        </div>
      </div>

      {/* Podium */}
      <div className="grid grid-cols-3 gap-4 mb-12 items-end">
        <div className="podium-gradient-2nd p-6 rounded-xl text-center h-48 flex flex-col justify-end">
          <div className="text-3xl font-bold text-gray-300 mb-2">2</div>
          <h3 className="font-h3 text-white text-sm">Team Delta Force</h3>
          <p className="text-gray-300 font-label-caps mt-2">142 PTS</p>
        </div>
        <div className="podium-gradient-1st p-6 rounded-xl text-center h-60 flex flex-col justify-end">
          <span className="material-symbols-outlined text-yellow-400 text-4xl mb-1">military_tech</span>
          <div className="text-4xl font-bold text-yellow-400 mb-2">1</div>
          <h3 className="font-h3 text-white">Apex Predators</h3>
          <p className="text-yellow-400 font-label-caps mt-2">186 PTS</p>
        </div>
        <div className="podium-gradient-3rd p-6 rounded-xl text-center h-44 flex flex-col justify-end">
          <div className="text-3xl font-bold text-orange-400 mb-2">3</div>
          <h3 className="font-h3 text-white text-sm">Ghost Walkers</h3>
          <p className="text-orange-400 font-label-caps mt-2">128 PTS</p>
        </div>
      </div>

      {/* Table */}
      <div className="glass-card rounded-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-surface-container-high">
              <tr>
                <th className="text-left p-4 font-label-caps text-outline uppercase text-xs">Rank</th>
                <th className="text-left p-4 font-label-caps text-outline uppercase text-xs">Team Name</th>
                <th className="text-left p-4 font-label-caps text-outline uppercase text-xs">Kills</th>
                <th className="text-left p-4 font-label-caps text-outline uppercase text-xs">Points</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.rank} className="border-t border-white/5 hover:bg-primary-container/5 transition-colors">
                  <td className="p-4 font-bold text-primary-container">{row.rank}</td>
                  <td className="p-4 text-white font-medium">{row.team}</td>
                  <td className="p-4 text-on-surface-variant">{row.kills}</td>
                  <td className="p-4 text-white font-bold">{row.points}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
};

export default LeaderboardPage;
