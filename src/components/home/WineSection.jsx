import React from 'react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
// Importando as imagens específicas
import { ruby, blueberry, violet } from "../../assets/ColectionImg/index.js";

const wines = [
    {
        id: 1,
        name: "Ruby 1932",
        description: "Tranquilos, médio corpo, secos e frescos.",
        image: blueberry,
        tag: "Clássico"
    },
    {
        id: 2,
        name: "Violet 1932",
        description: "Intenso, notas florais e final persistente.",
        image: blueberry, // Imagem específica
        tag: "Reserva"
    },
    {
        id: 3,
        name: "Blueberry 1932",
        description: "Frutado, acidez vibrante e equilibrado.",
        image: blueberry, // Imagem específica
        tag: "Premium"
    }
];

const WineSection = () => {
    return (
        <section className="bg-[#0a0a0a] py-20 md:py-24 px-4 md:px-10 border-t border-white/5 overflow-x-hidden">
            <div className="max-w-7xl mx-auto overflow-x-hidden">

                <div className="text-center mb-12 md:mb-16">
                    <span className="text-[10px] uppercase tracking-[0.5em] text-stone-500 block mb-3 font-light">
                        Nossa Coleção
                    </span>
                    <h2 className="text-4xl md:text-5xl font-extralight text-stone-200 italic font-serif tracking-wider">
                        Senses
                    </h2>
                </div>

                <div className="relative group">
                    <div className="flex justify-start md:justify-center gap-6 md:gap-8 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-10">
                        {wines.map((wine) => (
                            <div
                                key={wine.id}
                                className="min-w-[85%] md:min-w-[320px] lg:min-w-[380px] snap-center bg-[#111] border border-white/5 overflow-hidden transition-all duration-700 hover:border-white/20 group/card flex flex-col"
                            >
                                {/* 
                                   CONTAINER DA IMAGEM:
                                   - bg-gradient: cria um efeito de luz vindo de cima.
                                   - p-10: espaço para a garrafa respirar sem ficar minúscula.
                                */}
                                <div className="aspect-[3/4] overflow-hidden bg-gradient-to-b from-[#1a1a1a] to-[#111] relative flex items-center justify-center p-10">
                                    {/* Spotlight (Luz centralizada) */}
                                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/[0.07] via-transparent to-transparent z-0 pointer-events-none" />

                                    <img
                                        src={wine.image}
                                        alt={wine.name}
                                        /* 
                                           - h-[90%]: A garrafa ocupa a maior parte da altura.
                                           - drop-shadow: Cria profundidade se a imagem for PNG.
                                           - object-contain: Preserva a resolução original.
                                        */
                                        className="relative z-10 h-[90%] w-auto object-contain opacity-90 group-hover/card:opacity-100 group-hover/card:scale-[1.03] transition-all duration-1000 ease-out filter drop-shadow-[0_20px_30px_rgba(0,0,0,0.8)]"
                                    />
                                </div>

                                {/* CONTEÚDO DO CARD */}
                                <div className="p-8 text-center flex flex-col items-center bg-[#0d0d0d] border-t border-white/5 flex-grow">
                                    <span className="text-[9px] uppercase tracking-[0.4em] text-stone-500 mb-2 block font-light">
                                        {wine.tag}
                                    </span>
                                    <h3 className="text-xl md:text-2xl font-serif italic text-stone-200 mb-4 font-light tracking-wide">
                                        {wine.name}
                                    </h3>

                                    <div className="h-[1px] w-8 bg-stone-800 mb-5 group-hover/card:w-16 transition-all duration-700"></div>

                                    <p className="text-stone-400 text-[11px] md:text-xs leading-relaxed font-light px-2 opacity-70 min-h-[40px] tracking-wide">
                                        {wine.description}
                                    </p>

                                    <button className="mt-8 text-stone-300 text-[9px] md:text-[10px] uppercase tracking-[0.4em] border-b border-white/10 pb-2 hover:text-white hover:border-white transition-all duration-300">
                                        Ver Detalhes
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Setas de Navegação (Desktop) */}
                    <button className="absolute left-[-60px] top-[40%] -translate-y-1/2 p-3 text-stone-700 hover:text-stone-200 transition-all opacity-0 group-hover:opacity-100 hidden xl:block">
                        <ChevronLeft size={48} strokeWidth={0.5} />
                    </button>
                    <button className="absolute right-[-60px] top-[40%] -translate-y-1/2 p-3 text-stone-700 hover:text-stone-200 transition-all opacity-0 group-hover:opacity-100 hidden xl:block">
                        <ChevronRight size={48} strokeWidth={0.5} />
                    </button>
                </div>

                {/* BOTÃO EXPLORAR */}
                <div className="mt-16 md:mt-24 flex flex-col items-center">
                    <div className="h-[1px] w-24 bg-stone-900 mb-10" />

                    <a
                        href="/colecoes"
                        className="group flex flex-col items-center gap-4 no-underline"
                    >
                        <span className="text-stone-500 group-hover:text-stone-100 text-[10px] md:text-xs uppercase tracking-[0.6em] transition-all duration-500 font-light">
                            Explorar Coleção Completa
                        </span>
                        <ArrowRight
                            size={18}
                            strokeWidth={1}
                            className="text-stone-600 group-hover:text-stone-100 group-hover:translate-x-3 transition-all duration-500"
                        />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default WineSection;