import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();
  const features = [
    { title: "Daily Tournaments", icon: "sports_esports", desc: "Join curated matches every single day across various game modes and formats." },
    { title: "Real Cash Payouts", icon: "payments", desc: "Win and withdraw your prize money instantly via multiple secure payment gateways." },
    { title: "YouTube Live", icon: "video_library", desc: "Get featured on our main channel with professional Telugu commentary and analysis." },
  ];

  return (
    <main className="wing-texture">
      <section className="relative min-h-[819px] flex items-center justify-center overflow-hidden wings-bg py-24">
        <div className="absolute inset-0 z-0 opacity-40">
          <img
            className="w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuA5WaBAW30T_2C0jfuqoH7-Nl3dxr4UrC1LtFJyzpQ0Bqb65y_mxETGhRjqih4kKVZJQcSmklnWpEo9P2N8dFEm8MQbXd-IPPN6mUgnnCe92dSV7HXRy82F8RZjJwzggVC4pjOY3svNMd-7ibaNs3dJcB0RLCt0GzYFXf-R4EE6Bjx05sE5BVR3nLKKw5cBNn3-4IsWAjPetzj8pqGatmg4blPhlQBROZSZfwvIW4seKqnP52IOJ9WyoGtU1fCjeDbiiGKyfAQIPnxY"
            alt="MH Gaming hero"
          />
        </div>
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <h1 className="font-h1 text-white mb-4 text-6xl md:text-8xl">MH GAMING TELUGU</h1>
          <p className="font-h3 text-primary-container mb-8 uppercase tracking-widest">
            Register. Compete. Win. Watch LIVE.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-12">
            <button
              onClick={() => navigate("/tournaments")}
              className="w-full sm:w-auto bg-gradient-to-r from-primary-container to-secondary-container text-on-primary-fixed font-h2 text-xl px-12 py-4 rounded-xl shadow-[0_0_20px_rgba(0,170,255,0.4)] hover:scale-105 transition-all"
            >
              Join Tournament
            </button>
            <button className="w-full sm:w-auto border-2 border-primary-container text-primary-container font-h2 text-xl px-12 py-4 rounded-xl hover:bg-primary-container/10 transition-all shadow-[inset_0_0_15px_rgba(0,170,255,0.2)]">
              Watch Live
            </button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-surface-container-lowest px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-4">
            <div className="flex items-center gap-4">
              <span className="pulse-live flex items-center gap-2 bg-red-600 text-white px-4 py-1.5 rounded-full font-label-caps">
                <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                LIVE NOW
              </span>
              <h2 className="font-h2 text-white">YOUTUBE LIVE</h2>
            </div>
            <div className="flex gap-8 text-on-surface-variant font-label-caps">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary-container">visibility</span> 2.4K WATCHING
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary-container">favorite</span> 15K LIKES
              </div>
            </div>
          </div>
          <div className="glass-card rounded-2xl overflow-hidden aspect-video relative group border-[#00aaff]/30">
            <img
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDgvkAPsOgbFCwwjBMBW8hUy5FEwbNBlRaTUi0osxtA02zLlPOoCz63vk9EoTTUzxSha5V6pzCRVMT9I4E0NQQZxnpbiea5CLNZ_raWuO9oisWfvpE5A85GyUJx9ZPpWgy0k8OoVvI5zUV5nbY_ILmL2hfvsj2i6x_ln2YS8U1lkkzgm7LKqLYlZhmd3udMGgb-8a5bG2h3NIpSpp9rEnDRrjDeTJpls1xPakXJXBtdRIHlfPNXbtb_A0wSWuPkyB5uaa4mW5u55Uzk"
              alt="Live stream"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <button className="w-24 h-24 bg-primary-container text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-5xl">play_arrow</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-surface-container-low">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="font-h2 text-white mb-4">WHY JOIN MH GAMING?</h2>
          <p className="text-on-surface-variant max-w-2xl mx-auto">
            Experience the most professional gaming platform with instant payouts and daily live action.
          </p>
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <div key={i} className="glass-card p-10 rounded-2xl text-center group hover:-translate-y-2 transition-all">
              <div className="w-20 h-20 bg-[#00aaff]/10 rounded-full flex items-center justify-center mx-auto mb-8 group-hover:bg-[#00aaff]/20 transition-colors">
                <span className="material-symbols-outlined text-4xl text-primary-container">{feature.icon}</span>
              </div>
              <h3 className="font-h3 text-white mb-4">{feature.title}</h3>
              <p className="text-on-surface-variant font-body-md">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default HomePage;
