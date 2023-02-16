import Image from "next/image";
import Link from "next/link";
import "../styles/globals.css";
import NavBar from "../app/navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const header = (
    <header>
      <div className="text-center bg-slate-500 p-8 my-6 rounded-md">
        <Image
          src="/logo.png"
          width={60}
          height={60}
          className="mx-auto"
          alt={""}
        />
        <Link href="/">
          <h1 className="text-3xl text-white font-bold mt-3">
            Ibrahim SSG
          </h1>
        </Link>

        <p className="text-slate-300">
          Welcome to my static site generator
        </p>
      </div>
    </header>
  );

  const footer = (
    <footer>
      <div className="border-t border-slate-400 mt-12 py-6 text-center text-slate-400">
        <h3>Developed by Ibra</h3>
      </div>
    </footer>
  );

  return (
    <html lang="en">
    {}
    <head />
    
    <body>
      <div className="mx-auto max-w-10x6 px-10 " >
        <NavBar/>
        {header}
        {children}
        {footer}
      </div>
      </body>
  </html>
  );
}
