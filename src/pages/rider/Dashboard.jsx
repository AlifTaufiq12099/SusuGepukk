import React, { useState } from 'react';

const riderProducts = [
  { id: 1, name: 'Melon Frost', img: '/drive-download-20260512T105721Z-3-001/Susu Melon Frost-Photoroom.png', stok: 15, basi: 0 },
  { id: 2, name: 'Susu Coklat Swiz', img: '/drive-download-20260512T105721Z-3-001/Susu Coklat Swiz-Photoroom.png', stok: 10, basi: 0 },
  { id: 3, name: 'Susu Kopi', img: '/drive-download-20260512T105721Z-3-001/Susu Kopi-Photoroom.png', stok: 8, basi: 0 },
  { id: 4, name: 'Susu Matcha Kyoto', img: '/drive-download-20260512T105721Z-3-001/Susu Matcha Kyoto-Photoroom.png', stok: 5, basi: 0 },
  { id: 5, name: 'Susu Murni Botol', img: '/drive-download-20260512T105721Z-3-001/Susu Murni Botol-Photoroom.png', stok: 3, basi: 0 },
  { id: 6, name: 'Susu Strawberry', img: '/drive-download-20260512T105721Z-3-001/Susu Strawberry-Photoroom.png', stok: 12, basi: 0 },
  { id: 7, name: 'Susu Vanilla Sweet', img: '/drive-download-20260512T105721Z-3-001/Susu Vanilla Sweet-Photoroom.png', stok: 7, basi: 0 },
];

