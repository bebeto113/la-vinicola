import React from 'react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { ruby, blueberry, violet } from "../../assets/ColectionImg/index.js";

const wines = [
    {
        id: 1,
        name: "Ruby 1932",
        description: "Tranquilos, médio corpo, secos e frescos.",
        image: ruby,
        tag: "Clássico"
    },
    {
        id: 2,
        name: "Violet 1932",
        description: "Intenso, notas florais e final persistente.",
        image: violet,
        tag: "Reserva"
    },
    {
        id: 3,
        name: "Blueberry 1932",
        description: "Frutado, acidez vibrante e equilibrado.",
        image: blueberry,
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
                                className="min-w-[85%] md:min-w-[320px] lg:min-w-[380px] snap-center bg-[#111] border border-white/5 overflow-hidden transition-all duration-700 hover:border-white/20 group/card"
                            >
                                {/* 
                                   CONTAINER DA IMAGEM:
                                   Aumentamos o padding (p-12) e usamos object-contain.
                                   Isso faz com que a garrafa fique menor e mais nítida.
                                */}
                                <div className="aspect-[3/4] overflow-hidden bg-[#161616] relative flex items-center justify-center p-12">
                                    {/* Luz de fundo sutil para destacar a garrafa menor */}
                                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/5 via-transparent to-transparent z-0" />

                                    <img
                                        src={wine.image}
                                        alt={wine.name}
                                        /* 
                                           object-contain: Garante que a imagem inteira apareça sem cortes ou zoom.
                                           h-[85%]: Limita a altura para ela não encostar nas bordas.
                                        */
                                        className="relative z-10 h-[85%] w-auto object-contain opacity-90 group-hover/card:opacity-100 group-hover/card:scale-105 transition-all duration-1000 ease-out shadow-2xl"
                                    />
                                </div>

                                <div className="p-8 text-center flex flex-col items-center bg-[#0d0d0d]">
                                    <span className="text-[9px] uppercase tracking-[0.4em] text-stone-500 mb-2 block font-light">
                                        {wine.tag}
                                    </span>
                                    <h3 className="text-xl md:text-2xl font-serif italic text-stone-200 mb-4 font-light tracking-wide">
                                        {wine.name}
                                    </h3>

                                    <div className="h-[1px] w-8 bg-stone-800 mb-5 group-hover/card:w-12 transition-all duration-500"></div>

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

                    {/* Setas de Navegação */}
                    <button className="absolute left-[-50px] top-[45%] -translate-y-1/2 p-3 text-stone-700 hover:text-stone-200 transition-all opacity-0 group-hover:opacity-100 hidden xl:block">
                        <ChevronLeft size={40} strokeWidth={1} />
                    </button>
                    <button className="absolute right-[-50px] top-[45%] -translate-y-1/2 p-3 text-stone-700 hover:text-stone-200 transition-all opacity-0 group-hover:opacity-100 hidden xl:block">
                        <ChevronRight size={40} strokeWidth={1} />
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