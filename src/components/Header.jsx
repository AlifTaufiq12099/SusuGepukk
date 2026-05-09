export default function Header() {
  return (
    <header className="bg-surface-container-lowest text-primary fixed top-0 w-full z-50 neo-border border-b-4 border-l-0 border-r-0 border-t-0 shadow-[0_4px_0_0_rgba(26,28,28,1)]">
      <div className="flex items-center justify-between px-margin py-sm w-full max-w-7xl mx-auto">
        <div className="flex items-center gap-md">
          <button className="md:hidden p-2 text-primary hover:bg-tertiary-fixed transition-colors neo-border neo-shadow neo-button rounded-2xl">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>menu</span>
          </button>
          <a className="font-headline-md text-headline-md font-black tracking-tighter text-primary hover:text-tertiary-container transition-colors uppercase" href="#">
            SUSU GEPUK™
          </a>
        </div>
        <nav className="hidden md:flex items-center gap-lg">
          <a className="font-label-bold text-label-bold text-on-surface hover:bg-tertiary-fixed transition-colors px-3 py-2 neo-border neo-shadow-hover rounded-2xl uppercase" href="#">Beranda</a>
          <a className="font-label-bold text-label-bold text-on-surface hover:bg-tertiary-fixed transition-colors px-3 py-2 neo-border neo-shadow-hover rounded-2xl uppercase" href="#menu">Menu</a>
          <a className="font-label-bold text-label-bold text-on-surface hover:bg-tertiary-fixed transition-colors px-3 py-2 neo-border neo-shadow-hover rounded-2xl uppercase" href="#about">Tentang Kami</a>
          <a className="font-label-bold text-label-bold text-on-surface hover:bg-tertiary-fixed transition-colors px-3 py-2 neo-border neo-shadow-hover rounded-2xl uppercase" href="#lacak">Lacak Rider</a>
        </nav>
        <div className="flex items-center gap-sm">
          <button aria-label="Search" className="p-2 text-on-surface bg-surface-container hover:bg-tertiary-fixed transition-colors rounded-2xl neo-border neo-shadow neo-button">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>search</span>
          </button>
          <button aria-label="Cart" className="p-2 text-on-surface bg-primary text-on-primary hover:bg-primary-container transition-colors rounded-2xl neo-border neo-shadow neo-button relative">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>shopping_cart</span>
            <span className="absolute -top-2 -right-2 flex h-6 w-6 items-center justify-center rounded-xl bg-tertiary-fixed text-sticker-sm font-sticker-sm text-on-surface neo-border">2</span>
          </button>
        </div>
      </div>
    </header>
  );
}
