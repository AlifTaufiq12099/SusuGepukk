import React, { useState } from 'react';

const riwayatData = [
  // Page 1
  { id: 1, tanggal: 'Kam, 12 Jun 2026', status: 'Berjualan', keterangan: 'Rute Bandung Utara, 42 botol terjual.', pendapatan: 'Rp 320.000', statusIcon: 'shopping_cart', statusColor: 'bg-green-50 text-green-700 border-green-700' },
  { id: 2, tanggal: 'Rab, 11 Jun 2026', status: 'Izin', keterangan: 'Acara keluarga inti.', pendapatan: '-', statusIcon: 'badge', statusColor: 'bg-blue-50 text-blue-700 border-blue-700' },
  { id: 3, tanggal: 'Sel, 10 Jun 2026', status: 'Berjualan', keterangan: 'Rute Bandung Selatan, 38 botol terjual.', pendapatan: 'Rp 285.000', statusIcon: 'shopping_cart', statusColor: 'bg-green-50 text-green-700 border-green-700' },
  { id: 4, tanggal: 'Sen, 09 Jun 2026', status: 'Sakit', keterangan: 'Demam tinggi, istirahat total.', pendapatan: '-', statusIcon: 'medical_services', statusColor: 'bg-orange-50 text-orange-700 border-orange-700' },
  { id: 5, tanggal: 'Min, 08 Jun 2026', status: 'Tidak Ada Aktivitas', keterangan: 'Hari Libur Mingguan.', pendapatan: '-', statusIcon: 'remove_circle_outline', statusColor: 'bg-gray-100 text-gray-700 border-gray-700' },
  // Page 2
  { id: 6, tanggal: 'Sab, 07 Jun 2026', status: 'Berjualan', keterangan: 'Rute Bandung Timur, 45 botol terjual.', pendapatan: 'Rp 340.000', statusIcon: 'shopping_cart', statusColor: 'bg-green-50 text-green-700 border-green-700' },
  { id: 7, tanggal: 'Jum, 06 Jun 2026', status: 'Berjualan', keterangan: 'Rute Bandung Barat, 30 botol terjual.', pendapatan: 'Rp 210.000', statusIcon: 'shopping_cart', statusColor: 'bg-green-50 text-green-700 border-green-700' },
  { id: 8, tanggal: 'Kam, 05 Jun 2026', status: 'Izin', keterangan: 'Keperluan mendadak.', pendapatan: '-', statusIcon: 'badge', statusColor: 'bg-blue-50 text-blue-700 border-blue-700' },
  { id: 9, tanggal: 'Rab, 04 Jun 2026', status: 'Berjualan', keterangan: 'Rute Bandung Pusat, 50 botol terjual.', pendapatan: 'Rp 380.000', statusIcon: 'shopping_cart', statusColor: 'bg-green-50 text-green-700 border-green-700' },
  { id: 10, tanggal: 'Sel, 03 Jun 2026', status: 'Berjualan', keterangan: 'Rute Bandung Selatan, 40 botol terjual.', pendapatan: 'Rp 300.000', statusIcon: 'shopping_cart', statusColor: 'bg-green-50 text-green-700 border-green-700' },
  // Page 3
  { id: 11, tanggal: 'Sen, 02 Jun 2026', status: 'Sakit', keterangan: 'Kunjungan ke klinik.', pendapatan: '-', statusIcon: 'medical_services', statusColor: 'bg-orange-50 text-orange-700 border-orange-700' },
  { id: 12, tanggal: 'Min, 01 Jun 2026', status: 'Tidak Ada Aktivitas', keterangan: 'Hari Libur Mingguan.', pendapatan: '-', statusIcon: 'remove_circle_outline', statusColor: 'bg-gray-100 text-gray-700 border-gray-700' },
  { id: 13, tanggal: 'Sab, 31 Mei 2026', status: 'Berjualan', keterangan: 'Rute Event Khusus, 60 botol terjual.', pendapatan: 'Rp 450.000', statusIcon: 'shopping_cart', statusColor: 'bg-green-50 text-green-700 border-green-700' },
  { id: 14, tanggal: 'Jum, 30 Mei 2026', status: 'Berjualan', keterangan: 'Rute Bandung Utara, 35 botol terjual.', pendapatan: 'Rp 250.000', statusIcon: 'shopping_cart', statusColor: 'bg-green-50 text-green-700 border-green-700' },
  { id: 15, tanggal: 'Kam, 29 Mei 2026', status: 'Berjualan', keterangan: 'Rute Bandung Timur, 38 botol terjual.', pendapatan: 'Rp 280.000', statusIcon: 'shopping_cart', statusColor: 'bg-green-50 text-green-700 border-green-700' }
];

