"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export default function HeroSection() {
    return (
        <section className="h-screen w-full flex flex-col justify-center items-center relative bg-gradient-to-b from-white to-gray-50 px-6 text-center overflow-hidden">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="max-w-4xl z-10"
            >
                <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-tight mb-6 text-foreground">
                    Where AI Startups Are Built and Why It Still Matters
                </h1>
                <p className="font-sans text-xl md:text-2xl text-muted max-w-2xl mx-auto leading-relaxed">
                    An analysis of 940 venture-backed AI companies founded since January 2024
                </p>
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted"
            >
                <span className="text-sm font-medium tracking-widest uppercase">Scroll to explore</span>
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                >
                    <ArrowDown className="w-6 h-6" />
                </motion.div>
            </motion.div>

            {/* Background Elements */}
            <div className="absolute inset-0 z-0 opacity-30 pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-teal/20 rounded-full blur-3xl" />
                <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-accent-lavender/20 rounded-full blur-3xl" />
            </div>
        </section>
    );
}
