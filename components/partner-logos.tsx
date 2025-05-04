import Image from "next/image"

const partners = [
  {
    id: 1,
    name: "University of Illinois",
    logo: "/images/logos/university-illinois-logo.png",
  },
  {
    id: 2,
    name: "Duke University",
    logo: "/images/logos/duke-university-logo.png",
  },
  {
    id: 3,
    name: "Google",
    logo: "/images/logos/google-logo.png",
  },
  {
    id: 4,
    name: "University of Michigan",
    logo: "/images/logos/michigan-logo.png",
  },
  {
    id: 5,
    name: "IBM",
    logo: "/images/logos/ibm-logo.png",
  },
  {
    id: 6,
    name: "Imperial College London",
    logo: "/images/logos/imperial-college-logo.png",
  },
  {
    id: 7,
    name: "Stanford University",
    logo: "/images/logos/stanford-logo.png",
  },
  {
    id: 8,
    name: "University of Pennsylvania",
    logo: "/images/logos/upenn-logo.png",
  },
]

export default function PartnerLogos() {
  return (
    <section className="bg-gray-50 py-12 md:py-16">
      <div className="container px-4 md:px-6">
        <h2 className="mb-8 text-center text-xl font-medium text-gray-600">
          We collaborate with 350+ leading universities and companies
        </h2>
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8">
          {partners.map((partner) => (
            <div
              key={partner.id}
              className="flex items-center justify-center rounded-lg bg-white p-4 transition-all hover:shadow-md"
            >
              <Image
                src={partner.logo || "/placeholder.svg"}
                alt={partner.name}
                width={120}
                height={60}
                className="h-12 w-auto object-contain transition-all hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
