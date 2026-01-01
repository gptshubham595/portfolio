"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin, ExternalLink, Play } from "lucide-react";
import Image from "next/image";

const experiences = [
    {
        role: "Senior Mobile Developer",
        company: "Oracle",
        period: "Oct 2025 -- Ongoing",
        location: "Bangalore, IN",
        logo: "https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg",
        playStore: "https://play.google.com/store/apps/details?id=org.oraclejet.maxapp&hl=en_IN",
        description: [
            "Architected state machine-based orchestration system managing 5+ parallel workflows.",
            "Implemented WebSocket audio streaming with chunked uploads, retry logic, and background processing handling 100+ concurrent packets.",
            "Engineered audio recording system using Oboe NDK with noise suppression, echo cancellation, and biquadratic filtering, reducing latency by 40%.",
            "Built 20+ screens using Jetpack Compose with MVVM pattern.",
            "Established CI/CD pipeline with BrowserStack and Jenkins with 95% Code Coverage (CoCo).",
        ],
        tech: ["Kotlin", "Oboe NDK", "Jetpack Compose", "WebSocket", "WorkManager", "Jenkins", "ProGuard"],
    },
    {
        role: "Software Development Engineer (Android)",
        company: "OLA Electric",
        period: "July 2022 -- Oct 2025",
        location: "Bangalore, IN",
        logo: "https://images.crunchbase.com/image/upload/b0eb6071274e4a3bb894d657ab7e9f9a",
        playStore: "https://play.google.com/store/apps/details?id=com.olaelectric.companion&hl=en_IN",
        description: [
            "Developed Proximity feature enhancing success rate from 26% to 98% (Contributed to AltBeacon Android library).",
            "Optimized event sequencing & throttling, reducing monitoring costs by 5%.",
            "Developed Megaphone (PATENTED) feature using real-time audio processing (vocal & phase shifting) via Android NDK.",
            "Integrated OLA Maps SDK for real-time tracking & dynamic UI, increasing user engagement by 20%.",
            "Led Koin to Hilt migration & implemented KtLint, reducing loading time from 12s to 7s.",
        ],
        tech: ["Android SDK", "BLE", "NDK", "Hilt", "AR Core", "NSD", "Socket", "ExoPlayer"],
    },
    {
        role: "Research Intern",
        company: "UiT The Arctic University of Norway",
        period: "April 2021 -- July 2021",
        location: "Tromso, NOR",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5qaTMUDaC2la2g__sSzvy4X9H6--2Yt5osw&s",
        description: [
            "Developed algorithms for acoustic microscopy utilizing LabView and MATLAB.",
            "Achieved 40% reduction in scanning time for biological samples.",
            "Worked on synthetic aperture focusing and tilt correction algorithms of 4D time-series scanned objects using ultrasonic.",
        ],
        tech: ["LabView", "MATLAB", "Acoustic Microscopy", "Signal Processing"],
    },
    {
        role: "Software Engineer Team Lead",
        company: "Cueweb",
        period: "Jan 2021 -- April 2021",
        location: "Remote",
        description: [
            "Led a team of 10 members, including an engineering manager, overseeing end-to-end architecture.",
            "Developed and launched 'Magarun', an online multiplayer cryptocurrency game hosted on VPS.",
            "Responsible for client-facing dashboards, API development, admin panels, and crypto payment gateways.",
            "Managed milestones, conducted interviews, and onboarded full-time developers.",
        ],
        tech: ["JavaScript", "NodeJs", "Blockchain", "RethinkDB", "Jenkins", "GitLab"],
    },
];

export default function Experience() {
    return (
        <section id="experience" className="section-padding relative overflow-hidden">
            <div className="max-w-5xl mx-auto px-4">
                <motion.div
                    className="text-center mb-20"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-5xl font-bold font-outfit mb-4 text-gradient">Professional Journey</h2>
                    <p className="text-gray-500 max-w-2xl mx-auto font-light">
                        Architecting high-performance systems and leading engineering initiatives across global technology leaders.
                    </p>
                </motion.div>

                <div className="relative">
                    {/* Vertical Timeline Line */}
                    <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/50 via-purple-500/50 to-transparent z-10" />

                    <div className="space-y-12 ml-8">
                        {experiences.map((exp, idx) => (
                            <div key={idx} className="relative pl-12">
                                {/* Timeline Dot */}
                                <div className="absolute left-[-4px] top-8 w-2 h-2 bg-blue-500 rounded-full border-2 border-black z-20 shadow-[0_0_10px_rgba(59,130,246,0.8)]" />

                                <motion.div
                                    className="flex flex-col gap-8"
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 0.6, ease: "easeOut", delay: idx * 0.1 }}
                                >
                                    {/* Content Card */}
                                    <div className="w-full">
                                        <div className="glass-card group hover:translate-y-[-4px] transition-all duration-300">
                                            <div className="flex flex-col sm:flex-row justify-between items-start mb-6 gap-4">
                                                <div className="flex items-center gap-4">
                                                    {exp.logo && (
                                                        <div className="relative w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center overflow-hidden border border-white/10 p-2 shrink-0 group-hover:border-blue-500/30 transition-colors">
                                                            <img
                                                                src={exp.logo}
                                                                alt={`${exp.company} logo`}
                                                                className="max-w-full max-h-full object-contain filter "
                                                                onError={(e) => {
                                                                    (e.target as HTMLImageElement).style.display = 'none';
                                                                }}
                                                            />
                                                        </div>
                                                    )}
                                                    <div>
                                                        <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-blue-400 transition-colors">{exp.role}</h3>
                                                        <div className="flex flex-wrap items-center gap-3">
                                                            <p className="text-blue-400 font-semibold tracking-wide uppercase text-xs">{exp.company}</p>
                                                            {exp.playStore && (
                                                                <a
                                                                    href={exp.playStore}
                                                                    target="_blank"
                                                                    rel="noopener noreferrer"
                                                                    className="inline-flex items-center gap-1 text-[10px] px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-300 border border-blue-500/20 hover:bg-blue-500/20 transition-all font-mono"
                                                                >
                                                                    <Play className="w-2 h-2 fill-current" /> Live App <ExternalLink className="w-2 h-2 ml-1" />
                                                                </a>
                                                            )}
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="text-left sm:text-right">
                                                    <div className="flex items-center text-gray-500 text-xs font-mono mb-1 sm:justify-end uppercase tracking-widest">
                                                        <Calendar className="w-3 h-3 mr-1" /> {exp.period}
                                                    </div>
                                                    <div className="flex items-center text-gray-500 text-xs font-mono sm:justify-end uppercase tracking-widest">
                                                        <MapPin className="w-3 h-3 mr-1" /> {exp.location}
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="space-y-3 mb-8">
                                                {exp.description.map((item, i) => (
                                                    <div key={i} className="flex gap-3 text-gray-400">
                                                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500/30 mt-2 shrink-0" />
                                                        <p className="text-sm leading-relaxed">{item}</p>
                                                    </div>
                                                ))}
                                            </div>

                                            <div className="pt-6 border-t border-white/5">
                                                <p className="text-[10px] uppercase tracking-widest text-gray-500 font-bold mb-3 font-mono">Core Stack</p>
                                                <div className="flex flex-wrap gap-2">
                                                    {exp.tech.map((t, i) => (
                                                        <span key={i} className="text-[10px] px-2 py-1 rounded-md bg-white/5 text-gray-300 border border-white/5 font-mono">
                                                            {t}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
