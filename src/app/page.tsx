import React from 'react';

export default function Home() {
  return (
    <main className="min-h-screen relative flex flex-col bg-black text-white overflow-hidden">
      
      {/* صورة الخلفية السينمائية (دراجة في مكان مظلم) */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?q=80&w=2000&auto=format&fit=crop" 
          alt="Background" 
          className="w-full h-full object-cover"
        />
        {/* الطبقة السوداء الشفافة عشان الكلام يبان */}
        <div className="absolute inset-0 bg-black/60" />
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
        
        <p className="text-lg md:text-2xl text-white mb-10 max-w-2xl mx-auto leading-relaxed font-light">
          أكبر مستورد للدراجات في مصر. الوكيل الرسمي لـ PHOENIX من الصين والهند. جودة عالمية وأسعار لا تقبل المنافسة.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <button className="px-8 py-4 bg-red-600 text-white font-bold rounded-full hover:bg-red-700 transition transform hover:scale-105 shadow-lg shadow-red-600/30">
            تصفح الدراجات الآن
          </button>
          <button className="px-8 py-4 bg-black/50 backdrop-blur-sm border border-white/20 text-white font-bold rounded-full hover:bg-white/10 transition">
            قطع الغيار والاسكوترات
          </button>
        </div>
      </div>

      {/* الفوتر */}
      <div className="relative z-10 w-full text-center text-neutral-400 text-sm p-6">
        &copy; 2024 MOSAAD Company - Official PHOENIX Importer
      </div>
    </main>
  );
}
