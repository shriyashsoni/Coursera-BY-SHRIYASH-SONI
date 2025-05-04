import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react"

const footerLinks = [
  {
    title: "Technical Skills",
    links: [
      { name: "ChatGPT", href: "#" },
      { name: "Coding", href: "#" },
      { name: "Computer Science", href: "#" },
      { name: "Cybersecurity", href: "#" },
      { name: "DevOps", href: "#" },
      { name: "Generative AI", href: "#" },
      { name: "Python", href: "#" },
      { name: "Web Development", href: "#" },
    ],
  },
  {
    title: "Analytical Skills",
    links: [
      { name: "Artificial Intelligence", href: "#" },
      { name: "Big Data", href: "#" },
      { name: "Data Analytics", href: "#" },
      { name: "Data Science", href: "#" },
      { name: "Machine Learning", href: "#" },
      { name: "Microsoft Excel", href: "#" },
      { name: "SQL", href: "#" },
    ],
  },
  {
    title: "Business Skills",
    links: [
      { name: "Accounting", href: "#" },
      { name: "Digital Marketing", href: "#" },
      { name: "Finance", href: "#" },
      { name: "Google", href: "#" },
      { name: "Marketing", href: "#" },
      { name: "Project Management", href: "#" },
    ],
  },
  {
    title: "Coursera",
    links: [
      { name: "About", href: "#" },
      { name: "What We Offer", href: "#" },
      { name: "Leadership", href: "#" },
      { name: "Careers", href: "#" },
      { name: "Catalog", href: "#" },
      { name: "Coursera Plus", href: "#" },
      { name: "Professional Certificates", href: "#" },
      { name: "Degrees", href: "#" },
    ],
  },
]

const socialLinks = [
  { name: "Facebook", icon: <Facebook className="h-5 w-5" />, href: "#" },
  { name: "Twitter", icon: <Twitter className="h-5 w-5" />, href: "#" },
  { name: "LinkedIn", icon: <Linkedin className="h-5 w-5" />, href: "#" },
  { name: "Instagram", icon: <Instagram className="h-5 w-5" />, href: "#" },
  { name: "YouTube", icon: <Youtube className="h-5 w-5" />, href: "#" },
]

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container px-4 py-12 md:px-6 md:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 className="mb-4 text-lg font-medium">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-sm text-gray-300 hover:text-white">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 border-t border-gray-800 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="flex items-center">
              <Image
                src="/images/logos/coursera-logo-white.png"
                alt="Coursera Logo"
                width={120}
                height={28}
                className="h-8 w-auto"
              />
            </div>
            <div className="flex gap-4">
              {socialLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="rounded-full bg-gray-800 p-2 text-gray-300 hover:bg-gray-700 hover:text-white"
                >
                  {link.icon}
                  <span className="sr-only">{link.name}</span>
                </Link>
              ))}
            </div>
          </div>
          <div className="mt-8 text-center text-sm text-gray-400">
            <p>© 2025 Coursera Inc. All rights reserved.</p>
            <div className="mt-2 flex flex-wrap justify-center gap-4">
              <Link href="#" className="hover:text-white">
                Terms
              </Link>
              <Link href="#" className="hover:text-white">
                Privacy
              </Link>
              <Link href="#" className="hover:text-white">
                Help
              </Link>
              <Link href="#" className="hover:text-white">
                Accessibility
              </Link>
              <Link href="#" className="hover:text-white">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
