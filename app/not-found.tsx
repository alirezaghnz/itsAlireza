import Link from "next/link";
import Header from "./_components/header";

export default function NotFound() {
  return (
    <>
      <Header />
      <h1 className="grid text-amber-50 justify-center py-20 ">
        <span className="text-red-400  text-3xl">404 - Page Not Found</span>
        <Link href="/" className="text-center text-blue-100 mt-2 underline">
          HOME
        </Link>
      </h1>
    </>
  );
}
