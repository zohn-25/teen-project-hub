import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Users,
  Shield,
  Clock,
  Star,
  ArrowRight,
  PenTool,
  Camera,
  Database,
  Palette,
  Video,
  Search,
  FileText,
  TestTube,
} from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";
import testimonial1 from "@/assets/testimonial-1.jpg";
import testimonial2 from "@/assets/testimonial-2.jpg";
import testimonial3 from "@/assets/testimonial-3.jpg";

const HomePage = () => {
  const categories = [
    {
      name: "Content Writing",
      icon: PenTool,
      count: "120+ projects",
      description: "Blog posts, articles, social media content",
    },
    {
      name: "Social Media",
      icon: Camera,
      count: "85+ projects",
      description: "Post creation, community management",
    },
    {
      name: "Data Entry",
      icon: Database,
      count: "200+ projects",
      description: "Research, data collection, organization",
    },
    {
      name: "Graphic Design",
      icon: Palette,
      count: "95+ projects",
      description: "Logos, banners, social graphics",
    },
    {
      name: "Video Editing",
      icon: Video,
      count: "60+ projects",
      description: "YouTube videos, promotional content",
    },
    {
      name: "Research",
      icon: Search,
      count: "140+ projects",
      description: "Market research, competitor analysis",
    },
    {
      name: "PPT/Docs",
      icon: FileText,
      count: "75+ projects",
      description: "Presentations, documentation",
    },
    {
      name: "Testing/QA",
      icon: TestTube,
      count: "45+ projects",
      description: "App testing, website feedback",
    },
  ];

  const stats = [
    { label: "Paid to Teens", value: "₹12,50,000+", icon: Users },
    { label: "Avg Approval Time", value: "≤ 24 hours", icon: Clock },
    { label: "On-time Delivery", value: "90%", icon: Shield },
    { label: "Active Projects", value: "500+", icon: Star },
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      class: "Class 11th",
      city: "Mumbai",
      role: "Content Writer",
      earning: "₹15,000",
      quote: "Funngro helped me earn while learning real content writing skills. The projects are genuine and payments are always on time!",
      image: testimonial1,
    },
    {
      name: "Arjun Patel",
      class: "Class 12th",
      city: "Bangalore",
      role: "Graphic Designer",
      earning: "₹22,000",
      quote: "I've completed 8 design projects so far. It's amazing to work with real companies and build my portfolio.",
      image: testimonial2,
    },
    {
      name: "Sneha Singh",
      class: "1st Year College",
      city: "Delhi",
      role: "Video Editor",
      earning: "₹18,500",
      quote: "The video editing projects taught me so much. Now I'm confident about my skills and have money for college!",
      image: testimonial3,
    },
  ];

  const trustLogos = [
    "Razorpay", "Paytm", "Google Pay", "UPI", "Visa", "Mastercard"
  ];

  const companyBenefits = [
    "Fresh perspectives from digital natives",
    "Fast turnaround times (2-7 days typical)",
    "Cost-effective solutions",
    "Supervised workflow & quality assurance",
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-subtle overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center py-16 lg:py-24">
            <div className="text-center lg:text-left">
              <h1 className="font-poppins font-semibold text-fg-primary mb-6">
                Earn. Learn. Grow.
              </h1>
              <p className="text-xl text-fg-body mb-8 leading-relaxed">
                Real projects for teens. Real pay. Real experience. Connect with genuine companies and build your future while earning money.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
                <Link to="/signup?role=teen">
                  <Button variant="hero" size="lg" className="text-base">
                    Get Started as Teen
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link to="/signup?role=company">
                  <Button variant="hero-secondary" size="lg" className="text-base">
                    Hire Teen Talent
                  </Button>
                </Link>
              </div>
              
              {/* Trust Row */}
              <div className="text-center lg:text-left">
                <p className="text-sm text-muted-foreground mb-4">
                  Trusted by 500+ companies • Payments secured by
                </p>
                <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                  {trustLogos.map((logo) => (
                    <Badge key={logo} variant="secondary" className="text-xs">
                      {logo}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img
                src={heroImage}
                alt="Diverse teenagers working on projects"
                className="rounded-2xl shadow-card-hover w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-poppins font-semibold text-fg-primary mb-4">
              How It Works
            </h2>
            <p className="text-lg text-fg-body max-w-2xl mx-auto">
              Get started in three simple steps and begin earning while building real-world skills.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Sign up & Verify",
                description: "Create your profile, showcase your skills, and complete guardian consent with simple verification.",
              },
              {
                step: "02",
                title: "Pick Projects",
                description: "Browse projects that match your skills and interests. Apply with a short pitch and samples.",
              },
              {
                step: "03",
                title: "Get Paid",
                description: "Do great work, get approved, and receive payment through secure escrow protection.",
              },
            ].map((item) => (
              <Card key={item.step} className="border-0 shadow-card hover:shadow-card-hover transition-all">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-brand rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <span className="text-white font-bold text-xl">{item.step}</span>
                  </div>
                  <h3 className="font-poppins font-medium text-fg-primary mb-4">
                    {item.title}
                  </h3>
                  <p className="text-fg-body">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 lg:py-24 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-poppins font-semibold text-fg-primary mb-4">
              Project Categories
            </h2>
            <p className="text-lg text-fg-body max-w-2xl mx-auto">
              Find projects that match your skills and interests across various categories.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {categories.map((category) => (
              <Link key={category.name} to={`/opportunities?category=${category.name.toLowerCase()}`}>
                <Card className="border-0 shadow-card hover:shadow-card-hover transition-all group cursor-pointer">
                  <CardContent className="p-6 text-center">
                    <category.icon className="h-8 w-8 text-brand mx-auto mb-4 group-hover:scale-110 transition-transform" />
                    <h3 className="font-medium text-fg-primary mb-2 text-sm">
                      {category.name}
                    </h3>
                    <p className="text-xs text-muted-foreground mb-1">{category.count}</p>
                    <p className="text-xs text-fg-body">{category.description}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="w-12 h-12 bg-gradient-brand rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-6 w-6 text-white" />
                </div>
                <div className="text-2xl font-poppins font-semibold text-fg-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-fg-body text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 lg:py-24 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-poppins font-semibold text-fg-primary mb-4">
              Success Stories
            </h2>
            <p className="text-lg text-fg-body max-w-2xl mx-auto">
              Real teens, real earnings, real growth. See how Funngro is changing lives.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.name} className="border-0 shadow-card">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover mr-4"
                    />
                    <div>
                      <h4 className="font-medium text-fg-primary">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.class} • {testimonial.city}
                      </p>
                    </div>
                  </div>
                  <div className="mb-4">
                    <Badge variant="secondary" className="text-xs mb-2">
                      {testimonial.role}
                    </Badge>
                    <div className="text-lg font-semibold text-brand">
                      Earned {testimonial.earning}
                    </div>
                  </div>
                  <p className="text-fg-body italic">"{testimonial.quote}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* For Companies */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-poppins font-semibold text-fg-primary mb-6">
                For Companies
              </h2>
              <p className="text-lg text-fg-body mb-8">
                Tap into the creativity and energy of India's brightest young minds. Get quality work delivered fast.
              </p>
              <ul className="space-y-4 mb-8">
                {companyBenefits.map((benefit) => (
                  <li key={benefit} className="flex items-start">
                    <div className="w-2 h-2 bg-brand rounded-full mt-2 mr-3 flex-shrink-0" />
                    <span className="text-fg-body">{benefit}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/for-companies">
                  <Button variant="hero" size="lg">
                    Learn More
                  </Button>
                </Link>
                <Link to="/signup?role=company">
                  <Button variant="outline" size="lg">
                    Post a Project
                  </Button>
                </Link>
              </div>
            </div>
            <div className="bg-gradient-subtle rounded-2xl p-8 text-center">
              <div className="text-3xl font-poppins font-semibold text-fg-primary mb-2">
                500+
              </div>
              <div className="text-fg-body mb-4">Active Companies</div>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <div className="font-semibold text-brand">2-7 days</div>
                  <div className="text-muted-foreground">Avg delivery</div>
                </div>
                <div>
                  <div className="font-semibold text-brand">4.8/5</div>
                  <div className="text-muted-foreground">Quality rating</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Parents & Schools */}
      <section className="py-16 lg:py-24 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-poppins font-semibold text-fg-primary mb-6">
            For Parents & Schools
          </h2>
          <p className="text-lg text-fg-body max-w-3xl mx-auto mb-8">
            Funngro provides a safe, supervised environment where teens can develop professional skills, 
            learn time management, and earn money while focusing on their studies.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Badge variant="secondary">Guardian Consent Required</Badge>
            <Badge variant="secondary">Supervised Workflow</Badge>
            <Badge variant="secondary">Educational Focus</Badge>
            <Badge variant="secondary">Time Management Tools</Badge>
          </div>
          <Link to="/parents-and-schools">
            <Button variant="outline" size="lg">
              Learn About Safety & Supervision
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;