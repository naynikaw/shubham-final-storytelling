"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import DynamicBackground from "./DynamicBackground";

export default function HeroSection() {
    return (
        <section className="h-screen w-full flex flex-col justify-center items-center relative bg-gradient-to-b from-white to-gray-50 px-6 text-center overflow-hidden">
            <DynamicBackground />

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="max-w-4xl z-10"
            >
                <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-tight mb-6 text-foreground tracking-tight">
                    The Geography of Intelligence
                </h1>
                <p className="font-sans text-xl md:text-2xl text-muted max-w-2xl mx-auto leading-relaxed font-light mb-8">
                    We tracked 940 new AI startups. One clear pattern emerged: <br className="hidden md:block" />
                    <span className="text-foreground font-medium">The remote work revolution didn't happen here.</span>
                </p>
                <p className="text-sm text-muted/60 font-mono uppercase tracking-widest">
                    Data: Analysis of 940 venture-backed companies (CB Insights, Nov 2024)
                </p>
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted z-10"
            >
                <span className="text-sm font-medium tracking-widest uppercase text-xs opacity-60">Scroll to explore</span>
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                >
                    <ArrowDown className="w-5 h-5 opacity-60" />
                </motion.div>
            </motion.div>
        </section>
    );
}
