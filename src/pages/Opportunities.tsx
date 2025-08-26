import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Search,
  Filter,
  Clock,
  DollarSign,
  Users,
  MapPin,
  Star,
  Briefcase,
} from "lucide-react";
import Layout from "@/components/Layout";

const Opportunities = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedBudget, setSelectedBudget] = useState("all");
  const [selectedDuration, setSelectedDuration] = useState("all");

  const categories = [
    "All Categories",
    "Content Writing",
    "Social Media",
    "Data Entry",
    "Graphic Design",
    "Video Editing",
    "Research",
    "PPT/Docs",
    "Testing/QA",
  ];

  const projects = [
    {
      id: 1,
      title: "Instagram Content Creation for Fashion Brand",
      category: "Social Media",
      budget: "₹8,000",
      budgetType: "Fixed",
      duration: "1 week",
      description: "Create 10 engaging Instagram posts with captions for a rising fashion brand targeting Gen Z audience.",
      skills: ["Instagram", "Content Creation", "Fashion", "Canva"],
      company: "StyleCo",
      companyRating: 4.8,
      applicants: 12,
      postedTime: "2 hours ago",
      location: "Remote",
      urgent: true,
    },
    {
      id: 2,
      title: "Market Research on EdTech Trends",
      category: "Research",
      budget: "₹5,000",
      budgetType: "Fixed",
      duration: "3 days",
      description: "Research current EdTech trends, competitor analysis, and create a comprehensive report with insights.",
      skills: ["Research", "Analysis", "Report Writing", "EdTech"],
      company: "EduNext",
      companyRating: 4.9,
      applicants: 8,
      postedTime: "1 day ago",
      location: "Remote",
      urgent: false,
    },
    {
      id: 3,
      title: "YouTube Thumbnail Design",
      category: "Graphic Design",
      budget: "₹200",
      budgetType: "Per piece",
      duration: "2 days",
      description: "Design eye-catching YouTube thumbnails for tech review channel. Need 5 thumbnails with consistent branding.",
      skills: ["Photoshop", "Thumbnail Design", "Branding", "Tech"],
      company: "TechReviews",
      companyRating: 4.6,
      applicants: 25,
      postedTime: "3 hours ago",
      location: "Remote",
      urgent: false,
    },
    {
      id: 4,
      title: "Product Data Entry and Categorization",
      category: "Data Entry",
      budget: "₹3,500",
      budgetType: "Fixed",
      duration: "2 days",
      description: "Enter 500 product details into our e-commerce platform with proper categorization and tagging.",
      skills: ["Data Entry", "Excel", "E-commerce", "Attention to Detail"],
      company: "ShopEasy",
      companyRating: 4.7,
      applicants: 18,
      postedTime: "5 hours ago",
      location: "Remote",
      urgent: false,
    },
    {
      id: 5,
      title: "Blog Writing on Sustainable Living",
      category: "Content Writing",
      budget: "₹2,500",
      budgetType: "Per article",
      duration: "1 week",
      description: "Write 3 engaging blog articles (800-1000 words each) on sustainable living practices for young adults.",
      skills: ["Blog Writing", "SEO", "Sustainability", "Research"],
      company: "GreenLife",
      companyRating: 4.8,
      applicants: 15,
      postedTime: "1 day ago",
      location: "Remote",
      urgent: false,
    },
    {
      id: 6,
      title: "Mobile App Testing for iOS",
      category: "Testing/QA",
      budget: "₹4,000",
      budgetType: "Fixed",
      duration: "3 days",
      description: "Test our new mobile app for bugs, usability issues, and provide detailed feedback report.",
      skills: ["App Testing", "iOS", "Bug Reporting", "UX Feedback"],
      company: "AppCo",
      companyRating: 4.5,
      applicants: 7,
      postedTime: "4 hours ago",
      location: "Remote",
      urgent: true,
    },
  ];

  const filteredProjects = projects.filter((project) => {
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === "all" || project.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <Layout>
      <div className="py-8">
        {/* Header */}
        <section className="bg-gradient-subtle py-12">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h1 className="font-poppins font-semibold text-fg-primary mb-4">
                Find Your Next Project
              </h1>
              <p className="text-lg text-fg-body max-w-2xl mx-auto">
                Discover exciting opportunities to earn money while building real-world skills.
              </p>
            </div>

            {/* Search and Filters */}
            <div className="bg-card rounded-2xl shadow-card p-6">
              <div className="grid md:grid-cols-4 gap-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                  <Input
                    placeholder="Search projects, skills..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
                
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger>
                    <SelectValue placeholder="Category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Categories</SelectItem>
                    {categories.slice(1).map((category) => (
                      <SelectItem key={category} value={category}>
                        {category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <Select value={selectedBudget} onValueChange={setSelectedBudget}>
                  <SelectTrigger>
                    <SelectValue placeholder="Budget" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Budgets</SelectItem>
                    <SelectItem value="0-2000">₹0 - ₹2,000</SelectItem>
                    <SelectItem value="2000-5000">₹2,000 - ₹5,000</SelectItem>
                    <SelectItem value="5000-10000">₹5,000 - ₹10,000</SelectItem>
                    <SelectItem value="10000+">₹10,000+</SelectItem>
                  </SelectContent>
                </Select>

                <Select value={selectedDuration} onValueChange={setSelectedDuration}>
                  <SelectTrigger>
                    <SelectValue placeholder="Duration" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Durations</SelectItem>
                    <SelectItem value="1-3">1-3 days</SelectItem>
                    <SelectItem value="1week">1 week</SelectItem>
                    <SelectItem value="2weeks">2 weeks</SelectItem>
                    <SelectItem value="1month">1 month</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </section>

        {/* Results */}
        <section className="py-12 bg-background">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center mb-8">
              <div>
                <h2 className="font-poppins font-medium text-fg-primary">
                  {filteredProjects.length} Projects Found
                </h2>
                <p className="text-fg-body">
                  Showing opportunities that match your criteria
                </p>
              </div>
              <Button variant="outline" size="sm">
                <Filter className="h-4 w-4 mr-2" />
                More Filters
              </Button>
            </div>

            <div className="grid gap-6">
              {filteredProjects.map((project) => (
                <Card key={project.id} className="border-0 shadow-card hover:shadow-card-hover transition-all">
                  <CardContent className="p-6">
                    <div className="flex flex-col lg:flex-row justify-between gap-6">
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <div className="flex items-center gap-2 mb-2">
                              <h3 className="font-poppins font-medium text-fg-primary text-lg">
                                {project.title}
                              </h3>
                              {project.urgent && (
                                <Badge variant="destructive" className="text-xs">
                                  Urgent
                                </Badge>
                              )}
                            </div>
                            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                              <div className="flex items-center gap-1">
                                <Briefcase className="h-4 w-4" />
                                {project.company}
                              </div>
                              <div className="flex items-center gap-1">
                                <Star className="h-4 w-4 fill-current text-yellow-500" />
                                {project.companyRating}
                              </div>
                              <div className="flex items-center gap-1">
                                <MapPin className="h-4 w-4" />
                                {project.location}
                              </div>
                              <div className="flex items-center gap-1">
                                <Clock className="h-4 w-4" />
                                {project.postedTime}
                              </div>
                            </div>
                          </div>
                        </div>

                        <p className="text-fg-body mb-4 line-clamp-2">
                          {project.description}
                        </p>

                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.skills.map((skill) => (
                            <Badge key={skill} variant="secondary" className="text-xs">
                              {skill}
                            </Badge>
                          ))}
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <Users className="h-4 w-4" />
                              {project.applicants} applicants
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="lg:w-48 flex flex-col justify-between">
                        <div className="text-right mb-4">
                          <div className="flex items-center justify-end gap-1 mb-2">
                            <DollarSign className="h-4 w-4 text-brand" />
                            <span className="font-semibold text-lg text-brand">
                              {project.budget}
                            </span>
                          </div>
                          <div className="text-sm text-muted-foreground mb-1">
                            {project.budgetType}
                          </div>
                          <div className="text-sm text-muted-foreground">
                            Duration: {project.duration}
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Link to={`/project/${project.id}`}>
                            <Button variant="hero" className="w-full">
                              View Details
                            </Button>
                          </Link>
                          <Link to={`/apply/${project.id}`}>
                            <Button variant="outline" className="w-full">
                              Apply Now
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredProjects.length === 0 && (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="font-poppins font-medium text-fg-primary mb-2">
                  No projects found
                </h3>
                <p className="text-fg-body mb-6">
                  Try adjusting your search criteria or check back later for new opportunities.
                </p>
                <Button
                  variant="outline"
                  onClick={() => {
                    setSearchTerm("");
                    setSelectedCategory("all");
                    setSelectedBudget("all");
                    setSelectedDuration("all");
                  }}
                >
                  Clear Filters
                </Button>
              </div>
            )}
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Opportunities;