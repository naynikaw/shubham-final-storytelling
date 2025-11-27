"use client";

import { motion } from "framer-motion";

interface DataCalloutProps {
    stats: {
        value: string;
        label: string;
        subtext?: string;
    }[];
    className?: string;
}

export default function DataCallout({ stats, className = "" }: DataCalloutProps) {
    return (
        <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={`bg-white/90 backdrop-blur-sm border border-accent/20 rounded-2xl p-6 shadow-lg shadow-accent/5 hover:shadow-accent/10 hover:-translate-y-1 transition-all duration-300 ${className}`}
        >
            <div className="space-y-4">
                {stats.map((stat, index) => (
                    <div key={index} className="border-l-2 border-accent pl-4">
                        <div className="font-mono font-bold text-3xl text-accent mb-1">
                            {stat.value}
                        </div>
                        <div className="font-sans font-medium text-lg text-foreground">
                            {stat.label}
                        </div>
                        {stat.subtext && (
                            <div className="font-sans text-sm text-muted mt-1">
                                {stat.subtext}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </motion.div>
    );
}
