export default function Menu() {
  return (
    <section className="py-xxl px-margin bg-background relative overflow-hidden" id="menu">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e2e2_1px,transparent_1px),linear-gradient(to_bottom,#e2e2e2_1px,transparent_1px)] bg-[size:40px_40px] opacity-50"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-xl flex flex-col md:flex-row justify-between items-end gap-md">
          <div>
            <h2 className="font-display-lg text-display-lg text-on-surface uppercase drop-shadow-[4px_4px_0_rgba(0,91,191,1)]">Menu Segar</h2>
            <p className="font-body-lg text-body-lg bg-tertiary-fixed text-on-surface inline-block px-4 py-1 neo-border rounded-xl mt-2 rotate-1">Pilih rasa favoritmu, disajikan segar setiap hari.</p>
          </div>
          <div className="bg-on-surface text-surface-container-lowest px-4 py-2 neo-border rounded-xl rotate-2 font-sticker-sm uppercase">
            Swipe for more &gt;&gt;
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-lg">
          <div className="bg-surface-container-lowest neo-border rounded-3xl overflow-hidden hover:bg-surface-container-low transition-all duration-300 neo-shadow-hover flex flex-col h-full group relative">
            <div className="absolute top-4 -right-4 bg-tertiary-fixed text-on-surface font-sticker-sm text-sticker-sm px-4 py-2 neo-border rounded-xl shadow-[2px_2px_0_0_rgba(26,28,28,1)] rotate-12 z-20 uppercase">
              Terlaris
            </div>
            <div className="h-64 bg-surface-variant relative p-4 flex justify-center items-center overflow-hidden border-b-4 border-on-surface">
              <img alt="Susu Original" className="object-contain h-full w-auto drop-shadow-[4px_4px_0_rgba(26,28,28,1)] group-hover:scale-110 transition-transform duration-300" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB0SJym7POyXWdKHCIzLoVOEWpJtHJCN5YEdaVuIh4-06RV1O4P_AgZEM249ATD6ZcUUWzUDLN-0SKsbV0awvNv06FzD9wkgjLNA266mgisvl8BTyh8_qIagUEy4O02MvgA0oqKQc7a3DcgCdyE1pWtRQt3I4GcA8ZPNJkNSUbNn6R1y-kF1T7CyFKVwmtMQuIw4cuCZ2JgIjgHpiemfjU_1VQAUPLYQFIR7lVHLednFoxOBVssxKGYGhzc7vU8wADXXsaszzHe0xc1" />
            </div>
            <div className="p-lg flex flex-col flex-grow justify-between bg-surface-container-lowest">
              <div>
                <h3 className="font-headline-md text-[28px] text-on-surface uppercase leading-none mb-2">Original</h3>
                <p className="font-body-md text-body-md font-bold text-on-surface-variant line-clamp-2 bg-surface p-2 neo-border rounded-xl">Susu sapi segar murni tanpa campuran.</p>
              </div>
              <div className="mt-lg flex items-center justify-between">
                <span className="font-display-lg text-[40px] text-primary">8k</span>
                <button aria-label="Tambah" className="bg-primary text-on-primary p-3 rounded-xl neo-border neo-shadow neo-button">
                  <span className="material-symbols-outlined font-bold">add</span>
                </button>
              </div>
            </div>
          </div>
          <div className="bg-surface-container-lowest neo-border rounded-3xl overflow-hidden hover:bg-surface-container-low transition-all duration-300 neo-shadow-hover flex flex-col h-full group">
            <div className="h-64 bg-surface-variant relative p-4 flex justify-center items-center overflow-hidden border-b-4 border-on-surface">
              <img alt="Susu Coklat" className="object-contain h-full w-auto drop-shadow-[4px_4px_0_rgba(26,28,28,1)] group-hover:scale-110 transition-transform duration-300" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBXET6kP3iwBnjTIHRjPd87-mmTTjhQO6AJJftknwrVQiuZHKO3wyKj0PFK4xVCQsy0jTntKl5_fGFmxTUTVY2LDV9kGt2DwW_p1snA3EwLsbgNup_jU8w_tzoy1H5k4FuRpGQPI_ABUWywTe43cnSpVlcBzx6mKOXV5dpPfLqqXWp2xVTLOFYXgOqxZLUP0OvVvGztdt-cr_hAEtlfc7cPHpxyXGv9VTgbBrUTuFKmourIGy9vXv__D3dBrhkeWOgJVMh7d1MCIOL6" />
            </div>
            <div className="p-lg flex flex-col flex-grow justify-between bg-surface-container-lowest">
              <div>
                <h3 className="font-headline-md text-[28px] text-on-surface uppercase leading-none mb-2">Coklat</h3>
                <p className="font-body-md text-body-md font-bold text-on-surface-variant line-clamp-2 bg-surface p-2 neo-border rounded-xl">Susu segar dengan paduan coklat premium.</p>
              </div>
              <div className="mt-lg flex items-center justify-between">
                <span className="font-display-lg text-[40px] text-primary">9k</span>
                <button aria-label="Tambah" className="bg-surface-container text-on-surface p-3 rounded-xl neo-border neo-shadow neo-button">
                  <span className="material-symbols-outlined font-bold">add</span>
                </button>
              </div>
            </div>
          </div>
          <div className="bg-surface-container-lowest neo-border rounded-3xl overflow-hidden hover:bg-surface-container-low transition-all duration-300 neo-shadow-hover flex flex-col h-full group">
            <div className="h-64 bg-[#ffdad6] relative p-4 flex justify-center items-center overflow-hidden border-b-4 border-on-surface">
              <img alt="Susu Strawberry" className="object-contain h-full w-auto drop-shadow-[4px_4px_0_rgba(26,28,28,1)] group-hover:scale-110 transition-transform duration-300" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDwP529iK3EJnwY4jv3vb_eh8AmtS9AvyjBFcEoO_O-RJikK_am-RzovwVQf2upsVA7SrD4i_rd1G4XV33OSnJWwy2mykkuYtF6rtOXN2ghItaG4ukwSQtoy9kuUAv0b5mcQepdngfjAnnKzDsFJOJcxUBkE45bw_NDLHZ4ZtgVin6XIwdi0Fjfh0VBfKRKvDtVo3WLVog9wAai6rjkkvZwcCx9a5jKaZuwRONJfwXaDamfLGKzhygVR3MOZnmdZ96BwrsqpiAF5r-S" />
            </div>
            <div className="p-lg flex flex-col flex-grow justify-between bg-surface-container-lowest">
              <div>
                <h3 className="font-headline-md text-[28px] text-on-surface uppercase leading-none mb-2">Strawberry</h3>
                <p className="font-body-md text-body-md font-bold text-on-surface-variant line-clamp-2 bg-surface p-2 neo-border rounded-xl">Manis alami dari ekstrak strawberry asli.</p>
              </div>
              <div className="mt-lg flex items-center justify-between">
                <span className="font-display-lg text-[40px] text-primary">9k</span>
                <button aria-label="Tambah" className="bg-surface-container text-on-surface p-3 rounded-xl neo-border neo-shadow neo-button">
                  <span className="material-symbols-outlined font-bold">add</span>
                </button>
              </div>
            </div>
          </div>
          <div className="bg-surface-container-lowest neo-border rounded-3xl overflow-hidden hover:bg-surface-container-low transition-all duration-300 neo-shadow-hover flex flex-col h-full group relative">
            <div className="absolute top-4 left-4 bg-primary text-on-primary font-sticker-sm text-sticker-sm px-4 py-2 neo-border rounded-xl shadow-[2px_2px_0_0_rgba(26,28,28,1)] -rotate-6 z-20 uppercase">
              New!
            </div>
            <div className="h-64 bg-[#ffe16e] relative p-4 flex justify-center items-center overflow-hidden border-b-4 border-on-surface">
              <img alt="Thai Tea" className="object-contain h-full w-auto drop-shadow-[4px_4px_0_rgba(26,28,28,1)] group-hover:scale-110 transition-transform duration-300" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDGtQy5z6aIk-ZwWwOHWRDzSrr0vrJu71ZppYVv83sAfsmqmIgi7Exe5UWRJMnREeHOyvk8BpA7WqySzNAWbSGSI1yNzHK88mcf3jG2wlf4SUS8rSssMAURappeMSRsXVXSpfFWSb6Vr8OF8eA8B3qxmg8SB4xmJ2YBEm9A_F01IhuAkMREZhI2t2K2nRLWn0-djf9DoFVGaPYUERbsllAi7qQvUUAeiTsUFb-ifCMXWrLlynHXjmZT0LdgpRin7leDI8oJCwhGh9v9" />
            </div>
            <div className="p-lg flex flex-col flex-grow justify-between bg-surface-container-lowest">
              <div>
                <h3 className="font-headline-md text-[28px] text-on-surface uppercase leading-none mb-2">Thai Tea</h3>
                <p className="font-body-md text-body-md font-bold text-on-surface-variant line-clamp-2 bg-surface p-2 neo-border rounded-xl">Paduan teh Thailand dan susu segar.</p>
              </div>
              <div className="mt-lg flex items-center justify-between">
                <span className="font-display-lg text-[40px] text-primary">10k</span>
                <button aria-label="Tambah" className="bg-surface-container text-on-surface p-3 rounded-xl neo-border neo-shadow neo-button">
                  <span className="material-symbols-outlined font-bold">add</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
