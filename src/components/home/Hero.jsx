import React, { useRef } from 'react'; // 1. Importar o useRef
import { motion } from 'framer-motion';
import WineSection from './WineSection';
import GastronomySection from './GastronomySection';
import SectionSeparator from '../ui/SectionSeparator';

const Hero = () => {
    // 2. Criar a referência para a seção de vinhos
    const wineSectionRef = useRef(null);

    // 3. Função para executar o scroll suave
    const scrollToWines = () => {
        wineSectionRef.current?.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    };

    return (
        <>
            <section className="relative h-screen w-full overflow-hidden bg-[#0a0a0a] flex items-center justify-center">
                <motion.div
                    initial={{ scale: 1.15 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 10, ease: "easeOut" }}
                    className="absolute inset-0 z-0"
                >
                    <img
                        src="https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&q=90"
                        alt="Luxury Wine"
                        className="w-full h-full object-cover opacity-40"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-[#0a0a0a] via-transparent to-[#0a0a0a]/50" />
                </motion.div>

                <div className="relative z-10 text-center w-full px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
                        className="flex flex-col items-center"
                    >
                        <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-48 h-48 bg-stone-500/10 rounded-full blur-[80px] pointer-events-none" />

                        <h1 className="text-stone-100 font-serif text-4xl md:text-6xl tracking-[0.15em] font-extralight italic opacity-90 leading-tight">
                            O tempo em <br />
                            <span className="not-italic">silêncio.</span>
                        </h1>

                        <h3 className="mt-6 text-stone-400 font-light text-[10px] md:text-xs uppercase tracking-[0.5em] max-w-[280px] leading-relaxed">
                            Experiência <span className="italic">exclusiva</span> na terra do sol
                        </h3>

                        <div className="flex flex-col items-center">
                            <div className="h-12 md:hidden md:h-[60px] w-[1px] my-8 bg-gradient-to-b from-transparent via-stone-500 to-transparent opacity-40" />

                            {/* 4. Adicionar o evento de clique no botão */}
                            <motion.button
                                onClick={scrollToWines}
                                whileTap={{ scale: 0.95 }}
                                whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.05)" }}
                                className="px-10 py-4 md:mt-10 border border-white/10 text-[9px] md:text-[10px] uppercase tracking-[0.6em] text-stone-300 backdrop-blur-sm transition-all"
                            >
                                Nossa Coleção
                            </motion.button>
                        </div>
                    </motion.div>
                </div>

                {/* Paginação e Rodapé do Hero */}
                <div className="absolute bottom-12 w-full px-12 flex justify-between items-end z-20">
                    <div className="hidden md:block">
                        <p className="text-[9px] tracking-[0.4em] uppercase text-stone-500 max-w-[180px] leading-loose">
                            Colheita selecionada • 2024
                        </p>
                    </div>

                    <div className="flex gap-4 items-center">
                        <span className="text-[10px] text-stone-200 tracking-tighter">01</span>
                        <div className="w-20 h-[1px] bg-white/10 relative">
                            <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: "40%" }}
                                transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
                                className="absolute h-full bg-white/40"
                            />
                        </div>
                        <span className="text-[10px] text-stone-500 tracking-tighter">04</span>
                    </div>
                </div>

                <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
            </section>

            {/* 5. Envolver a Seção de Vinhos com a Ref e adicionar scroll-margin-top (scroll-mt-20) */}
            <div ref={wineSectionRef} className="scroll-mt-24">
                <WineSection />
            </div>

            <SectionSeparator />

            <div className="scroll-mt-24">
                <GastronomySection />
            </div>
        </>
    );
};

export default Hero;

