import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-black text-white relative">
      
      {/* النافبار (القائمة العلوية) */}
      <nav className="w-full flex items-center justify-between p-6 border-b border-neutral-800 z-50 relative bg-black/50 backdrop-blur-md">
        {/* اللوجو هنا في مكانه الصح بحجم صغير */}
        <div className="relative w-16 h-16 md:w-20 md:h-20">
          <Image 
            src="/phoenix-logo.JPG" 
            alt="Phoenix Logo" 
            fill 
            className="object-contain" 
            priority
          />
        </div>
        <div className="text-xl font-bold text-red-600 tracking-widest hidden md:block">
          MOSAAD
        </div>
      </nav>

      {/* محتوى الصفحة الرئيسية */}
      <div className="flex-1 flex flex-col items-center justify-center px-4 text-center z-10 relative">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight drop-shadow-2xl">
          MOSAAD <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">
            PHOENIX BIKES
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-neutral-300 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
          أكبر مستورد للدراجات في مصر. الوكيل الرسمي لـ PHOENIX من الصين والهند. جودة عالمية وأسعار لا تقبل المنافسة.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-4 bg-red-600 text-white font-bold rounded-full hover:bg-red-700 transition-all duration-300 transform hover:scale-105 shadow-[0_0_20px_rgba(220,38,38,0.5)]">
            تصفح الدراجات الآن
          </button>
          <button className="px-8 py-4 bg-white/10 backdrop-blur-md text-white font-bold rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300">
            قطع الغيار والاسكوترات
          </button>
        </div>
      </div>

      <div className="w-full text-center text-neutral-500 text-sm p-6 border-t border-neutral-800 z-10 relative">
        &copy; 2024 MOSAAD Company - Official PHOENIX Importer in Egypt
      </div>
    </main>
  );
}
