"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Twitter, Youtube, ExternalLink } from "lucide-react";
import Image from "next/image";

export default function Hero() {
    const socialLinks = [
        { icon: <Linkedin className="w-5 h-5" />, href: "https://www.linkedin.com/in/shubhamguptaggps", label: "LinkedIn" },
        { icon: <Github className="w-5 h-5" />, href: "https://github.com/gptshubham595/", label: "GitHub" },
        { icon: <Youtube className="w-5 h-5" />, href: "https://www.youtube.com/c/pocexperts", label: "YouTube" },
        { icon: <Mail className="w-5 h-5" />, href: "mailto:gptshubham595@gmail.com", label: "Email" },
    ];

    return (
        <section className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden section-padding">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="z-10 text-center"
            >
                <div className="relative w-40 h-40 mx-auto mb-8 rounded-full overflow-hidden border-4 border-blue-500/20 animate-float">
                    <Image
                        src="/photo.jpeg"
                        alt="Shubham Kumar Gupta"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>

                <motion.h1
                    className="text-5xl md:text-7xl font-bold font-outfit mb-4 text-gradient"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                >
                    Shubham Kumar Gupta
                </motion.h1>

                <motion.p
                    className="text-xl md:text-2xl text-gray-400 font-light mb-8 max-w-2xl mx-auto"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                >
                    Senior Mobile Developer at <span className="text-white font-medium">Oracle</span> | Ex-<span className="text-white font-medium">Ola Electric</span> |
                    <br className="hidden md:block" />
                    <span className="text-blue-400">Technical Leader</span> & <span className="text-purple-400">Research-Driven Problem Solver</span>
                </motion.p>

                <motion.div
                    className="flex gap-4 justify-center items-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                >
                    {socialLinks.map((link, idx) => (
                        <a
                            key={idx}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 glass rounded-full hover:scale-110 transition-transform hover:text-blue-400"
                            aria-label={link.label}
                        >
                            {link.icon}
                        </a>
                    ))}
                </motion.div>
            </motion.div>

            <motion.div
                className="absolute bottom-10 left-1/2 -translate-x-1/2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
            >
                <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center p-2">
                    <motion.div
                        animate={{ y: [0, 12, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5 }}
                        className="w-1 h-1 bg-white rounded-full"
                    />
                </div>
            </motion.div>
        </section>
    );
}
