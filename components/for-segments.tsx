import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { User, Building2, GraduationCap, Landmark } from "lucide-react"

export default function ForSegments() {
  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container px-4 md:px-6">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Designed for every learning journey</h2>
          <p className="mt-4 text-lg text-gray-500 max-w-3xl mx-auto">
            Whether you're an individual looking to upskill, a business seeking to train your workforce, a university
            aiming to expand digital education, or a government body focused on national development.
          </p>
        </div>

        <Tabs defaultValue="individuals" className="w-full max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8">
            <TabsTrigger value="individuals" className="flex items-center gap-2 py-3">
              <User className="h-4 w-4" />
              <span>Individuals</span>
            </TabsTrigger>
            <TabsTrigger value="businesses" className="flex items-center gap-2 py-3">
              <Building2 className="h-4 w-4" />
              <span>Businesses</span>
            </TabsTrigger>
            <TabsTrigger value="universities" className="flex items-center gap-2 py-3">
              <GraduationCap className="h-4 w-4" />
              <span>Universities</span>
            </TabsTrigger>
            <TabsTrigger value="governments" className="flex items-center gap-2 py-3">
              <Landmark className="h-4 w-4" />
              <span>Governments</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="individuals">
            <Card>
              <CardHeader>
                <CardTitle>For Individuals</CardTitle>
                <CardDescription>Unlock your career potential with flexible, self-paced online courses</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  With a simple monthly or annual subscription, learners get access to thousands of high-quality
                  programs across AI, business, data science, technology, and more. Complete beginner-friendly or
                  advanced courses, work on hands-on projects, and earn certifications that strengthen your resume and
                  increase your job opportunities.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="mr-2 rounded-full bg-blue-100 p-1 text-blue-600">✓</span>
                    <span>Learn from industry leaders like Google, IBM, Meta, and top universities</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 rounded-full bg-blue-100 p-1 text-blue-600">✓</span>
                    <span>Unlimited access to over 10,000+ courses</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 rounded-full bg-blue-100 p-1 text-blue-600">✓</span>
                    <span>AI-powered learning guidance and support</span>
                  </li>
                </ul>
                <Button className="mt-4 bg-blue-600 hover:bg-blue-700">Start Learning for Free</Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="businesses">
            <Card>
              <CardHeader>
                <CardTitle>For Businesses</CardTitle>
                <CardDescription>Future-proof your organization with scalable workforce development</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  Our business learning model equips employees with in-demand skills via customized learning paths,
                  real-world projects, and job-relevant tools. Managers can track team progress, set learning goals, and
                  align training with organizational objectives.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="mr-2 rounded-full bg-blue-100 p-1 text-blue-600">✓</span>
                    <span>Over 1,000+ hands-on labs, industry certifications, and role-based training</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 rounded-full bg-blue-100 p-1 text-blue-600">✓</span>
                    <span>Comprehensive analytics and reporting tools</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 rounded-full bg-blue-100 p-1 text-blue-600">✓</span>
                    <span>Trusted by leading global companies</span>
                  </li>
                </ul>
                <Button className="mt-4 bg-blue-600 hover:bg-blue-700">Contact Sales</Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="universities">
            <Card>
              <CardHeader>
                <CardTitle>For Universities</CardTitle>
                <CardDescription>Empower your institution with modern learning tools</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  Universities can expand course offerings by partnering with world-renowned faculty and institutions.
                  With Coursera for Campus, educators can assign courses as part of credit programs, provide students
                  with access to premium learning content, and build employable skills directly into their academic
                  experience.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="mr-2 rounded-full bg-blue-100 p-1 text-blue-600">✓</span>
                    <span>Integrate seamlessly into your academic curriculum</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 rounded-full bg-blue-100 p-1 text-blue-600">✓</span>
                    <span>From blended learning to full online degrees</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 rounded-full bg-blue-100 p-1 text-blue-600">✓</span>
                    <span>Create impactful, flexible, and future-ready education</span>
                  </li>
                </ul>
                <Button className="mt-4 bg-blue-600 hover:bg-blue-700">Learn More</Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="governments">
            <Card>
              <CardHeader>
                <CardTitle>For Governments</CardTitle>
                <CardDescription>Drive large-scale skill development and workforce readiness programs</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  From upskilling unemployed youth to training government employees and supporting national digital
                  initiatives, our platform is a partner in public growth. We help governments enhance employability,
                  improve education systems, and contribute to national economic upliftment.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="mr-2 rounded-full bg-blue-100 p-1 text-blue-600">✓</span>
                    <span>Cost-effective and impactful learning programs at scale</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 rounded-full bg-blue-100 p-1 text-blue-600">✓</span>
                    <span>Tailored solutions for government needs</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 rounded-full bg-blue-100 p-1 text-blue-600">✓</span>
                    <span>Support for national economic upliftment</span>
                  </li>
                </ul>
                <Button className="mt-4 bg-blue-600 hover:bg-blue-700">Request Information</Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}
