import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronDown } from 'lucide-react';
// 1. IMPORTAR O LINK
import { Link } from 'react-router-dom';

// 2. CRIAR UM LINK ANIMADO PARA O SUBMENU
const MotionLink = motion(Link);

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [isColheitaExpanded, setIsColheitaExpanded] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
            setIsColheitaExpanded(false);
        }
    }, [isOpen]);

    const menuItems = [
        { name: 'O Legado', subtitle: 'Nossa História', to: '/legado' }, // Rota definida
        {
            name: 'A Colheita',
            subtitle: 'Vinhos de Autor',
            hasSubmenu: true,
            subItems: [
                { name: 'Senses', desc: 'A história por trás da bebida', to: '/senses' },
                { name: 'Radar Sensorial', desc: 'Descreva vinhos com precisão', to: '/radar' },
                { name: 'Você Protagonista', desc: 'Escolhas seguras e apaixonadas', to: '/protagonista' },
                { name: 'Vinho & Saúde', desc: 'Os benefícios do consumo', to: '/saude' }
            ]
        },
        { name: 'A Mesa', subtitle: 'Gastronomia Sensorial', to: '/gastronomia' },
        { name: 'O Refúgio', subtitle: 'Experiências & Reservas', to: '/experiencias' },
        { name: 'Contato', subtitle: 'Fale Conosco', to: '/contato' },
    ];

    const sidebarVariants = {
        closed: { x: '-100%', transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } },
        opened: { x: 0, transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }
    };

    return (
        <>
            <header className={`
                fixed top-0 w-full z-[60] px-6 md:px-12 transition-all duration-500 flex justify-between items-center text-white
                ${scrolled
                    ? 'py-4 md:py-6 bg-stone-950/40 backdrop-blur-md border-b border-white/5'
                    : 'py-8 md:py-10 bg-transparent'}
            `}>
                <button onClick={() => setIsOpen(true)} className="group flex items-center gap-3 md:gap-4">
                    <div className="flex flex-col gap-1.5">
                        <span className="w-6 md:w-8 h-[1px] bg-white" />
                        <span className="w-4 md:w-5 h-[1px] bg-white transition-all group-hover:w-8" />
                    </div>
                    <span className="text-[9px] md:text-[10px] uppercase tracking-[0.4em] font-light">Menu</span>
                </button>

                <div className="md:absolute md:left-1/2 md:-translate-x-1/2 text-right md:text-center">
                    {/* LOGO TAMBÉM PODE SER UM LINK PARA A HOME */}
                    <Link to="/" className="block">
                        <span className="block text-sm md:text-xl tracking-[0.5em] md:tracking-[0.8em] font-light uppercase leading-none">
                            LA Vinicola
                        </span>
                        <span className="text-[8px] md:text-[9px] tracking-[0.6em] uppercase font-light block mt-1 opacity-60">• 2012 •</span>
                    </Link>
                </div>

                <button className="hidden md:block text-[10px] uppercase tracking-[0.4em] text-white/70 border-b border-white/20 pb-1 hover:border-white transition-all">
                    Reservar
                </button>
            </header>

            <AnimatePresence>
                {isOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                            className="fixed inset-0 bg-stone-950/60 backdrop-blur-sm z-[70]"
                        />

                        <motion.div
                            variants={sidebarVariants}
                            initial="closed"
                            animate="opened"
                            exit="closed"
                            className="custom-scrollbar fixed top-0 left-0 h-full w-[90%] md:w-[480px] bg-stone-900/95 backdrop-blur-2xl z-[80] p-10 md:p-12 flex flex-col text-stone-100 shadow-2xl overflow-y-auto"
                        >
                            <button onClick={() => setIsOpen(false)} className="self-end group p-2 border border-white/10 rounded-full mb-8">
                                <X size={18} className="text-white/50 group-hover:text-white" />
                            </button>

                            <nav className="flex flex-col gap-6">
                                {menuItems.map((item, i) => (
                                    <div key={item.name} className="flex flex-col">

                                        {/* LOGICA DO ITEM PRINCIPAL: 
                                            Se tiver submenu, é um botão. 
                                            Se não tiver, é um LINK direto. */}
                                        {item.hasSubmenu ? (
                                            <button
                                                onClick={() => setIsColheitaExpanded(!isColheitaExpanded)}
                                                className="group flex flex-col items-start text-left"
                                            >
                                                <span className="text-[9px] uppercase tracking-[0.3em] text-stone-500 mb-1">
                                                    {item.subtitle}
                                                </span>
                                                <div className="flex items-center gap-4">
                                                    <span className={`text-2xl md:text-3xl font-serif font-light tracking-wide transition-all ${isColheitaExpanded ? 'italic text-stone-400' : 'group-hover:italic'}`}>
                                                        {item.name}
                                                    </span>
                                                    <motion.div animate={{ rotate: isColheitaExpanded ? 180 : 0 }}>
                                                        <ChevronDown size={16} className="text-stone-600" />
                                                    </motion.div>
                                                </div>
                                            </button>
                                        ) : (
                                            <Link
                                                to={item.to}
                                                onClick={() => setIsOpen(false)} // Fecha o menu ao clicar
                                                className="group flex flex-col items-start text-left"
                                            >
                                                <span className="text-[9px] uppercase tracking-[0.3em] text-stone-500 mb-1">
                                                    {item.subtitle}
                                                </span>
                                                <span className="text-2xl md:text-3xl font-serif font-light tracking-wide transition-all group-hover:italic">
                                                    {item.name}
                                                </span>
                                            </Link>
                                        )}

                                        {/* SUBMENU "A COLHEITA" */}
                                        {item.hasSubmenu && (
                                            <AnimatePresence>
                                                {isColheitaExpanded && (
                                                    <motion.div
                                                        initial={{ height: 0, opacity: 0 }}
                                                        animate={{ height: 'auto', opacity: 1 }}
                                                        exit={{ height: 0, opacity: 0 }}
                                                        transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
                                                        className="overflow-hidden"
                                                    >
                                                        <div className="grid grid-cols-1 gap-4 pt-6 pb-4 pl-4 border-l border-white/5 mt-2">
                                                            {item.subItems.map((sub) => (
                                                                <MotionLink // USANDO O COMPONENTE ANIMADO
                                                                    key={sub.name}
                                                                    to={sub.to} // Usando a rota definida no array
                                                                    onClick={() => setIsOpen(false)} // Fecha o menu
                                                                    initial={{ x: -10, opacity: 0 }}
                                                                    animate={{ x: 0, opacity: 1 }}
                                                                    className="group/sub flex flex-col"
                                                                >
                                                                    <span className="text-sm font-serif tracking-wide text-stone-200 group-hover/sub:text-white transition-colors">
                                                                        {sub.name}
                                                                    </span>
                                                                </MotionLink>
                                                            ))}
                                                        </div>
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        )}
                                    </div>
                                ))}
                            </nav>

                            <div className="mt-auto border-t border-white/5 pt-8">
                                <div className="text-[9px] tracking-widest text-stone-500 uppercase leading-loose">
                                    <p>Vale dos Vinhedos, RS</p>
                                    <p>@lavinicola_oficial</p>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
};

export default Header;