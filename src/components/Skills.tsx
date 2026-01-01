"use client";

import { motion } from "framer-motion";
import { Laptop, Database, ShieldCheck, Cpu } from "lucide-react";

const skillCategories = [
    {
        title: "Android Core",
        icon: <Laptop className="w-5 h-5 text-blue-400" />,
        skills: ["Kotlin", "Java", "Jetpack Compose", "NDK", "Hilt", "Coroutines", "BLE", "ARCore"]
    },
    {
        title: "Backend & Systems",
        icon: <Cpu className="w-5 h-5 text-purple-400" />,
        skills: ["NodeJs", "Spring Boot", "Docker", "Hadoop", "Flume", "Sqoop"]
    },
    {
        title: "Databases",
        icon: <Database className="w-5 h-5 text-green-400" />,
        skills: ["MySQL", "MongoDB", "Redis", "PostgreSQL", "RethinkDB", "RoomDB"]
    },
    {
        title: "Security & QA",
        icon: <ShieldCheck className="w-5 h-5 text-red-400" />,
        skills: ["Bug Hunting", "Reverse Engineering", "CI/CD (Jenkins)", "KtLint", "Detekt"]
    }
];

export default function Skills() {
    return (
        <section id="skills" className="section-padding">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-bold font-outfit mb-12 text-center">Tech Stack & Expertise</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {skillCategories.map((cat, idx) => (
                        <motion.div
                            key={idx}
                            className="glass p-8 hover:border-white/20 transition-all group"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                        >
                            <div className="mb-6 flex items-center justify-between">
                                <div className="p-3 bg-white/5 rounded-xl group-hover:bg-white/10 transition-colors">
                                    {cat.icon}
                                </div>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-6 font-outfit">{cat.title}</h3>
                            <div className="flex flex-wrap gap-2">
                                {cat.skills.map((skill, i) => (
                                    <span
                                        key={i}
                                        className="text-xs px-2 py-1 bg-white/5 text-gray-400 rounded-md border border-white/5 group-hover:border-white/10 transition-all font-mono"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
