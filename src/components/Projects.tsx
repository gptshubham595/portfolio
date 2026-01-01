"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink, Code2, BookOpen } from "lucide-react";

const projects = [
    {
        title: "BOSCH Route Optimization",
        description: "Inter IIT Gold Medalist project involving complex algorithms for route efficiency and logistics optimization.",
        tags: ["Algorithms", "Python", "GIS"],
        github: "https://github.com/gptshubham595/BOSCH-Route-Optimization-INTERIIT",
        highlight: "Gold Medal @ Inter IIT"
    },
    {
        title: "Oboe Audio Recorder",
        description: "Low-latency audio recording system built with Kotlin and Android NDK using Google's Oboe library.",
        tags: ["NDK", "C++", "Audio", "Kotlin"],
        github: "https://github.com/gptshubham595/OboeAudioRecorder",
        highlight: "Android NDK"
    },
    {
        title: "Hard75ChallengeKMM",
        description: "Kotlin Multiplatform (KMM) application to track and measure the Hard 75 challenge across platforms.",
        tags: ["KMM", "Kotlin", "Android", "iOS"],
        github: "https://github.com/gptshubham595/Hard75ChallengeKMM",
        highlight: "Android Kotlin Multiplatform"
    },
    {
        title: "Secure Blockchain Voting",
        description: "Microsoft CodeFunDo Challenge finalist. A secure, decentralized voting platform using blockchain technologies.",
        tags: ["Blockchain", "Security", "Cryptographic"],
        github: "https://github.com/gptshubham595/codefundo404-WeFoundIt",
        highlight: "Microsoft CodeFunDo Android"
    }
];

const articles = [
    {
        title: "Dynamic App Mode & Launcher Icon Switch",
        excerpt: "A complete guide on implementing custom dynamic themes and launcher icons in modern Android.",
        link: "https://proandroiddev.com/dynamic-app-mode-theme-and-launcher-icon-switch-in-android-a-complete-guide-f30291d90b5e"
    },
    {
        title: "Defending Mobile Apps against Frida",
        excerpt: "Advanced security techniques to protect your Android applications even with root bypass.",
        link: "https://blog.stackademic.com/%EF%B8%8Fdefending-mobile-apps-against-frida-even-with-root-bypass-android-f26ae7df4e89"
    },
    {
        title: "In-App Language Switching in Jetpack Compose",
        excerpt: "A simplified approach to multi-language support in modern Android UIs.",
        link: "https://blog.stackademic.com/how-did-we-implement-in-app-language-switching-in-jetpack-compose-048a2035be51"
    }
];

export default function Projects() {
    return (
        <section id="projects" className="section-padding bg-black/20">
            <div className="max-w-6xl mx-auto">
                <div className="flex items-center justify-between mb-12">
                    <h2 className="text-4xl font-bold font-outfit">Featured Projects</h2>
                    <div className="hidden sm:flex items-center gap-2 text-gray-500">
                        <Code2 className="w-5 h-5" />
                        <span className="font-mono text-sm underline select-none cursor-default">Building the future</span>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
                    {projects.map((project, idx) => (
                        <motion.div
                            key={idx}
                            className="glass-card group relative overflow-hidden"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                        >
                            {project.highlight && (
                                <div className="absolute top-0 right-0 p-3">
                                    <span className="px-3 py-1 bg-yellow-500/20 text-yellow-500 text-[10px] font-bold uppercase tracking-wider rounded-full border border-yellow-500/20">
                                        {project.highlight}
                                    </span>
                                </div>
                            )}

                            <div className="mb-6">
                                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-gray-400 mb-6 leading-relaxed">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag, i) => (
                                        <span key={i} className="text-[10px] font-mono uppercase bg-white/5 border border-white/10 px-2 py-1 tracking-wider text-gray-400">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-medium hover:text-blue-400 transition-colors">
                                    <Github className="w-4 h-4" /> Codebase
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="border-t border-white/5 pt-20">
                    <div className="flex items-center gap-3 mb-12">
                        <BookOpen className="w-8 h-8 text-purple-400" />
                        <h2 className="text-4xl font-bold font-outfit">Technical Writing</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {articles.map((article, idx) => (
                            <a
                                key={idx}
                                href={article.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="glass-card hover:border-purple-500/30 transition-all"
                            >
                                <h4 className="font-bold text-white mb-3 text-lg leading-tight group-hover:text-purple-400 transition-colors">{article.title}</h4>
                                <p className="text-sm text-gray-500 mb-6">{article.excerpt}</p>
                                <span className="text-purple-400 text-xs font-bold flex items-center gap-1">
                                    Read on Medium <ExternalLink className="w-3 h-3" />
                                </span>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
