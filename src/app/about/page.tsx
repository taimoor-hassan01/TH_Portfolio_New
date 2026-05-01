"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
<<<<<<< HEAD
=======
import Link from "next/link";
>>>>>>> 461a5c02e4bc398804ae7ab23c2cb8264beb5fb9
import Footer from "../components/Footer";
import { Radar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

export default function About() {
<<<<<<< HEAD
=======
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
>>>>>>> 461a5c02e4bc398804ae7ab23c2cb8264beb5fb9
  const [typeIndex, setTypeIndex] = useState(0);
  const typingPhrases = [
    "Web Developer 👨‍💻",
    "UI/UX Explorer ✨",
    "Next.js Fanatic ⚡",
    "CSS Ninja 🧠",
  ];

  useEffect(() => {
<<<<<<< HEAD
    const interval = setInterval(() => {
      setTypeIndex((prev) => (prev + 1) % typingPhrases.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [typingPhrases.length]);
=======
  const interval = setInterval(() => {
    setTypeIndex((prev) => (prev + 1) % typingPhrases.length);
  }, 2000);
  return () => clearInterval(interval);
}, [typingPhrases.length]);
>>>>>>> 461a5c02e4bc398804ae7ab23c2cb8264beb5fb9

  const chartData = {
    labels: ["Next.js", "Python", "TypeScript", "React", "CSS", "Git"],
    datasets: [
      {
        label: "Skill Level",
        data: [93, 90, 74, 45, 67, 75],
        backgroundColor: "rgba(59,130,246,0.4)",
        borderColor: "rgba(59,130,246,1)",
        borderWidth: 2,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    scales: {
      r: {
        angleLines: { color: "#ffffff30" },
        grid: { color: "#ffffff10" },
        pointLabels: { color: "white" },
        ticks: {
          display: false,
        },
      },
    },
    plugins: {
      legend: { labels: { color: "white" } },
    },
  };

  return (
    <>
<<<<<<< HEAD
=======
      <nav className="fixed top-0 w-full flex justify-between items-center px-8 py-4 z-50 text-white bg-transparent">
        <div className="text-2xl">My Portfolio</div>
        <div className="hidden md:flex gap-6">
          {["Home", "Projects", "About", "Contact"].map((item) => (
            <Link href={`/${item.toLowerCase()}`} key={item} className="hover:text-yellow-400">
              {item}
            </Link>
          ))}
        </div>
        <div className="md:hidden flex flex-col justify-around items-center w-8 h-6 cursor-pointer" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          <span className="block h-1 w-full bg-white" />
          <span className="block h-1 w-full bg-white" />
          <span className="block h-1 w-full bg-white" />
        </div>
        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-gray-800 flex flex-col items-center py-4 space-y-2">
            {["Home", "Projects", "About", "Contact"].map((item) => (
              <Link href={`/${item.toLowerCase()}`} key={item} className="hover:text-yellow-400">
                {item}
              </Link>
            ))}
          </div>
        )}
      </nav>

>>>>>>> 461a5c02e4bc398804ae7ab23c2cb8264beb5fb9
      <section className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-slate-900 via-gray-800 to-slate-900 pt-28 px-6 text-white">
        {/* Profile with Glow */}
        <div className="relative w-36 h-36 mb-6 rounded-full shadow-xl border-4 border-blue-500 animate-pulse overflow-hidden">
          <Image src="/image.png" alt="Taimoor" layout="fill" objectFit="cover" />
        </div>

        {/* Typing Text */}
        <div className="mb-4 text-center text-xl font-mono text-blue-400 h-6 transition-opacity duration-300">
          {typingPhrases[typeIndex]}
        </div>

        {/* Intro */}
        <h2 className="text-4xl font-bold mb-2">About Me</h2>
        <p className="text-lg text-center max-w-xl mb-4">
          Hey, I’m <span className="font-bold">Taimoor Hassan</span>—a builder of web interfaces that are not only useful, but also drop-dead beautiful. I turn complex ideas into clean, interactive realities.
        </p>

        {/* Chart */}
        <div className="w-full max-w-lg mt-12">
          <Radar data={chartData} options={chartOptions} />
        </div>

        {/* Fancy Skill Cards */}
        <div className="mt-12 grid sm:grid-cols-2 gap-6 w-full max-w-xl">
          {["I love debugging.", "CSS is poetry.", "Pixel perfection matters.", "Code. Refactor. Repeat."].map((text, i) => (
            <div
              key={i}
              className="p-4 text-center rounded-lg bg-gray-800 hover:bg-blue-600 transition duration-500 shadow-md hover:shadow-blue-500/50 hover:-translate-y-1"
            >
              {text}
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}
