"use client";

import { motion } from "framer-motion";

export default function IntroSection() {
    return (
        <section className="py-24 px-6 md:px-12 lg:px-24 bg-white w-full flex justify-center">
            <div className="max-w-4xl w-full">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="font-serif text-3xl md:text-5xl leading-tight text-foreground mb-8">
                        The Signal in the Noise
                    </h2>
                    <div className="w-24 h-1 bg-accent-teal mx-auto rounded-full" />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 text-lg md:text-xl font-light leading-relaxed text-muted-foreground">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <p className="mb-6">
                            We are living through the fastest platform shift in human history. Every day, a new model drops, a new demo goes viral, and a new startup claims to be the future.
                        </p>
                        <p>
                            But Twitter threads aren't reality. To understand what's actually happening, I stopped reading the headlines and started counting the checks.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        <p className="mb-6">
                            I tracked <span className="font-medium text-foreground">940 venture-backed AI startups</span> founded in the last year.
                        </p>
                        <p>
                            What I found was not a bubble, but a fortress. A specific set of schools, cities, and investors are building a wall around the future. Here is the map of that fortress.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
