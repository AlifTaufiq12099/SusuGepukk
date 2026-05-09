export default function Promo() {
  return (
    <section className="py-xl px-margin bg-surface-container-lowest relative z-20 mx-auto border-b-4 border-on-surface shadow-[0_4px_0_0_rgba(26,28,28,1)]">
      <div className="max-w-7xl mx-auto flex overflow-x-auto pb-6 pt-4 px-4 gap-lg snap-x snap-mandatory scrollbar-hide">
        <div className="flex-none w-[320px] snap-center bg-[#adc7ff] text-on-surface neo-border rounded-2xl p-md flex items-center gap-md neo-shadow-hover transition-all cursor-pointer">
          <div className="bg-on-surface text-surface-bright rounded-xl p-3 neo-border">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>payments</span>
          </div>
          <div>
            <h3 className="font-headline-md text-[24px] uppercase leading-tight">Cashback 20%</h3>
            <p className="font-body-md text-body-md font-bold mt-1 bg-surface-container-lowest inline-block px-2 border-2 border-on-surface rounded-lg">Gopay/Ovo</p>
          </div>
        </div>
        <div className="flex-none w-[320px] snap-center bg-primary text-on-primary neo-border rounded-2xl p-md flex items-center gap-md neo-shadow-hover transition-all cursor-pointer">
          <div className="bg-tertiary-fixed text-on-surface rounded-xl p-3 neo-border">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>local_offer</span>
          </div>
          <div>
            <h3 className="font-headline-md text-[24px] uppercase leading-tight">Beli 5 Gratis 1</h3>
            <p className="font-body-md text-body-md font-bold mt-1 bg-on-surface text-surface-bright inline-block px-2 border-2 border-on-surface rounded-lg">Rasa Original</p>
          </div>
        </div>
        <div className="flex-none w-[320px] snap-center bg-[#ffe16e] text-on-surface neo-border rounded-2xl p-md flex items-center gap-md neo-shadow-hover transition-all cursor-pointer">
          <div className="bg-on-surface text-surface-bright rounded-xl p-3 neo-border">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>two_wheeler</span>
          </div>
          <div>
            <h3 className="font-headline-md text-[24px] uppercase leading-tight">Gratis Ongkir</h3>
            <p className="font-body-md text-body-md font-bold mt-1 bg-surface-container-lowest inline-block px-2 border-2 border-on-surface rounded-lg">Jarak &lt; 5km</p>
          </div>
        </div>
      </div>
    </section>
  );
}
