"use client";
import Link from "next/link";
import { BsGithub } from "react-icons/bs";

import { RiTelegram2Fill } from "react-icons/ri";

export default function Header() {
  return (
    <header className="border-b border-b-gray-700">
      <div className="flex items-center justify-between py-5 px-10  text-amber-50">
        <ul className="flex gap-5 md:gap-10">
          <li className="relative group cursor-pointer font-medium">
            <Link href="/">Home</Link>
            <span className="absolute left-0 -bottom-0.5 w-0 h-[2px] bg-green-600 transition-all duration-300 group-hover:w-full"></span>
          </li>
          <li className="relative group cursor-pointer font-medium">
            <Link href="/blog">Blog</Link>
            <span className="absolute left-0 -bottom-0.5 w-0 h-[2px] bg-green-600 transition-all duration-300 group-hover:w-full"></span>
          </li>
        </ul>

        <ul className="flex gap-2 md:gap-4">
          <li>
            <a
              href="https://github.com/alirezaghnz"
              target="_blank"
              rel="noreferrer"
            >
              <BsGithub size={20} />
            </a>
          </li>
          <li>
            <a href="https://t.me/alirexadev" target="_blank" rel="noreferrer">
              <RiTelegram2Fill size={20} />
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
