import React from 'react';

export default function Home() {
  return (
    <div className="relative min-h-screen w-full bg-black text-white font-sans flex flex-col">
      
      {/* صورة الخلفية */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-40"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?q=80&w=2000&auto=format&fit=crop')" }}
      ></div>
      
      {/* طبقة التعتيم */}
      <div className="absolute inset-0 z-0 bg-gradient-to-t from-black via-black/80 to-transparent"></div>

      {/* النافبار - هنا هنحط اللوجو ونمسك حجمه غصب عنه */}
      <nav className="relative z-10 w-full flex items-center p-6 bg-black/50">
        <div className="w-16 h-16 rounded-full overflow-hidden border border-red-600 bg-black flex-shrink-0">
          <img 
            src="/phoenix-logo.JPG" 
            alt="Logo" 
            className="w-full h-full object-cover" 
          />
        </div>
        <span className="text-xl font-bold text-red-600 tracking-widest ml-4">MOSAAD</span>
      </nav>

      {/* المحتوى الرئيسي */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-4 mt-[-100px]">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight">
          MOSAAD <br />
          <span className="text-red-600">PHOENIX BIKES</span>
        </h1>
        
        <p className="text-lg md:text-2xl text-gray-300 mb-10 max-w-2xl mx-auto">
          أكبر مستورد للدراجات في مصر. الوكيل الرسمي لـ PHOENIX من الصين والهند.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <button className="px-8 py-4 bg-red-600 text-white font-bold rounded-full hover:bg-red-700 transition shadow-[0_0_20px_rgba(220,38,38,0.5)]">
            تصفح الدراجات الآن
          </button>
          <button className="px-8 py-4 bg-transparent text-white font-bold rounded-full border border-white/50 hover:bg-white/10 transition">
            قطع الغيار والاسكوترات
          </button>
        </div>
      </div>

      {/* الفوتر */}
      <div className="relative z-10 w-full text-center text-neutral-500 text-sm p-6">
        &copy; 2024 MOSAAD Company - Official PHOENIX Importer in Egypt
      </div>

    </div>
  );
}
