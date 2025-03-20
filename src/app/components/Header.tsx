"use client"

import Link from 'next/link';
import { ThemeToggle } from './ThemeToggle';

export default function Header() {
  return (
    <header className="w-full">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
          smol tools
        </Link>
        <ThemeToggle />
      </div>
    </header>
  );
}