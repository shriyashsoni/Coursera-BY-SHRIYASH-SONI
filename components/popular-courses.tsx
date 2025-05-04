import Image from "next/image"
import Link from "next/link"
import { Star } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"

const courses = [
  {
    id: 1,
    title: "Google Data Analytics",
    provider: "Google",
    image: "/images/courses/google-data-analytics.png",
    rating: 4.8,
    reviews: 12500,
    badge: "New AI skills",
    type: "Professional Certificate",
  },
  {
    id: 2,
    title: "Google Project Management",
    provider: "Google",
    image: "/images/courses/google-project-management.png",
    rating: 4.7,
    reviews: 9800,
    badge: "New AI skills",
    type: "Professional Certificate",
  },
  {
    id: 3,
    title: "Google IT Support",
    provider: "Google",
    image: "/images/courses/google-it-support.png",
    rating: 4.9,
    reviews: 15200,
    badge: "New AI skills",
    type: "Professional Certificate",
  },
  {
    id: 4,
    title: "Google UX Design",
    provider: "Google",
    image: "/images/courses/google-ux-design.png",
    rating: 4.6,
    reviews: 8700,
    badge: "New AI skills",
    type: "Professional Certificate",
  },
]

export default function PopularCourses() {
  return (
    <section className="py-12 md:py-16">
      <div className="container px-4 md:px-6">
        <div className="mb-8">
          <h2 className="text-2xl font-bold tracking-tight md:text-3xl">Most Popular Certificates</h2>
          <p className="mt-2 text-gray-500">
            Explore our most popular programs, get job-ready for an in-demand career.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {courses.map((course) => (
            <Card key={course.id} className="overflow-hidden transition-all hover:shadow-md">
              <CardHeader className="p-0">
                <div className="relative">
                  <Image
                    src={course.image || "/placeholder.svg"}
                    alt={course.title}
                    width={350}
                    height={200}
                    className="aspect-[16/9] w-full object-cover"
                  />
                  {course.badge && (
                    <Badge className="absolute left-3 top-3 bg-blue-600 hover:bg-blue-700">{course.badge}</Badge>
                  )}
                </div>
              </CardHeader>
              <CardContent className="p-4">
                <div className="mb-2 text-sm font-medium text-blue-600">{course.provider}</div>
                <h3 className="line-clamp-2 text-base font-bold">{course.title}</h3>
                <div className="mt-1 text-sm text-gray-500">{course.type}</div>
              </CardContent>
              <CardFooter className="flex items-center p-4 pt-0">
                <div className="flex items-center">
                  <Star className="mr-1 h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm font-medium">{course.rating}</span>
                  <span className="ml-1 text-sm text-gray-500">({course.reviews.toLocaleString()})</span>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link
            href="#"
            className="inline-flex h-10 items-center justify-center rounded-md bg-blue-600 px-8 text-sm font-medium text-white shadow transition-colors hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
          >
            View all certificates
          </Link>
        </div>
      </div>
    </section>
  )
}
