"use client";
import React, { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center fixed w-full h-16 bg-transparent px-8 z-50 backdrop-blur-sm">
        <h1 className="text-2xl text-white font-bold">My Portfolio</h1>
        <div className="hidden md:flex space-x-6">
          <Link href="/" className="hover:text-yellow-500 text-white transition-colors">Home</Link>
          <Link href="/project" className="hover:text-yellow-500 text-white transition-colors">Projects</Link>
          <Link href="/about" className="hover:text-yellow-500 text-white transition-colors">About</Link>
          <Link href="/contact" className="hover:text-yellow-500 text-white transition-colors">Contact</Link>
        </div>
        <div className="md:hidden cursor-pointer" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          <div className="w-6 h-1 bg-white mb-1"></div>
          <div className="w-6 h-1 bg-white mb-1"></div>
          <div className="w-6 h-1 bg-white"></div>
        </div>
        {isMobileMenuOpen && (
          <div className="absolute top-16 left-0 w-full bg-[#111827] p-5 flex flex-col space-y-4 md:hidden">
            <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="text-white hover:text-yellow-500">Home</Link>
            <Link href="/project" onClick={() => setIsMobileMenuOpen(false)} className="text-white hover:text-yellow-500">Projects</Link>
            <Link href="/about" onClick={() => setIsMobileMenuOpen(false)} className="text-white hover:text-yellow-500">About</Link>
            <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)} className="text-white hover:text-yellow-500">Contact</Link>
          </div>
        )}
      </nav>
  );
}