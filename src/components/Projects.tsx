import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useLanguage } from "./LanguageContext";
import { cn } from "../lib/utils";
import PixelBackground from "./PixelBackground";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

type ProjectType = "Illustrations" | "Experimental" | "Collaborations";

interface Project {
  id: number;
  title: string;
  category: ProjectType;
  image: string;
  description?: string;
  longDescription?: string;
  videoUrl?: string;
  images?: string[];
  status?: string;
}

export default function Projects() {
  const { t } = useLanguage();
  const [filter, setFilter] = useState<ProjectType | "All">("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [fullscreenImage, setFullscreenImage] = useState<string | null>(null);

  const openProject = (project: Project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    if (selectedProject?.images) {
      setCurrentImageIndex((prev) => (prev + 1) % selectedProject.images!.length);
    }
  };

  const prevImage = () => {
    if (selectedProject?.images) {
      setCurrentImageIndex((prev) => (prev - 1 + selectedProject.images!.length) % selectedProject.images!.length);
    }
  };

  const getEmbedUrl = (url: string) => {
    if (!url) return "";
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = url.match(regExp);
    return match && match[2].length === 11 ? `https://www.youtube.com/embed/${match[2]}` : url;
  };

  const projects: Project[] = [
    {
      id: 7,
      title: t.projects.photoHuntTitle,
      category: "Collaborations",
      image: "https://raw.githubusercontent.com/denariousco/Profile/refs/heads/main/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202026-04-25%20105610.jpg",
      description: t.projects.photoHuntDesc,
      longDescription: t.projects.photoHuntDetail,
      videoUrl: "https://youtu.be/_nxpm4MiTmQ"
    },
    {
      id: 8,
      title: t.projects.msReconsiderationTitle,
      category: "Experimental",
      image: "https://raw.githubusercontent.com/denariousco/Profile/refs/heads/main/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202026-04-25%20112455.jpg",
      description: t.projects.msReconsiderationDesc,
      longDescription: t.projects.msReconsiderationDetail,
      videoUrl: "https://youtu.be/6KJFA7b-eeY",
      images: [
        "https://raw.githubusercontent.com/denariousco/Profile/2b90b266cad427d4718bab9a476844d6c1299456/10.301600.jpg",
        "https://github.com/denariousco/Profile/blob/6b8cdebdec013bd575cb58ef21f46e8f5aa7680b/10.301609.jpg?raw=true",
        "https://github.com/denariousco/Profile/blob/main/10.301591.jpg?raw=true",
        "https://github.com/denariousco/Profile/blob/main/10.301624.jpg?raw=true"
      ]
    },
    {
      id: 9,
      title: t.projects.rusticOnesTitle,
      category: "Illustrations",
      image: "https://raw.githubusercontent.com/denariousco/Profile/refs/heads/main/111.jpg",
      description: t.projects.rusticOnesDesc,
      longDescription: t.projects.rusticOnesDetail,
      images: [
        "https://raw.githubusercontent.com/denariousco/Profile/refs/heads/main/222.jpg",
        "https://raw.githubusercontent.com/denariousco/Profile/refs/heads/main/333.jpg"
      ]
    },
    {
      id: 10,
      title: t.projects.pixelsCantBeatPaintTitle,
      category: "Collaborations",
      image: "https://raw.githubusercontent.com/denariousco/Profile/refs/heads/main/across2.jpg",
      description: t.projects.pixelsCantBeatPaintDesc,
      longDescription: t.projects.pixelsCantBeatPaintDetail,
      videoUrl: "https://www.youtube.com/watch?v=Ca2a30ltVmE",
      images: [
        "https://raw.githubusercontent.com/denariousco/Profile/refs/heads/main/across6.jpeg",
        "https://raw.githubusercontent.com/denariousco/Profile/refs/heads/main/across7.jpeg",
        "https://raw.githubusercontent.com/denariousco/Profile/refs/heads/main/across8.jpeg",
        "https://raw.githubusercontent.com/denariousco/Profile/refs/heads/main/across9.jpeg"
      ]
    },
    {
      id: 11,
      title: t.projects.undetectedWatchTitle,
      category: "Experimental",
      image: "https://raw.githubusercontent.com/denariousco/Profile/refs/heads/main/eye1.jpg",
      description: t.projects.undetectedWatchDesc,
      longDescription: t.projects.undetectedWatchDetail,
      images: [
        "https://raw.githubusercontent.com/denariousco/Profile/refs/heads/main/SecurityCam_Coco.jpg",
        "https://raw.githubusercontent.com/denariousco/Profile/refs/heads/main/22-.jpg",
        "https://raw.githubusercontent.com/denariousco/Profile/refs/heads/main/3re-.jpg",
        "https://raw.githubusercontent.com/denariousco/Profile/refs/heads/main/22re-.jpg",
        "https://raw.githubusercontent.com/denariousco/Profile/refs/heads/main/eye3.jpg",
        "https://raw.githubusercontent.com/denariousco/Profile/refs/heads/main/eye2.jpg",
        "https://raw.githubusercontent.com/denariousco/Profile/refs/heads/main/_MG_2248.jpg",
        "https://raw.githubusercontent.com/denariousco/Profile/refs/heads/main/_MG_2303.jpg",
        "https://github.com/denariousco/Profile/blob/main/_MG_2250.jpg?raw=true"
      ]
    },
    {
      id: 12,
      title: t.projects.entomophobiaIssuesTitle,
      category: "Illustrations",
      image: "https://raw.githubusercontent.com/denariousco/Profile/refs/heads/main/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202026-05-18%20214013.jpg",
      description: t.projects.entomophobiaIssuesDesc,
      longDescription: t.projects.entomophobiaIssuesDetail,
      images: [
        "https://github.com/denariousco/Profile/blob/main/%E5%9B%BE%E7%89%871.png?raw=true",
        "https://github.com/denariousco/Profile/blob/main/%E5%9B%BE%E7%89%872.png?raw=true",
        "https://github.com/denariousco/Profile/blob/main/%E5%9B%BE%E7%89%873.png?raw=true",
        "https://github.com/denariousco/Profile/blob/main/%E5%9B%BE%E7%89%874.png?raw=true",
        "https://github.com/denariousco/Profile/blob/main/%E5%9B%BE%E7%89%875.png?raw=true",
        "https://github.com/denariousco/Profile/blob/main/%E5%9B%BE%E7%89%876.png?raw=true",
        "https://github.com/denariousco/Profile/blob/main/%E5%9B%BE%E7%89%877.png?raw=true",
        "https://github.com/denariousco/Profile/blob/main/%E5%9B%BE%E7%89%878.png?raw=true",
        "https://github.com/denariousco/Profile/blob/main/%E5%9B%BE%E7%89%879.png?raw=true",
        "https://github.com/denariousco/Profile/blob/main/%E5%9B%BE%E7%89%8710.png?raw=true"
      ]
    },
    {
      id: 13,
      title: t.projects.huntedTalesTitle,
      category: "Experimental",
      image: "https://github.com/denariousco/Profile/blob/main/Wanjing_CocoSuInternet-BBsitting.jpg?raw=true",
      description: t.projects.huntedTalesDesc,
      longDescription: t.projects.huntedTalesDetail,
      videoUrl: "https://youtu.be/EPL-w9QQaAs",
    },
    {
      id: 14,
      title: t.projects.rainbowLimboParkTitle,
      category: "Illustrations",
      image: "https://github.com/denariousco/Profile/blob/main/%E6%8F%92%E5%9C%9625.jpg?raw=true",
      description: t.projects.rainbowLimboParkDesc,
      longDescription: t.projects.rainbowLimboParkDetail,
      status: "In-Progress",
      images: [
        "https://github.com/denariousco/Profile/blob/main/R1%20(1).jpg?raw=true",
        "https://github.com/denariousco/Profile/blob/main/R1%20(2).jpg?raw=true",
        "https://github.com/denariousco/Profile/blob/main/R1%20(3).jpg?raw=true",
        "https://github.com/denariousco/Profile/blob/main/R1%20(4).jpg?raw=true",
        "https://github.com/denariousco/Profile/blob/main/R1%20(5).jpg?raw=true",
        "https://github.com/denariousco/Profile/blob/main/R1%20(6).jpg?raw=true",
        "https://github.com/denariousco/Profile/blob/main/R1%20(7).jpg?raw=true",
        "https://github.com/denariousco/Profile/blob/main/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20240411185217.jpg?raw=true"
      ]
    },
    {
      id: 15,
      title: t.projects.atTheWatersEdgeTitle,
      category: "Collaborations",
      image: "https://github.com/denariousco/Profile/blob/main/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202026-05-18%20230617.jpg?raw=true",
      description: t.projects.atTheWatersEdgeDesc,
      longDescription: t.projects.atTheWatersEdgeDetail,
      images: [
        "https://github.com/denariousco/Profile/blob/main/_MG_4854.JPG?raw=true",
        "https://github.com/denariousco/Profile/blob/main/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20190901224547.jpg?raw=true",
        "https://github.com/denariousco/Profile/blob/main/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20190901224613.jpg?raw=true",
        "https://github.com/denariousco/Profile/blob/main/_MG_4867.JPG?raw=true",
        "https://github.com/denariousco/Profile/blob/main/_MG_4864.JPG?raw=true",
        "https://github.com/denariousco/Profile/blob/main/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20190901224625.jpg?raw=true",
        "https://github.com/denariousco/Profile/blob/main/54463781_1026488320883097_7770837152963035969_n.jpg?raw=true",
        "https://github.com/denariousco/Profile/blob/main/55847242_429624291132267_8012202404546562681_n.jpg?raw=true"
      ]
    },
    {
      id: 16,
      title: t.projects.renaissanceBetween0to1Title,
      category: "Illustrations",
      image: "https://github.com/denariousco/Profile/blob/main/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202026-05-18%20231118.jpg?raw=true",
      description: t.projects.renaissanceBetween0to1Desc,
      longDescription: t.projects.renaissanceBetween0to1Detail,
      images: [
        "https://github.com/denariousco/Profile/blob/main/T13881%20(2).jpg?raw=true",
        "https://github.com/denariousco/Profile/blob/main/T13881%20(6).jpg?raw=true",
        "https://github.com/denariousco/Profile/blob/main/T13881%20(8).jpg?raw=true",
        "https://github.com/denariousco/Profile/blob/main/2_1.jpg?raw=true",
        "https://github.com/denariousco/Profile/blob/main/3_1.jpg?raw=true",
        "https://github.com/denariousco/Profile/blob/main/4_1.jpg?raw=true",
        "https://github.com/denariousco/Profile/blob/main/5_1.jpg?raw=true",
        "https://github.com/denariousco/Profile/blob/main/6_2.jpg?raw=true",
        "https://github.com/denariousco/Profile/blob/main/7_2.jpg?raw=true"
      ]
    },
    {
      id: 17,
      title: t.projects.musicPopOsakaTitle,
      category: "Collaborations",
      image: "https://github.com/denariousco/Profile/blob/main/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202026-05-18%20231439.jpg?raw=true",
      description: t.projects.musicPopOsakaDesc,
      longDescription: t.projects.musicPopOsakaDetail,
      images: [
        "https://github.com/denariousco/Profile/blob/main/linewithcolor_transbackground.png?raw=true",
        "https://github.com/denariousco/Profile/blob/main/%E5%B7%B4%E6%89%8E%E5%98%BF%E7%B4%A0%E6%9D%9024.jpg?raw=true",
        "https://github.com/denariousco/Profile/blob/main/%E5%B7%B4%E6%89%8E%E5%98%BF%E7%B4%A0%E6%9D%9044.jpg?raw=true",
        "https://github.com/denariousco/Profile/blob/main/%E5%B7%B4%E6%89%8E%E5%98%BF%E7%B4%A0%E6%9D%9031.jpg?raw=true",
        "https://github.com/denariousco/Profile/blob/main/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20231219232528.jpg?raw=true",
        "https://github.com/denariousco/Profile/blob/main/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20231227191723.jpg?raw=true"
      ]
    },
  ];

  const filteredProjects = projects.filter(
    (p) => filter === "All" || p.category === filter
  );

  const filterButtons: { type: ProjectType | "All"; label: string }[] = [
    { type: "All", label: t.projects.filterAll },
    { type: "Illustrations", label: t.projects.filterUI },
    { type: "Experimental", label: t.projects.filterBranding },
    { type: "Collaborations", label: t.projects.filterWeb },
  ];

  return (
    <section id="projects" className="py-24 px-6 md:px-12 bg-[#FFFBEB] relative overflow-hidden">
      <PixelBackground />
      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 space-y-8 md:space-y-0">
          <div>
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-7xl font-black tracking-tight"
            >
              {t.projects.title} <span className="inline-block align-middle ml-2">
                <svg width="50" height="50" viewBox="0 0 10 10" className="text-pop-yellow animate-bounce">
                  <rect x="2" y="2" width="1" height="1" fill="currentColor" className="text-ink" />
                  <rect x="7" y="2" width="1" height="1" fill="currentColor" className="text-ink" />
                  <rect x="1" y="6" width="1" height="1" fill="currentColor" className="text-ink" />
                  <rect x="8" y="6" width="1" height="1" fill="currentColor" className="text-ink" />
                  <rect x="2" y="7" width="6" height="1" fill="currentColor" className="text-ink" />
                </svg>
              </span>
            </motion.h2>
          </div>

          <div className="flex flex-wrap gap-4">
            {filterButtons.map((btn) => (
              <button
                key={btn.type}
                onClick={() => setFilter(btn.type)}
                className={cn(
                   "px-6 py-3 text-sm font-bold transition-all duration-300 rounded-2xl border-4",
                   filter === btn.type
                    ? "bg-pop-purple text-white border-ink shadow-[4px_4px_0px_0px_#2B2B2B]"
                    : "bg-white text-ink border-ink/10 hover:border-ink shadow-[4px_4px_0px_0px_transparent] hover:shadow-[4px_4px_0px_0px_#2B2B2B]"
                )}
              >
                {btn.label}
              </button>
            ))}
          </div>
        </div>

        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.8, rotate: index % 2 === 0 ? -2 : 2 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                exit={{ opacity: 0, scale: 0.8 }}
                whileHover={{ rotate: index % 2 === 0 ? 1 : -1, scale: 1.02 }}
                transition={{ duration: 0.4, type: "spring" }}
                className="group cursor-pointer"
                onClick={() => openProject(project)}
              >
                <div className={cn(
                  "relative overflow-hidden aspect-square rounded-[2.5rem] mb-6 border-4 border-ink shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-all group-hover:shadow-none group-hover:translate-x-2 group-hover:translate-y-2",
                  index % 3 === 0 ? "bg-pop-pink" : index % 3 === 1 ? "bg-pop-yellow" : "bg-pop-green"
                )}>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover p-4 rounded-[3rem]"
                  />
                  <div className="absolute top-6 right-6 w-12 h-12 bg-white rounded-full border-4 border-ink flex items-center justify-center font-bold text-lg shadow-lg">
                    ★
                  </div>
                </div>
                <div className="space-y-2 px-2">
                  <div className="flex items-center space-x-2">
                    <span className="w-3 h-3 rounded-full bg-pop-purple border-2 border-ink" />
                    <p className="text-xs uppercase tracking-widest font-black opacity-60">
                      {project.category}
                    </p>
                  </div>
                  <h3 className="text-2xl font-black">{project.title}</h3>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-ink/80 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-white border-8 border-ink rounded-[4rem] max-w-4xl w-full max-h-[90vh] overflow-y-auto relative shadow-[16px_16px_0px_0px_#FFD600]"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-8 right-8 p-4 bg-pop-pink border-4 border-ink rounded-full hover:rotate-90 transition-transform z-10"
              >
                <X className="w-8 h-8 text-ink" />
              </button>

              <div className="p-8 md:p-12">
                <div className="aspect-video w-full rounded-[3rem] border-4 border-ink overflow-hidden mb-12 shadow-[12px_12px_0px_0px_#2B2B2B] bg-ink">
                  {selectedProject?.videoUrl ? (
                    <iframe
                      src={getEmbedUrl(selectedProject.videoUrl)}
                      title={selectedProject?.title}
                      className="w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  ) : (
                    <img
                      src={selectedProject?.image}
                      alt={selectedProject?.title}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>

                <div className="flex flex-col md:flex-row md:items-start justify-between gap-8">
                  <div className="flex-1 space-y-6">
                    <div>
                      <div className="flex items-center space-x-2 mb-2">
                        <span className="w-4 h-4 rounded-full bg-pop-purple border-2 border-ink" />
                        <p className="text-sm uppercase tracking-widest font-black opacity-60">
                          {selectedProject?.category}
                        </p>
                      </div>
                      <h2 className="text-4xl md:text-6xl font-black text-ink">
                        {selectedProject?.title}
                      </h2>
                    </div>

                    <p className="text-xl md:text-2xl font-bold leading-relaxed text-ink/80 whitespace-pre-wrap">
                      {selectedProject?.description}
                    </p>

                    {selectedProject?.longDescription && (
                      <p className="text-lg leading-relaxed text-ink/70 whitespace-pre-wrap">
                        {selectedProject.longDescription}
                      </p>
                    )}

                    {selectedProject?.images && selectedProject.images.length > 0 && (
                      <div className="pt-8 space-y-4">
                        <div className="relative aspect-video rounded-[3rem] border-4 border-ink overflow-hidden shadow-[12px_12px_0px_0px_#2B2B2B] bg-white flex items-center justify-center">
                          <AnimatePresence mode="wait">
                            <motion.img
                              key={currentImageIndex}
                              src={selectedProject?.images?.[currentImageIndex]}
                              alt={`${selectedProject?.title || ''} detail ${currentImageIndex + 1}`}
                              initial={{ opacity: 0, x: 20 }}
                              animate={{ opacity: 1, x: 0 }}
                              exit={{ opacity: 0, x: -20 }}
                              className="max-w-full max-h-full object-contain cursor-zoom-in"
                              onClick={() => selectedProject?.images && setFullscreenImage(selectedProject.images[currentImageIndex])}
                            />
                          </AnimatePresence>
                          
                          {selectedProject.images.length > 1 && (
                            <>
                              <button
                                onClick={prevImage}
                                className="absolute left-6 top-1/2 -translate-y-1/2 p-3 bg-white border-4 border-ink rounded-2xl shadow-[6px_6px_0px_0px_#2B2B2B] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all z-10"
                                aria-label="Previous image"
                              >
                                <ChevronLeft className="w-8 h-8 text-ink" />
                              </button>
                              <button
                                onClick={nextImage}
                                className="absolute right-6 top-1/2 -translate-y-1/2 p-3 bg-pop-yellow border-4 border-ink rounded-2xl shadow-[6px_6px_0px_0px_#2B2B2B] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all z-10"
                                aria-label="Next image"
                              >
                                <ChevronRight className="w-8 h-8 text-ink" />
                              </button>
                            </>
                          )}
                        </div>
                        
                        {selectedProject.images.length > 1 && (
                          <div className="flex justify-center gap-3">
                            {selectedProject.images.map((_, idx) => (
                              <button
                                key={idx}
                                onClick={() => setCurrentImageIndex(idx)}
                                className={cn(
                                  "w-4 h-4 rounded-full border-2 border-ink transition-all",
                                  idx === currentImageIndex ? "bg-pop-purple scale-125" : "bg-ink/10 hover:bg-ink/20"
                                )}
                                aria-label={`Go to image ${idx + 1}`}
                              />
                            ))}
                          </div>
                        )}
                      </div>
                    )}
                  </div>

                  <div className="shrink-0 space-y-4">
                    <div className={cn(
                      "p-6 border-4 border-ink rounded-3xl shadow-[8px_8px_0px_0px_#2B2B2B]",
                      selectedProject.status === "In-Progress" ? "bg-pop-yellow" : "bg-pop-green"
                    )}>
                      <h4 className="font-black mb-2 uppercase text-xs tracking-widest opacity-60">Status</h4>
                      <p className="font-black text-lg">{selectedProject.status || "Completed ✨"}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      {/* Fullscreen Image Preview */}
      <AnimatePresence>
        {fullscreenImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-ink/90 p-4 md:p-12 flex items-center justify-center cursor-zoom-out"
            onClick={() => setFullscreenImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-7xl max-h-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setFullscreenImage(null)}
                className="absolute -top-4 -right-4 z-10 p-3 bg-pop-red border-4 border-ink rounded-2xl shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all"
              >
                <X className="w-8 h-8 text-white" />
              </button>
              <div className="rounded-[3rem] border-8 border-ink overflow-hidden bg-white shadow-[20px_20px_0px_0px_rgba(43,43,43,1)]">
                <img
                  src={fullscreenImage}
                  alt="Fullscreen preview"
                  className="max-w-full max-h-[85vh] object-contain"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
