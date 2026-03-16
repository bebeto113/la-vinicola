import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Facebook, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const footerLinks = [
        { title: "Navegação", links: ["O Legado", "A Colheita", "Gastronomia", "Experiências"] },
        { title: "Reservas", links: ["Restaurante", "Degustação Privada", "Eventos", "Boutique"] },
        { title: "Suporte", links: ["Privacidade", "Termos de Uso", "Imprensa", "Carreiras"] }
    ];

    return (
        <footer className="bg-[#080808] pt-24 pb-12 px-6 md:px-20 border-t border-white/5 relative overflow-hidden">
            {/* Detalhe Visual ao fundo (Logo gigante com opacidade mínima) */}
            <div className="absolute -bottom-10 -right-10 pointer-events-none select-none">
                <h2 className="text-[15vw] font-serif italic text-white/[0.02] leading-none whitespace-nowrap">
                    LA Vinícola
                </h2>
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-20">

                    {/* Coluna 1: Branding & Newsletter */}
                    <div className="md:col-span-1 space-y-8">
                        <div>
                            <span className="text-xl tracking-[0.6em] font-light text-white uppercase">
                                LA Vinícola
                            </span>
                            <p className="text-[9px] tracking-[0.4em] uppercase text-stone-600 mt-2 italic font-light">
                                Herança & Terroir desde 2012
                            </p>
                        </div>

                        <div className="space-y-4">
                            <p className="text-[10px] uppercase tracking-widest text-stone-400 font-light leading-relaxed">
                                Receba convites exclusivos para safras limitadas e eventos.
                            </p>
                            <div className="flex border-b border-stone-800 pb-2 group">
                                <input
                                    type="email"
                                    placeholder="Seu e-mail"
                                    className="bg-transparent text-xs text-white placeholder:text-stone-700 focus:outline-none w-full font-light"
                                />
                                <button className="text-stone-500 hover:text-white transition-colors">
                                    <Mail size={16} strokeWidth={1} />
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Colunas 2, 3 e 4: Links dinâmicos */}
                    {footerLinks.map((section) => (
                        <div key={section.title} className="space-y-6">
                            <h4 className="text-[10px] uppercase tracking-[0.5em] text-white font-medium">
                                {section.title}
                            </h4>
                            <ul className="space-y-4">
                                {section.links.map((link) => (
                                    <li key={link}>
                                        <a href="#" className="text-stone-500 text-[11px] md:text-xs uppercase tracking-widest hover:text-white transition-colors font-light">
                                            {link}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Informações de Contato / Localização */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-10 border-t border-white/5 items-center">
                    <div className="flex items-center gap-3 text-stone-500 text-[10px] tracking-widest uppercase font-light">
                        <MapPin size={14} strokeWidth={1} />
                        Vale dos Vinhedos, Bento Gonçalves - RS
                    </div>
                    <div className="flex items-center gap-3 text-stone-500 text-[10px] tracking-widest uppercase font-light justify-center">
                        <Phone size={14} strokeWidth={1} />
                        +55 (54) 9999-9999
                    </div>

                    {/* Redes Sociais */}
                    <div className="flex gap-6 md:justify-end justify-center">
                        <a href="#" className="text-stone-500 hover:text-white transition-colors">
                            <Instagram size={18} strokeWidth={1} />
                        </a>
                        <a href="#" className="text-stone-500 hover:text-white transition-colors">
                            <Facebook size={18} strokeWidth={1} />
                        </a>
                    </div>
                </div>

                {/* Copyright */}
                <div className="mt-12 flex flex-col md:flex-row justify-between items-center gap-4 text-stone-700 text-[8px] md:text-[9px] uppercase tracking-[0.4em] font-light">
                    <p>© {currentYear} LA Vinícola. Todos os direitos reservados.</p>
                    <div className="flex gap-8">
                        <span className="hover:text-stone-500 cursor-pointer">Consumo Responsável</span>
                        <span className="hover:text-stone-500 cursor-pointer italic">Handcrafted by Luxury Design</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;