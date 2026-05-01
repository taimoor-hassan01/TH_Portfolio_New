"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
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
  const [typeIndex, setTypeIndex] = useState(0);
  const typingPhrases = [
    "Web Developer 👨‍💻",
    "UI/UX Explorer ✨",
    "Next.js Fanatic ⚡",
    "CSS Ninja 🧠",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setTypeIndex((prev) => (prev + 1) % typingPhrases.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [typingPhrases.length]);

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
