import React from 'react';
import { Wine, Award, Download } from 'lucide-react';

const GastronomySection = () => {
    const guides = [
        {
            id: 1,
            title: "A Arte da Harmonização",
            description: "Equilibre sabores e aromas entre vinhos e alta gastronomia com a maestria de um especialista.",
            icon: <Wine strokeWidth={1} size={32} />,
            label: "Guia de Harmonização"
        },
        {
            id: 2,
            title: "Segredos do Sommelier",
            description: "Aprofunde seus conhecimentos e descubra as combinações perfeitas para o seu paladar.",
            icon: <Award strokeWidth={1} size={32} />,
            label: "Masterclass PDF"
        }
    ];

    return (
        <section className="bg-[#0a0a0a] py-24 px-6 md:px-12 relative overflow-hidden">
            {/* Detalhe de luz ambiente no fundo para dar profundidade */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-stone-500/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-6xl mx-auto relative z-10">
                {/* Texto Reduzido e Elegante */}
                <div className="text-center mb-20 space-y-4">
                    <span className="text-[10px] uppercase tracking-[0.8em] text-stone-500 font-light">
                        Experiência Sensorial
                    </span>
                    <h2 className="text-3xl md:text-5xl font-serif italic text-stone-100 font-extralight tracking-tight">
                        Vinhos & Gastronomia
                    </h2>
                    <p className="text-stone-400 text-xs md:text-sm font-light max-w-xl mx-auto leading-relaxed tracking-wide">
                        Não é preciso ser um sommelier para viver a perfeição. <br className="hidden md:block" />
                        Desvende a alquimia dos sabores de maneira intuitiva e memorável.
                    </p>
                </div>

                {/* Cards de Download */}
                <div className="grid md:grid-cols-2 gap-8 md:gap-12">
                    {guides.map((guide) => (
                        <div
                            key={guide.id}
                            className="group relative bg-[#121212]/50 backdrop-blur-sm border border-white/5 p-10 md:p-14 text-center flex flex-col items-center gap-6 hover:bg-[#161616]/80 transition-all duration-700 cursor-pointer"
                        >
                            {/* Ícone Minimalista Estilizado */}
                            <div className="text-stone-400 group-hover:text-stone-100 transition-colors duration-500 transform group-hover:scale-110">
                                {guide.icon}
                            </div>

                            <div className="space-y-3">
                                <span className="text-[9px] uppercase tracking-[0.4em] text-stone-600 font-medium">
                                    {guide.label}
                                </span>
                                <h4 className="text-xl md:text-2xl font-serif text-stone-100 italic font-light">
                                    {guide.title}
                                </h4>
                                <p className="text-stone-500 text-[11px] md:text-xs leading-relaxed max-w-[280px] mx-auto font-light">
                                    {guide.description}
                                </p>
                            </div>

                            {/* Botão de Download Refinado */}
                            <button className="mt-4 flex items-center gap-3 text-[10px] uppercase tracking-[0.4em] text-stone-300 group-hover:text-white transition-all">
                                <span className="w-8 h-[1px] bg-stone-700 group-hover:w-12 group-hover:bg-white transition-all" />
                                Baixar PDF
                                <Download size={14} strokeWidth={1} className="opacity-40 group-hover:opacity-100" />
                            </button>

                            {/* Detalhe de borda que brilha no hover */}
                            <div className="absolute inset-0 border border-white/0 group-hover:border-white/10 transition-all duration-700 pointer-events-none" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default GastronomySection;