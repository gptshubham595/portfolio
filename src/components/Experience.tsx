"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const experiences = [
    {
        role: "Senior Mobile Developer",
        company: "Oracle",
        period: "Oct 2025 -- Ongoing",
        location: "Bangalore, IN",
        logo: "https://play-lh.googleusercontent.com/rN-R4kF0D2T1Q4Wv_JvXvI0U_M3l-P2B5Q-z-mGv8-D0V1g0-V_9Y9Q-8-0V-V-V=w240-h480-rw",
        description: [
            "Architected state machine-based orchestration system managing 5+ parallel workflows.",
            "Implemented WebSocket audio streaming with chunked uploads and background processing for 100+ concurrent packets.",
            "Engineered audio recording system using Oboe NDK, reducing latency by 40%.",
            "Built 20+ screens using Jetpack Compose and MVVM.",
        ],
        tech: ["Kotlin", "NDK", "Jetpack Compose", "WebSocket", "Hilt"],
    },
    {
        role: "Software Development Engineer (Android)",
        company: "OLA Electric",
        period: "July 2022 -- Oct 2025",
        location: "Bangalore, IN",
        logo: "https://play-lh.googleusercontent.com/qR-R4kF0D2T1Q4Wv_JvXvI0U_M3l-P2B5Q-z-mGv8-D0V1g0-V_9Y9Q-8-0V-V-V=w240-h480-rw",
        description: [
            "Enhanced proximity success rate from 26% to 98%, solving complex BLE edge cases.",
            "Developed Megaphone (PATENTED) feature using real-time audio processing via Android NDK.",
            "Re-architected the app (Koin to Hilt transition) and reduced loading time from 12s to 7s.",
            "Maintained 99.96% crash-free rate for 8M+ userbase.",
        ],
        tech: ["Kotlin", "BLE", "NDK", "Hilt", "Socket", "AR Core"],
    },
    {
        role: "Software Engineer Intern",
        company: "Cueweb",
        period: "Jan 2021 -- April 2021",
        location: "Remote",
        description: [
            "Led and mentored a team of 10 developers.",
            "Launched 'Magarun', an online multiplayer cryptocurrency game.",
            "Managed end-to-end architecture and foreign client communication.",
        ],
        tech: ["NodeJs", "Blockchain", "RethinkDB", "Jenkins"],
    },
];

export default function Experience() {
    return (
        <section id="experience" className="section-padding">
            <div className="max-w-4xl mx-auto">
                <motion.h2
                    className="text-4xl font-bold font-outfit mb-12 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    Professional Journey
                </motion.h2>

                <div className="space-y-8">
                    {experiences.map((exp, idx) => (
                        <motion.div
                            key={idx}
                            className="glass-card flex flex-col md:flex-row gap-6"
                            initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                        >
                            <div className="flex-1">
                                <div className="flex justify-between items-start mb-4">
                                    <div>
                                        <h3 className="text-2xl font-bold text-white mb-1">{exp.role}</h3>
                                        <p className="text-blue-400 font-medium">{exp.company}</p>
                                    </div>
                                    <div className="text-right hidden sm:block">
                                        <div className="flex items-center text-gray-500 text-sm mb-1">
                                            <Calendar className="w-4 h-4 mr-2" /> {exp.period}
                                        </div>
                                        <div className="flex items-center text-gray-500 text-sm">
                                            <MapPin className="w-4 h-4 mr-2" /> {exp.location}
                                        </div>
                                    </div>
                                </div>

                                <ul className="space-y-2 mb-6 text-gray-400 list-disc list-inside">
                                    {exp.description.map((item, i) => (
                                        <li key={i} className="leading-relaxed">{item}</li>
                                    ))}
                                </ul>

                                <div className="flex flex-wrap gap-2">
                                    {exp.tech.map((t, i) => (
                                        <span key={i} className="text-xs px-3 py-1 rounded-full bg-blue-500/10 text-blue-300 border border-blue-500/20">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
