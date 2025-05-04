"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const testimonials = [
  {
    id: 1,
    name: "Kenia R.",
    location: "United States",
    image: "/images/testimonials/testimonial-1.png",
    quote:
      "Being a mother — especially a working mother means I'm constantly trying to juggle my schedule, my kids' schedules, and work. I am very grateful for the flexible and remote learning programs that Coursera has to offer.",
  },
  {
    id: 2,
    name: "Ryan L.",
    location: "United States",
    image: "/images/testimonials/testimonial-2.png",
    quote:
      "From taking courses on Coursera, I gained a deep understanding of the UX Design process from start to finish. With the knowledge I gained, I feel prepared for entry-level jobs and internships. I've been able to apply the skills and knowledge I gained to multiple projects and work experiences.",
  },
  {
    id: 3,
    name: "Vishal V.",
    location: "India",
    image: "/images/testimonials/testimonial-3.png",
    quote:
      "I really enjoyed my courses. The quizzes, videos, and quick labs provided helpful hands-on experience. Learning on Coursera has given me the confidence and ability to excel in my career. I love this feeling.",
  },
]

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="bg-gray-50 py-12 md:py-16">
      <div className="container px-4 md:px-6">
        <div className="mb-8 text-center">
          <h2 className="text-2xl font-bold tracking-tight md:text-3xl">From the Coursera community</h2>
          <p className="mt-2 text-gray-500">175+ million people have already joined Coursera</p>
        </div>
        <div className="mx-auto max-w-4xl">
          <div className="relative">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-300 ease-in-out"
                style={{ transform: `translateX(-${activeIndex * 100}%)` }}
              >
                {testimonials.map((testimonial) => (
                  <Card key={testimonial.id} className="w-full flex-shrink-0 border-none bg-transparent shadow-none">
                    <CardContent className="flex flex-col items-center p-6 text-center">
                      <Quote className="mb-4 h-10 w-10 text-blue-600" />
                      <p className="mb-6 text-lg italic text-gray-700">"{testimonial.quote}"</p>
                      <div className="flex flex-col items-center">
                        <div className="mb-2 overflow-hidden rounded-full">
                          <Image
                            src={testimonial.image || "/placeholder.svg"}
                            alt={testimonial.name}
                            width={80}
                            height={80}
                            className="h-16 w-16 object-cover"
                          />
                        </div>
                        <div className="text-center">
                          <h3 className="font-bold">{testimonial.name}</h3>
                          <p className="text-sm text-gray-500">{testimonial.location}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
            <div className="mt-6 flex justify-center gap-2">
              <Button variant="outline" size="icon" onClick={prevTestimonial} className="rounded-full">
                <ChevronLeft className="h-4 w-4" />
                <span className="sr-only">Previous testimonial</span>
              </Button>
              <div className="flex gap-1">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`h-2 w-2 rounded-full ${index === activeIndex ? "bg-blue-600" : "bg-gray-300"}`}
                  >
                    <span className="sr-only">Testimonial {index + 1}</span>
                  </button>
                ))}
              </div>
              <Button variant="outline" size="icon" onClick={nextTestimonial} className="rounded-full">
                <ChevronRight className="h-4 w-4" />
                <span className="sr-only">Next testimonial</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
