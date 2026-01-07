import React, { useState, useEffect } from 'react';
import { 
  ArrowUpRight, 
  X, 
  Skull, 
  Sprout, 
  Film, 
  Trophy, 
  Dices, 
  Plus, 
  Activity, 
  Check, 
  Copy, 
  Command 
} from 'lucide-react';
import { GrainOverlay } from './components/GrainOverlay';
import { Role, Idea, ManifestoItem } from './types';

const App: React.FC = () => {
  const [time, setTime] = useState(new Date());
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const copyEmail = () => {
    navigator.clipboard.writeText('baishanmu@outlook.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const roles: Role[] = [
    { cn: "画家", en: "PAINTER" }, { cn: "录音师", en: "SOUND ENG" }, { cn: "导演", en: "DIRECTOR" },
    { cn: "设计师", en: "DESIGNER" }, { cn: "建筑师", en: "ARCHITECT" }, { cn: "美术老师", en: "ART TEACHER" },
    { cn: "游戏开发", en: "GAME DEV" }, { cn: "摄影师", en: "PHOTOGRAPHER" }, { cn: "策展人", en: "CURATOR" },
    { cn: "码农", en: "CODER" }, { cn: "诗人", en: "POET" }, { cn: "小说家", en: "NOVELIST" },
    { cn: "音乐人", en: "MUSICIAN" }, { cn: "黑客", en: "HACKER" }, { cn: "哲学家", en: "PHILOSOPHER" },
    { cn: "舞者", en: "DANCER" }, { cn: "雕塑家", en: "SCULPTOR" }, { cn: "制片人", en: "PRODUCER" },
    { cn: "视觉同化", en: "VJ" }, { cn: "故障艺术家", en: "GLITCH ARTIST" }, { cn: "漫游者", en: "FLANEUR" }
  ];

  const ideas: Idea[] = [
    {
      title: "废稿葬礼",
      content: "我想要找个废弃工厂或天台，架起投影仪，然后大家轮流展示那些半途而废的作品。我们一起为这些夭折的灵感举杯默哀。",
      author: "责辑 陈小猫",
      icon: <Skull strokeWidth={1.5} size={64} />
    },
    {
      title: "春游",
      content: "明年春天我们可以一起出去采风嘛，到时候我们可以一起搞个展，就像小时候春游写作文一样。",
      author: "学生 巴克斯",
      icon: <Sprout strokeWidth={1.5} size={64} />
    },
    {
      title: "烂片放映室",
      content: "我寻思整点豆瓣烂片，然后找个地方放映，然后看谁先拿手机出来就罚酒。",
      author: "导演 大毛",
      icon: <Film strokeWidth={1.5} size={64} />
    },
    {
      title: "奇葩\n鉴赏大赛",
      content: "我想把我这一年遇到的傻福全一个不落分享出来，选个年度最佳，完事儿我给他打个奖杯快递寄过去。",
      author: "销售 不愿意透露姓名的陈星旺先生",
      icon: <Trophy strokeWidth={1.5} size={64} />
    },
    {
      title: "玩桌游",
      content: "玩桌游，一直玩一直玩，然后玩桌游",
      author: "正考级干部 Lux",
      icon: <Dices strokeWidth={1.5} size={64} />
    },
    {
      title: "TO BE\nCONTINUED",
      content: "你有更疯的想法吗？",
      author: "WAITING...",
      icon: null,
      isSpecial: true
    }
  ];

  const manifestoItems: ManifestoItem[] = [
    { id: "01", title: "NOT ACADEMIC / 不是学院派", desc: "虽然我们中的大多数人来自形形色色的学院，但在现代文明的构建下，曾经的殿堂已逐渐沦为学阀统治的庄园。我们的目的是逃离学院，打破围墙，让每个人享受艺术。", meta: "SYS_ESCAPE_01" },
    { id: "02", title: "NOT COMMERCIAL / 不是商业行为", desc: "我们拒绝通过运营一个艺术家社群来谋取任何私利。如果我们的行为产生了资金流水，我们承诺：每一笔支出 and 收入都将绝对透明，没有任何暗箱操作的空间。", meta: "TRANS_ZERO_HIDDEN" },
    { id: "03", title: "NOT SPECTACLE / 不是“景观”", desc: "我们拒绝成为被审视、被消费的社会奇观。我们仍然试图用才华与汗水去撼动这个沉闷的世界，并固执地相信：艺术依然拥有改变世界的力量。", meta: "V_SOCIETY_SPECTACLE" }
  ];

  return (
    <div className={`min-h-screen text-black font-sans selection:bg-black selection:text-white overflow-x-hidden relative ${isModalOpen ? 'h-screen overflow-hidden' : ''}`}>
      <GrainOverlay />
      
      {/* JOIN MODAL */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-black/90 backdrop-blur-sm transition-opacity animate-in fade-in duration-300" 
            onClick={() => setIsModalOpen(false)} 
          />
          <div className="relative bg-white border-4 md:border-8 border-black w-full max-w-2xl p-6 md:p-16 shadow-[10px_10px_0px_0px_rgba(255,255,255,0.3)] md:shadow-[20px_20px_0px_0px_rgba(255,255,255,0.3)] animate-in zoom-in-95 duration-200 overflow-y-auto max-h-[90vh]">
            <button 
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 p-2 hover:bg-black hover:text-white transition-colors border-2 border-black"
            >
              <X size={24} />
            </button>
            <div className="absolute top-0 left-0 bg-black text-white px-2 py-1 font-mono text-[10px] uppercase">JOIN_PROTOCOL_ACTIVE</div>
            <div className="flex flex-col gap-6 md:gap-8 mt-4 md:mt-0">
              <h2 className="text-3xl md:text-5xl font-black uppercase leading-[0.9] tracking-tighter">欢迎加入<br/>荒原学派</h2>
              <div className="border-l-4 md:border-l-8 border-black pl-4 md:pl-10">
                <p className="text-base md:text-xl font-bold leading-relaxed mb-6 md:mb-8">
                  请将您的联系方式和作品发送至此邮箱，我们将在审核通过后书面通知您。
                </p>
                <div className="group relative">
                  <p className="font-mono text-xs md:text-sm uppercase text-gray-400 mb-2">Primary Contact / 官方邮箱</p>
                  <div className="flex flex-col gap-4">
                    <a href="mailto:baishanmu@outlook.com" className="text-xl md:text-4xl font-black tracking-tight break-all hover:underline decoration-4">baishanmu@outlook.com</a>
                    <button onClick={copyEmail} className="flex items-center justify-center md:justify-start gap-2 bg-black text-white px-4 py-2 text-xs font-mono uppercase hover:bg-gray-800 transition-colors w-full md:w-auto">
                      {copied ? <Check size={14} /> : <Copy size={14} />}
                      {copied ? 'Copied' : 'Copy Email'}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* GLOBAL HUD */}
      <div className="hidden md:block fixed top-0 left-0 w-full h-full pointer-events-none z-[60] border-[16px] border-transparent">
        <div className="absolute top-0 left-0 p-4 font-mono text-[10px] opacity-30 uppercase">System_Active</div>
        <div className="absolute top-0 right-0 p-4 font-mono text-[10px] opacity-30 uppercase">Precision_Mapping</div>
        <div className="absolute bottom-0 left-0 p-4 font-mono text-[10px] opacity-30 uppercase">Coordinates: 30.27 / 120.15</div>
        <div className="absolute bottom-0 right-0 p-4 font-mono text-[10px] opacity-30 uppercase">Arcadia_Ghost_v1.2</div>
      </div>
      
      <div className="fixed top-0 left-0 w-full bg-black text-white z-50 border-b-2 border-white p-1 overflow-hidden whitespace-nowrap">
        <div className="animate-marquee inline-block font-mono text-[10px] md:text-xs tracking-[0.2em] uppercase">
          WARNING: REALITY COMPROMISED /// 警告：现实已受损 /// WELCOME TO THE DESERT OF THE REAL /// 欢迎来到实在界这个大荒原 /// NO IMAGES ALLOWED /// 纯粹文本主义 ///
        </div>
      </div>

      <header className="relative min-h-screen border-b-8 border-black flex flex-col pt-8 md:pt-12 bg-white">
        <div className="absolute inset-0 opacity-10 pointer-events-none blueprint-grid"></div>

        <div className="flex-grow flex flex-col justify-between relative z-10 px-4 md:px-8 pb-8">
          <div className="border-4 md:border-8 border-black bg-white p-4 md:p-12 mt-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] md:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] relative overflow-hidden group">
             <div className="hidden md:block absolute -right-20 -top-20 text-[20vw] font-black stroke-text select-none group-hover:opacity-20 transition-opacity">ARCADIA</div>
             <div className="flex flex-col md:flex-row justify-between items-start md:items-end border-b-4 border-black pb-4 mb-4 relative z-10">
                <h1 className="text-[11vw] md:text-[6vw] leading-[1.0] font-black tracking-tighter uppercase break-all font-sans mb-4 md:mb-0">自由开放的<br className="md:hidden"/>艺术交流社群</h1>
                <div className="font-mono text-[10px] md:text-sm text-right md:mb-4 bg-black text-white p-2 min-w-max">VOL. 1.2<br/>EST. 2026<br/>TYPE: MANIFESTO</div>
             </div>
             <div className="flex flex-col md:flex-row gap-4 md:gap-8 items-start relative z-10">
               <h2 className="text-xl md:text-5xl font-black bg-black text-white px-3 py-1 md:px-4 md:py-2 inline-block transform -rotate-1 font-sans">欢迎来到“荒原学派”</h2>
               <div className="border-l-4 border-black pl-4 flex-grow"><p className="font-mono text-[10px] md:text-sm uppercase tracking-widest text-gray-400">SYSTEM STATUS: <span className="text-black font-bold">OPERATIONAL</span><br/>CLEARANCE: <span className="text-black font-bold">ARTIST_ONLY</span></p></div>
             </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 my-8 font-mono uppercase">
             {/* SURVIVAL MODE CARD - UPDATED */}
             <div className="border-4 border-black p-6 flex flex-col bg-black text-white hover:bg-white hover:text-black transition-all duration-300 group relative overflow-hidden min-h-[200px] md:min-h-[180px]">
                {/* Header */}
                <div className="flex justify-between items-start z-10 w-full">
                   <div className="text-[10px] font-black border-2 border-current px-1.5 py-0.5 tracking-tight">NODE: 0x4F92</div>
                   <div className="flex items-center gap-2">
                      <span className="text-[9px] font-black opacity-80 animate-pulse">REC</span>
                      <span className="w-2 h-2 bg-red-600 rounded-full animate-pulse shadow-[0_0_8px_rgba(220,38,38,0.8)]"></span>
                   </div>
                </div>
                
                {/* Content */}
                <div className="z-10 flex-grow flex flex-col justify-center py-4">
                   <h3 className="text-3xl md:text-4xl lg:text-3xl xl:text-4xl font-black leading-[0.85] tracking-tighter uppercase break-words">SURVIVAL<br/>MODE</h3>
                   
                   {/* Audio Visualizer Effect */}
                   <div className="flex items-end gap-[3px] h-6 mt-4 opacity-70">
                      {[...Array(8)].map((_, i) => (
                        <div key={i} className="w-1.5 bg-current origin-bottom" style={{
                            animation: `equalizer ${0.4 + Math.random() * 0.4}s ease-in-out infinite alternate`,
                            animationDelay: `${i * 0.1}s`,
                        }}></div>
                      ))}
                      <div className="ml-auto text-[8px] font-mono leading-tight text-right opacity-80">
                         CPU: 98%<br/>
                         MEM: 40%
                      </div>
                   </div>
                </div>

                {/* Footer */}
                <div className="flex items-center gap-3 z-10 mt-auto pt-4">
                   <div className="h-[2px] flex-grow bg-current/30 relative overflow-hidden">
                      <div className="absolute inset-0 bg-current w-1/2 animate-[marquee_2s_linear_infinite]"></div>
                   </div>
                   <div className="flex items-center gap-2 shrink-0">
                      <div className="text-[9px] font-black tracking-tighter">UPTIME: {time.toLocaleTimeString()}</div>
                      <Activity size={14} strokeWidth={3} />
                   </div>
                </div>
             </div>
             
             {/* HANGZHOU CARD - UPDATED */}
             <div className="border-4 border-black p-0 flex flex-col bg-white text-black hover:bg-black hover:text-white transition-all duration-300 group relative overflow-hidden min-h-[200px] md:min-h-[180px]">
                {/* Rotating Radar & Crosshair System */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20 group-hover:opacity-40 transition-opacity overflow-hidden">
                   <div className="absolute w-full h-[1px] bg-current"></div>
                   <div className="absolute h-full w-[1px] bg-current"></div>
                   
                   {/* Animated Rings */}
                   <div className="w-[150%] h-[150%] border-[1px] border-dashed border-current rounded-full animate-spin-slow absolute opacity-30"></div>
                   <div className="w-32 h-32 border-[1px] border-current rounded-full absolute animate-[spin_8s_linear_infinite_reverse] border-t-transparent border-l-transparent"></div>
                   <div className="w-20 h-20 border-[1px] border-current rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-current rounded-full animate-ping"></div>
                   </div>
                </div>

                {/* Corner Markers */}
                <div className="absolute top-2 left-2 w-2 h-2 border-t-2 border-l-2 border-current"></div>
                <div className="absolute top-2 right-2 w-2 h-2 border-t-2 border-r-2 border-current"></div>
                <div className="absolute bottom-2 left-2 w-2 h-2 border-b-2 border-l-2 border-current"></div>
                <div className="absolute bottom-2 right-2 w-2 h-2 border-b-2 border-r-2 border-current"></div>

                <div className="p-6 w-full flex flex-col relative z-10 justify-between flex-grow">
                   <div className="flex justify-between items-start">
                      <span className="text-[10px] font-black border-2 border-current px-2 py-0.5 bg-current text-white group-hover:bg-white group-hover:text-black transition-colors">ZONE_0571</span>
                      <div className="text-[10px] font-black text-right leading-none tracking-tight">
                         30.27° N<br/>120.15° E
                      </div>
                   </div>
                   
                   <div className="my-auto">
                      <h3 className="text-4xl md:text-5xl lg:text-4xl xl:text-5xl font-black leading-none tracking-tighter break-all">HANGZHOU</h3>
                   </div>

                   <div className="flex items-center justify-between border-t-2 border-current pt-2 mt-2">
                      <div className="text-[8px] font-mono opacity-80">
                         HUMIDITY: 85%<br/>VISIBILITY: LOW
                      </div>
                      <span className="text-[10px] font-black whitespace-nowrap tracking-widest uppercase">DIGITAL_VOID</span>
                   </div>
                </div>
             </div>

             <div className="border-4 border-black min-h-[260px] md:min-h-[300px] md:col-span-2 lg:col-span-2 relative overflow-hidden bg-white isolate group">
                <div className="absolute top-2 left-2 bg-black text-white px-1 text-[8px] md:text-[10px] z-20 font-mono uppercase">ROLES_DATABASE_LOADED...</div>
                <div className="absolute inset-0 w-full h-full overflow-hidden">
                  <div className="animate-credits w-full">
                    {[0, 1].map((iteration) => (
                       <div key={iteration} className="grid grid-cols-2 md:grid-cols-3 gap-y-8 gap-x-2 p-6 pt-8 pb-6 border-b-2 border-dashed border-gray-300">
                         {roles.map((role, i) => (
                           <div key={`${iteration}-${i}`} className="flex flex-col justify-center items-start border-l-2 border-black pl-3 hover:bg-black hover:text-white transition-colors duration-100 cursor-default select-none py-1 group">
                             <span className="font-black text-xl md:text-3xl leading-none tracking-tight font-sans">{role.cn}</span>
                             <span className="font-mono text-[8px] md:text-[10px] opacity-60 mt-1 uppercase">{role.en}</span>
                           </div>
                         ))}
                       </div>
                    ))}
                  </div>
                </div>
                <div className="absolute top-0 left-0 w-full h-12 bg-gradient-to-b from-white to-transparent z-10 pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-white to-transparent z-10 pointer-events-none"></div>
             </div>
          </div>

          <div className="border-4 border-black bg-white p-4 md:p-8 flex items-center justify-between group cursor-help relative overflow-hidden">
             <div className="absolute inset-0 blueprint-grid opacity-5 group-hover:opacity-20 transition-opacity"></div>
             <h3 className="text-2xl md:text-5xl font-black uppercase tracking-tight group-hover:tracking-widest transition-all duration-500 font-sans relative z-10">THE WASTELAND SCHOOL</h3>
             <ArrowUpRight size={32} className="border-2 border-black rounded-full p-1 md:p-2 md:w-12 md:h-12 group-hover:rotate-45 transition-transform bg-black text-white relative z-10" />
          </div>
        </div>
      </header>

      <main className="flex flex-col">
        {/* SECTION 01: DEFINITION */}
        <section className="border-b-8 border-black bg-white grid grid-cols-1 md:grid-cols-12 min-h-screen relative overflow-hidden">
           <div className="absolute inset-0 blueprint-grid opacity-[0.05] pointer-events-none"></div>
           
           <div className="md:col-span-5 p-8 md:p-12 border-b-8 md:border-b-0 md:border-r-8 border-black flex flex-col justify-center bg-[#f7f7f7] hover:bg-black hover:text-white transition-colors duration-500 group relative overflow-hidden">
              <div className="sticky top-20">
                <h2 className="hidden md:block text-[12vw] font-black stroke-text opacity-10 absolute -top-20 -left-10 select-none group-hover:text-white group-hover:opacity-20 transition-all duration-700">WHO</h2>
                <h3 className="text-3xl md:text-5xl font-black uppercase mb-6 md:mb-8 relative z-10 font-sans">01. 什么是荒原学派<br/><span className="text-xl md:text-2xl font-mono font-normal opacity-50">WHAT IS ARCADIA</span></h3>
                <div className="prose prose-lg font-bold leading-relaxed text-justify border-l-4 border-black group-hover:border-white transition-colors pl-4 md:pl-6 font-sans">
                  <p className="mb-6 text-[clamp(1rem,3.5vw,1.3rem)] md:text-[clamp(1.1rem,1.8vw,1.5rem)] leading-[1.4]">荒原学派（Arcadia）是一个由青年艺术家们自发联合起来的流窜团伙，我们始终秉持“自由互助”的运营理念。</p>
                  <p className="mb-6 text-[clamp(1rem,3.5vw,1.3rem)] md:text-[clamp(1.1rem,1.8vw,1.5rem)] leading-[1.4]">任何对艺术或哲学感兴趣的成年人类都可以自由加入或退出我们的社群（暂不对尼安德特人与硅基生命开放）。</p>
                  <div className="bg-black text-white group-hover:bg-white group-hover:text-black transition-colors p-2 px-4 inline-block transform -rotate-1 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)] text-[clamp(1rem,4vw,1.2rem)] md:text-xl">
                    我们的核心只有一个：去伪存真。
                  </div>
                </div>
              </div>
           </div>

           <div className="md:col-span-7 flex flex-col bg-white">
              {manifestoItems.map((not, idx) => (
                <div key={idx} className={`flex-1 p-8 md:p-16 ${idx !== 2 ? 'border-b-4 border-black' : ''} hover:bg-black hover:text-white transition-all duration-500 group relative overflow-hidden cursor-default`}>
                   <div className="flex justify-between items-start mb-6 relative z-10">
                      <div className="flex flex-col">
                        <span className="font-mono text-[8px] md:text-[10px] mb-2 opacity-50 uppercase tracking-widest">{not.meta}</span>
                        <h4 className="text-2xl md:text-5xl font-black uppercase font-sans flex items-center gap-4">
                           <span className="text-xs md:text-sm font-mono border-2 border-current px-2 py-0.5 rounded-full">{not.id}</span> 
                           {not.title}
                        </h4>
                      </div>
                      <Plus className="group-hover:rotate-45 transition-transform duration-500 opacity-20 group-hover:opacity-100" size={24} />
                   </div>
                   <div className="max-w-2xl relative z-10">
                     <p className="font-sans font-medium text-sm md:text-xl opacity-70 group-hover:opacity-100 pl-6 md:pl-10 border-l-4 border-current leading-relaxed transition-opacity">
                       {not.desc}
                     </p>
                   </div>
                </div>
              ))}
           </div>
        </section>

        {/* SECTION 02: IDEAS */}
        <section className="border-b-8 border-black bg-[#e6e6e6]">
          <div className="p-8 md:p-16">
             <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 md:mb-12 pb-4 border-b-8 border-black relative">
                <h3 className="text-4xl md:text-7xl font-black uppercase font-sans relative z-10 leading-tight">2026年我们将要做<br className="md:hidden" />的疯狂小事</h3>
                <span className="block text-sm md:text-3xl font-mono text-gray-400 mt-4 md:mt-0 text-right uppercase relative z-10 flex items-center gap-2 group">
                  <Command className="animate-spin-slow opacity-20 group-hover:opacity-100" size={24} /> PENDING_CHAOS
                </span>
             </div>

             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-4 border-black bg-black gap-[4px] shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] md:shadow-[20px_20px_0px_0px_rgba(0,0,0,0.1)]">
                {ideas.map((idea, index) => (
                    <div key={index} className={`relative p-8 md:p-12 flex flex-col justify-between min-h-[300px] md:min-h-[480px] transition-all duration-500 group overflow-hidden ${idea.isSpecial ? 'bg-black text-white' : 'bg-white hover:bg-black hover:text-white text-black'}`}>
                       <div className="absolute top-0 left-0 p-4 font-mono text-[8px] opacity-20 uppercase">SEC_03_ITEM_0{index+1}</div>
                       {idea.isSpecial && <div className="absolute inset-0 pointer-events-none stripes-bg-overlay opacity-80 group-hover:opacity-100 transition-all duration-700"></div>}
                       <div className="flex justify-between items-start mb-8 relative z-10">
                          {idea.icon && <div className="group-hover:scale-110 group-hover:-rotate-12 transition-transform duration-700 scale-75 md:scale-100">{idea.icon}</div>}
                          {!idea.isSpecial && <div className="border-2 border-current px-3 py-1 font-mono text-xs md:text-sm font-black uppercase">NO.0{index + 1}</div>}
                       </div>
                       <div className="flex-grow relative z-10">
                          <h4 className="text-3xl md:text-6xl font-black mb-4 md:mb-6 leading-[0.9] tracking-tight font-sans whitespace-pre-line group-hover:translate-x-2 transition-transform duration-500">{idea.title}</h4>
                          <p className={`text-sm md:text-base font-bold leading-relaxed max-w-sm font-sans ${idea.isSpecial ? 'text-gray-400' : 'opacity-70 group-hover:opacity-100'}`}>{idea.content}</p>
                       </div>
                       {!idea.isSpecial && <div className="mt-8 pt-4 border-t border-current border-opacity-10 relative z-10 flex justify-between items-center"><span className="font-mono text-[10px] uppercase font-bold opacity-60 group-hover:opacity-100">{idea.author}</span></div>}
                    </div>
                ))}
             </div>
          </div>
        </section>

        {/* RECRUITMENT SECTION */}
        <section className="bg-black text-white min-h-[60vh] md:min-h-[70vh] flex flex-col justify-center items-center p-8 md:p-32 border-b-8 border-white relative overflow-hidden group">
            <div className="absolute inset-0 stripes-bg-overlay opacity-10 group-hover:opacity-20 transition-opacity"></div>
            <div className="relative z-10 flex flex-col items-center max-w-5xl w-full">
              <h2 className="text-[12vw] font-black uppercase text-center leading-none mb-8 md:mb-12 font-sans tracking-tighter">WELCOME HOME</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12 w-full mb-12 md:mb-16 text-center font-sans">
                <div className="border border-white/20 p-4 md:p-8 group-hover:border-white transition-colors">
                  <p className="text-[10px] font-mono opacity-60 uppercase">Protocol</p>
                  <p className="font-bold text-sm md:text-base">无须履历，唯有真诚</p>
                </div>
                <div className="border border-white/20 p-4 md:p-8 group-hover:border-white transition-colors">
                  <p className="text-[10px] font-mono opacity-60 uppercase">Target</p>
                  <p className="font-bold text-sm md:text-base">对抗沉闷，去伪存真</p>
                </div>
                <div className="border border-white/20 p-4 md:p-8 group-hover:border-white transition-colors">
                  <p className="text-[10px] font-mono opacity-60 uppercase">Dimension</p>
                  <p className="font-bold text-sm md:text-base">杭州·实在界荒原</p>
                </div>
              </div>
              <button onClick={() => setIsModalOpen(true)} className="border-4 md:border-8 border-white p-6 md:px-16 md:py-10 font-black text-xl md:text-5xl uppercase bg-white text-black hover:bg-black hover:text-white transition-all shadow-[10px_10px_0px_0px_rgba(255,255,255,0.2)] md:shadow-[20px_20px_0px_0px_rgba(255,255,255,0.2)] font-sans">JOIN_THE_VOID.EXE</button>
            </div>
        </section>

        <footer className="bg-white text-black p-8 md:p-16 flex flex-col md:flex-row justify-between border-t-8 border-black relative">
           <div className="absolute inset-0 blueprint-grid opacity-5 pointer-events-none"></div>
           <div className="font-mono text-[10px] space-y-2 mb-8 md:mb-0 relative z-10 uppercase">
             <div>Arcadia_Protocol_v1.2</div>
             <div className="opacity-50">Hangzhou_CN_Earth</div>
           </div>
           <div className="text-right relative z-10">
             <p className="font-black text-2xl md:text-4xl uppercase font-sans tracking-tighter">End of File</p>
             <p className="font-mono text-[8px] md:text-xs text-gray-400 mt-2 tracking-[0.4em] uppercase">No Rights Reserved / Copyleft 2026</p>
           </div>
        </footer>
      </main>
    </div>
  );
};

export default App;