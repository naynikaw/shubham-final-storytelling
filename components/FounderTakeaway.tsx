"use client";

import { Lightbulb } from "lucide-react";
import { motion } from "framer-motion";

interface FounderTakeawayProps {
    children: React.ReactNode;
}

export default function FounderTakeaway({ children }: FounderTakeawayProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="relative mt-8 group"
        >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-teal-100 to-blue-100 rounded-2xl opacity-50 blur group-hover:opacity-75 transition duration-500" />
            <div className="relative bg-white/80 backdrop-blur-sm border border-teal-100/50 p-5 rounded-xl flex gap-4 items-start shadow-sm">
                <div className="bg-teal-50 p-2 rounded-lg shrink-0">
                    <Lightbulb className="w-5 h-5 text-teal-600" />
                </div>
                <div>
                    <h4 className="font-bold text-teal-900 text-xs uppercase tracking-widest mb-1.5">
                        Founder Takeaway
                    </h4>
                    <div className="text-slate-600 text-base leading-relaxed font-medium">
                        {children}
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
