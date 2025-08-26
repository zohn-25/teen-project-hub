import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Mail, Phone, ArrowLeft } from "lucide-react";
import Layout from "@/components/Layout";

const Login = () => {
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
              Welcome to Funngro
            </h1>
            <p className="text-fg-body">
              Choose your login type to continue
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Teen Login */}
            <Card className="border-0 shadow-card hover:shadow-card-hover transition-all cursor-pointer group">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-brand rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Mail className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-poppins font-medium text-fg-primary mb-4">
                  I'm a Teen
                </h3>
                <p className="text-fg-body mb-6">
                  Looking for projects to earn money and build skills
                </p>
                <Link to="/login/teen">
                  <Button variant="hero" className="w-full">
                    Teen Login
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Company Login */}
            <Card className="border-0 shadow-card hover:shadow-card-hover transition-all cursor-pointer group">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-accent rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Phone className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-poppins font-medium text-fg-primary mb-4">
                  I'm a Company
                </h3>
                <p className="text-fg-body mb-6">
                  Looking to hire talented teens for quality work
                </p>
                <Link to="/login/company">
                  <Button variant="hero-secondary" className="w-full">
                    Company Login
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8 text-center">
            <p className="text-sm text-fg-body">
              Don't have an account?{" "}
              <Link to="/signup" className="text-brand hover:text-brand-600 font-medium">
                Sign up here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Login;