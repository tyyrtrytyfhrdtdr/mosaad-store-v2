import React from 'react';

export default function Home() {
  return (
    <main className="min-h-screen relative flex flex-col bg-black text-white overflow-hidden">
      
      {/* صورة الخلفية السينمائية */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1541625602330-2277a4c46182?q=80&w=2000&auto=format&fit=crop" 
          alt="Background" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
      </div>

      {/* النافبار */}
      <nav className="relative z-10 w-full flex items-center justify-between p-6">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full overflow-hidden border border-neutral-700 bg-black">
            <img 
              src="/phoenix-logo.JPG" 
              alt="Phoenix Logo" 
              className="w-full h-full object-contain" 
            />
          </div>
          <span className="text-xl font-bold text-red-600 tracking-widest">MOSAAD</span>
        </div>
      </nav>

      {/* المحتوى الرئيسي */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-4 text-center mt-[-50px]">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight">
          MOSAAD <br />
          <span className="text-red-600">PHOENIX BIKES</span>
        </h1>
        
        <p className="text-lg md:text-xl text-neutral-300 mb-10 max-w-2xl mx-auto leading-relaxed">
          أكبر مستورد للدراجات في مصر. الوكيل الرسمي لـ PHOENIX من الصين والهند. جودة عالمية وأسعار لا تقبل المنافسة.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <button className="px-8 py-3 bg-red-600 text-white font-bold rounded-full hover:bg-red-700 transition">
            تصفح الدراجات
          </button>
          <button className="px-8 py-3 bg-neutral-800 text-white font-bold rounded-full border border-neutral-700 hover:bg-neutral-700 transition">
            قطع الغيار
          </button>
        </div>
      </div>

      {/* الفوتر */}
      <div className="relative z-10 w-full text-center text-neutral-500 text-sm p-6">
        &copy; 2024 MOSAAD Company - Official PHOENIX Importer
      </div>
    </main>
  );
}
