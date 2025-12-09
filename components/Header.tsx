"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        setIsScrolled(latest > 20);
    });

    return (
        <motion.header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-3" : "bg-transparent py-5"
                }`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
        >
            <div className="container mx-auto px-6 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2">
                    <div className="bg-primary/5 p-2 rounded-full">
                        {/* Simple Mickey Silhouette Icon - Abstract */}
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="5" cy="7" r="3" fill="#1E3A8A" />
                            <circle cx="19" cy="7" r="3" fill="#1E3A8A" />
                            <circle cx="12" cy="14" r="7" fill="#1E3A8A" />
                        </svg>
                    </div>
                    <div className="flex flex-col leading-none">
                        <span className="text-lg font-bold text-primary tracking-tight">HERE WE GO</span>
                        <span className="text-xs font-medium text-gray-500 tracking-widest uppercase">Advisor</span>
                    </div>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {["Disney World", "Universal", "Cruises", "Services"].map((item) => (
                        <Link
                            key={item}
                            href={`#${item.toLowerCase().replace(" ", "-")}`}
                            className="text-sm font-medium text-gray-700 hover:text-primary transition-colors hover:underline underline-offset-4"
                        >
                            {item}
                        </Link>
                    ))}
                </nav>

                {/* CTA */}
                <div className="hidden md:block">
                    <Link
                        href="/quote"
                        className="btn-primary inline-block text-sm"
                    >
                        Plan My Trip
                    </Link>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-gray-700"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    className="md:hidden bg-white border-b border-gray-100 shadow-xl overflow-hidden"
                >
                    <div className="p-6 flex flex-col gap-4">
                        {["Disney World", "Universal", "Cruises", "Services"].map((item) => (
                            <Link
                                key={item}
                                href={`#${item.toLowerCase().replace(" ", "-")}`}
                                className="text-lg font-medium text-gray-800 py-2 border-b border-gray-50"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {item}
                            </Link>
                        ))}
                        <Link
                            href="/quote"
                            className="btn-primary text-center mt-4 w-full"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Get a Free Quote
                        </Link>
                    </div>
                </motion.div>
            )}
        </motion.header>
    );
}
