export default function Hero() {
  return (
    <section className="bg-primary text-on-primary relative overflow-hidden py-xxl px-margin neo-border border-x-0 border-t-0 border-b-4 shadow-[0_4px_0_0_rgba(26,28,28,1)] z-10">
      <div className="absolute inset-0 opacity-20 pointer-events-none flex items-center justify-center">
        <div className="w-[800px] h-[800px] bg-primary-container rounded-full mix-blend-multiply filter blur-3xl"></div>
        <span className="material-symbols-outlined text-[400px] absolute -right-20 -top-20 text-on-primary">local_drink</span>
        <div className="absolute top-10 left-10 w-24 h-24 bg-tertiary-fixed neo-border rounded-full flex items-center justify-center -rotate-12">
          <span className="font-sticker-sm text-sticker-sm text-on-surface uppercase">Fresh!</span>
        </div>
        <div className="absolute bottom-20 left-1/4 w-32 h-16 bg-[#ffdad6] neo-border rounded-2xl flex items-center justify-center rotate-6">
          <span className="font-sticker-sm text-sticker-sm text-on-surface uppercase">MILK</span>
        </div>
      </div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-xl items-center relative z-10">
        <div className="flex flex-col gap-lg items-start">
          <div className="inline-flex items-center gap-xs bg-tertiary-fixed text-on-surface neo-border rounded-2xl shadow-[4px_4px_0_0_rgba(26,28,28,1)] px-4 py-2 -rotate-2">
            <span className="material-symbols-outlined text-sm">verified</span>
            <span className="font-sticker-sm text-sticker-sm uppercase tracking-wider">Halal Assured</span>
          </div>
          <h1 className="font-display-xl text-display-xl leading-tight text-on-primary uppercase drop-shadow-[4px_4px_0_rgba(26,28,28,1)]">
            SUSU SEGAR 100% ASLI, LANGSUNG KE TANGANMU!
          </h1>
          <p className="font-body-lg text-body-lg text-on-primary/90 max-w-md bg-on-surface text-surface-container-lowest p-4 neo-border rounded-2xl -rotate-1">
            Nikmati kesegaran susu sapi murni setiap hari. Diantar langsung oleh rider kami ke depan pintu Anda dalam hitungan menit.
          </p>
          <button className="bg-tertiary-fixed text-on-surface font-headline-md text-headline-md uppercase px-xl py-md rounded-2xl neo-border neo-shadow neo-button transition-all duration-200 mt-4">
            Pesan Sekarang
          </button>
        </div>
        <div className="relative h-[500px] w-full flex justify-center items-center">
          <div className="absolute inset-0 bg-secondary-fixed neo-border rounded-full w-[400px] h-[400px] mx-auto opacity-50 blur-xl"></div>
          <img alt="Susu Gepuk Cup" className="object-contain h-full w-auto max-w-sm drop-shadow-[8px_8px_0_rgba(26,28,28,1)] z-10 relative animate-neo-float" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD-tTgP6AEX8OwOzASDbgZvRM1ICYxM3s5dM3JFbVvi1fzHSn7vGwTT5l_3uNwSAi4U5kxnrBsgj9nfomKsgsUvlXiad4cyoi994NmYpJmlNkgj3P-YlaFu8svZvSbXOdHjfUgpEf3QHrYmv49qY0bEkRtKLySFMvAqhSacl7fGsBt6vHuPjgPqgMFoA4YtYyKF1SFS7icOX8KsvFpn1fuyemGZioapDEtklIZpAqh0vrrfNBt-x-9TPm5CsUlu1MFKrdkMLZMPTXj-" />
          <div className="absolute bottom-10 right-0 md:-right-10 bg-[#ffe16e] text-on-surface neo-border rounded-full p-4 shadow-[4px_4px_0_0_rgba(26,28,28,1)] flex flex-col items-center justify-center w-32 h-32 rotate-12 z-20">
            <span className="font-headline-md text-headline-md leading-none">100%</span>
            <span className="font-sticker-sm text-sticker-sm mt-1 uppercase">SEGAR</span>
          </div>
        </div>
      </div>
    </section>
  );
}
