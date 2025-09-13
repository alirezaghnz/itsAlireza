import Link from "next/link";

export default function Header() {
  return (
    <ul className="flex gap-10 py-10 px-10 border-b border-b-gray-700">
      <li className="relative group cursor-pointer font-medium">
        <Link href="/">Home</Link>
        <span className="absolute left-0 -bottom-0.5 w-0 h-[2px] bg-green-600 transition-all duration-300 group-hover:w-full"></span>
      </li>
      <li className="relative group cursor-pointer font-medium">
        <Link href="/blog">Blog</Link>
        <span className="absolute left-0 -bottom-0.5 w-0 h-[2px] bg-green-600 transition-all duration-300 group-hover:w-full"></span>
      </li>
    </ul>
  );
}
