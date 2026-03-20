"use client";

import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Download, Mail, ChevronDown } from "lucide-react";
import { useState, useRef, useEffect } from "react";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("index");

  const navItems = [
    { id: "index", label: "Index" },
    { id: "journey", label: "Journey" },
    { id: "works", label: "Works" },
    { id: "life", label: "Life" },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(id);
    }
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-[#F5F5F7]/80 border-b border-gray-200/50"
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <motion.span
            className="text-lg font-medium text-[#1D1D1F] tracking-tight cursor-pointer"
            whileHover={{ opacity: 0.7 }}
            onClick={() => scrollToSection("index")}
          >
            云琪
          </motion.span>
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`px-4 py-2 text-sm font-medium transition-colors duration-300 rounded-full ${
                  activeSection === item.id
                    ? "text-[#1D1D1F] bg-gray-200/50"
                    : "text-gray-500 hover:text-[#1D1D1F]"
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {item.label}
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

const HeroButton = () => {
  const handleClick = () => {
    const journeySection = document.getElementById('journey');
    if (journeySection) {
      journeySection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.button
      onClick={handleClick}
      className="relative inline-flex items-center justify-center gap-3 bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300 text-gray-800 px-8 py-4 rounded-full text-sm font-medium group shadow-lg shadow-gray-300/50"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
      whileHover={{ 
        scale: 1.05,
        boxShadow: "0 0 25px rgba(200, 200, 200, 0.8), 0 0 40px rgba(220, 220, 220, 0.4)"
      }}
      whileTap={{ scale: 0.98 }}
    >
      探索我的故事
      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
    </motion.button>
  );
};

const HeroSection = () => {
  return (
    <section
      id="index"
      className="min-h-screen flex flex-col justify-center px-6 lg:px-8 pt-20 relative"
      style={{
        background: "radial-gradient(ellipse at 50% 50%, rgba(245, 230, 232, 0.15) 0%, rgba(245, 245, 247, 0) 70%)"
      }}
    >
      <motion.img
        src="/images/sidai.png"
        alt="Silk Ribbon"
        className="absolute inset-0 w-full h-full object-contain pointer-events-none z-0"
        style={{
          filter: "blur(8px)",
          transform: "scale(1.1)"
        }}
      />

      <div className="max-w-6xl mx-auto w-full relative z-10">
        <div className="max-w-4xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-sm font-medium text-gray-500 mb-6 tracking-wide uppercase"
          >
            Portfolio 2026
          </motion.p>
          <div className="text-4xl md:text-5xl lg:text-6xl font-semibold text-[#1D1D1F] mb-6 leading-[1.15] tracking-tight">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
              className="block"
            >
              从视觉创作者
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
              className="block"
            >
              到项目推进者
            </motion.span>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-lg md:text-xl text-gray-600 mb-12 max-w-xl leading-relaxed"
          >
            看重体验与创造，用执行力交付结果。
          </motion.p>
          <HeroButton />
        </div>
      </div>
    </section>
  );
};

const CatVillageProject = ({ index }: { index: number }) => {
  const catVillageImages = [
    "/images/cat-village-1.jpg",
    "/images/cat-village-2.jpg",
    "/images/cat-village-3.jpg",
    "/images/cat-village-4.jpg",
    "/images/cat-village-5.jpg",
    "/images/cat-village-6.jpg",
  ];

  return (
    <motion.div
      viewport={{ once: false, amount: 0.5 }}
      className="mb-20"
    >
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
        <div className="lg:w-1/3 order-2 lg:order-1 relative z-10">
          <motion.span 
            className="text-sm text-gray-400 font-medium mb-3 block"
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.2 }}
          >
            2023 年
          </motion.span>
          <motion.h3 
            className="text-2xl font-semibold text-[#1D1D1F] mb-4"
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.2 }}
          >
            保定猫村志愿活动
          </motion.h3>
          <motion.p 
            className="text-gray-600 leading-relaxed"
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.2 }}
          >
            负责废弃村落公益改造项目的执行统筹，协调视觉方案制定与前期规划，以设计思维赋能社会公益创新。
          </motion.p>
        </div>
        <div className="lg:w-2/3 order-1 lg:order-2">
          <div className="grid grid-cols-3 gap-4">
            {catVillageImages.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ 
                  type: "spring", 
                  stiffness: 100, 
                  damping: 20, 
                  delay: i * 0.15
                }}
                viewport={{ once: false, amount: 0.2 }}
                whileHover={{ scale: 1.05, transition: { type: "spring", stiffness: 300, damping: 20 } }}
                className="rounded-xl overflow-hidden bg-gray-100 aspect-square shadow-sm"
                style={{ willChange: 'transform' }}
              >
                <motion.img
                  src={img}
                  alt={`保定猫村志愿活动 ${i + 1}`}
                  className="w-full h-full object-cover"
                  animate={{
                    y: [0, -5, 0, 5, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut",
                    delay: i * 0.2
                  }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const MaoxiangProject = ({ index }: { index: number }) => {
  const maoxiangImages = [
    "/images/maoxiang-1.png",
    "/images/maoxiang-2.png",
    "/images/maoxiang-3.png",
  ];

  return (
    <motion.div
      viewport={{ once: false, amount: 0.2 }}
      className="mb-20"
    >
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
        <div className="lg:w-1/3 order-2 lg:order-1 relative z-10">
          <motion.span 
            className="text-sm text-gray-400 font-medium mb-3 block"
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.2 }}
          >
            2023 年 6 月
          </motion.span>
          <motion.h3 
            className="text-2xl font-semibold text-[#1D1D1F] mb-4"
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.2 }}
          >
            猫享杯元宇宙创新大赛
          </motion.h3>
          <motion.p 
            className="text-gray-600 leading-relaxed"
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.2 }}
          >
            担任大赛队长，率队斩获猫享杯元宇宙创新职业技能大赛一等奖，运用元宇宙视角对猫村进行民宿改造方案设计，不仅完成了三维渲染图的视觉呈现，更成功落地至UE虚拟引擎进行交互展示，充分展现了在新兴技术领域的敏锐洞察力与全流程落地能力。
          </motion.p>
        </div>
        <div className="lg:w-2/3 order-1 lg:order-2">
          <motion.div 
            className="w-full rounded-2xl shadow-xl mb-6 overflow-hidden"
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", bounce: 0.4, duration: 0.8 }}
            viewport={{ once: false, amount: 0.2 }}
          >
            <video
              src="/videos/maoxiang-cup.mp4"
              autoPlay
              muted
              playsInline
              loop
              className="w-full aspect-video object-cover"
            />
          </motion.div>
          <div className="grid grid-cols-3 gap-4">
            {maoxiangImages.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ 
                  type: "spring", 
                  stiffness: 100, 
                  damping: 20, 
                  delay: i * 0.15
                }}
                viewport={{ once: false, amount: 0.2 }}
                whileHover={{
                  scale: 1.25,
                  rotate: 1,
                  zIndex: 50,
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                }}
                style={{ position: "relative" }}
                className="rounded-xl overflow-hidden bg-gray-100 aspect-square shadow-sm cursor-pointer"
              >
                <img
                  src={img}
                  alt={`猫享杯元宇宙创新大赛 ${i + 1}`}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const JourneySection = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const experiences = [
    {
      year: "2025.07 - 2026.02",
      company: "爱思益",
      title: "职业规划教学顾问",
      images: ["/images/ace-1.jpg", "/images/ace-2.jpg"],
      details: [
        "用户运营与维系：深度服务 60+ 位高净值留学生家庭，提供全流程求职咨询。通过高效的需求挖掘与心理疏导，建立极高的信任度，客户满意度高达 98%。",
        "定制化方案设计：针对学生求职中的痛点，通过全维度诊断-方案制定-结果跟踪闭环模式，根据学生特质精准匹配教学资源，累计安排并监督相关课程逾300+课时。",
        "核心成果与交付：实现当季求职学员 50% 以上的 Offer 获取率；针对非应届学员，推行实习先行策略，辅助 80% 学员斩获实习Offer。",
        "增值业务与转化：承担销售与服务双重职能，精准挖掘客户二次需求。通过专业咨询驱动转化，实现二次销售转化率 35% ，显著提升单客价值。"
      ]
    },
    {
      year: "2025.04 - 2025.06",
      company: "澜月光珠宝工作室",
      title: "直播运营岗",
      images: ["/images/lan-1.jpg", "/images/lan-2.png"],
      details: [
        "电商营销与转化：负责淘宝、抖音双平台店铺的珠宝类目商品详情页搭建及上线。通过对高客单价珠宝卖点的精准拆解，优化进店转化路径。",
        "珠宝直播与引流：策划直播间品类讲解及互动流程，负责直播预告的内容宣发及流量承接。通过专业话术提升直播间停留时长及互动率。"
      ]
    },
    {
      year: "2024.09 - 2024.12",
      company: "嘉兴技师学院",
      title: "见习班主任 (实习)",
      images: ["/images/school-1.jpg", "/images/school-2.jpg"],
      details: [
        "教学辅助工作：担任Maya基础课教学，负责基础软件操作的讲解与课后辅导；协助主讲老师维持课堂纪律，记录学生学习进度。",
        "班级活动组织：协助开展日常工作，召开主题班会；筹备和带队参加校运动会、文化节等大型校园活动，协调排练与现场比赛。",
        "学生生活管理：负责日常住校值班及宿舍检查；关注学生在校期间的安全及心理状态，及时处理突发状况。"
      ]
    },
    {
      year: "2023.11 - 2024.07",
      company: "茉莉游戏屋",
      title: "综合运营负责人",
      images: ["/images/moli-1.jpg", "/images/moli-2.jpg"],
      details: [
        "营销策划与执行：负责万圣节、圣诞节等主题策划及广告发布。通过精准推广，使节日期间到店客流量较平日增长 150% 以上。",
        "全媒引流与运营：负责短视频出镜及内容策划，产出 40+ 条视频。通过直播互动与私域维护，单月引流 100+ 组客户。",
        "商业拓展与管理：辅助完成与大型综合娱乐体及高端网咖的入驻洽谈。通过异业联动整合资源，拓展新获客场景。",
        "团队管理与统筹：负责 2 家门店 50+ 兼职人员的管理与日常考核，确保团队在高强度环境下的稳定性与高执行力。"
      ]
    }
  ];

  return (
    <section id="journey" className="py-24 px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          viewport={{ once: false, amount: 0.3 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-[#1D1D1F] mb-4">
            Journey
          </h2>
          <p className="text-gray-600 max-w-xl">
            具备动画专业的背景，善于将创意表达与用户需求相结合，致力于在多元文化环境中推动创意内容与商业价值的双向落地。
          </p>
        </motion.div>

        <div className="mb-20">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
              viewport={{ once: false, amount: 0.3 }}
              className="group border-b border-gray-200/50 last:border-b-0"
              onMouseEnter={() => setExpandedIndex(index)}
              onMouseLeave={() => setExpandedIndex(null)}
            >
              <div className="py-6 md:py-8">
                <div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-8">
                  <div className="md:w-48 flex-shrink-0">
                    <span className="text-sm text-gray-400 font-medium">{exp.year}</span>
                  </div>
                  <div className="flex-1 flex items-center justify-between">
                    <div className="flex flex-col sm:flex-row sm:items-baseline gap-2">
                      <h3 className="text-lg md:text-xl font-bold text-[#1D1D1F]">
                        {exp.company}
                      </h3>
                      <span className="text-sm text-gray-500">
                        {exp.title}
                      </span>
                    </div>
                    <motion.div
                      animate={{ rotate: expandedIndex === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-gray-400"
                    >
                      <ChevronDown className="w-5 h-5" />
                    </motion.div>
                  </div>
                </div>

                <AnimatePresence>
                  {expandedIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="pt-6 pb-2">
                        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
                          <div className="flex-1">
                            <ul className="space-y-3">
                              {exp.details.map((detail, i) => (
                                <li
                                  key={i}
                                  className="text-sm text-gray-600 leading-relaxed pl-4 border-l-2 border-gray-200"
                                >
                                  {detail}
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div className="lg:w-72 flex-shrink-0">
                            <div className="grid grid-cols-2 gap-5">
                              {exp.images.map((img, i) => (
                                <motion.div
                                  key={i}
                                  whileHover={{ scale: 1.05, transition: { type: "spring", stiffness: 300, damping: 20 } }}
                                  className="rounded-lg overflow-hidden bg-gray-100 aspect-[2/3]"
                                  style={{ willChange: 'transform' }}
                                >
                                  <img
                                    src={img}
                                    alt={`${exp.company} ${i + 1}`}
                                    className="w-full h-full object-cover"
                                  />
                                </motion.div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          viewport={{ once: false, amount: 0.3 }}
          className="mb-20"
        >
          <h3 className="text-2xl font-semibold text-[#1D1D1F] mb-6">
            Featured Projects
          </h3>
        </motion.div>

        <CatVillageProject index={0} />
        <MaoxiangProject index={1} />
      </div>
    </section>
  );
};

const VideoShowcase = ({
  src,
  poster,
  title,
}: {
  src: string;
  poster?: string;
  title: string;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
      viewport={{ once: false, amount: 0.4 }}
      className="mb-12"
    >
      <motion.div 
        className="rounded-2xl overflow-hidden bg-gray-900 shadow-2xl border border-white/50"
        initial={{ scaleY: 0.01 }}
        whileInView={{ scaleY: 1 }}
        transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
        viewport={{ once: false, amount: 0.4 }}
        whileHover={{ 
          scale: 1.02, 
          boxShadow: "0 0 30px rgba(0,0,0,0.15)",
          transition: { duration: 0.3 }
        }}
        style={{
          boxShadow: "0 0 20px rgba(0,0,0,0.05)",
          overflow: "hidden"
        }}
      >
        <video
          src={src}
          poster={poster}
          autoPlay
          muted
          playsInline
          loop
          className="w-full aspect-video object-cover"
        />
      </motion.div>
      <p className="text-center text-sm text-gray-500 mt-4">{title}</p>
    </motion.div>
  );
};

const ConveyorBelt = ({ 
  title, 
  images, 
  direction = "left",
  aspectRatio = "video"
}: { 
  title: string; 
  images: string[]; 
  direction?: "left" | "right";
  aspectRatio?: "video" | "portrait";
}) => {
  const [isPaused, setIsPaused] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [xPosition, setXPosition] = useState(0);

  useEffect(() => {
    if (isPaused) return;
    
    const speed = 1;
    const containerWidth = containerRef.current?.scrollWidth || 0;
    const halfWidth = containerWidth / 2;
    
    const interval = setInterval(() => {
      setXPosition(prev => {
        const newPos = direction === "left" 
          ? prev - speed 
          : prev + speed;
        
        if (direction === "left" && newPos <= -halfWidth) {
          return 0;
        } else if (direction === "right" && newPos >= 0) {
          return -halfWidth;
        }
        return newPos;
      });
    }, 16);

    return () => clearInterval(interval);
  }, [isPaused, direction]);

  const aspectClass = aspectRatio === "portrait" ? "aspect-[2/3]" : "aspect-video";
  const widthClass = aspectRatio === "portrait" ? "w-48" : "w-64";

  return (
    <div className="mb-16">
      <div className="flex items-center justify-between mb-4">
        <h4 className="text-xs font-medium text-[#888] tracking-wider uppercase">{title}</h4>
      </div>
      <div 
        className="relative overflow-hidden rounded-xl"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="flex gap-4 pb-2" ref={containerRef}>
          <motion.div 
            className="flex gap-4"
            style={{ x: xPosition }}
            transition={{ duration: 0 }}
          >
            {[...images, ...images].map((img, i) => (
              <motion.div
                key={i}
                whileHover={{
                  scale: 1.25,
                  zIndex: 50,
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className={`flex-shrink-0 ${widthClass} rounded-xl overflow-hidden bg-gray-100 ${aspectClass}`}
              >
                <img
                  src={img}
                  alt={`${title} ${i + 1}`}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

const WorksSection = () => {
  const characterImages = [
    "/images/process-4.jpg",
    "/images/process-5.png",
    "/images/process-6.png",
    "/images/process-7.png"
  ];

  const storyboardImages = Array.from({ length: 8 }, (_, i) => `/images/fenjing-${i + 1}.png`);
  const behindTheScenesImages = Array.from({ length: 9 }, (_, i) => `/images/sheji-${i + 1}.png`);

  return (
    <section id="works" className="py-24 px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ y: 40, opacity: 0, filter: "blur(10px)" }}
          whileInView={{ y: 0, opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-[#1D1D1F] mb-4">
            Works
          </h2>
          <motion.p 
            className="text-gray-600 max-w-xl"
            initial={{ y: 40, opacity: 0, filter: "blur(10px)" }}
            whileInView={{ y: 0, opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: false, amount: 0.4 }}
          >
            动画专业毕设作品，展现从概念到落地的完整创作流程。
          </motion.p>
        </motion.div>

        <div className="mb-16">
          <motion.h3
            initial={{ y: 40, opacity: 0, filter: "blur(10px)" }}
            whileInView={{ y: 0, opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: false, amount: 0.4 }}
            className="text-lg font-medium text-[#1D1D1F] mb-6"
          >
            毕设正片
          </motion.h3>
          <VideoShowcase
            src="/videos/graduation-main.mp4"
            poster="/images/process-1.jpg"
            title="毕业设计作品"
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20 max-w-4xl"
        >
          <h3 className="text-2xl font-bold text-[#1D1D1F] mb-6">
            本毕业设计以&ldquo;保护海洋环境，构建人类命运共同体&rdquo;为核心主题。
          </h3>
          <p className="text-gray-600 leading-relaxed mb-8">
            通过二维与三维动画相结合的创作实践，探讨海洋污染与核废水危害的隐喻性表达。作品以小女孩与章鱼的互动为主线，构建了一个充满生态警示意义的奇幻世界观。设计过程中，团队采用Maya完成三维角色建模、骨骼绑定与动态测试，结合Procreate和Procreate Dreams完成二维场景手绘上色，通过Adobe Premiere和剪映软件实现画面调色，特效合成以及剪辑工作，最终形成3分钟动画短片。
          </p>
        </motion.div>

        <div>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-sm font-medium text-[#888] tracking-wider uppercase mb-8"
          >
            The Process / 创作解构
          </motion.h3>

          <ConveyorBelt 
            title="角色设计" 
            images={characterImages} 
            direction="right" 
            aspectRatio="video"
          />
          
          <ConveyorBelt 
            title="分镜手稿" 
            images={storyboardImages} 
            direction="left" 
            aspectRatio="portrait"
          />
          
          <ConveyorBelt 
            title="花絮" 
            images={behindTheScenesImages} 
            direction="right" 
            aspectRatio="video"
          />
        </div>
      </div>
    </section>
  );
};

const BowIcon = () => (
  <svg width="40" height="20" viewBox="0 0 40 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="mx-auto mb-2">
    <path d="M20 10C20 10 12 4 8 6C4 8 4 12 8 14C12 16 20 10 20 10Z" fill="#F5E6E8" stroke="#D4B5C0" strokeWidth="1"/>
    <path d="M20 10C20 10 28 4 32 6C36 8 36 12 32 14C28 16 20 10 20 10Z" fill="#F5E6E8" stroke="#D4B5C0" strokeWidth="1"/>
    <circle cx="20" cy="10" r="3" fill="#D4B5C0"/>
  </svg>
);

const LifeSection = () => {
  const lifePhotos = [
    { src: "/images/life-1.jpg", rotate: -6, top: "8%", left: "3%", width: "w-28 md:w-36" },
    { src: "/images/life-2.jpg", rotate: 4, top: "15%", left: "20%", width: "w-32 md:w-40" },
    { src: "/images/life-3.jpg", rotate: -3, top: "5%", left: "40%", width: "w-28 md:w-36" },
    { src: "/images/life-4.jpg", rotate: 5, top: "20%", left: "58%", width: "w-32 md:w-40" },
    { src: "/images/life-5.jpg", rotate: -4, top: "12%", left: "78%", width: "w-28 md:w-36" },
    { src: "/images/life-6.jpg", rotate: 3, top: "48%", left: "12%", width: "w-32 md:w-40" },
    { src: "/images/life-7.jpg", rotate: -5, top: "52%", left: "65%", width: "w-28 md:w-36" },
  ];

  return (
    <section id="life" className="py-24 px-6 lg:px-8 relative overflow-hidden min-h-screen">
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at 25% 25%, rgba(245, 230, 232, 0.6) 0%, transparent 55%), radial-gradient(ellipse at 75% 75%, rgba(245, 230, 232, 0.5) 0%, transparent 55%), radial-gradient(ellipse at 50% 50%, rgba(255, 245, 247, 0.3) 0%, transparent 70%)"
        }}
      />
      
      <img 
        src="/images/sidai.png" 
        alt="ribbon" 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-auto object-contain pointer-events-none z-0 opacity-100" 
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-[#1D1D1F] mb-6">
            Life
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            不仅是个感性的视觉探索者，更是个极其务实的项目推进者。我以共情力为纽带理解用户，以好奇心为驱动探索未知，并最终通过极致的执行力，将每一个创意构想落地为切实可量化、有商业温度的项目成果。
          </p>
        </motion.div>

        <div className="relative h-[650px] md:h-[750px]">
          {lifePhotos.map((photo, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.8, rotate: 0 }}
              whileInView={{ opacity: 1, scale: 1, rotate: photo.rotate }}
              transition={{ duration: 0.5, delay: idx * 0.1, type: "spring", stiffness: 120 }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.1,
                zIndex: 50,
                rotate: 0,
                transition: { type: "spring", stiffness: 300, damping: 20 }
              }}
              style={{
                position: "absolute",
                top: photo.top,
                left: photo.left,
                willChange: 'transform',
                zIndex: 10
              }}
              className={`${photo.width} rounded-2xl overflow-hidden bg-white cursor-pointer`}
            >
              <motion.div 
                className="aspect-[3/4] shadow-lg"
                whileHover={{
                  boxShadow: "0 0 50px rgba(245, 230, 232, 1), 0 30px 60px rgba(0, 0, 0, 0.25)",
                  transition: { type: "spring", stiffness: 300, damping: 20 }
                }}
              >
                <img
                  src={photo.src}
                  alt={`Life ${idx + 1}`}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  const [isQRHovered, setIsQRHovered] = useState(false);
  const [localTime, setLocalTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = { 
        hour: '2-digit', 
        minute: '2-digit',
        hour12: true,
        timeZone: 'Asia/Shanghai'
      };
      setLocalTime(now.toLocaleTimeString('en-US', options).toUpperCase());
    };
    updateTime();
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="py-16 px-6 lg:px-8 bg-gradient-to-b from-white to-[#FDF8F9]">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center mb-12">
          <motion.div
            onMouseEnter={() => setIsQRHovered(true)}
            onMouseLeave={() => setIsQRHovered(false)}
            whileHover={{ scale: 2.5, zIndex: 100 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="relative cursor-pointer"
          >
            <BowIcon />
            <div className="w-28 h-28 rounded-2xl border-2 border-[#F5E6E8] p-2 bg-white shadow-sm transition-all duration-300">
              <img
                src="/images/wechat-qr.png"
                alt="WeChat QR Code"
                className={`w-full h-full object-contain rounded-xl transition-opacity duration-300 ${isQRHovered ? 'opacity-100' : 'opacity-70'}`}
              />
            </div>
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: isQRHovered ? 1 : 0, y: isQRHovered ? 0 : -10 }}
              transition={{ duration: 0.3 }}
              className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap"
            >
              <span className="text-xs text-[#888] bg-white/80 px-3 py-1 rounded-full shadow-sm">
                即刻沟通，聊聊合作的可能性
              </span>
            </motion.div>
          </motion.div>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-12">
          <a
            href="mailto:yunqi77_work@163.com"
            className="flex items-center gap-2 text-[#888] hover:text-[#1D1D1F] transition-colors"
          >
            <Mail className="w-4 h-4" />
            <span className="text-sm">yunqi77_work@163.com</span>
          </a>
          <span className="hidden md:block text-[#DDD]">|</span>
          <motion.a
            href="/docs/resume-yunqi.pdf"
            download
            className="flex items-center gap-2 text-[#888] hover:text-[#1D1D1F] transition-colors"
            whileHover={{ scale: 1.02 }}
          >
            <Download className="w-4 h-4" />
            <span className="text-sm">Download Resume</span>
          </motion.a>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-[#F5E6E8]">
          <p className="text-xs text-[#AAA]">
            © 2026 YUNQI. All Rights Reserved.
          </p>
          <p className="text-xs text-[#AAA]">
            CURRENT STATUS: OPEN TO NEW OPPORTUNITIES
          </p>
        </div>
      </div>
    </footer>
  );
};

export default function Home() {
  return (
    <div className="bg-[#F5F5F7] min-h-screen text-[#1D1D1F] selection:bg-gray-200">
      <Navbar />
      <main>
        <HeroSection />
        <JourneySection />
        <WorksSection />
        <LifeSection />
      </main>
      <Footer />
    </div>
  );
}
