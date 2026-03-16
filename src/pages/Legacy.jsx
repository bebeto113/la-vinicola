import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Sparkles, Heart, Zap, GraduationCap } from 'lucide-react';

const Legacy = () => {
    // Variantes para animação de entrada
    const fadeInUp = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.22, 1, 0.36, 1] } }
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="bg-[#0a0a0a] text-stone-100 min-h-screen"
        >
            {/* HERO DA HISTÓRIA */}
            <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1560493676-04071c5f467b?auto=format&fit=crop&q=80"
                        className="w-full h-full object-cover opacity-30"
                        alt="Antiga Adega"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0a0a0a]" />
                </div>

                <div className="relative z-10 text-center px-6">
                    <motion.span
                        initial={{ opacity: 0, tracking: "0.2em" }}
                        animate={{ opacity: 1, tracking: "0.8em" }}
                        transition={{ duration: 1.5 }}
                        className="text-[10px] uppercase text-stone-500 block mb-6"
                    >
                        Desde 2012
                    </motion.span>
                    <h1 className="text-5xl md:text-7xl font-serif italic font-extralight tracking-tight">
                        Nossa <span className="not-italic">História</span>
                    </h1>
                </div>
            </section>

            {/* A ORIGEM - PROSECCO EXPRESS */}
            <section className="py-24 px-6 md:px-20 max-w-6xl mx-auto">
                <div className="grid md:grid-cols-2 gap-20 items-center">
                    <motion.div
                        variants={fadeInUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <h2 className="text-stone-500 text-[10px] tracking-[0.5em] uppercase font-medium">A Gênese</h2>
                        <h3 className="text-3xl md:text-4xl font-serif italic font-light leading-snug">
                            Da paixão italiana ao <br /> paladar brasileiro.
                        </h3>
                        <p className="text-stone-400 font-light leading-relaxed text-sm md:text-base">
                            Tudo começou em 2012. O que era uma paixão pessoal transformou-se na <span className="text-stone-200">Prosecco Express</span>.
                            Nossa missão era clara: selecionar e importar rótulos italianos exclusivos, trazendo a alma da Itália para o Brasil.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.2 }}
                        className="relative aspect-[4/5] border border-white/5 p-4"
                    >
                        <img
                            src="https://images.unsplash.com/photo-1506377247377-2a5b3b0ca7df?auto=format&fit=crop&q=80"
                            className="w-full h-full object-cover grayscale opacity-60 hover:grayscale-0 transition-all duration-1000"
                            alt="Vinhedos na Itália"
                        />
                    </motion.div>
                </div>
            </section>

            {/* A EVOLUÇÃO - LINHA DO TEMPO DISCRETA */}
            <section className="py-24 bg-[#0d0d0d] border-y border-white/5">
                <div className="max-w-4xl mx-auto px-6">
                    <div className="flex flex-col gap-24 relative">
                        {/* Linha vertical decorativa */}
                        <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-[1px] bg-stone-800" />

                        {/* Evento 1 */}
                        <motion.div
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: -30 }}
                            className="relative md:w-1/2 pr-12 md:text-right self-start"
                        >
                            <span className="text-2xl font-serif italic text-stone-500 mb-2 block">2014</span>
                            <h4 className="text-lg text-stone-200 mb-2 uppercase tracking-widest font-light">Expansão Digital</h4>
                            <p className="text-stone-500 text-xs leading-relaxed">Lançamento do nosso e-commerce e do primeiro Wine Bar próprio para atendimento exclusivo ao público.</p>
                        </motion.div>

                        {/* Evento 2 */}
                        <motion.div
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: 30 }}
                            className="relative md:w-1/2 pl-12 self-end"
                        >
                            <span className="text-2xl font-serif italic text-stone-500 mb-2 block">2016</span>
                            <h4 className="text-lg text-stone-200 mb-2 uppercase tracking-widest font-light">Rede LA Vinícola</h4>
                            <p className="text-stone-500 text-xs leading-relaxed">Formatamos um novo modelo de negócios. Nascia a primeira franquia de Wine Bar do mercado brasileiro.</p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* FILOSOFIA - O PORQUÊ E O COMO */}
            <section className="py-32 px-6 md:px-20 max-w-7xl mx-auto">
                <div className="text-center mb-24">
                    <Quote className="mx-auto text-stone-800 mb-8" size={40} strokeWidth={1} />
                    <h2 className="text-3xl md:text-5xl font-serif italic font-extralight text-stone-200 max-w-3xl mx-auto">
                        "Acreditamos que o mercado deve enxergar, pensar e promover o vinho de maneira diferente."
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 gap-16">
                    {/* POR QUE */}
                    <motion.div
                        whileInView={{ opacity: 1, y: 0 }}
                        initial={{ opacity: 0, y: 30 }}
                        className="bg-white/5 backdrop-blur-sm p-12 border border-white/5 rounded-sm"
                    >
                        <Heart className="text-stone-500 mb-6" size={24} strokeWidth={1} />
                        <h3 className="text-xl font-serif italic text-stone-100 mb-6 tracking-wide">Por que?</h3>
                        <p className="text-stone-400 font-light leading-relaxed text-sm">
                            Porque amamos vinhos e temos a coragem de desafiar o tradicionalismo estéril.
                            O vinho deve ser liberdade, não regra.
                        </p>
                    </motion.div>

                    {/* COMO */}
                    <motion.div
                        whileInView={{ opacity: 1, y: 0 }}
                        initial={{ opacity: 0, y: 30 }}
                        className="bg-white/5 backdrop-blur-sm p-12 border border-white/5 rounded-sm"
                    >
                        <Zap className="text-stone-500 mb-6" size={24} strokeWidth={1} />
                        <h3 className="text-xl font-serif italic text-stone-100 mb-6 tracking-wide">Como?</h3>
                        <p className="text-stone-400 font-light leading-relaxed text-sm">
                            Colocando você como protagonista. Desencorajando rituais que criam barreiras
                            e incentivando experiências educativas, sensoriais e, acima de tudo, divertidas.
                        </p>
                    </motion.div>
                </div>

                {/* OS PILARES (O Protagonismo) */}
                <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8">
                    {[
                        { icon: <Sparkles size={20} />, text: "Produtos que inspiram" },
                        { icon: <Zap size={20} />, text: "Publicidade Descomplicada" },
                        { icon: <GraduationCap size={20} />, text: "Educação Sensorial" },
                        { icon: <Heart size={20} />, text: "Foco no Protagonista" }
                    ].map((pilar, index) => (
                        <div key={index} className="flex flex-col items-center text-center gap-4 group">
                            <div className="text-stone-700 group-hover:text-stone-400 transition-colors duration-500">
                                {pilar.icon}
                            </div>
                            <span className="text-[9px] uppercase tracking-[0.3em] text-stone-500 font-light leading-relaxed">
                                {pilar.text}
                            </span>
                        </div>
                    ))}
                </div>
            </section>
        </motion.div>
    );
};

export default Legacy;