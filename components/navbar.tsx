"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, Search, Globe, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Input } from "@/components/ui/input"

export default function Navbar() {
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-4">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col gap-4 py-4">
                <Link href="/" className="flex items-center gap-2">
                  <Image
                    src="/images/logos/coursera-logo-blue.png"
                    alt="Coursera Logo"
                    width={120}
                    height={28}
                    className="h-8 w-auto"
                  />
                </Link>
                <Link href="#" className="text-lg font-medium hover:text-blue-600">
                  Explore
                </Link>
                <Link href="#" className="text-lg font-medium hover:text-blue-600">
                  Categories
                </Link>
                <Link href="#" className="text-lg font-medium hover:text-blue-600">
                  Enterprise
                </Link>
                <div className="mt-4 flex flex-col gap-2">
                  <Button variant="outline" className="w-full">
                    Log In
                  </Button>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">Sign Up</Button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/images/logos/coursera-logo-blue.png"
              alt="Coursera Logo"
              width={120}
              height={28}
              className="h-8 w-auto"
            />
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <div className="relative group">
              <button className="flex items-center gap-1 text-sm font-medium hover:text-blue-600">Explore</button>
              <div className="absolute left-0 top-full hidden w-48 rounded-md border bg-white p-2 shadow-lg group-hover:block">
                <Link href="#" className="block rounded-md px-3 py-2 text-sm hover:bg-gray-100">
                  Online Degrees
                </Link>
                <Link href="#" className="block rounded-md px-3 py-2 text-sm hover:bg-gray-100">
                  Certificates
                </Link>
                <Link href="#" className="block rounded-md px-3 py-2 text-sm hover:bg-gray-100">
                  Find your New Career
                </Link>
              </div>
            </div>
            <div className="relative group">
              <button className="flex items-center gap-1 text-sm font-medium hover:text-blue-600">Categories</button>
              <div className="absolute left-0 top-full hidden w-48 rounded-md border bg-white p-2 shadow-lg group-hover:block">
                <Link href="#" className="block rounded-md px-3 py-2 text-sm hover:bg-gray-100">
                  Data Science
                </Link>
                <Link href="#" className="block rounded-md px-3 py-2 text-sm hover:bg-gray-100">
                  Business
                </Link>
                <Link href="#" className="block rounded-md px-3 py-2 text-sm hover:bg-gray-100">
                  Computer Science
                </Link>
                <Link href="#" className="block rounded-md px-3 py-2 text-sm hover:bg-gray-100">
                  Health
                </Link>
              </div>
            </div>
            <Link href="#" className="text-sm font-medium hover:text-blue-600">
              Enterprise
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          {isSearchOpen ? (
            <div className="relative hidden md:block">
              <Input type="search" placeholder="What do you want to learn?" className="w-[300px] pr-8" />
              <button onClick={() => setIsSearchOpen(false)} className="absolute right-2 top-1/2 -translate-y-1/2">
                <X className="h-4 w-4 text-gray-500" />
              </button>
            </div>
          ) : (
            <Button variant="ghost" size="icon" onClick={() => setIsSearchOpen(true)} className="hidden md:flex">
              <Search className="h-5 w-5" />
              <span className="sr-only">Search</span>
            </Button>
          )}
          <Button variant="ghost" size="icon" className="hidden md:flex">
            <Globe className="h-5 w-5" />
            <span className="sr-only">Language</span>
          </Button>
          <div className="hidden md:flex items-center gap-2">
            <Button variant="outline" size="sm">
              Log In
            </Button>
            <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
              Sign Up
            </Button>
          </div>
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsSearchOpen(!isSearchOpen)}>
            <Search className="h-5 w-5" />
            <span className="sr-only">Search</span>
          </Button>
        </div>
      </div>
      {isSearchOpen && (
        <div className="border-t p-2 md:hidden">
          <div className="relative">
            <Input type="search" placeholder="What do you want to learn?" className="w-full pr-8" />
            <button onClick={() => setIsSearchOpen(false)} className="absolute right-2 top-1/2 -translate-y-1/2">
              <X className="h-4 w-4 text-gray-500" />
            </button>
          </div>
        </div>
      )}
    </header>
  )
}
