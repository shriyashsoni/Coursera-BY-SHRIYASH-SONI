"use client"

import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const categories = [
  {
    id: 1,
    name: "Data Science",
    image: "/images/categories/data-science-category.png",
  },
  {
    id: 2,
    name: "Business",
    image: "/images/categories/business-category.png",
  },
  {
    id: 3,
    name: "Computer Science",
    image: "/images/categories/computer-science-category.png",
  },
  {
    id: 4,
    name: "Health",
    image: "/images/categories/health-category.png",
  },
  {
    id: 5,
    name: "Social Sciences",
    image: "/images/categories/social-sciences-category.png",
  },
  {
    id: 6,
    name: "Arts & Humanities",
    image: "/images/categories/arts-humanities-category.png",
  },
  {
    id: 7,
    name: "Personal Development",
    image: "/images/categories/personal-development-category.png",
  },
  {
    id: 8,
    name: "Information Technology",
    image: "/images/categories/it-category.png",
  },
]

export default function CategorySlider() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -300, behavior: "smooth" })
    }
  }

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 300, behavior: "smooth" })
    }
  }

  return (
    <section className="py-12 md:py-16">
      <div className="container px-4 md:px-6">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold tracking-tight md:text-3xl">Top Categories</h2>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="icon" onClick={scrollLeft} className="rounded-full">
              <ChevronLeft className="h-4 w-4" />
              <span className="sr-only">Scroll left</span>
            </Button>
            <Button variant="outline" size="icon" onClick={scrollRight} className="rounded-full">
              <ChevronRight className="h-4 w-4" />
              <span className="sr-only">Scroll right</span>
            </Button>
          </div>
        </div>
        <div ref={scrollContainerRef} className="flex space-x-4 overflow-x-auto pb-4 scrollbar-hide">
          {categories.map((category) => (
            <Link
              key={category.id}
              href="#"
              className={cn(
                "flex-shrink-0 cursor-pointer rounded-lg border bg-white p-2",
                "transition-all hover:shadow-md",
                "w-[200px]",
              )}
            >
              <div className="aspect-square w-full overflow-hidden rounded-md">
                <Image
                  src={category.image || "/placeholder.svg"}
                  alt={category.name}
                  width={200}
                  height={200}
                  className="h-full w-full object-cover transition-transform hover:scale-105"
                />
              </div>
              <div className="p-2">
                <h3 className="font-medium">{category.name}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
