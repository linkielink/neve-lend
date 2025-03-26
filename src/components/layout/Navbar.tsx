"use client";

import { ConnectButton } from "@/components/common/ConnectButton";
import Logo from "@/components/layout/Logo";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { initializeWasm } from "@/utils/health_computer/initWasm";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const Navbar = () => {
  // Get current path to determine active link
  const pathname = usePathname();
  // Mobile menu state
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Initialize the health computer
  useEffect(() => {
    initializeWasm();
  }, []);

  const baseClasses =
    "relative before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-full before:h-0.5 pb-1";
  const activeClasses =
    "text-gray-900 dark:text-white before:bg-gradient-to-r before:from-teal-400 before:to-yellow-200";
  const defaultClasses =
    "text-gray-500 dark:text-gray-400 hover:text-gray-900 border-transparent dark:hover:text-white before:bg-transparent";

  return (
    <nav className="overflow-hidden flex items-center justify-between p-2 px-3 md:p-4 md:px-6 relative before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-full before:h-0.25 before:bg-gradient-to-r before:from-teal-400 before:to-yellow-200 before:opacity-50">
      <div className="absolute left-0 right-0 top-0 h-[300px] bg-radial from-yellow-200 to-teal-400 opacity-40 z-10" />
      <div className="flex items-center gap-4 md:gap-8 z-20 relative">
        <Link
          href="/"
          className="flex items-center text-xl md:text-2xl font-bold text-gray-900 no-underline dark:text-white"
        >
          <Logo className="w-15 h-15 md:w-30 md:h-30" />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          <Link
            href="/"
            className={`${baseClasses} ${
              pathname === "/" ? activeClasses : defaultClasses
            }`}
          >
            Dashboard
          </Link>
          <Link
            href="/markets"
            className={`${baseClasses} ${
              pathname === "/markets" ? activeClasses : defaultClasses
            }`}
          >
            Markets
          </Link>
        </div>
      </div>

      <div className="flex items-center gap-4 z-20 relative">
        <ThemeToggle />
        <ConnectButton />
        {/* Mobile Burger Menu - moved to the far right */}
        <button
          type="button"
          onClick={toggleMobileMenu}
          className="md:hidden p-1.5 rounded-md text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-zinc-800 focus:outline-none"
          aria-expanded={isMobileMenuOpen}
          aria-label="Toggle navigation menu"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isMobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="absolute top-16 left-0 right-0 z-50 bg-white dark:bg-zinc-950 shadow-lg border-b border-gray-200 dark:border-zinc-800 md:hidden">
          <div className="flex flex-col py-2">
            <Link
              href="/"
              className={`px-6 py-3 font-medium no-underline ${
                pathname === "/"
                  ? "text-gray-900 dark:text-white border-l-4 border-teal-500 pl-5"
                  : "text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
              }`}
              onClick={toggleMobileMenu}
            >
              Dashboard
            </Link>
            <Link
              href="/markets"
              className={`px-6 py-3 font-medium no-underline ${
                pathname === "/markets"
                  ? "text-gray-900 dark:text-white border-l-4 border-teal-500 pl-5"
                  : "text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
              }`}
              onClick={toggleMobileMenu}
            >
              Markets
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
