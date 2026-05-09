export default function Tracking() {
  return (
    <section className="py-xxl px-margin bg-background relative" id="lacak">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1c1c_2px,transparent_2px),linear-gradient(to_bottom,#1a1c1c_2px,transparent_2px)] bg-[size:100px_100px] opacity-10"></div>
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="mb-xl flex items-center gap-md">
          <h2 className="font-display-lg text-display-lg text-surface-container-lowest bg-primary px-6 py-2 neo-border rounded-2xl shadow-[8px_8px_0_0_rgba(26,28,28,1)] uppercase -rotate-1">Lacak Rider</h2>
          <div className="bg-[#ffe16e] p-2 neo-border rounded-full animate-bounce mt-4 hidden md:block">
            <span className="material-symbols-outlined text-4xl">arrow_downward</span>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-0 bg-surface-container-lowest rounded-3xl neo-border shadow-[12px_12px_0_0_rgba(26,28,28,1)] overflow-hidden">
          <div className="lg:w-[60%] h-[400px] lg:h-auto bg-surface-variant relative border-b-4 lg:border-b-0 lg:border-r-4 border-on-surface">
            <img alt="Map View" className="w-full h-full object-cover grayscale opacity-80" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBx3YI4B8g7bRSH1PpJcPSGpyBQA4NITC295l-gZgYElFU58VlhsjUYLkYJlPYVuZ2k5uW7hk_lv_H8SdjLVW8gK19vqoy2_sR4FXnyo6r7X81R6klJ7vp6CrkU08xTLQ2A6FiDTPeGC0pMwjcbA6LzTUhlzTYn_GB2g88zCune7T4ajt7LTxlDm2BENDf63lUT3PMABHf8uqtqC5kSCdVxNN5BChXBT28x_ZD08Nk6_014qlpNcRygLQzNBlubacWjn2z-GdrLd827" />
            <div className="absolute inset-0 bg-primary mix-blend-color opacity-50 pointer-events-none"></div>
            <div className="absolute top-4 left-4 bg-surface-container-lowest font-sticker-sm text-sticker-sm px-3 py-1 neo-border rounded-xl uppercase">Live Tracking</div>
            <div className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2">
              <div className="bg-surface-container-lowest text-on-surface rounded-full p-2 neo-border shadow-[2px_2px_0_0_rgba(26,28,28,1)] flex items-center justify-center">
                <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>motorcycle</span>
              </div>
            </div>
            <div className="absolute bottom-1/4 right-1/4 -translate-x-1/2 -translate-y-1/2">
              <div className="bg-surface-container-lowest text-on-surface rounded-full p-2 neo-border shadow-[2px_2px_0_0_rgba(26,28,28,1)] flex items-center justify-center">
                <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>motorcycle</span>
              </div>
            </div>
            <div className="absolute top-1/2 right-1/4 -translate-x-1/2 -translate-y-1/2">
              <div className="bg-surface-container-lowest text-on-surface rounded-full p-2 neo-border shadow-[2px_2px_0_0_rgba(26,28,28,1)] flex items-center justify-center">
                <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>motorcycle</span>
              </div>
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="bg-[#ffe16e] text-on-surface rounded-full p-3 neo-border shadow-[4px_4px_0_0_rgba(26,28,28,1)] relative z-10 animate-pulse flex items-center justify-center">
                <span className="material-symbols-outlined text-3xl font-bold" style={{ fontVariationSettings: "'FILL' 1" }}>two_wheeler</span>
              </div>
            </div>
          </div>
          <div className="lg:w-[40%] flex flex-col bg-surface-container-lowest lg:max-h-[800px] overflow-y-auto">
            <div className="p-lg flex flex-col bg-surface-container-lowest border-b-4 border-on-surface">
              <div className="flex items-center gap-md mb-lg pb-md border-b-4 border-on-surface">
                <div className="w-16 h-16 bg-primary overflow-hidden neo-border rounded-2xl shadow-[4px_4px_0_0_rgba(26,28,28,1)] -rotate-3">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
