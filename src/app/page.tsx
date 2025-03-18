"use client"
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8">
      <h1 className="text-5xl font-bold mb-12 text-gray-800">smol tools</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <Link href="/checker/" className="w-full">
          <div className="flex items-center justify-center p-6 bg-blue-600 text-white rounded-2xl shadow-lg hover:bg-blue-700 transition-all">
            NFT Checker
          </div>
        </Link>
        <Link href="/converter/" className="w-full">
          <div className="flex items-center justify-center p-6 bg-green-600 text-white rounded-2xl shadow-lg hover:bg-green-700 transition-all">
            ETH-GWEI-WEI Converter
          </div>
        </Link>
      </div>
    </main>
  );
}
