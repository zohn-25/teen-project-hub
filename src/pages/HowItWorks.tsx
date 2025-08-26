import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  UserCheck,
  Search,
  Send,
  CheckCircle,
  Clock,
  Shield,
  CreditCard,
  Star,
  ArrowRight,
} from "lucide-react";
import Layout from "@/components/Layout";

const HowItWorks = () => {
  const teenSteps = [
    {
      step: 1,
      icon: UserCheck,
      title: "Create Your Profile",
      description: "Sign up with your basic details, add your skills, and complete guardian consent. We'll verify your information to keep everyone safe.",
      details: [
        "Basic info (name, age, school/college)",
        "Skills and interests selection",
        "Guardian consent and contact details",
        "Simple identity verification",
      ],
    },
    {
      step: 2,
      icon: Search,
      title: "Browse & Apply",
      description: "Explore projects that match your skills. Filter by category, budget, and timeline to find perfect opportunities.",
      details: [
        "Browse by category and skills",
        "Filter by budget and timeline",
        "Read detailed project briefs",
        "Save interesting projects",
      ],
    },
    {
      step: 3,
      icon: Send,
      title: "Submit Application",
      description: "Write a short pitch explaining why you're perfect for the project. Add samples of your previous work if available.",
      details: [
        "Write compelling application pitch",
        "Upload relevant work samples",
        "Answer project-specific questions",
        "Track application status",
      ],
    },
    {
      step: 4,
      icon: CheckCircle,
      title: "Get Selected & Work",
      description: "Once selected, you'll get access to the project workspace. Communicate with the client and deliver high-quality work.",
      details: [
        "Access project workspace",
        "Chat directly with clients",
        "Upload progress and final work",
        "Request clarifications anytime",
      ],
    },
    {
      step: 5,
      icon: CreditCard,
      title: "Get Paid",
      description: "After client approval, money is released from escrow to your wallet. Withdraw to your bank account anytime.",
      details: [
        "Automatic payment on approval",
        "Secure escrow protection",
        "Instant wallet credit",
        "Easy bank account withdrawal",
      ],
    },
  ];

  const companySteps = [
    {
      step: 1,
      icon: UserCheck,
      title: "Company Registration",
      description: "Register your company with basic details and verify your business information.",
      details: [
        "Company details and verification",
        "Business registration documents",
        "Contact person information",
        "Industry and company size",
      ],
    },
    {
      step: 2,
      icon: Send,
      title: "Post Your Project",
      description: "Create detailed project briefs with clear requirements, budget, and timeline.",
      details: [
        "Detailed project description",
        "Skills and experience needed",
        "Budget and payment terms",
        "Timeline and milestones",
      ],
    },
    {
      step: 3,
      icon: Search,
      title: "Review Applications",
      description: "Review teen applications, check their profiles and samples, then shortlist the best candidates.",
      details: [
        "Browse teen applications",
        "Review profiles and samples",
        "Shortlist promising candidates",
        "Chat before final selection",
      ],
    },
    {
      step: 4,
      icon: Shield,
      title: "Fund Escrow & Assign",
      description: "Fund the project amount in secure escrow and assign the work to your chosen teen.",
      details: [
        "Secure escrow funding",
        "Assign work to selected teen",
        "Project workspace access",
        "Direct communication channel",
      ],
    },
    {
      step: 5,
      icon: Star,
      title: "Review & Release Payment",
      description: "Review submitted work, request revisions if needed, then approve and release payment.",
      details: [
        "Review submitted deliverables",
        "Request revisions if needed",
        "Approve final work",
        "Automatic payment release",
      ],
    },
  ];

  const safetyFeatures = [
    {
      icon: Shield,
      title: "Secure Escrow",
      description: "All payments held in secure escrow until work is approved",
    },
    {
      icon: UserCheck,
      title: "Identity Verification",
      description: "All teens and companies undergo verification process",
    },
    {
      icon: Clock,
      title: "Guardian Consent",
      description: "Mandatory parent/guardian approval for all teen accounts",
    },
    {
      icon: Star,
      title: "Quality Assurance",
      description: "Supervised workflow with dispute resolution support",
    },
  ];

  return (
    <Layout>
      <div className="py-8">
        {/* Hero Section */}
        <section className="bg-gradient-subtle py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="font-poppins font-semibold text-fg-primary mb-6">
              How Funngro Works
            </h1>
            <p className="text-xl text-fg-body mb-8 max-w-3xl mx-auto">
              A simple, safe, and secure platform connecting talented teens with real companies for meaningful work opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/signup?role=teen">
                <Button variant="hero" size="lg">
                  Start as Teen
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/signup?role=company">
                <Button variant="hero-secondary" size="lg">
                  Hire Teen Talent
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* For Teens */}
        <section className="py-16 bg-background">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Badge variant="secondary" className="mb-4">For Teens</Badge>
              <h2 className="font-poppins font-semibold text-fg-primary mb-4">
                Start Earning in 5 Simple Steps
              </h2>
              <p className="text-lg text-fg-body max-w-2xl mx-auto">
                From signup to getting paid, here's exactly how teens can start earning on Funngro.
              </p>
            </div>

            <div className="space-y-8">
              {teenSteps.map((step, index) => (
                <Card key={step.step} className="border-0 shadow-card">
                  <CardContent className="p-8">
                    <div className="grid md:grid-cols-3 gap-8 items-start">
                      <div className="text-center md:text-left">
                        <div className="w-16 h-16 bg-gradient-brand rounded-2xl flex items-center justify-center mx-auto md:mx-0 mb-4">
                          <step.icon className="h-8 w-8 text-white" />
                        </div>
                        <h3 className="font-poppins font-medium text-fg-primary mb-2">
                          Step {step.step}: {step.title}
                        </h3>
                      </div>
                      
                      <div className="md:col-span-2">
                        <p className="text-fg-body mb-6">{step.description}</p>
                        <div className="grid sm:grid-cols-2 gap-3">
                          {step.details.map((detail, detailIndex) => (
                            <div key={detailIndex} className="flex items-start">
                              <div className="w-2 h-2 bg-brand rounded-full mt-2 mr-3 flex-shrink-0" />
                              <span className="text-sm text-fg-body">{detail}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* For Companies */}
        <section className="py-16 bg-muted">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Badge variant="secondary" className="mb-4">For Companies</Badge>
              <h2 className="font-poppins font-semibold text-fg-primary mb-4">
                Get Quality Work in 5 Steps
              </h2>
              <p className="text-lg text-fg-body max-w-2xl mx-auto">
                From posting projects to receiving deliverables, here's how companies work with talented teens.
              </p>
            </div>

            <div className="space-y-8">
              {companySteps.map((step, index) => (
                <Card key={step.step} className="border-0 shadow-card">
                  <CardContent className="p-8">
                    <div className="grid md:grid-cols-3 gap-8 items-start">
                      <div className="text-center md:text-left">
                        <div className="w-16 h-16 bg-gradient-brand rounded-2xl flex items-center justify-center mx-auto md:mx-0 mb-4">
                          <step.icon className="h-8 w-8 text-white" />
                        </div>
                        <h3 className="font-poppins font-medium text-fg-primary mb-2">
                          Step {step.step}: {step.title}
                        </h3>
                      </div>
                      
                      <div className="md:col-span-2">
                        <p className="text-fg-body mb-6">{step.description}</p>
                        <div className="grid sm:grid-cols-2 gap-3">
                          {step.details.map((detail, detailIndex) => (
                            <div key={detailIndex} className="flex items-start">
                              <div className="w-2 h-2 bg-brand rounded-full mt-2 mr-3 flex-shrink-0" />
                              <span className="text-sm text-fg-body">{detail}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Safety & Trust */}
        <section className="py-16 bg-background">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-poppins font-semibold text-fg-primary mb-4">
                Safety & Trust First
              </h2>
              <p className="text-lg text-fg-body max-w-2xl mx-auto">
                We've built comprehensive safety measures to protect both teens and companies throughout the process.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {safetyFeatures.map((feature) => (
                <Card key={feature.title} className="border-0 shadow-card text-center">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-gradient-brand rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <feature.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="font-medium text-fg-primary mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-fg-body">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-subtle">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-poppins font-semibold text-fg-primary mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-fg-body mb-8">
              Join thousands of teens already earning and learning on Funngro.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/signup?role=teen">
                <Button variant="hero" size="lg">
                  Join as Teen
                </Button>
              </Link>
              <Link to="/signup?role=company">
                <Button variant="hero-secondary" size="lg">
                  Post Projects
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default HowItWorks;