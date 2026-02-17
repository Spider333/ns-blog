import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <div className="sticky top-4 z-50 flex justify-center mb-20 mt-8">
      <nav className="inline-flex items-center gap-4 px-6 py-3 bg-white/80 backdrop-blur-md border border-polystate-border rounded-full shadow-sm">
        <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <Image
            src="/assets/polystate-logo.svg"
            alt="Polystate"
            width={28}
            height={28}
            className="w-7 h-7"
          />
          <span className="text-xl font-bold tracking-tight text-polystate-dark">
            Polystate
          </span>
        </Link>
        <span className="text-polystate-border">|</span>
        <Link
          href="/"
          className="text-sm font-medium text-polystate-text-secondary hover:text-polystate-blue transition-colors"
        >
          Blog
        </Link>
        <a
          href="https://polystate.io"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-medium text-white bg-polystate-blue hover:bg-polystate-dark px-4 py-1.5 rounded-full transition-colors"
        >
          polystate.io
        </a>
      </nav>
    </div>
  );
};

export default Header;
