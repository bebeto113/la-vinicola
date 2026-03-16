import React from 'react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';

const wines = [
    {
        id: 1,
        name: "Ruby 1932",
        description: "Tranquilos, médio corpo, secos e frescos.",
        image: "URL_DA_SUA_IMAGEM_1",
        tag: "Clássico"
    },
    {
        id: 2,
        name: "Violet 1932",
        description: "Intenso, notas florais e final persistente.",
        image: "URL_DA_SUA_IMAGEM_2",
        tag: "Reserva"
    },
    {
        id: 3,
        name: "Blueberry 1932",
        description: "Frutado, acidez vibrante e equilibrado.",
        image: "URL_DA_SUA_IMAGEM_3",
        tag: "Premium"
    }
];

const WineSection = () => {
    return (
        <section className="bg-[#0a0a0a] py-20 md:py-24 px-4 md:px-10 border-t border-white/5">
            <div className="max-w-7xl mx-auto">

                <div className="text-center mb-12 md:mb-16">
                    <span className="text-[10px] uppercase tracking-[0.5em] text-stone-500 block mb-3">
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
                                className="min-w-[85%] md:min-w-[320px] lg:min-w-[350px] snap-center bg-white/[0.02] border border-white/10 overflow-hidden transition-all duration-500 hover:border-white/20"
                            >
                                <div className="aspect-[4/5] md:aspect-[16/11] overflow-hidden bg-stone-900 relative">
                                    <div className="absolute inset-0 bg-black/20 z-10" />
                                    <img
                                        src={wine.image}
                                        alt={wine.name}
                                        className="w-full h-full object-cover opacity-90 hover:scale-105 transition-transform duration-700"
                                    />
                                </div>

                                <div className="p-8 text-center flex flex-col items-center">
                                    <span className="text-[9px] uppercase tracking-[0.4em] text-stone-500 mb-2 block">
                                        {wine.tag}
                                    </span>
                                    <h3 className="text-xl md:text-2xl font-serif italic text-stone-200 mb-4 font-light">
                                        {wine.name}
                                    </h3>
                                    <div className="h-[1px] w-8 bg-stone-500/30 mb-4"></div>
                                    <p className="text-stone-400 text-[11px] md:text-xs leading-relaxed font-light px-2 opacity-80 min-h-[40px]">
                                        {wine.description}
                                    </p>
                                    <button className="mt-6 text-stone-300 text-[9px] md:text-[10px] uppercase tracking-[0.3em] border-b border-stone-500/30 pb-1 hover:text-white hover:border-white transition-all">
                                        Ver Detalhes
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    <button className="absolute left-[-40px] top-[40%] -translate-y-1/2 p-3 text-stone-600 hover:text-stone-200 transition-all opacity-0 group-hover:opacity-100 hidden xl:block">
                        <ChevronLeft size={32} strokeWidth={1} />
                    </button>
                    <button className="absolute right-[-40px] top-[40%] -translate-y-1/2 p-3 text-stone-600 hover:text-stone-200 transition-all opacity-0 group-hover:opacity-100 hidden xl:block">
                        <ChevronRight size={32} strokeWidth={1} />
                    </button>
                </div>

                {/* BOTÃO VEJA MAIS CENTRALIZADO */}
                <div className="mt-16 md:mt-20 flex flex-col items-center">
                    <div className="h-[1px] w-12 bg-gradient-to-r from-transparent via-stone-800 to-transparent mb-8" />

                    <a
                        href="/colecoes"
                        className="group flex flex-col items-center gap-3 no-underline"
                    >
                        <span className="text-stone-500 group-hover:text-stone-200 text-[10px] md:text-xs uppercase tracking-[0.6em] transition-colors duration-500 font-light">
                            Explorar Coleção Completa
                        </span>

                        {/* Ícone sutil que se move no hover */}
                        <ArrowRight
                            size={16}
                            strokeWidth={1}
                            className="text-stone-600 group-hover:text-stone-200 group-hover:translate-x-2 transition-all duration-500"
                        />
                    </a>
                </div>

            </div>
        </section>
    );
};

export default WineSection;