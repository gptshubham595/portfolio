"use client";

import { motion } from "framer-motion";
import { Shield, Youtube, Trophy, ExternalLink, Bug } from "lucide-react";

const recognitions = [
    {
        org: "CERT.europa",
        achievement: "Hall of Fame - Security Researcher",
        link: "https://www.cert.europa.eu/hall-of-fame",
        color: "from-blue-600 to-indigo-600"
    },
    {
        org: "Hoorn.nl",
        achievement: "Responsible Disclosure Hall of Fame",
        link: "https://www.hoorn.nl/responsibledisclosure",
        color: "from-amber-500 to-orange-600"
    },
    {
        org: "Google/Flipkart",
        achievement: "Proven Bug Hunter (Various security findings)",
        link: "#",
        color: "from-red-500 to-rose-600"
    }
];

export default function Security() {
    return (
        <section id="security" className="section-padding">
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-col md:flex-row gap-12 items-center">
                    <motion.div
                        className="flex-1"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <Shield className="w-8 h-8 text-red-500" />
                            <h2 className="text-4xl font-bold font-outfit">Security & Bug Hunting</h2>
                        </div>
                        <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                            With a security-first mindset, I have identified vulnerabilities in major platforms.
                            My expertise in finding root causes and securing applications is a core part of
                            my software engineering philosophy.
                        </p>

                        <div className="space-y-4">
                            {recognitions.map((rec, idx) => (
                                <a
                                    key={idx}
                                    href={rec.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="glass-card flex items-center justify-between p-4 group hover:border-red-500/20"
                                >
                                    <div className="flex items-center gap-4">
                                        <div className={`p-2 rounded-lg bg-gradient-to-br ${rec.color}`}>
                                            <Trophy className="w-5 h-5 text-white" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-white">{rec.org}</h4>
                                            <p className="text-sm text-gray-500">{rec.achievement}</p>
                                        </div>
                                    </div>
                                    <ExternalLink className="w-4 h-4 text-gray-600 group-hover:text-red-500" />
                                </a>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        className="flex-1 w-full"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="glass p-8 relative overflow-hidden group border-red-500/10">
                            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                <Youtube className="w-32 h-32 text-red-600" />
                            </div>

                            <div className="relative z-10 text-center md:text-left">
                                <div className="flex items-center justify-center md:justify-start gap-2 mb-4 text-red-500">
                                    <Youtube className="w-6 h-6" />
                                    <span className="font-mono text-sm tracking-widest uppercase">Content Creator</span>
                                </div>
                                <h3 className="text-3xl font-bold text-white mb-4">POCExperts Channel</h3>
                                <p className="text-gray-400 mb-8">
                                    I share Proof of Concept (POC) security research, exploring advanced concepts
                                    in mobile security, reverse engineering, and bug hunting.
                                </p>
                                <a
                                    href="https://www.youtube.com/c/pocexperts"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full transition-all hover:scale-105"
                                >
                                    Watch POCExperts <Youtube className="w-5 h-5" />
                                </a>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
