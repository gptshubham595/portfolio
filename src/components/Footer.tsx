"use client";

import { motion } from "framer-motion";
import { Linkedin, Github, Mail, Youtube, ArrowUp, FileText } from "lucide-react";

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <footer className="border-t border-white/5 bg-black/40 backdrop-blur-md">
            <div className="max-w-6xl mx-auto px-6 py-12">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="text-center md:text-left">
                        <h2 className="text-2xl font-bold font-outfit text-white mb-2">Shubham Kumar Gupta</h2>
                        <p className="text-gray-500 text-sm max-w-xs">
                            Pushing the boundaries of mobile performance and security, one frame at a time.
                        </p>
                    </div>

                    <div className="flex flex-col items-center md:items-end gap-4">
                        <div className="flex gap-4">
                            <a href="https://bit.ly/resumeshubhamola" target="_blank" rel="noopener noreferrer" title="Resume" className="p-2 glass hover:text-blue-400 transition-colors">
                                <FileText className="w-5 h-5" />
                            </a>
                            <a href="https://www.linkedin.com/in/shubhamguptaggps" target="_blank" rel="noopener noreferrer" title="LinkedIn" className="p-2 glass hover:text-blue-400 transition-colors">
                                <Linkedin className="w-5 h-5" />
                            </a>
                            <a href="https://github.com/gptshubham595/" target="_blank" rel="noopener noreferrer" title="GitHub" className="p-2 glass hover:text-gray-400 transition-colors">
                                <Github className="w-5 h-5" />
                            </a>
                            <a href="mailto:gptshubham595@gmail.com" title="Email" className="p-2 glass hover:text-red-400 transition-colors">
                                <Mail className="w-5 h-5" />
                            </a>
                            <a href="https://www.youtube.com/c/pocexperts" target="_blank" rel="noopener noreferrer" title="YouTube" className="p-2 glass hover:text-red-600 transition-colors">
                                <Youtube className="w-5 h-5" />
                            </a>
                        </div>
                        <p className="text-gray-600 text-[10px] uppercase tracking-widest font-mono">
                            Designed & Built with Next.js © 2026
                        </p>
                    </div>
                </div>

                <div className="mt-12 flex justify-center">
                    <button
                        onClick={scrollToTop}
                        className="group p-4 rounded-full glass hover:bg-white/5 transition-all"
                        aria-label="Scroll to top"
                    >
                        <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
                    </button>
                </div>
            </div>
        </footer>
    );
}
