import { useNavigate } from "react-router-dom";

const TournamentsPage = () => {
  const navigate = useNavigate();
  return (
    <main className="min-h-screen px-6 py-12 max-w-7xl mx-auto">
      <div className="flex flex-col items-center mb-12">
        <div className="relative inline-block">
          <h1 className="font-h1 text-4xl md:text-5xl text-white uppercase wing-decoration">ALL TOURNAMENTS</h1>
        </div>
        <p className="text-primary mt-4 font-label-caps tracking-widest opacity-80">
          SELECT YOUR ARENA AND RISE TO GLORY
        </p>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12">
        <div className="flex flex-wrap gap-2 bg-[#0a0e2e]/50 p-1.5 rounded-xl border border-white/5">
          <button className="px-6 py-2 rounded-lg font-label-caps text-white bg-primary-container shadow-[0_0_15px_rgba(0,170,255,0.4)]">All</button>
          <button className="px-6 py-2 rounded-lg font-label-caps text-gray-400 hover:text-white">Free</button>
          <button className="px-6 py-2 rounded-lg font-label-caps text-gray-400 hover:text-white">Paid</button>
          <button className="px-6 py-2 rounded-lg font-label-caps text-gray-400 hover:text-white flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-error animate-pulse"></span> Live
          </button>
        </div>
        <div className="relative w-full md:w-80 group">
          <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline group-focus-within:text-primary transition-colors">
            search
          </span>
          <input
            className="w-full bg-[#0a0e2e] border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
            placeholder="Search tournaments..."
            type="text"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Live Tournament */}
        <div onClick={() => navigate("/tournament-details")} className="glass-card rounded-xl overflow-hidden flex flex-col cursor-pointer">
          <div className="relative h-48 w-full overflow-hidden">
            <img
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC-HbwGKJxkCRiKXmcN3rxdH5ko6_xD_tvVrGxmFhkb8dIz4k66_wPY6vhDAXqYTXhrWbwmvFheQc3XfhedYs0yDjhudQlMzNFK1fHsZmVwIaeWVfEuY6e5R_JEmlHnj2YtgWMOV-aAojNbF26rDRcuzjVF-PqVhSOjFplBVcsHDtCJb9IR_2vj4MBUBnToIlq-Wf9YYMLxmhUtMAOBYW-_kjKhKOGmI3ZhZrWOpW9CFoh9GrwWK2pIwf4u_NwYawan0BGHxATtz68x"
              alt="Sunday Slaughter Duo"
            />
            <div className="absolute top-4 left-4">
              <span className="flex items-center gap-1.5 px-3 py-1 bg-error/20 border border-error/40 text-error rounded-full font-label-caps text-[10px] backdrop-blur-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-error animate-pulse"></span> LIVE 🔴
              </span>
            </div>
          </div>
          <div className="p-6 flex-grow flex flex-col">
            <div className="flex justify-between items-start mb-4">
              <h3 className="font-h3 text-white">Sunday Slaughter Duo</h3>
              <span className="font-label-caps text-secondary bg-secondary/10 px-2 py-0.5 rounded text-xs">DUO</span>
            </div>
            <div className="space-y-4 mb-6">
              <div className="flex justify-between text-sm"><span className="text-outline">Prize Pool</span><span className="text-primary font-bold">₹10,000</span></div>
              <div className="flex justify-between text-sm"><span className="text-outline">Entry Fee</span><span className="text-white">₹50 / Player</span></div>
              <div className="space-y-2">
                <div className="flex justify-between text-[11px] font-label-caps text-outline uppercase"><span>Slots Filled</span><span>92/100</span></div>
                <div className="h-2 w-full bg-surface-container rounded-full overflow-hidden">
                  <div className="h-full bg-primary-container" style={{ width: "92%" }}></div>
                </div>
              </div>
            </div>
            <button className="w-full py-3 bg-secondary-container text-on-secondary-container font-label-caps rounded-lg hover:brightness-110 transition-all uppercase">
              Spectate Now
            </button>
          </div>
        </div>

        {/* Upcoming */}
        <div onClick={() => navigate("/tournament-details")} className="glass-card rounded-xl overflow-hidden flex flex-col cursor-pointer">
          <div className="relative h-48 w-full overflow-hidden">
            <img
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAV-DMMNglSmibeU_SHz_5TkfceTbNR6f8K1X323T_TnDjhfTUW1iEMteNdf5leiMdob7yCenbU0q8trFMVcRRzVps_tW7zTdfhVoDAzSeQpHzJ5uhKJXDb-peG69QC1QNMdAV3wYqFR8n3bBl1gNvGjasMq-4HzMz1nPDJKmSQTe8lIs3rmh1JK7qo_4zYwvQi4tuYUtJWyFu25G16v0-SmkuvKPR-QgfT_fL56hRzbz_IwXLX-EYPWOO0X1ZSVZ266SCU0_URH-aw"
              alt="Midnight Melee"
            />
            <div className="absolute top-4 left-4">
              <span className="flex items-center gap-1.5 px-3 py-1 bg-primary/20 border border-primary/40 text-primary rounded-full font-label-caps text-[10px] backdrop-blur-sm">
                UPCOMING
              </span>
            </div>
          </div>
          <div className="p-6 flex-grow flex flex-col">
            <div className="flex justify-between items-start mb-4">
              <h3 className="font-h3 text-white">Midnight Melee 5v5</h3>
              <span className="font-label-caps text-secondary bg-secondary/10 px-2 py-0.5 rounded text-xs">5V5 SQUAD</span>
            </div>
            <div className="space-y-4 mb-6">
              <div className="flex justify-between text-sm"><span className="text-outline">Prize Pool</span><span className="text-primary font-bold">₹25,000</span></div>
              <div className="flex justify-between text-sm"><span className="text-outline">Entry Fee</span><span className="text-tertiary font-bold uppercase">Free</span></div>
              <div className="space-y-2">
                <div className="flex justify-between text-[11px] font-label-caps text-outline uppercase"><span>Slots Filled</span><span>45/200</span></div>
                <div className="h-2 w-full bg-surface-container rounded-full overflow-hidden">
                  <div className="h-full bg-primary-container" style={{ width: "22%" }}></div>
                </div>
              </div>
            </div>
            <button className="w-full py-3 bg-primary text-on-primary font-label-caps rounded-lg hover:brightness-110 transition-all uppercase">
              Register Now
            </button>
          </div>
        </div>

        {/* Completed */}
        <div className="glass-card rounded-xl overflow-hidden flex flex-col opacity-80 hover:opacity-100">
          <div className="relative h-48 w-full overflow-hidden">
            <img
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDJgY6qdcXpFxkPEjxlGHn8hdYXBqBIqxXFWhTLcJXvsIWFFshs0_ZncS0Rbe_1bCMhZI2FcneGnY2Ty45Gw-oa1JFuf-0WecOVC93cJ38UJeBZL7aPxIn-NLmzu08rZwhQOXbvleV8xJLPPisTYzhHLblVINDTyaYRRagnrus-O2rlzzv6ZEmPjuaTJPesQRzAitVMPPlwIJh5NfvYPEmVvZcrZuI8mNRYdi2iZCokZkCE7T99v_ozgCxYItz2F4p-E-OzWMdkFZdL"
              alt="Champions Cup"
            />
            <div className="absolute top-4 left-4">
              <span className="flex items-center gap-1.5 px-3 py-1 bg-white/10 border border-white/20 text-white rounded-full font-label-caps text-[10px] backdrop-blur-sm">
                COMPLETED
              </span>
            </div>
          </div>
          <div className="p-6 flex-grow flex flex-col">
            <div className="flex justify-between items-start mb-4">
              <h3 className="font-h3 text-white">Champions Cup S1</h3>
              <span className="font-label-caps text-secondary bg-secondary/10 px-2 py-0.5 rounded text-xs">SOLO</span>
            </div>
            <div className="space-y-4 mb-6">
              <div className="flex justify-between text-sm"><span className="text-outline">Winner</span><span className="text-white font-bold">@Phantom_Killer</span></div>
              <div className="flex justify-between text-sm"><span className="text-outline">Total Players</span><span className="text-white">500 Players</span></div>
            </div>
            <button className="w-full py-3 bg-surface-container-high text-on-surface font-label-caps rounded-lg hover:brightness-110 transition-all uppercase mt-auto">
              View Results
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default TournamentsPage;
