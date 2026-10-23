import React from 'react';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-black text-white relative">
      
      {/* النافبار */}
      <nav className="w-full flex items-center p-6 border-b border-neutral-800 bg-black/50">
        <img 
          src="/phoenix-logo.JPG" 
          alt="Phoenix Logo" 
          style={{ width: '80px', height: '80px', objectFit: 'contain' }} 
        />
        <div className="ml-4 text-xl font-bold text-red-600 tracking-widest">
          MOSAAD
        </div>
      </nav>

      {/* محتوى الصفحة */}
      <div className="flex-1 flex flex-col items-center justify-center px-4 text-center">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6">
          MOSAAD <br />
          <span className="text-red-600">
            PHOENIX BIKES
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-neutral-300 mb-10 max-w-2xl mx-auto">
          أكبر مستورد للدراجات في مصر. الوكيل الرسمي لـ PHOENIX من الصين والهند. جودة عالمية وأسعار لا تقبل المنافسة.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <button className="px-8 py-4 bg-red-600 text-white font-bold rounded-full hover:bg-red-700 transition">
            تصفح الدراجات الآن
          </button>
          <button className="px-8 py-4 bg-white/10 text-white font-bold rounded-full border border-white/20 hover:bg-white/20 transition">
            قطع الغيار والاسكوترات
          </button>
        </div>
      </div>

      <div className="w-full text-center text-neutral-500 text-sm p-6 border-t border-neutral-800">
        &copy; 2024 MOSAAD Company
      </div>
    </main>
  );
}
