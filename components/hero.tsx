import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="relative bg-gray-50 py-12 md:py-16 lg:py-20">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-[1fr_1.2fr]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                Learn without limits
              </h1>
              <p className="max-w-[600px] text-gray-500 md:text-xl">
                Start, switch, or advance your career with more than 10,000 courses, Professional Certificates, and
                degrees from world-class universities and companies.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button className="bg-blue-600 hover:bg-blue-700">Join for Free</Button>
              <Button variant="outline">Try Coursera for Business</Button>
            </div>
          </div>
          <div className="flex items-center justify-center lg:justify-end">
            <div className="relative h-[300px] w-full max-w-[500px] lg:h-[400px]">
              <Image
                src="/images/hero-image.png"
                alt="Student learning online"
                fill
                className="object-cover rounded-lg"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
