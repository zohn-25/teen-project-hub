import { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { UserCircle, Building, ArrowLeft, Users, Briefcase } from "lucide-react";
import Layout from "@/components/Layout";

const Signup = () => {
  const [searchParams] = useSearchParams();
  const roleParam = searchParams.get("role");
  const [selectedRole, setSelectedRole] = useState(roleParam || "");

  const roles = [
    {
      id: "teen",
      title: "I'm a Teen",
      subtitle: "Ages 13-19",
      description: "Find projects, earn money, and build real-world skills",
      icon: UserCircle,
      benefits: [
        "Earn ₹2,000 - ₹25,000 per project",
        "Build professional portfolio",
        "Learn from real companies",
        "Flexible, remote work",
        "Safe & supervised environment",
      ],
      color: "bg-brand",
    },
    {
      id: "company",
      title: "I'm a Company",
      subtitle: "Hiring fresh talent",
      description: "Access talented teens for quality work at great value",
      icon: Building,
      benefits: [
        "Fresh perspectives & creativity",
        "Fast turnaround (2-7 days)",
        "Cost-effective solutions",
        "Quality supervised work",
        "Access to digital natives",
      ],
      color: "bg-accent",
    },
  ];

  const handleRoleSelect = (roleId: string) => {
    setSelectedRole(roleId);
    // Navigate to role-specific signup flow
    if (roleId === "teen") {
      window.location.href = "/signup/teen";
    } else {
      window.location.href = "/signup/company";
    }
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-subtle flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl w-full">
          <div className="text-center mb-8">
            <Link to="/" className="inline-flex items-center text-brand hover:text-brand-600 mb-6">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Link>
            <h1 className="font-poppins font-semibold text-fg-primary mb-2">
              Join Funngro
            </h1>
            <p className="text-fg-body">
              Choose your role to get started on your journey
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {roles.map((role) => (
              <Card
                key={role.id}
                className={`border-0 shadow-card hover:shadow-card-hover transition-all cursor-pointer group ${
                  selectedRole === role.id ? "ring-2 ring-brand" : ""
                }`}
                onClick={() => handleRoleSelect(role.id)}
              >
                <CardHeader className="text-center pb-4">
                  <div
                    className={`w-16 h-16 ${role.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}
                  >
                    <role.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="font-poppins text-fg-primary">
                    {role.title}
                  </CardTitle>
                  <Badge variant="secondary" className="mx-auto">
                    {role.subtitle}
                  </Badge>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-fg-body mb-6">{role.description}</p>
                  
                  <div className="space-y-3 mb-6">
                    {role.benefits.map((benefit, index) => (
                      <div key={index} className="flex items-start text-left">
                        <div className="w-2 h-2 bg-brand rounded-full mt-2 mr-3 flex-shrink-0" />
                        <span className="text-sm text-fg-body">{benefit}</span>
                      </div>
                    ))}
                  </div>

                  <Button
                    variant="hero"
                    className="w-full group-hover:scale-105 transition-transform"
                  >
                    {role.id === "teen" ? "Start Earning" : "Start Hiring"}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-8 text-center">
            <p className="text-sm text-fg-body">
              Already have an account?{" "}
              <Link to="/login" className="text-brand hover:text-brand-600 font-medium">
                Sign in here
              </Link>
            </p>
          </div>

          <div className="mt-8 pt-8 border-t border-border">
            <div className="grid md:grid-cols-2 gap-8 text-center">
              <div className="flex items-center justify-center gap-3">
                <Users className="h-5 w-5 text-brand" />
                <span className="text-sm text-fg-body">
                  <strong>500+</strong> active companies
                </span>
              </div>
              <div className="flex items-center justify-center gap-3">
                <Briefcase className="h-5 w-5 text-brand" />
                <span className="text-sm text-fg-body">
                  <strong>₹12,50,000+</strong> paid to teens
                </span>
              </div>
            </div>
          </div>

          <div className="mt-6 text-center">
            <p className="text-xs text-muted-foreground">
              By signing up, you agree to our{" "}
              <Link to="/terms" className="text-brand hover:underline">
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link to="/privacy" className="text-brand hover:underline">
                Privacy Policy
              </Link>
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Signup;