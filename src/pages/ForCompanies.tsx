import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Users,
  Clock,
  DollarSign,
  Shield,
  CheckCircle,
  TrendingUp,
  Star,
  ArrowRight,
  Zap,
  Target,
} from "lucide-react";
import Layout from "@/components/Layout";

const ForCompanies = () => {
  const benefits = [
    {
      icon: Users,
      title: "Fresh Perspectives",
      description: "Digital natives who understand modern trends and consumer behavior",
    },
    {
      icon: Clock,
      title: "Fast Turnaround",
      description: "Average project completion in 2-7 days with flexible scheduling",
    },
    {
      icon: DollarSign,
      title: "Cost Effective",
      description: "Quality work at competitive rates, perfect for startups and SMEs",
    },
    {
      icon: Shield,
      title: "Quality Assured",
      description: "Supervised workflow with revision cycles and dispute resolution",
    },
  ];

  const howItWorks = [
    {
      step: 1,
      title: "Post Your Project",
      description: "Create a detailed brief with requirements, budget, and timeline.",
    },
    {
      step: 2,
      title: "Review Applications",
      description: "Browse teen profiles, portfolios, and application pitches.",
    },
    {
      step: 3,
      title: "Fund & Assign",
      description: "Fund escrow and assign work to your chosen teen talent.",
    },
    {
      step: 4,
      title: "Get Results",
      description: "Review work, request revisions, and approve final delivery.",
    },
  ];

  const testimonials = [
    {
      company: "TechStart",
      industry: "Technology",
      project: "Social Media Campaign",
      testimonial: "The teen we hired understood our target audience better than any agency. Fresh content, on-time delivery, and great communication.",
      rating: 5,
      savings: "60%",
    },
    {
      company: "GreenLife",
      industry: "Sustainability",
      project: "Content Writing",
      testimonial: "Amazing research skills and writing quality. The sustainability articles resonated perfectly with our young audience.",
      rating: 5,
      savings: "45%",
    },
    {
      company: "AppCo",
      industry: "Mobile Apps",
      project: "App Testing",
      testimonial: "Thorough testing with detailed bug reports. The teen tester found issues we missed and provided great UX feedback.",
      rating: 5,
      savings: "70%",
    },
  ];

  const pricing = [
    {
      title: "Basic",
      price: "Free",
      description: "Perfect for trying out the platform",
      features: [
        "Post up to 2 projects",
        "Basic applicant filtering",
        "Standard support",
        "7-day escrow protection",
      ],
      highlight: false,
    },
    {
      title: "Professional",
      price: "₹499/month",
      description: "Best for growing businesses",
      features: [
        "Unlimited projects",
        "Advanced filtering & search",
        "Priority support",
        "30-day escrow protection",
        "Team collaboration tools",
        "Analytics dashboard",
      ],
      highlight: true,
    },
    {
      title: "Enterprise",
      price: "Custom",
      description: "For large organizations",
      features: [
        "Everything in Professional",
        "Dedicated account manager",
        "Custom onboarding",
        "Bulk project management",
        "Advanced analytics",
        "SLA guarantee",
      ],
      highlight: false,
    },
  ];

  return (
    <Layout>
      <div className="py-8">
        {/* Hero Section */}
        <section className="bg-gradient-subtle py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="font-poppins font-semibold text-fg-primary mb-6">
                  Hire Fresh Teen Talent
                </h1>
                <p className="text-xl text-fg-body mb-8 leading-relaxed">
                  Access India's brightest young minds for quality work at competitive rates. 
                  Get fresh perspectives, fast delivery, and excellent results.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <Link to="/signup?role=company">
                    <Button variant="hero" size="lg">
                      Post Your First Project
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                  <Link to="/how-it-works">
                    <Button variant="outline" size="lg">
                      See How It Works
                    </Button>
                  </Link>
                </div>
                <div className="flex items-center gap-8 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-brand" />
                    <span>500+ verified teens</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-brand" />
                    <span>90% on-time delivery</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-card rounded-2xl p-8 shadow-card">
                <h3 className="font-poppins font-medium text-fg-primary mb-6 text-center">
                  Platform Stats
                </h3>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-2xl font-semibold text-brand mb-1">500+</div>
                    <div className="text-sm text-muted-foreground">Active Companies</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-semibold text-brand mb-1">2-7</div>
                    <div className="text-sm text-muted-foreground">Days Avg Delivery</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-semibold text-brand mb-1">4.8/5</div>
                    <div className="text-sm text-muted-foreground">Quality Rating</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-semibold text-brand mb-1">₹12L+</div>
                    <div className="text-sm text-muted-foreground">Paid Out</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16 bg-background">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-poppins font-semibold text-fg-primary mb-4">
                Why Choose Teen Talent?
              </h2>
              <p className="text-lg text-fg-body max-w-2xl mx-auto">
                Unlock the potential of young, energetic, and digitally-native creators.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit) => (
                <Card key={benefit.title} className="border-0 shadow-card text-center">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-gradient-brand rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <benefit.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="font-medium text-fg-primary mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-sm text-fg-body">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16 bg-muted">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-poppins font-semibold text-fg-primary mb-4">
                Simple Process, Great Results
              </h2>
              <p className="text-lg text-fg-body max-w-2xl mx-auto">
                From posting to delivery, get quality work in just a few steps.
              </p>
            </div>
            
            <div className="grid md:grid-cols-4 gap-8">
              {howItWorks.map((step) => (
                <div key={step.step} className="text-center">
                  <div className="w-16 h-16 bg-gradient-brand rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-xl">{step.step}</span>
                  </div>
                  <h3 className="font-medium text-fg-primary mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-fg-body">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 bg-background">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-poppins font-semibold text-fg-primary mb-4">
                What Companies Say
              </h2>
              <p className="text-lg text-fg-body max-w-2xl mx-auto">
                Real results from real companies working with our teen talent.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="border-0 shadow-card">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h4 className="font-medium text-fg-primary">{testimonial.company}</h4>
                        <p className="text-sm text-muted-foreground">{testimonial.industry}</p>
                      </div>
                      <Badge variant="secondary" className="text-xs">
                        Saved {testimonial.savings}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-1 mb-2">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-current text-yellow-500" />
                      ))}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-fg-body italic mb-4">"{testimonial.testimonial}"</p>
                    <Badge variant="outline" className="text-xs">
                      {testimonial.project}
                    </Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="py-16 bg-muted">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-poppins font-semibold text-fg-primary mb-4">
                Simple, Transparent Pricing
              </h2>
              <p className="text-lg text-fg-body max-w-2xl mx-auto">
                Choose the plan that fits your business needs. No hidden fees.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {pricing.map((plan, index) => (
                <Card 
                  key={index} 
                  className={`border-0 shadow-card relative ${
                    plan.highlight ? "ring-2 ring-brand" : ""
                  }`}
                >
                  {plan.highlight && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <Badge className="bg-brand text-brand-foreground">
                        Most Popular
                      </Badge>
                    </div>
                  )}
                  <CardHeader className="text-center">
                    <CardTitle className="font-poppins">{plan.title}</CardTitle>
                    <div className="text-3xl font-bold text-brand mb-2">
                      {plan.price}
                    </div>
                    <p className="text-sm text-muted-foreground">{plan.description}</p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 mb-6">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-brand mt-0.5 mr-3 flex-shrink-0" />
                          <span className="text-sm text-fg-body">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button 
                      variant={plan.highlight ? "hero" : "outline"} 
                      className="w-full"
                    >
                      {plan.price === "Custom" ? "Contact Sales" : "Get Started"}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gradient-subtle">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-poppins font-semibold text-fg-primary mb-6">
              Ready to Access Fresh Talent?
            </h2>
            <p className="text-lg text-fg-body mb-8">
              Join 500+ companies already working with talented teens on Funngro.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/signup?role=company">
                <Button variant="hero" size="lg">
                  Post Your First Project
                </Button>
              </Link>
              <Link to="/opportunities">
                <Button variant="outline" size="lg">
                  Browse Teen Profiles
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default ForCompanies;