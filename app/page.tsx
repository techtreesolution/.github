'use client';

import { useState, useEffect } from 'react';

export default function Home() {
  const [showHeader, setShowHeader] = useState(true);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setShowScrollTop(currentScrollY > 300);

      // Hiệu ứng ẩn hiện thanh điều hướng cực mượt
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setShowHeader(false);
      } else {
        setShowHeader(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const lifestyleModels = [
    { title: "Khí Chất", img: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=600&auto=format&fit=crop" },
    { title: "Tĩnh Tại", img: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=600&auto=format&fit=crop" },
    { title: "Giao Hòa", img: "https://images.unsplash.com/photo-1599643477874-c5a5c1158f1a?q=80&w=600&auto=format&fit=crop" },
    { title: "Đẳng Cấp", img: "https://images.unsplash.com/photo-1605100804763-247f67b254a4?q=80&w=600&auto=format&fit=crop" }
  ];

  return (
    <main className="min-h-screen bg-[#FAFAF7] text-stone-800 font-sans overflow-x-hidden selection:bg-[#00A86B]/20 selection:text-emerald-950">
      
      {/* 
        HỆ THỐNG CSS CHUYÊN SÂU (MOTION DESIGN):
        - kenBurns: Hiệu ứng zoom và lướt toàn cảnh chậm rãi
        - float1 & float2: Hiệu ứng trôi nổi đa chiều cho các layer đan xen
        - autoScroll: Băng chuyền chạy ngang vô tận
      */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes kenBurns {
          0% { transform: scale(1) translate(0, 0); }
          50% { transform: scale(1.12) translate(-1.5%, 1.5%); }
          100% { transform: scale(1) translate(0, 0); }
        }
        @keyframes float1 {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-25px) rotate(1.5deg); }
        }
        @keyframes float2 {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(20px) rotate(-1.5deg); }
        }
        @keyframes autoScroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-ken-burns { animation: kenBurns 30s ease-in-out infinite; }
        .animate-float-1 { animation: float1 10s ease-in-out infinite; }
        .animate-float-2 { animation: float2 12s ease-in-out infinite; }
        .scroll-track {
          display: flex;
          width: max-content;
          animation: autoScroll 40s linear infinite; 
          pointer-events: none;
        }
      `}} />

      {/* 1. HEADER BO TRÒN LƠ LỬNG */}
      <header className={`fixed left-0 w-full z-50 flex justify-center px-4 transition-all duration-700 ease-in-out ${showHeader ? 'top-6 translate-y-0 opacity-100' : 'top-0 -translate-y-full opacity-0'}`}>
        <div className="w-full max-w-6xl flex justify-between items-center bg-white/70 backdrop-blur-lg border border-white/50 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.05)] rounded-full py-4 px-8 md:px-12">
          <div className="text-2xl tracking-[0.2em] text-emerald-950 font-serif font-bold uppercase drop-shadow-sm">
            Thiên Ngọc
          </div>
          <nav className="hidden md:flex space-x-10 text-[12px] tracking-[0.15em] text-stone-600 uppercase font-medium">
            <a href="#" className="hover:text-[#00A86B] transition-colors duration-300">Bộ Sưu Tập</a>
            <a href="#" className="hover:text-[#00A86B] transition-colors duration-300">Nghệ Nhân</a>
            <a href="#" className="text-[#00A86B]">Cố Vấn Bát Tự</a>
          </nav>
          <div className="flex gap-4 items-center">
            <button className="text-[12px] tracking-widest uppercase border border-stone-300 text-stone-700 px-6 py-2 rounded-full hover:border-[#00A86B] hover:text-[#00A86B] transition-all duration-300">
              Tài khoản
            </button>
          </div>
        </div>
      </header>

      {/* 2. HERO SECTION - ĐỈNH CAO CHỒNG LAYER & HIỆU ỨNG (LIGHT THEME) */}
      <section className="relative w-full h-[110vh] overflow-hidden flex items-center bg-[#FAFAF7]">
        {/* Layer Ánh sáng mờ ảo làm nền */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute -top-[10%] right-[10%] w-[40vw] h-[40vw] bg-emerald-100/40 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-[20%] left-[5%] w-[30vw] h-[30vw] bg-amber-50/60 rounded-full blur-[100px]"></div>
        </div>

        <div className="max-w-[1400px] mx-auto px-6 md:px-12 w-full grid md:grid-cols-12 gap-8 relative z-10 items-center">
          
          {/* CỘT TRÁI: TEXT MỜI GỌI */}
          <div className="col-span-12 md:col-span-5 flex flex-col justify-center animate-fade-in-up mt-20 md:mt-0 z-20">
            <div className="flex items-center gap-4 mb-6">
              <span className="w-16 h-[1px] bg-[#00A86B]"></span>
              <span className="text-[#00A86B] text-xs tracking-[0.3em] uppercase font-semibold">TINH HOA TỪ ĐẤT MẸ</span>
            </div>
            
            <h1 className="text-6xl md:text-[5.5rem] leading-[1.05] font-serif text-stone-900 mb-8">
              Tuyệt Tác <br/>
              <span className="italic font-light text-[#00A86B]">Ngọc Phỉ Thúy</span> <br/>
              Độc Bản
            </h1>
            
            <p className="text-stone-500 text-lg font-light leading-relaxed mb-12 max-w-md">
              Mỗi khối ngọc mang một sinh mệnh riêng. Hãy bắt đầu hành trình tìm kiếm sự tĩnh tại và vượng khí được chạm khắc dành riêng cho bạn.
            </p>
            
            <div>
              <button className="bg-transparent border border-stone-800 text-stone-800 px-10 py-4 rounded-full text-xs uppercase tracking-widest hover:bg-[#00A86B] hover:border-[#00A86B] hover:text-white transition-all duration-500 shadow-sm">
                Khám Phá Hành Trình
              </button>
            </div>
          </div>

          {/* CỘT PHẢI: KHỐI NGHỆ THUẬT ĐAN XEN LAYER (LƯỚT & ZOOM) */}
          <div className="col-span-12 md:col-span-7 relative h-[70vh] md:h-[90vh] w-full hidden md:block">
            
            {/* LAYER 1 (Dưới cùng): Khối Vòm khổng lồ với hiệu ứng Ken Burns (Zoom/Lướt) */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[75%] h-[95%] rounded-t-full rounded-b-[4rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.08)] border border-white z-10">
              <img 
                src="https://images.unsplash.com/photo-1618367588411-d9a90fefa881?q=80&w=1200&auto=format&fit=crop" 
                alt="Chất Ngọc" 
                className="w-full h-full object-cover animate-ken-burns transform-gpu"
              />
            </div>
            
            {/* LAYER 2 (Giữa): Khối Tròn trôi nổi */}
            <div className="absolute left-[2%] bottom-[15%] w-[45%] aspect-square rounded-full overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.15)] border-[10px] border-white z-20 animate-float-1">
              <img 
                src="https://images.unsplash.com/photo-1599643477874-c5a5c1158f1a?q=80&w=800&auto=format&fit=crop" 
                alt="Người mang ngọc" 
                className="w-full h-full object-cover scale-110"
              />
            </div>
            
            {/* LAYER 3 (Trên cùng): Thẻ Glassmorphism lơ lửng */}
            <div className="absolute top-[20%] left-[8%] bg-white/70 backdrop-blur-xl border border-white p-6 rounded-3xl shadow-[0_20px_40px_rgba(0,168,107,0.1)] z-30 w-[260px] animate-float-2">
              <p className="text-[#00A86B] text-[10px] tracking-[0.2em] uppercase mb-3 font-semibold">Giá Trị Cốt Lõi</p>
              <p className="text-stone-700 text-sm font-serif leading-relaxed italic">Cam kết ngọc Type A tự nhiên, bảo chứng bằng chứng thư quốc tế độc lập.</p>
            </div>

          </div>
        </div>
      </section>

      {/* 3. PARALLAX TRANSITION - HIỆU ỨNG ZOOM OUT MỞ RA KHÔNG GIAN MỚI */}
      <section className="relative w-full h-[80vh] flex items-center justify-center bg-fixed bg-center bg-cover" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=2000&auto=format&fit=crop')" }}>
        <div className="absolute inset-0 bg-[#022c22]/85 mix-blend-multiply"></div>
        <div className="relative z-10 text-center px-4 max-w-4xl animate-float-1">
          <p className="text-emerald-300/80 text-xs tracking-[0.5em] uppercase mb-6">Chuyển Hóa Không Gian</p>
          <h2 className="text-4xl md:text-6xl font-serif text-white leading-tight font-light">
            Vạn Vật Đều Mang <br/> <span className="italic text-[#00A86B]">Một Sinh Mệnh</span>
          </h2>
        </div>
      </section>

      {/* 4. LIFESTYLE - BĂNG CHUYỀN CHẠY LIÊN TỤC */}
      <section className="relative z-10 pt-32 pb-16 overflow-hidden bg-[#FAFAF7]">
        <div className="text-center mb-16 px-4">
          <h2 className="text-4xl font-serif text-emerald-950 mb-4">Khoảnh Khắc Đời Thường</h2>
          <p className="text-stone-500 tracking-widest uppercase text-sm">Vẻ đẹp giao hòa cùng Ngọc</p>
        </div>

        <div className="scroll-track gap-8 px-4 mb-16">
          {[...lifestyleModels, ...lifestyleModels, ...lifestyleModels].map((item, index) => (
            <div key={index} className="relative w-[300px] md:w-[400px] aspect-[4/5] rounded-[2.5rem] overflow-hidden flex-shrink-0 shadow-lg border border-stone-100">
              <img 
                src={item.img} 
                alt={item.title} 
                className="w-full h-full object-cover scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900/70 via-transparent to-transparent opacity-80"></div>
              <div className="absolute bottom-8 left-8 text-white">
                <h3 className="text-2xl font-serif">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <button className="border-b border-stone-400 text-stone-600 pb-1 text-xs tracking-[0.2em] uppercase hover:text-[#00A86B] hover:border-[#00A86B] transition-colors">
            Khám Phá Góc Nhìn Nghệ Thuật
          </button>
        </div>
      </section>

      {/* 5. BST NGỌC TIÊU BIỂU - THIẾT KẾ MÁI VÒM TRÊN NỀN SÁNG */}
      <section className="py-24 px-6 max-w-7xl mx-auto relative z-10 bg-[#FAFAF7]">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-serif text-emerald-950 mb-4">Tuyệt Phẩm Phỉ Thúy</h2>
          <div className="flex justify-center items-center gap-4">
            <span className="w-16 h-[1px] bg-stone-300"></span>
            <p className="text-stone-400 tracking-[0.2em] uppercase text-xs">Dấu Ấn Độc Bản</p>
            <span className="w-16 h-[1px] bg-stone-300"></span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {[
            { name: "Vòng Bản Hẹ Lý Tử", img: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=800&auto=format&fit=crop" },
            { name: "Mặt Phật Bà Quan Âm", img: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=800&auto=format&fit=crop" },
            { name: "Nhẫn Nam Lục Bảo", img: "https://images.unsplash.com/photo-1605100804763-247f67b254a4?q=80&w=800&auto=format&fit=crop" },
          ].map((item, index) => (
            <div key={index} className="flex flex-col items-center group cursor-pointer">
              <div className="relative w-full aspect-[3/4] overflow-hidden mb-8 rounded-t-full rounded-b-[2rem] bg-white shadow-xl border border-stone-100 p-3">
                <div className="w-full h-full rounded-t-full rounded-b-[1.5rem] overflow-hidden relative">
                  <img 
                    src={item.img} 
                    alt={item.name} 
                    className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-[1500ms] ease-out"
                  />
                  <div className="absolute inset-0 bg-[#00A86B]/0 group-hover:bg-[#00A86B]/20 transition-colors duration-700"></div>
                </div>
              </div>
              
              <div className="text-center overflow-hidden">
                <h3 className="text-xl font-serif text-stone-800 mb-2 group-hover:text-[#00A86B] transition-colors duration-500">{item.name}</h3>
                <p className="text-stone-400 text-xs tracking-[0.2em] uppercase mt-3 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100">Chi tiết tác phẩm</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. TƯ VẤN PHONG THỦY - TÔNG MÀU XANH LỤC BẢO SÂU THẲM (DEEP JADE) */}
      <section className="py-24 px-6 md:px-12 max-w-[1400px] mx-auto relative z-10">
        {/* Khối nền này dùng mã màu #022c22 (Rất tối và sang, không phải đen thuần) */}
        <div className="bg-[#022c22] rounded-[4rem] p-10 md:p-16 relative overflow-hidden shadow-2xl flex flex-col md:flex-row items-center gap-12">
          
          <div className="w-full md:w-1/2 relative z-10 pr-0 md:pr-10">
            <p className="text-[#00A86B] text-xs tracking-[0.3em] uppercase mb-4">Cố Vấn Mệnh Lý</p>
            <h2 className="text-4xl md:text-5xl font-serif text-white mb-6 leading-snug font-light">
              Ngọc dưỡng người <br/> 
              <span className="italic text-emerald-200">Người dưỡng ngọc</span>
            </h2>
            <p className="text-emerald-50/60 text-base mb-10 leading-relaxed font-light">
              Khoa học Bát Tự kết hợp cùng Năng lượng tự nhiên. Hãy để TechTreeSolution tìm ra phiến ngọc tương sinh rực rỡ nhất cho bản mệnh của bạn.
            </p>
            
            <div className="bg-white/5 p-2 rounded-full border border-emerald-700/50 backdrop-blur-md flex shadow-inner focus-within:border-[#00A86B] transition-colors">
              <input 
                type="text" 
                placeholder="Nhập năm sinh (VD: 1994)" 
                className="flex-1 bg-transparent px-6 py-3 text-white placeholder:text-emerald-200/40 focus:outline-none text-sm"
              />
              <button className="bg-[#00A86B] text-white px-8 py-3 rounded-full text-xs uppercase tracking-widest hover:bg-emerald-400 shadow-[0_0_20px_rgba(0,168,107,0.4)] transition-all">
                Nhận Tư Vấn
              </button>
            </div>
          </div>

          <div className="w-full md:w-1/2 relative z-10 flex justify-center">
            <div className="w-64 h-64 md:w-[450px] md:h-[450px] rounded-full overflow-hidden border-8 border-white/5 shadow-[0_0_80px_rgba(0,168,107,0.15)] animate-float-1">
              <img 
                src="https://images.unsplash.com/photo-1599643477874-c5a5c1158f1a?q=80&w=800&auto=format&fit=crop" 
                alt="Phong thủy ngọc" 
                className="object-cover w-full h-full mix-blend-overlay opacity-90 scale-110"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 7. FOOTER */}
      <footer className="bg-stone-900 text-stone-400 pt-20 pb-10 px-8 rounded-t-[3rem] mx-2 mb-2 relative z-10">
        <div className="max-w-[1400px] mx-auto grid md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <div className="text-3xl tracking-[0.2em] text-white font-serif font-bold uppercase mb-6 drop-shadow-md">
              Thiên Ngọc
            </div>
            <p className="max-w-sm text-sm leading-relaxed mb-8 font-light">
              Bảo chứng chất lượng ngọc Phỉ Thúy thiên nhiên Type A. Kết hợp tinh hoa nghệ thuật chế tác và khoa học Phong Thủy để mang đến sự thịnh vượng bền vững.
            </p>
            <div className="text-xs tracking-wider uppercase text-stone-500">
              Được phát triển và tư vấn bởi <br/>
              <strong className="text-[#00A86B] text-sm mt-2 inline-block tracking-[0.1em]">TechTreeSolution</strong>
            </div>
          </div>
          
          <div>
            <h4 className="text-white text-xs uppercase tracking-widest mb-6 font-semibold">Dịch Vụ</h4>
            <ul className="space-y-4 text-sm font-light">
              <li><a href="#" className="hover:text-[#00A86B] transition-colors">Kiểm Định Kỷ Vật</a></li>
              <li><a href="#" className="hover:text-[#00A86B] transition-colors">Tư Vấn Mệnh Lý</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white text-xs uppercase tracking-widest mb-6 font-semibold">Liên Hệ</h4>
            <ul className="space-y-4 text-sm font-light">
              <li>Hà Nội, Việt Nam</li>
              <li>(084) 123-456-789</li>
              <li><a href="mailto:ducanh.pf@gmail.com" className="hover:text-[#00A86B] transition-colors">ducanh.pf@gmail.com</a></li>
            </ul>
          </div>
        </div>
      </footer>

      {/* 8. NÚT CUỘN LÊN */}
      <button 
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 bg-[#00A86B] text-white p-4 rounded-full shadow-2xl transition-all duration-700 hover:bg-emerald-600 hover:-translate-y-2 z-50 ${
          showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
        }`}
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 10.5L12 3m0 0l7.5 7.5M12 3v18" />
        </svg>
      </button>

    </main>
  );
}