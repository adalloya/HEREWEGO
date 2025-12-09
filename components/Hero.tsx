"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative w-full min-h-[90vh] flex items-center bg-background overflow-hidden">

            {/* Background with slight fade */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/assets/hero-family.png"
                    alt="Happy family at Disney World Castle"
                    fill
                    className="object-cover object-center"
                    priority
                    quality={90}
                />
                {/* White fade gradient from left to right for text readability */}
                <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 to-transparent/20 md:via-white/60" />
            </div>

            <div className="container mx-auto px-6 relative z-10 pt-20">
                <div className="max-w-2xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-800 text-xs font-bold uppercase tracking-wider mb-6">
                            <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
                            Authorized Vacation Planners
                        </div>

                        <h1 className="text-5xl md:text-7xl font-montserrat font-extrabold text-foreground leading-[1.1] mb-6 drop-shadow-sm">
                            Make Magic <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Happen.</span>
                        </h1>

                        <p className="text-lg md:text-xl text-gray-600 font-light mb-8 max-w-lg leading-relaxed">
                            Planning a Disney trip can be overwhelming. We handle every detail—dinning, genie+, and hotels—so you can just pack your ears.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 mb-12">
                            <Link
                                href="/quote"
                                className="btn-primary text-lg px-10 py-4 shadow-xl flex items-center justify-center gap-2 group"
                            >
                                Get Free Quote
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <Link
                                href="#destinations"
                                className="bg-white hover:bg-gray-50 text-foreground font-semibold px-10 py-4 rounded-full shadow-md border border-gray-200 transition-all text-center"
                            >
                                Explore Packages
                            </Link>
                        </div>

                        <div className="flex gap-6 text-sm font-medium text-gray-500">
                            {["0$ Planning Fees", "Official Disney Perks", "24/7 Support"].map((benefit) => (
                                <div key={benefit} className="flex items-center gap-2">
                                    <CheckCircle2 className="w-5 h-5 text-green-500" />
                                    {benefit}
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