export default function RiwayatPenjualan() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const totalPages = Math.ceil(riwayatData.length / itemsPerPage);
  
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentData = riwayatData.slice(startIndex, startIndex + itemsPerPage);
  return (
    <div className="animate-fade-in w-full pb-10">
      {/* Title */}
      <div className="mb-8">
        <h1 className="text-4xl md:text-5xl font-black text-[#fdd835] font-display-lg inline-block tracking-wide">
          <span className="border-b-4 border-[#fdd835] pb-1 shadow-[0_6px_0_0_rgba(17,24,39,1)]">
            Riwayat
          </span>
          <span>
            &nbsp; Aktivitas
          </span>
        </h1>
      </div>

      {/* Selectors */}
      <div className="flex gap-4 mb-8">
        <div className="relative">
          <select className="appearance-none bg-white border-4 border-gray-900 rounded-lg px-4 py-2 pr-10 font-bold text-gray-900 focus:outline-none cursor-pointer shadow-[3px_3px_0_0_rgba(17,24,39,1)]">
            <option>Bulan</option>
            <option>Juni</option>
          </select>
          <span className="material-symbols-outlined absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none text-gray-900 font-bold">expand_more</span>
        </div>
        <div className="relative">
          <select className="appearance-none bg-white border-4 border-gray-900 rounded-lg px-4 py-2 pr-10 font-bold text-gray-900 focus:outline-none cursor-pointer shadow-[3px_3px_0_0_rgba(17,24,39,1)]">
            <option>Tahun</option>
            <option>2026</option>
          </select>
          <span className="material-symbols-outlined absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none text-gray-900 font-bold">expand_more</span>
        </div>
      </div>

      {/* Info Pill */}
      <div className="bg-[#1d4ed8] border-4 border-gray-900 rounded-xl px-6 py-4 shadow-[6px_6px_0_0_rgba(17,24,39,1)] mb-8 flex items-center gap-3">
        <span className="material-symbols-outlined text-[#fdd835] text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>calendar_month</span>
        <h2 className="text-white font-bold text-xl tracking-wide">Juni 2026 • 30 hari kerja</h2>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
        <div className="bg-white border-4 border-gray-900 rounded-xl p-5 shadow-[6px_6px_0_0_rgba(17,24,39,1)] flex flex-col justify-between">
          <h3 className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-2">TOTAL BERJUALAN</h3>
          <div className="flex items-baseline gap-1.5 mt-auto">
            <span className="text-4xl font-black text-gray-900 tracking-tight">21</span>
            <span className="text-sm font-bold text-gray-500">hari</span>
          </div>
        </div>
        
        <div className="bg-white border-4 border-gray-900 rounded-xl p-5 shadow-[6px_6px_0_0_rgba(17,24,39,1)] flex flex-col justify-between">
          <h3 className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-2">IZIN</h3>
          <div className="flex items-baseline gap-1.5 mt-auto">
            <span className="text-4xl font-black text-gray-900 tracking-tight">7</span>
            <span className="text-sm font-bold text-gray-500">hari</span>
          </div>
        </div>

        <div className="bg-white border-4 border-gray-900 rounded-xl p-5 shadow-[6px_6px_0_0_rgba(17,24,39,1)] flex flex-col justify-between">
          <h3 className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-2">SAKIT</h3>
          <div className="flex items-baseline gap-1.5 mt-auto">
            <span className="text-4xl font-black text-gray-900 tracking-tight">0</span>
            <span className="text-sm font-bold text-gray-500">hari</span>
          </div>
        </div>

        <div className="bg-white border-4 border-gray-900 rounded-xl p-5 shadow-[6px_6px_0_0_rgba(17,24,39,1)] flex flex-col justify-between">
          <h3 className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-2">TIDAK ADA AKTIVITAS</h3>
          <div className="flex items-baseline gap-1.5 mt-auto">
            <span className="text-4xl font-black text-gray-900 tracking-tight">0</span>
            <span className="text-sm font-bold text-gray-500">hari</span>
          </div>
        </div>

        <div className="bg-white border-4 border-gray-900 rounded-xl p-5 shadow-[6px_6px_0_0_rgba(17,24,39,1)] flex flex-col justify-between col-span-2 lg:col-span-1">
          <h3 className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-2">TOTAL PENDAPATAN</h3>
          <div className="flex items-baseline gap-1.5 mt-auto">
            <span className="text-2xl lg:text-xl xl:text-2xl font-black text-gray-900 tracking-tight">Rp 246.000</span>
          </div>
        </div>
      </div>

      {/* Table Section */}
      <div className="bg-gray-50 border-4 border-gray-900 rounded-2xl shadow-[6px_6px_0_0_rgba(17,24,39,1)] overflow-hidden">
        {/* Table Header */}
        <div className="bg-white px-6 py-5 flex items-center justify-between border-b-[3px] border-gray-900">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-[#1d4ed8] text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>list_alt</span>
            <h2 className="text-gray-900 font-black text-xl tracking-wide">Daftar Aktivitas — Juni 2026</h2>
          </div>
          <div className="relative hidden md:block">
            <select className="appearance-none bg-white border-2 border-gray-900 rounded-full px-5 py-2 pr-10 font-bold text-sm text-gray-900 focus:outline-none cursor-pointer">
              <option>Semua Status</option>
            </select>
            <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-900 text-[18px] font-bold">expand_more</span>
          </div>
        </div>

        {/* Table Content */}
        <div className="overflow-x-auto bg-white">
          <div className="min-w-[800px]">
            {/* Columns */}
            <div className="grid grid-cols-12 gap-4 p-5 border-b-[3px] border-gray-900 bg-white">
              <div className="col-span-3 font-bold text-xs uppercase tracking-wider text-gray-900 text-center">TANGGAL</div>
              <div className="col-span-3 font-bold text-xs uppercase tracking-wider text-gray-900 text-center">STATUS</div>
              <div className="col-span-4 font-bold text-xs uppercase tracking-wider text-gray-900 text-center">KETERANGAN</div>
              <div className="col-span-2 font-bold text-xs uppercase tracking-wider text-gray-900 text-center">PENDAPATAN</div>
            </div>
            
            {/* Rows */}
            <div className="divide-y-[2px] divide-gray-200">
              {currentData.map(item => (
                <div key={item.id} className="grid grid-cols-12 gap-4 p-5 items-center bg-white hover:bg-gray-50 transition-colors">
                  <div className="col-span-3 text-gray-900 font-medium text-center text-sm">{item.tanggal}</div>
                  <div className="col-span-3 flex justify-center">
                    <div className={`inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full border-2 text-xs font-bold ${item.statusColor}`}>
                      <span className="material-symbols-outlined text-[16px]">{item.statusIcon}</span>
                      {item.status}
                    </div>
                  </div>
                  <div className="col-span-4 text-gray-600 text-sm">{item.keterangan}</div>
                  <div className="col-span-2 text-center">
                    <span className={`font-black text-lg ${item.pendapatan !== '-' ? 'text-green-700' : 'text-gray-400'}`}>
                      {item.pendapatan}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Pagination */}
        <div className="bg-gray-100 px-6 py-4 flex items-center justify-between border-t-[3px] border-gray-900">
          <p className="text-xs font-bold text-gray-600">
            Menampilkan {startIndex + 1}-{Math.min(startIndex + itemsPerPage, riwayatData.length)} dari {riwayatData.length} hari
          </p>
          <div className="flex items-center gap-2">
            <button 
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className={`w-8 h-8 flex items-center justify-center rounded border-2 transition-all ${currentPage === 1 ? 'bg-white border-gray-300 text-gray-400 cursor-not-allowed' : 'bg-white border-gray-900 text-gray-900 hover:bg-gray-50 hover:shadow-[2px_2px_0_0_rgba(17,24,39,1)] cursor-pointer'}`}
            >
              <span className="material-symbols-outlined text-[18px]">chevron_left</span>
            </button>
            
            {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
              <button 
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`w-8 h-8 flex items-center justify-center rounded border-2 border-gray-900 font-bold transition-all ${currentPage === page ? 'bg-[#fdd835] text-gray-900 shadow-[2px_2px_0_0_rgba(17,24,39,1)]' : 'bg-white text-gray-900 hover:bg-gray-50 hover:shadow-[2px_2px_0_0_rgba(17,24,39,1)] cursor-pointer'}`}
              >
                {page}
              </button>
            ))}

            <button 
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className={`w-8 h-8 flex items-center justify-center rounded border-2 transition-all ${currentPage === totalPages ? 'bg-white border-gray-300 text-gray-400 cursor-not-allowed' : 'bg-white border-gray-900 text-gray-900 hover:bg-gray-50 hover:shadow-[2px_2px_0_0_rgba(17,24,39,1)] cursor-pointer'}`}
            >
              <span className="material-symbols-outlined text-[18px]">chevron_right</span>
            </button>
          </div>
        </div>
      </div>

    </div>
  );
}
