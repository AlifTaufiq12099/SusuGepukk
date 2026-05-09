export default function SideNav() {
  return (
    <aside className="fixed inset-y-0 left-0 z-[60] flex flex-col p-md h-full w-72 bg-surface-container-lowest shadow-[4px_0_0_0_rgba(26,28,28,1)] neo-border border-l-0 border-y-0 -translate-x-full transition-transform duration-300 md:hidden">
      <div className="mb-lg pt-xl border-b-4 border-on-surface pb-md">
        <h2 className="font-headline-md text-headline-md font-bold text-primary uppercase">Susu Gepuk</h2>
      </div>
      <nav className="flex flex-col gap-sm">
        <a className="flex items-center gap-md bg-primary text-on-primary neo-border rounded-2xl px-md py-sm font-label-bold text-label-bold uppercase neo-shadow hover:bg-primary-container transition-all" href="#">
          <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>home</span>
          Beranda
        </a>
        <a className="flex items-center gap-md text-on-surface bg-surface px-md py-sm font-label-bold text-label-bold uppercase neo-border rounded-2xl neo-shadow-hover hover:bg-tertiary-fixed transition-all" href="#menu">
          <span className="material-symbols-outlined">restaurant_menu</span>
          Menu
        </a>
        <a className="flex items-center gap-md text-on-surface bg-surface px-md py-sm font-label-bold text-label-bold uppercase neo-border rounded-2xl neo-shadow-hover hover:bg-tertiary-fixed transition-all" href="#about">
          <span className="material-symbols-outlined">info</span>
          Tentang Kami
        </a>
        <a className="flex items-center gap-md text-on-surface bg-surface px-md py-sm font-label-bold text-label-bold uppercase neo-border rounded-2xl neo-shadow-hover hover:bg-tertiary-fixed transition-all" href="#lacak">
          <span className="material-symbols-outlined">local_shipping</span>
          Lacak Rider
        </a>
      </nav>
    </aside>
  );
}
