import { Award, Clock, CreditCard } from "lucide-react"

const valueProps = [
  {
    id: 1,
    icon: <Clock className="h-8 w-8 text-blue-600" />,
    title: "Flexible Learning",
    description: "Learn at your own pace, on your own schedule, and access courses anytime, anywhere.",
  },
  {
    id: 2,
    icon: <CreditCard className="h-8 w-8 text-blue-600" />,
    title: "Affordable Options",
    description: "Choose from free courses, or unlock premium content with affordable subscription plans.",
  },
  {
    id: 3,
    icon: <Award className="h-8 w-8 text-blue-600" />,
    title: "Earn Certificates",
    description: "Receive recognized certificates upon completion to showcase your new skills to employers.",
  },
]

export default function ValueProps() {
  return (
    <section className="py-12 md:py-16">
      <div className="container px-4 md:px-6">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {valueProps.map((prop) => (
            <div
              key={prop.id}
              className="flex flex-col items-center rounded-lg border bg-white p-6 text-center shadow-sm"
            >
              <div className="mb-4 rounded-full bg-blue-50 p-3">{prop.icon}</div>
              <h3 className="mb-2 text-xl font-bold">{prop.title}</h3>
              <p className="text-gray-500">{prop.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
