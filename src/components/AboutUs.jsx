export default function AboutUs() {
  return (
    <section className="py-xxl px-margin bg-primary border-y-4 border-on-surface relative overflow-hidden" id="about">
      <div className="absolute top-0 left-0 w-full bg-[#ffe16e] text-on-surface py-2 border-b-4 border-on-surface overflow-hidden whitespace-nowrap z-20">
        <div className="inline-block animate-[marquee_20s_linear_infinite] font-sticker-sm text-sticker-sm uppercase tracking-widest">
          100% SAPI ASLI • DIANTAR CEPAT • HALAL ASSURED • 100% SAPI ASLI • DIANTAR CEPAT • HALAL ASSURED • 100% SAPI ASLI • DIANTAR CEPAT • HALAL ASSURED • 100% SAPI ASLI • DIANTAR CEPAT • HALAL ASSURED •
        </div>
      </div>
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center mt-xl relative z-10">
        <h2 className="font-display-lg text-display-lg text-on-primary uppercase mb-xl bg-on-surface p-4 neo-border rounded-2xl rotate-2">Kenapa Kami?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-xl w-full">
          <div className="bg-surface-container-lowest p-lg rounded-3xl neo-border shadow-[8px_8px_0_0_rgba(26,28,28,1)] flex flex-col items-center -rotate-1 hover:rotate-0 transition-transform">
            <div className="bg-[#adc7ff] text-on-surface rounded-2xl p-4 mb-md neo-border">
              <span className="text-6xl">🐄</span>
            </div>
            <h3 className="font-headline-md text-headline-md text-on-surface mb-sm uppercase bg-[#ffe16e] px-2 border-2 border-on-surface rounded-xl">100% Asli</h3>
            <p className="font-body-md text-body-md text-on-surface font-bold">Diperah langsung setiap pagi untuk menjamin kualitas dan nutrisi terbaik.</p>
          </div>
          <div className="bg-[#adc7ff] p-lg rounded-3xl neo-border shadow-[8px_8px_0_0_rgba(26,28,28,1)] flex flex-col items-center rotate-2 hover:rotate-0 transition-transform">
            <div className="bg-surface-container-lowest text-on-surface rounded-2xl p-4 mb-md neo-border">
              <span className="text-6xl">✅</span>
            </div>
            <h3 className="font-headline-md text-headline-md text-on-surface mb-sm uppercase bg-surface-container-lowest px-2 border-2 border-on-surface rounded-xl">Halal</h3>
            <p className="font-body-md text-body-md text-on-surface font-bold">Proses higienis dan terjamin halal untuk ketenangan hati Anda saat mengonsumsi.</p>
          </div>
          <div className="bg-[#ffe16e] p-lg rounded-3xl neo-border shadow-[8px_8px_0_0_rgba(26,28,28,1)] flex flex-col items-center -rotate-2 hover:rotate-0 transition-transform">
            <div className="bg-surface-container-lowest text-on-surface rounded-2xl p-4 mb-md neo-border">
              <span className="text-6xl">🛵</span>
            </div>
            <h3 className="font-headline-md text-headline-md text-on-surface mb-sm uppercase bg-surface-container-lowest px-2 border-2 border-on-surface rounded-xl">Ngebut</h3>
            <p className="font-body-md text-body-md text-on-surface font-bold">Armada kami siap mengantar kesegaran langsung ke lokasi Anda setiap hari.</p>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full bg-[#adc7ff] text-on-surface py-2 border-t-4 border-on-surface overflow-hidden whitespace-nowrap z-20">
        <div className="inline-block animate-[marquee_20s_linear_infinite_reverse] font-sticker-sm text-sticker-sm uppercase tracking-widest">
          FRESH EVERYDAY • ORDER NOW • FRESH EVERYDAY • ORDER NOW • FRESH EVERYDAY • ORDER NOW • FRESH EVERYDAY • ORDER NOW • FRESH EVERYDAY • ORDER NOW • FRESH EVERYDAY • ORDER NOW •
        </div>
      </div>
    </section>
  );
}
