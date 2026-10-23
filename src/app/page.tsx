export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-8">
      
      {/* بدل اللوجو، حطينا اسم الشركة بخط فخم */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold tracking-[0.3em] text-red-600">MOSAAD</h2>
      </div>

      <h1 className="text-6xl md:text-8xl font-extrabold mb-6 text-center tracking-tighter">
        PHOENIX <br />
        <span className="text-red-600">BIKES</span>
      </h1>
      
      <p className="text-lg md:text-2xl text-gray-400 mb-12 text-center max-w-2xl">
        أكبر مستورد للدراجات في مصر. الوكيل الرسمي لـ PHOENIX من الصين والهند. جودة عالمية وأسعار لا تقبل المنافسة.
      </p>

      <div className="flex flex-col sm:flex-row gap-4">
        <button className="px-8 py-4 bg-red-600 text-white font-bold rounded-full hover:bg-red-700 transition">
          تصفح الدراجات الآن
        </button>
        <button className="px-8 py-4 border border-gray-600 text-white font-bold rounded-full hover:bg-gray-800 transition">
          قطع الغيار والاسكوترات
        </button>
      </div>

      <div className="absolute bottom-8 text-gray-600 text-sm">
        &copy; 2024 MOSAAD Company
      </div>

    </main>
  );
}
