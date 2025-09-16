"use client";
import { Typewriter } from "react-simple-typewriter";
import Header from "./_components/header";

import { MdEmail } from "react-icons/md";

export default function Home() {
  const skills = [
    "React.js",
    "Next.js",
    "TypeScript",
    "JavaScript (ES6+)",
    "HTML & CSS",
    "Tailwind CSS",
    "Redux",
    "React Query",
    "Git / GitHub",
  ];
  return (
    <main className="min-h-screen bg-gray-900 text-gray-200 px-6 md:px-20">
      <Header />

      <section className="mt-4 py-20 text-center border-amber-50">
        <h1 className="text-4xl font-bold mb-2">Alireza Gholinezhad</h1>
        <p className="text-xl text-green-600">Junior React Developer</p>
        <p className="mt-4 text-gray-600">
          <Typewriter
            words={[
              " Passionate frontend developer skilled in React.js, Next.js, and TypeScript. Focused on building clean and responsive web apps.",
            ]}
            loop={0}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={10}
            delaySpeed={1000}
          />
        </p>
        <div className="mt-6 flex justify-center gap-4">
          <a
            href="mailto:alirezagholienzhaad@gmail.com"
            className="flex items-center gap-1 px-5 py-2 bg-green-600 text-white rounded-lg shadow hover:bg-green-700 transition"
          >
            <span>Contact</span>
            <span>
              <MdEmail size={20} />
            </span>
          </a>

          <a
            href="https://github.com/alirezaghnz"
            target="_blank"
            className="px-5 py-2 border border-green-600 text-green-600 rounded-lg hover:bg-green-50 transition"
          >
            GitHub
          </a>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-10">
        <h2 className="text-2xl font-semibold mb-2">Skills</h2>
        <div className="flex flex-wrap gap-3">
          {skills.map((skill) => (
            <span
              key={skill}
              className="px-4 py-2 bg-green-100 text-green-700 rounded-lg text-sm  font-medium"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16">
        <h2 className="text-2xl font-semibold mb-6">Projects</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-6 bg-red-500 rounded-xl shadow hover:shadow-lg transition">
            <div className="gap-2 flex">
              <span className="text-lg font-bold">Rezerv Villa</span>
              <span className="rounded-sm px-1 bg-blue-400">Desktop First</span>
            </div>
            <p className="text-gray-900 mt-2">
              A web app for booking villas with authentication and date
              selection. Built with React, Next, Supabase, and Tailwind CSS.
            </p>
            <div className="flex gap-4 mt-4">
              <a
                href="https://github.com/alirezaghnz/Rezervino"
                target="_blank"
                className="text-gray-900 border border-amber-50 px-2 rounded-lg hover:underline"
              >
                GitHub
              </a>
              <a
                href="https://github.com/alirezaghnz/Rezervino"
                target="_blank"
                className="text-gray-900 border border-amber-50 px-2 rounded-lg hover:underline"
              >
                Live Demo
              </a>
            </div>
          </div>

          <div className="p-6 bg-red-500 rounded-xl shadow hover:shadow-lg transition">
            <div className="gap-2 flex">
              <span className="text-lg font-bold"> World Tour App</span>
              <span className="rounded-sm px-1 bg-blue-400">Desktop First</span>
            </div>
            <p className="text-gray-900 mt-2">
              A React app that lets users mark locations on the map and save
              their favorite spots around the world. Built with React, Leaflet
              and tawilwindCss.
            </p>
            <div className="flex gap-4 mt-4">
              <a
                href="https://github.com/alirezaghnz/WorldTour"
                target="_blank"
                className="text-gray-900 border border-amber-50 px-2 rounded-lg hover:underline"
              >
                GitHub
              </a>
              <a
                href="https://worldwtour.netlify.app/"
                target="_blank"
                className="text-gray-900 border border-amber-50 px-2 rounded-lg hover:underline"
              >
                Live Demo
              </a>
            </div>
          </div>

          <div className="p-6 bg-red-500 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-lg font-bold">PizzaDelivery</h3>
            <p className="text-gray-900 mt-2">
              Fast, fresh, and customizable pizza delivery (Small Project) —
              built with React & Redux.
            </p>
            <div className="flex gap-4 mt-4">
              <a
                href="https://github.com/alirezaghnz/pizzadelivery"
                target="_blank"
                className="text-gray-900 border border-amber-50 px-2 rounded-lg hover:underline"
              >
                GitHub
              </a>
              <a
                href="https://test.com"
                target="_blank"
                className="text-gray-900 border border-amber-50 px-2 rounded-lg hover:underline"
              >
                Live Demo
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 text-center text-gray-500 text-sm border-t ">
        © Alireza Gholinezhad
      </footer>
    </main>
  );
}