export default function RiderDashboard() {
  const [isLive, setIsLive] = useState(true);

  return (
    <div className="animate-fade-in w-full pb-10">
      {/* Title */}
      <div className="mb-8">
        <h1 className="text-4xl md:text-5xl font-black text-[#fdd835] font-display-lg inline-block border-b-4 border-[#fdd835] pb-1 tracking-wide">
          Dashboard
        </h1>
      </div>

      {/* Status Pill */}
      <div className="mb-6">
        <div className="inline-flex items-center gap-2 bg-[#1d4ed8] border-2 border-gray-900 rounded-lg px-4 py-2 text-white font-bold shadow-[3px_3px_0_0_rgba(17,24,39,1)]">
          <span className="material-symbols-outlined text-lg" style={{ fontVariationSettings: "'FILL' 0" }}>location_on</span>
          Status ketersediaan produk
        </div>
      </div>

      {/* Live Location Card */}
      <div className="bg-white border-4 border-gray-900 shadow-[8px_8px_0_0_rgba(17,24,39,1)] rounded-2xl overflow-hidden mb-8">
        {/* Card Header */}
        <div className="bg-[#fdd835] border-b-4 border-gray-900 px-6 py-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-4 flex-wrap">
            <h2 className="text-xl font-black text-gray-900 uppercase tracking-widest">LIVE LOCATION</h2>
            <div className="bg-green-50 border-2 border-green-500 text-green-700 px-3 py-1 rounded-full text-sm font-bold flex items-center gap-2 shadow-sm">
              <div className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse border border-white"></div>
              Produk tersedia
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="font-bold text-gray-900 text-sm">Aktif</span>
            <button 
              onClick={() => setIsLive(!isLive)}
              className={`w-14 h-8 rounded-full border-4 border-gray-900 flex items-center p-0.5 transition-colors cursor-pointer ${isLive ? 'bg-green-500' : 'bg-gray-300'}`}
            >
              <div className={`w-5 h-5 bg-white border-2 border-gray-900 rounded-full transition-transform ${isLive ? 'translate-x-6' : 'translate-x-0'}`}></div>
            </button>
          </div>
        </div>

        {/* Card Body */}
        <div className="p-6 md:p-8 flex flex-col lg:flex-row gap-8 items-center">
          <div className="flex-1 flex flex-col justify-center">
            <p className="text-gray-700 font-medium text-lg leading-relaxed mb-8 max-w-lg">
              Mengaktifkan live location menandakan produk tersedia untuk dipesan pelanggan di area terdekat Anda.
            </p>
            
            {/* GPS Coordinates Box */}
            <div className="bg-gray-100 border-4 border-gray-900 rounded-xl p-5 flex items-start gap-4 shadow-[4px_4px_0_0_rgba(17,24,39,1)] max-w-md w-full relative">
              <div className="bg-[#0f2c7a] text-white p-2.5 rounded-full mt-1 shrink-0 flex items-center justify-center">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>location_on</span>
              </div>
              <div className="overflow-hidden">
                <p className="text-[11px] text-gray-500 font-bold uppercase tracking-widest mb-1.5">GPS COORDINATES</p>
                <p className="text-xl md:text-2xl font-black text-gray-900 font-mono tracking-tight truncate">-6.2088° S, 106.8456° E</p>
                <p className="text-sm text-gray-600 mt-2 font-medium truncate">Jl. Jend. Sudirman Kav. 1, Jakarta Pusat</p>
              </div>
            </div>
            
            <p className="text-xs text-gray-500 mt-4 font-bold flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[14px]">history</span>
              Last updated: 2 minutes ago
            </p>
          </div>
          
          {/* Map Placeholder */}
          <div className="lg:w-1/2 w-full rounded-2xl border-4 border-gray-900 overflow-hidden relative min-h-[300px] bg-slate-900 flex items-center justify-center shadow-inner">
            {/* Simple CSS Map Visualization */}
            <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#64748b 2px, transparent 2px)', backgroundSize: '30px 30px' }}></div>
            
            {/* Map lines */}
            <svg className="absolute inset-0 w-full h-full opacity-30" viewBox="0 0 100 100" preserveAspectRatio="none">
              <path d="M0,20 L100,50 M0,80 L100,30 M30,0 L60,100 M70,0 L40,100" stroke="#94a3b8" strokeWidth="0.5" fill="none" />
              <path d="M10,10 L90,90 M10,90 L90,10" stroke="#94a3b8" strokeWidth="0.2" fill="none" />
            </svg>

            {/* Main pin */}
            <div className="relative z-10 bg-[#fdd835] w-14 h-14 rounded-full border-4 border-gray-900 shadow-[4px_4px_0_0_rgba(0,0,0,0.5)] flex items-center justify-center z-20">
              <span className="material-symbols-outlined text-gray-900 font-black text-2xl">two_wheeler</span>
              {/* Radar rings */}
              <div className="absolute inset-0 border-4 border-[#fdd835] rounded-full animate-ping opacity-60"></div>
            </div>
            
            {/* Dummy customer pins */}
            <div className="absolute top-[20%] left-[20%] flex flex-col items-center">
              <div className="w-4 h-4 bg-blue-500 rounded-full border-2 border-white shadow-md"></div>
            </div>
            <div className="absolute bottom-[20%] right-[30%] flex flex-col items-center">
              <div className="w-4 h-4 bg-orange-500 rounded-full border-2 border-white shadow-md"></div>
            </div>
            <div className="absolute top-[30%] right-[20%] flex flex-col items-center">
              <div className="w-4 h-4 bg-blue-500 rounded-full border-2 border-white shadow-md"></div>
            </div>
            <div className="absolute bottom-[35%] left-[30%] flex flex-col items-center">
              <div className="w-4 h-4 bg-blue-500 rounded-full border-2 border-white shadow-md"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Rekap Pill */}
      <div className="mb-6">
        <div className="inline-flex items-center gap-2 bg-[#1d4ed8] border-2 border-gray-900 rounded-lg px-4 py-2 text-white font-bold shadow-[3px_3px_0_0_rgba(17,24,39,1)]">
          <span className="material-symbols-outlined text-lg">bar_chart</span>
          Rekap Terakhir 11 Mei 2026 - 17:30 WIB
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        {[
          { label: 'TOTAL TERJUAL', value: '21', unit: 'pcs' },
          { label: 'TOTAL PENDAPATAN', value: 'Rp 246.000', unit: '' },
          { label: 'SISA BAGUS', value: '7', unit: 'pcs' },
          { label: 'TOTAL BASI', value: '0', unit: 'pcs' },
        ].map((stat, i) => (
          <div key={i} className="bg-white border-4 border-gray-900 rounded-2xl p-6 shadow-[6px_6px_0_0_rgba(17,24,39,1)] flex flex-col justify-between hover:-translate-y-1 hover:shadow-[8px_8px_0_0_rgba(17,24,39,1)] transition-all">
            <h3 className="text-[11px] font-black text-gray-500 uppercase tracking-widest mb-3">{stat.label}</h3>
            <div className="flex items-baseline gap-1.5">
              <span className="text-4xl font-black text-gray-900 tracking-tight">{stat.value}</span>
              {stat.unit && <span className="text-sm font-bold text-gray-500">{stat.unit}</span>}
            </div>
          </div>
        ))}
      </div>

      {/* Sync Button */}
      <div className="flex justify-end mb-10">
        <button className="flex items-center gap-2 bg-[#fdd835] border-4 border-gray-900 px-8 py-3.5 rounded-xl font-bold text-lg shadow-[6px_6px_0_0_rgba(17,24,39,1)] hover:-translate-y-1 hover:shadow-[8px_8px_0_0_rgba(17,24,39,1)] active:translate-y-0 active:shadow-[2px_2px_0_0_rgba(17,24,39,1)] transition-all">
          <span className="material-symbols-outlined font-bold text-xl">sync</span>
          Sync Data Sekarang
        </button>
      </div>
    </div>
  );
}
