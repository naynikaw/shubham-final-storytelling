"use client";

import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import { ReactNode } from "react";

interface NarrativeSectionProps {
    id: string;
    title?: string;
    children: ReactNode;
    imageSrc: StaticImageData | string;
    imageAlt: string;
    imagePosition?: "left" | "right" | "center";
    backgroundColor?: string;
    callout?: ReactNode;
}

export default function NarrativeSection({
    id,
    title,
    children,
    imageSrc,
    imageAlt,
    imagePosition = "center",
    backgroundColor = "bg-white",
    callout,
}: NarrativeSectionProps) {
    return (
        <section
            id={id}
            className={`min-h-screen py-24 px-6 md:px-12 lg:px-24 flex flex-col justify-center relative overflow-hidden ${backgroundColor}`}
        >
            <div className="max-w-7xl mx-auto w-full z-10">
                {title && (
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="font-serif text-4xl md:text-5xl mb-12 text-foreground"
                    >
                        {title}
                    </motion.h2>
                )}

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    {/* Narrative Text */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className={`lg:col-span-4 prose prose-lg text-foreground/80 ${imagePosition === "left" ? "lg:order-2" : "lg:order-1"
                            }`}
                    >
                        {children}
                    </motion.div>

                    {/* Visualization */}
                    <div
                        className={`lg:col-span-8 relative ${imagePosition === "left" ? "lg:order-1" : "lg:order-2"
                            }`}
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 40 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            viewport={{ once: true, margin: "-10%" }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="relative rounded-xl overflow-hidden shadow-2xl shadow-black/5 bg-white"
                        >
                            <Image
                                src={imageSrc}
                                alt={imageAlt}
                                width={1200}
                                height={800}
                                className="w-full h-auto object-contain"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 60vw"
                            />
                        </motion.div>

                        {/* Floating Callout */}
                        {callout && (
                            <div className="mt-8 lg:mt-0 lg:absolute lg:-right-8 lg:bottom-12 z-20 w-full lg:w-80">
                                {callout}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
