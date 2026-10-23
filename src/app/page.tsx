export default function Home() {
  return (
    <main className="min-h-screen relative flex flex-col bg-black text-white font-sans overflow-hidden">
      
      {/* صورة الخلفية */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center opacity-40"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?q=80&w=2000&auto=format&fit=crop')" }}
      ></div>

      {/* النافبار */}
      <nav className="relative z-10 w-full flex items-center justify-between p-4 border-b border-white/10 bg-black/50 backdrop-blur-md">
        <div className="flex items-center gap-3">
          {/* هنا حجم اللوجو ثابت وصغير عشان ميبوظش الشكل */}
          <div className="w-10 h-10 rounded-full overflow-hidden border border-red-600 bg-black flex-shrink-0">
            <img 
              src="/phoenix-logo.JPG" 
              alt="Logo" 
              className="w-full h-full object-cover" 
            />
          </div>
          <span className="text-lg font-bold text-red-600 tracking-widest">MOSAAD</span>
        </div>
      </nav>

      {/* المحتوى الرئيسي */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight drop-shadow-lg">
          MOSAAD <br />
          <span className="text-red-600">PHOENIX BIKES</span>
        </h1>
        
        <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
          أكبر مستورد للدراجات في مصر. الوكيل الرسمي لـ PHOENIX من الصين والهند. جودة عالمية وأسعار لا تقبل المنافسة.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto px-4">
          <button className="w-full sm:w-auto px-8 py-4 bg-red-600 text-white font-bold rounded-full hover:bg-red-700 transition shadow-[0_0_20px_rgba(220,38,38,0.5)]">
            تصفح الدراجات الآن
          </button>
          <button className="w-full sm:w-auto px-8 py-4 bg-black/50 backdrop-blur-md text-white font-bold rounded-full border border-white/30 hover:bg-white/10 transition">
            قطع الغيار والاسكوترات
          </button>
        </div>
      </div>

      {/* الفوتر */}
      <div className="relative z-10 w-full text-center text-gray-500 text-sm p-4 bg-black/50">
        &copy; 2024 MOSAAD Company - Official PHOENIX Importer
      </div>

    </main>
  );
}
