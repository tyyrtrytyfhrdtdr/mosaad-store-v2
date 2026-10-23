import React from 'react';

export default function Home() {
  return (
    <div className="relative min-h-screen w-full bg-black text-white font-sans flex flex-col justify-between">
      
      {/* 1. صورة الخلفية */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-60"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?q=80&w=2000&auto=format&fit=crop')" }}
      ></div>
      
      {/* 2. طبقة التعتيم عشان الكلام يبان */}
      <div className="absolute inset-0 z-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>

      {/* 3. النافبار */}
      <nav className="relative z-10 flex items-center justify-between p-6">
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

      {/* 4. المحتوى الرئيسي */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 max-w-4xl mx-auto mt-20">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight text-white drop-shadow-2xl">
          MOSAAD <br />
          <span className="text-red-600">PHOENIX BIKES</span>
        </h1>
        
        <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed drop-shadow-lg">
          أكبر مستورد للدراجات في مصر. الوكيل الرسمي لـ PHOENIX من الصين والهند. جودة عالمية وأسعار لا تقبل المنافسة.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <button className="px-8 py-4 bg-red-600 text-white font-bold rounded-full hover:bg-red-700 transition duration-300 transform hover:scale-105 shadow-[0_0_20px_rgba(220,38,38,0.5)]">
            تصفح الدراجات الآن
          </button>
          <button className="px-8 py-4 bg-transparent text-white font-bold rounded-full border border-white/50 hover:bg-white/10 transition duration-300">
            قطع الغيار والاسكوترات
          </button>
        </div>
      </div>

      {/* 5. الفوتر */}
      <div className="relative z-10 w-full text-center text-neutral-500 text-sm p-6">
        &copy; 2024 MOSAAD Company - Official PHOENIX Importer in Egypt
      </div>

    </div>
  );
}
