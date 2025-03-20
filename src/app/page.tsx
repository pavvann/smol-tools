"use client"
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="container mx-auto">
        {/* Hero Section */}
        <div className="flex flex-col items-center justify-center text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
            smol tools
          </h1>
          <p className="text-xl  max-w-lg mb-8">
            simple mini tools for devs
          </p>
          <p className="mt-2 md:mt-0">
            For feature requests please DM <a href="https://t.me/pavvannn" className="text-purple-600 dark:text-purple-400 hover:underline">@pavvannn</a> on Telegram
          </p>
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Link href="/checker/" className="w-full">
            <div className="group relative bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-8 border border-gray-200 dark:border-gray-700 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-purple-700/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <h2 className="text-2xl font-bold text-purple-600 dark:text-purple-400 mb-3">NFT Checker</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Verify NFT ownership and metadata quickly and easily
              </p>
              <div className="flex items-center text-purple-600 dark:text-purple-400 font-medium">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          </Link>
          
          <Link href="/converter/" className="w-full">
            <div className="group relative bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-8 border border-gray-200 dark:border-gray-700 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 to-pink-700/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <h2 className="text-2xl font-bold text-pink-600 dark:text-pink-400 mb-3">ETH Converter</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Convert between ETH, GWEI and WEI with precision
              </p>
              <div className="flex items-center text-pink-600 dark:text-pink-400 font-medium">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}