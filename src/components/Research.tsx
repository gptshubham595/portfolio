"use client";

import { motion } from "framer-motion";
import { GraduationCap, Quote, Calendar, Link as LinkIcon } from "lucide-react";

const publications = [
    {
        title: "Image denoising in acoustic microscopy using block-matching and 4D filter",
        journal: "Nature Scientific Reports",
        year: "2023",
        citations: "35",
        link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=B8VoEywAAAAJ&citation_for_view=B8VoEywAAAAJ:jgBuDB5drN8C"
    },
    {
        title: "Block-matching and 3D filtering-based denoising of acoustic images",
        journal: "Applied Acoustics Journal",
        year: "2024",
        citations: "14",
        link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=B8VoEywAAAAJ&citation_for_view=B8VoEywAAAAJ:43bX7VzcjpAC"
    },
    {
        title: "Automated tilt compensation in acoustic microscopy",
        journal: "Journal of Microscopy",
        year: "2023",
        citations: "8",
        link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=B8VoEywAAAAJ&citation_for_view=B8VoEywAAAAJ:CaZNVDsoPx4C"
    },
    {
        title: "AutoSAFT: Autofocusing for extended depth of imaging in scanning acoustic microscopy",
        journal: "Journal of Microscopy",
        year: "2025",
        citations: "3",
        link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=B8VoEywAAAAJ&citation_for_view=B8VoEywAAAAJ:BzfGm06jWhQC"
    },
    {
        title: "Extended Depth Acoustic Imaging with AutoSAFT and Block-Matching 4D Filtering",
        journal: "Scandinavian Symposium on Physical Acoustics",
        year: "2025",
        citations: "0",
        link: "https://scholar.google.com/citations?hl=en&user=B8VoEywAAAAJ"
    },
    {
        title: "Ultrasonic signal denoising using hybrid filter for image reconstruction",
        journal: "Symposium on Ultrasonic Electronics",
        year: "2021",
        citations: "0",
        link: "https://scholar.google.com/citations?hl=en&user=B8VoEywAAAAJ"
    }
];

export default function Research() {
    return (
        <section id="research" className="section-padding bg-black/20">
            <div className="max-w-4xl mx-auto">
                <div className="flex items-center justify-center gap-3 mb-12">
                    <GraduationCap className="w-8 h-8 text-blue-400" />
                    <h2 className="text-4xl font-bold font-outfit">Research & Publications</h2>
                </div>

                <div className="grid gap-6">
                    {publications.map((pub, idx) => (
                        <motion.a
                            key={idx}
                            href={pub.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="glass-card flex flex-col sm:flex-row justify-between items-start sm:items-center hover:border-blue-500/30 group"
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                        >
                            <div className="flex-1 pr-4">
                                <h3 className="text-lg font-bold text-gray-200 group-hover:text-blue-400 transition-colors mb-2">
                                    {pub.title}
                                </h3>
                                <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                                    <span className="flex items-center gap-1 font-medium text-blue-400">
                                        <Quote className="w-3 h-3" /> {pub.journal}
                                    </span>
                                    <span className="flex items-center gap-1">
                                        <Calendar className="w-3 h-3" /> {pub.year}
                                    </span>
                                </div>
                            </div>

                            <div className="mt-4 sm:mt-0 flex items-center gap-4">
                                <div className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono">
                                    Citations: <span className="text-blue-400 font-bold">{pub.citations}</span>
                                </div>
                                <LinkIcon className="w-5 h-5 text-gray-600 group-hover:text-blue-400" />
                            </div>
                        </motion.a>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <a
                        href="https://scholar.google.com/citations?hl=en&user=B8VoEywAAAAJ"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:underline flex items-center justify-center gap-2"
                    >
                        View all publications on Google Scholar <GraduationCap className="w-4 h-4" />
                    </a>
                </div>
            </div>
        </section>
    );
}
