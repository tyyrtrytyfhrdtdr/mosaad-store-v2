import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen relative flex flex-col items-center justify-center overflow-hidden">
      
      {/* صورة الخلفية السينمائية */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1541625602330-2277a4c46182?q=80&w=2000&auto=format&fit=crop"
          alt="Cycling Background"
          fill
          className="object-cover opacity-40"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
      </div>

      {/* المحتوى */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-20">
        <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight drop-shadow-2xl">
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

      {/* تذييل بسيط */}
      <div className="absolute bottom-8 w-full text-center text-neutral-500 text-sm z-10">
        &copy; 2024 MOSAAD Company - Official PHOENIX Importer in Egypt
      </div>
    </main>
  );
}
