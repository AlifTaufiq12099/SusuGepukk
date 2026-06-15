import React, { useState } from 'react';

const products = [
  { id: 1, name: 'Strawberry', price: 12000, stokBawa: 20 },
  { id: 2, name: 'Melon Frost', price: 12000, stokBawa: 20 },
  { id: 3, name: 'Vanilla Sweet', price: 12000, stokBawa: 20 },
  { id: 4, name: 'Susu Kopi', price: 12000, stokBawa: 20 },
  { id: 5, name: 'Matcha Kyoto', price: 12000, stokBawa: 20 },
  { id: 6, name: 'Coklat Swiz', price: 12000, stokBawa: 20 },
  { id: 7, name: 'Susu Murni', price: 10000, stokBawa: 20 },
];

export default function RekapPenjualan() {
  const [paymentMethod, setPaymentMethod] = useState('Transfer QRIS');
  const [showAlert, setShowAlert] = useState(false);

  return (
    <div className="animate-fade-in w-full pb-10">
      {/* Title */}
      <div className="mb-8 ">
        <h1 className="text-4xl md:text-5xl font-black text-[#fdd835] font-display-lg inline-block  tracking-wide">
          <span className='border-b-4 border-[#fdd835] pb-1 shadow-[0_6px_0_0_rgba(17,24,39,1)]'>
            Rekap
          </span>
          <span >
            &nbsp; Penjualan
          </span>
        </h1>

      </div>


      {/* Info Header */}
      {/* Ditambahkan px-12 atau px-16 untuk layar besar agar konten terdorong ke tengah */}
<div className="bg-[#1d4ed8] border-4 border-gray-900 rounded-2xl p-6 md:px-12 md:py-8 shadow-[6px_6px_0_0_rgba(17,24,39,1)] mb-8 flex flex-col md:flex-row gap-6 md:gap-12 justify-between items-start md:items-center">
  <div>
    <p className="text-xs text-yellow-300 font-bold mb-1">Tanggal & waktu</p>
    <p className="text-white font-medium">12 Mei 2026, 08:30 WIB</p>
  </div>
  <div>
    <p className="text-xs text-yellow-300 font-bold mb-1">Lokasi GPS</p>
    <p className="text-white font-medium">8 Jl. Sudirman No.5</p>
  </div>
  <div>
    <p className="text-xs text-yellow-300 font-bold mb-1">Nama rider</p>
    <p className="text-white font-medium">Budi Santoso</p>
  </div>
</div>
      {/* Stok Bawa Hari Ini */}
      <div className="bg-[#1d4ed8] border-4 border-gray-900 rounded-2xl p-6 shadow-[6px_6px_0_0_rgba(17,24,39,1)] mb-8">
        <h2 className="text-white font-bold text-lg mb-6 flex items-center gap-2 ">
          <span className="text-[#fdd835] material-symbols-outlined text-xl " style={{ fontVariationSettings: "'FILL' 1" }}>water_bottle</span>
          Stok Bawa Hari Ini

        </h2>
        <div className="mb-6 h-0.5 flex-1 border-b-2 border-black-600 "></div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
          {products.map(product => (
            <div key={product.id} className="flex flex-col gap-2">
              <p className="text-[10px] text-white font-bold uppercase tracking-wider">{product.name}</p>
              <p className="text-[10px] text-blue-200 mb-1">Rp {product.price.toLocaleString('id-ID')}</p>
              <div className="bg-white border-2 border-gray-900 rounded px-3 py-2 text-center text-blue-600 font-bold text-lg shadow-[2px_2px_0_0_rgba(17,24,39,1)]">
                {product.stokBawa}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Data Penjualan Per Menu */}
      <div className="bg-[#1d4ed8] border-4 border-gray-900 rounded-2xl p-6 shadow-[6px_6px_0_0_rgba(17,24,39,1)] mb-8 overflow-x-auto">
        <h2 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
          <span className="text-[#fdd835] material-symbols-outlined text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>list_alt</span>
          Data Penjualan Per Menu
        </h2>

        <div className="bg-white border-2 border-gray-900 rounded-xl overflow-hidden min-w-[700px]">
          <div className="grid grid-cols-4 gap-4 p-4 border-b-2 border-gray-900">
            <div className="font-bold text-xs uppercase tracking-wider text-gray-800">MENU & HARGA</div>
            <div className="font-bold text-xs uppercase tracking-wider text-gray-800 text-center">JUMLAH TERJUAL</div>
            <div className="font-bold text-xs uppercase tracking-wider text-gray-800 text-center">SUSU BASI</div>
            <div className="font-bold text-xs uppercase tracking-wider text-gray-800 text-center">KEMASAN RUSAK</div>
          </div>

          <div className="divide-y-2 divide-gray-900">
            {products.map(product => (
              <div key={product.id} className="grid grid-cols-4 gap-4 p-4 items-center">
                <div>
                  <p className="font-bold text-gray-900 text-sm">{product.name}</p>
                  <p className="text-xs text-gray-500">Rp {product.price.toLocaleString('id-ID')}</p>
                </div>
                <div className="flex justify-center">
                  <input
                    type="number"
                    defaultValue={0}
                    min={0}
                    className="w-20 bg-white border-2 border-gray-900 rounded p-2 text-center font-bold text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#fdd835]"
                  />
                </div>
                <div className="flex justify-center">
                  <input
                    type="number"
                    defaultValue={0}
                    min={0}
                    className="w-20 bg-white border-2 border-gray-900 rounded p-2 text-center font-bold text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#fdd835]"
                  />
                </div>
                <div className="flex justify-center">
                  <input
                    type="number"
                    defaultValue={0}
                    min={0}
                    className="w-20 bg-white border-2 border-gray-900 rounded p-2 text-center font-bold text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#fdd835]"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Setoran */}
      <div className="bg-[#1d4ed8] border-4 border-gray-900 rounded-2xl p-6 shadow-[6px_6px_0_0_rgba(17,24,39,1)] mb-8">
        <h2 className="text-white font-bold text-lg mb-6 flex items-center gap-2 border-b-2 border-blue-600 pb-4">
          <span className="text-[#fdd835] material-symbols-outlined text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>payments</span>
          Setoran
        </h2>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex-1 flex flex-col gap-6">
            <div>
              <p className="text-blue-100 text-sm mb-3">Metode Pembayaran</p>
              <div className="flex gap-4">
                <button
                  onClick={() => setPaymentMethod('Cash')}
                  className={`flex-1 py-3 px-4 rounded border-2 border-gray-900 font-bold transition-all ${paymentMethod === 'Cash' ? 'bg-[#fdd835] text-gray-900 shadow-[4px_4px_0_0_rgba(17,24,39,1)]' : 'bg-white text-gray-700 hover:bg-gray-50'}`}
                >
                  Cash
                </button>
                <button
                  onClick={() => setPaymentMethod('Transfer QRIS')}
                  className={`flex-1 py-3 px-4 rounded border-2 border-gray-900 font-bold transition-all ${paymentMethod === 'Transfer QRIS' ? 'bg-[#fdd835] text-gray-900 shadow-[4px_4px_0_0_rgba(17,24,39,1)]' : 'bg-white text-gray-700 hover:bg-gray-50'}`}
                >
                  Transfer QRIS
                </button>
              </div>
            </div>

            <div>
              <p className="text-blue-100 text-sm mb-3">Nominal (Rp)</p>
              <input
                type="text"
                defaultValue="0"
                className="w-full bg-[#0f2c7a] border-2 border-gray-400 rounded p-4 text-white font-bold focus:outline-none focus:border-white focus:ring-1 focus:ring-white"
              />
            </div>
          </div>

          {paymentMethod === 'Transfer QRIS' && (
            <div className="flex-1">
              <p className="text-blue-100 text-sm mb-3">Unggah Bukti Transfer</p>
              <div className="border-2 border-dashed border-gray-400 rounded-xl bg-[#0f2c7a] flex flex-col items-center justify-center h-40 cursor-pointer hover:bg-blue-900 transition-colors">
                <span className="material-symbols-outlined text-white text-3xl mb-2" style={{ fontVariationSettings: "'FILL' 1" }}>upload_file</span>
                <p className="text-blue-200 text-sm">Klik atau drag file ke sini</p>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-end items-center gap-4 mb-8">
        {/* Alert */}
        {showAlert && (
          <div className="bg-[#ffbaba] text-[#630000] rounded-[20px] px-6 py-4 flex items-center gap-4 animate-fade-in w-full md:w-auto">
            <div className="w-8 h-8 rounded-full bg-[#630000] flex items-center justify-center shrink-0">
              <span className="text-[#ffbaba] font-black text-xl leading-none">!</span>
            </div>
            <p className="font-bold text-lg tracking-wide">Data tidak lengkap. Periksa kembali form.</p>
          </div>
        )}

        <button 
          onClick={() => setShowAlert(true)}
          className="bg-[#fdd835] border-4 border-gray-900 px-20 py-3 rounded-[20px] font-bold text-lg shadow-[4px_4px_0_0_rgba(17,24,39,1)] hover:-translate-y-1 hover:shadow-[6px_6px_0_0_rgba(17,24,39,1)] active:translate-y-0 active:shadow-[2px_2px_0_0_rgba(17,24,39,1)] transition-all shrink-0 w-full md:w-auto"
        >
          Kirim
        </button>
      </div>

      {/* Rekap Pill */}
      <div className="mb-6">
        <div className="inline-flex items-center gap-2 bg-[#1d4ed8] border-2 border-gray-900 rounded-lg px-4 py-2 text-white font-bold shadow-[3px_3px_0_0_rgba(17,24,39,1)] text-sm">
          <span className="material-symbols-outlined text-lg">receipt_long</span>
          Rekap Penjualan Terakhir 11 Mei 2026 - 17:30 WIB
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        <div className="bg-white border-4 border-gray-900 rounded-xl p-5 shadow-[4px_4px_0_0_rgba(17,24,39,1)] flex flex-col justify-between">
          <h3 className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-2">TOTAL TERJUAL</h3>
          <div className="flex items-baseline gap-1.5">
            <span className="text-3xl font-black text-gray-900 tracking-tight">21</span>
            <span className="text-xs font-bold text-gray-500">pcs</span>
          </div>
        </div>

        <div className="bg-white border-4 border-gray-900 rounded-xl p-5 shadow-[4px_4px_0_0_rgba(17,24,39,1)] flex flex-col justify-between">
          <h3 className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-2">SISA STOK</h3>
          <div className="flex items-baseline gap-1.5">
            <span className="text-3xl font-black text-gray-900 tracking-tight">7</span>
            <span className="text-xs font-bold text-gray-500">pcs</span>
          </div>
        </div>

        <div className="bg-white border-4 border-gray-900 rounded-xl p-5 shadow-[4px_4px_0_0_rgba(17,24,39,1)] flex flex-col justify-between">
          <h3 className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-2">TOTAL SUSU BASI</h3>
          <div className="flex items-baseline gap-1.5">
            <span className="text-3xl font-black text-gray-900 tracking-tight">0</span>
            <span className="text-xs font-bold text-gray-500">pcs</span>
          </div>
        </div>

        <div className="bg-white border-4 border-gray-900 rounded-xl p-5 shadow-[4px_4px_0_0_rgba(17,24,39,1)] flex flex-col justify-between">
          <h3 className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-2">KEMASAN RUSAK</h3>
          <div className="flex items-baseline gap-1.5">
            <span className="text-3xl font-black text-gray-900 tracking-tight">0</span>
            <span className="text-xs font-bold text-gray-500">pcs</span>
          </div>
        </div>

        <div className="bg-white border-4 border-gray-900 rounded-xl p-5 shadow-[4px_4px_0_0_rgba(17,24,39,1)] flex flex-col justify-between col-span-2 lg:col-span-1">
          <h3 className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-2">TOTAL PENDAPATAN</h3>
          <div className="flex items-baseline gap-1.5 mt-auto">
            <span className="text-xl md:text-2xl font-black text-gray-900 tracking-tight">Rp 246.000</span>
          </div>
        </div>
      </div>

    </div>
  );
}
