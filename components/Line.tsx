'use client'

import Image from "next/image";
import { useState, useRef } from "react";
import { contentData } from "./contentData";

export default function Line() {
    const [open, setOpen] = useState<Record<string, boolean>>({});

    const toggleDropdown = (key: string) =>
        setOpen(prev => ({ ...prev, [key]: !prev[key] }));

    return (
        <div className="w-full">
            {Object.entries(contentData).map(([key, item]) => {
                const isOpen = open[key] ?? false;

                return (
                    <div key={key} className="border-b border-gray-200">
                        <Header item={item} isOpen={isOpen} onToggle={() => toggleDropdown(key)} />

                        {isOpen && <Dropdown item={item} />}
                    </div>
                );
            })}
        </div>
    );
}

/* ============================================================
   HEADER
============================================================ */
function Header({ item, isOpen, onToggle }: any) {
    return (
        <div className="flex justify-end items-center h-[150px] sm:h-[250px] relative overflow-hidden">

            {/* BG VIDEO OR IMAGE */}
            {item.video ? (
                <video
                    className="absolute inset-0 w-full h-full object-cover"
                    src={item.video}
                    autoPlay
                    muted
                    loop
                    playsInline
                />
            ) : (
                <Image
                    className="absolute inset-0 w-full h-full object-cover"
                    src={item.imagem}
                    alt={item.titulo}
                    width={1920}
                    height={300}
                    priority
                />
            )}

            {/* Overlay color */}
            <div className={`${item.color} absolute inset-0 opacity-25`} />

            {/* Click area */}
            <button
                className="absolute inset-0 w-full h-full cursor-pointer"
                onClick={onToggle}
                aria-expanded={isOpen}
            />

            {/* Title */}
            <h3 className="relative uppercase z-10 mr-5 sm:mr-20 text-1xl sm:text-4xl 
                           font-bold text-white text-shadow text-end whitespace-nowrap">
                {item.titulo}
            </h3>

            {/* Arrow */}
            <div
                className={`relative z-10 mr-8 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
            >
                <svg className="w-9 h-9 text-white opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
            </div>
        </div>
    );
}

/* ============================================================
   DROPDOWN CONTENT
============================================================ */
function Dropdown({ item }: any) {
    const [isFullscreen, setIsFullscreen] = useState(false);
    const [zoomedImage, setZoomedImage] = useState<string | null>(null);
    const videoRef = useRef<HTMLVideoElement>(null);
    const zoomContainerRef = useRef<HTMLDivElement>(null);

    const toggleFullscreen = () => {
        if (!videoRef.current) return;

        if (!document.fullscreenElement) {
            if (videoRef.current.requestFullscreen) {
                videoRef.current.requestFullscreen();
            }
            setIsFullscreen(true);
        } else {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            }
            setIsFullscreen(false);
        }
    };

    const openZoom = (src: string) => {
        setZoomedImage(src);
        document.body.style.overflow = 'hidden'; // Previne scroll
    };

    const closeZoom = () => {
        setZoomedImage(null);
        document.body.style.overflow = 'auto';
    };

    const handleZoomClick = (e: React.MouseEvent) => {
        if (e.target === zoomContainerRef.current) {
            closeZoom();
        }
    };

    useState(() => {
        const handleFullscreenChange = () => {
            setIsFullscreen(!!document.fullscreenElement);
        };

        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                closeZoom();
            }
        };

        document.addEventListener('fullscreenchange', handleFullscreenChange);
        document.addEventListener('keydown', handleEscape);
        
        return () => {
            document.removeEventListener('fullscreenchange', handleFullscreenChange);
            document.removeEventListener('keydown', handleEscape);
            document.body.style.overflow = 'auto';
        };
    });

    return (
        <>
            {/* MODAL DE ZOOM */}
            {zoomedImage && (
                <div
                    ref={zoomContainerRef}
                    className="fixed inset-0 z-50 bg-red-500 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn"
                    onClick={handleZoomClick}
                >
                    {/* Botão de fechar */}
                    <button
                        onClick={closeZoom}
                        className="absolute top-6 right-6 sm:top-8 sm:right-8 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-all z-10 backdrop-blur-sm"
                        aria-label="Fechar zoom"
                    >
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>

                    {/* Controles de navegação */}
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            const currentIndex = item.imagens.indexOf(zoomedImage);
                            const prevIndex = (currentIndex - 1 + item.imagens.length) % item.imagens.length;
                            setZoomedImage(item.imagens[prevIndex]);
                        }}
                        className="absolute left-4 sm:left-8 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-all z-10 backdrop-blur-sm"
                        aria-label="Imagem anterior"
                    >
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>

                    {/* Imagem ampliada */}
                    <div className="relative w-full max-w-6xl h-[80vh] max-h-[80vh]">
                        <Image
                            src={zoomedImage}
                            alt={`${item.titulo} - zoom`}
                            fill
                            className="object-contain p-4"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 60vw"
                            priority
                        />
                    </div>

                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            const currentIndex = item.imagens.indexOf(zoomedImage);
                            const nextIndex = (currentIndex + 1) % item.imagens.length;
                            setZoomedImage(item.imagens[nextIndex]);
                        }}
                        className="absolute right-4 sm:right-8 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-all z-10 backdrop-blur-sm"
                        aria-label="Próxima imagem"
                    >
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>

                    {/* Índice da imagem */}
                    <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-black/50 text-white px-4 py-2 rounded-full text-sm backdrop-blur-sm">
                        {item.imagens.indexOf(zoomedImage) + 1} / {item.imagens.length}
                    </div>
                </div>
            )}

            <div className="flex justify-center sm:flex-row flex-col items-center bg-red-500 p-5 sm-p-10 animate-fadeIn">
                
                {/* LEFT SIDE: TEXT */}
                <div className="mr-8 sm:w-120 w-[100%] text-white p-5">
                    <span className="text-lg font-bold">{item.year}</span>
                    <h3 className="text-2xl uppercase font-bold mb-4">{item.titulo}</h3>
                    <p className="leading-relaxed mb-4 whitespace-pre-line">{item.texto}</p>

                    {item.awards && <span className="block">{item.awards}</span>}

                    {item.award && (
                        <Image
                            className="w-28 h-auto mt-10 invert"
                            src={item.award}
                            alt="award"
                            width={100}
                            height={100}
                        />
                    )}
                </div>

                {/* RIGHT SIDE: IMAGES + VIDEO */}
                <div className="grid grid-rows-2 gap-4">
                    
                    {/* IMAGES WITH ZOOM */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 items-center">
                        {item.imagens.map((src: string, i: number) => (
                            <div key={i} className="flex justify-center">
                                <div 
                                    className="relative rounded-full overflow-hidden shadow-md hover:shadow-lg 
                                               transition-all duration-300 w-full h-48 sm:h-64 sm:w-64
                                               cursor-zoom-in group"
                                    onClick={() => openZoom(src)}
                                >
                                    <Image
                                        className="object-cover hover:scale-105 transition-transform duration-300"
                                        src={src}
                                        alt={`${item.titulo} imagem ${i + 1}`}
                                        fill
                                        sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                                    />
                                    
                                    {/* Overlay de zoom */}
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/20 backdrop-blur-sm p-3 rounded-full">
                                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                                            </svg>
                                        </div>
                                    </div>
                                    
                                    {/* Índice pequeno no canto */}
                                    <div className="absolute bottom-3 right-3 bg-black/50 text-white text-xs px-2 py-1 rounded-full">
                                        {i + 1}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* VIDEO */}
                    {item.videoIn && (
                        <div className={`relative w-full sm:h-60 overflow-hidden shadow-md hover:shadow-lg rounded-full transition-shadow ${isFullscreen ? 'fixed inset-0 z-50 rounded-none' : ''}`}>
                            <video
                                ref={videoRef}
                                className={`w-full h-full object-cover hover:scale-105 transition-transform duration-300 ${isFullscreen ? 'cursor-default' : 'cursor-pointer'}`}
                                src={item.videoIn}
                                autoPlay
                                muted
                                loop
                                playsInline
                                onClick={toggleFullscreen}
                            />

                            {/* Botão de tela cheia */}
                            <button
                                onClick={toggleFullscreen}
                                className={`absolute ${isFullscreen ? 'top-6 right-6' : 'top-4 right-15'} bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all z-10`}
                                aria-label={isFullscreen ? "Sair da tela cheia" : "Tela cheia"}
                            >
                                {isFullscreen ? (
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                ) : (
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-5h-4m4 0v4m0-4l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5h-4m4 0v-4m0 4l-5-5" />
                                    </svg>
                                )}
                            </button>

                            {/* Overlay de instrução */}
                            {!isFullscreen && (
                                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/70 text-white text-sm px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                                    Clique para tela cheia
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}