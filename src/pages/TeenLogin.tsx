import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, ArrowLeft, Star, Users, TrendingUp } from "lucide-react";
import Layout from "@/components/Layout";

const TeenLogin = () => {
  const [loginMethod, setLoginMethod] = useState("email");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [showOtp, setShowOtp] = useState(false);

  const handleSendOtp = () => {
    setShowOtp(true);
  };

  const handleLogin = () => {
    // Handle teen login logic here
    console.log("Teen login attempt");
    // Redirect to teen dashboard
    window.location.href = "/teen/dashboard";
  };

  const benefits = [
    "Earn ₹2,000 - ₹25,000 per project",
    "Build professional portfolio",
    "Learn from real companies",
    "Safe & supervised environment",
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-subtle flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl w-full grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Welcome message */}
          <div className="text-center lg:text-left">
            <Link to="/" className="inline-flex items-center text-brand hover:text-brand-600 mb-6">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Link>
            
            <h1 className="font-poppins font-semibold text-fg-primary mb-4">
              Welcome Back, Future Creator! 🚀
            </h1>
            <p className="text-lg text-fg-body mb-8">
              Ready to continue your earning journey? Sign in to access exciting projects and start building your professional future.
            </p>

            <div className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start">
                  <div className="w-2 h-2 bg-brand rounded-full mt-2 mr-3 flex-shrink-0" />
                  <span className="text-fg-body">{benefit}</span>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-xl font-semibold text-brand mb-1">500+</div>
                <div className="text-sm text-muted-foreground">Active Teens</div>
              </div>
              <div>
                <div className="text-xl font-semibold text-brand mb-1">₹12L+</div>
                <div className="text-sm text-muted-foreground">Paid Out</div>
              </div>
              <div>
                <div className="text-xl font-semibold text-brand mb-1">4.8★</div>
                <div className="text-sm text-muted-foreground">Teen Rating</div>
              </div>
            </div>
          </div>

          {/* Right side - Login form */}
          <div className="max-w-md w-full mx-auto lg:mx-0">
            <Card className="border-0 shadow-card">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-brand rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="font-poppins">Teen Sign In</CardTitle>
                <Badge variant="secondary" className="mx-auto">
                  Ages 13-19
                </Badge>
              </CardHeader>
              <CardContent>
                <Tabs value={loginMethod} onValueChange={setLoginMethod} className="w-full">
                  <TabsList className="grid w-full grid-cols-2 mb-6">
                    <TabsTrigger value="email" className="flex items-center gap-2">
                      <Mail className="h-4 w-4" />
                      Email
                    </TabsTrigger>
                    <TabsTrigger value="phone" className="flex items-center gap-2">
                      <Phone className="h-4 w-4" />
                      Phone
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent value="email" className="space-y-4">
                    {!showOtp ? (
                      <>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email Address</Label>
                          <Input
                            id="email"
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                          />
                        </div>
                        <Button
                          onClick={handleSendOtp}
                          className="w-full"
                          variant="hero"
                        >
                          Send OTP
                        </Button>
                      </>
                    ) : (
                      <>
                        <div className="space-y-2">
                          <Label htmlFor="email-otp">Enter OTP</Label>
                          <Input
                            id="email-otp"
                            type="text"
                            placeholder="6-digit OTP"
                            value={otp}
                            onChange={(e) => setOtp(e.target.value)}
                            maxLength={6}
                          />
                          <p className="text-sm text-muted-foreground">
                            OTP sent to {email}
                          </p>
                        </div>
                        <Button
                          onClick={handleLogin}
                          className="w-full"
                          variant="hero"
                        >
                          Start Earning! 🎉
                        </Button>
                        <Button
                          onClick={() => setShowOtp(false)}
                          variant="ghost"
                          className="w-full"
                        >
                          Change Email
                        </Button>
                      </>
                    )}
                  </TabsContent>

                  <TabsContent value="phone" className="space-y-4">
                    {!showOtp ? (
                      <>
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone Number</Label>
                          <Input
                            id="phone"
                            type="tel"
                            placeholder="+91 12345 67890"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                          />
                        </div>
                        <Button
                          onClick={handleSendOtp}
                          className="w-full"
                          variant="hero"
                        >
                          Send OTP
                        </Button>
                      </>
                    ) : (
                      <>
                        <div className="space-y-2">
                          <Label htmlFor="phone-otp">Enter OTP</Label>
                          <Input
                            id="phone-otp"
                            type="text"
                            placeholder="6-digit OTP"
                            value={otp}
                            onChange={(e) => setOtp(e.target.value)}
                            maxLength={6}
                          />
                          <p className="text-sm text-muted-foreground">
                            OTP sent to {phone}
                          </p>
                        </div>
                        <Button
                          onClick={handleLogin}
                          className="w-full"
                          variant="hero"
                        >
                          Start Earning! 🎉
                        </Button>
                        <Button
                          onClick={() => setShowOtp(false)}
                          variant="ghost"
                          className="w-full"
                        >
                          Change Phone
                        </Button>
                      </>
                    )}
                  </TabsContent>
                </Tabs>

                <div className="mt-6 text-center">
                  <p className="text-sm text-fg-body">
                    New to Funngro?{" "}
                    <Link to="/signup?role=teen" className="text-brand hover:text-brand-600 font-medium">
                      Create teen account
                    </Link>
                  </p>
                </div>

                <div className="mt-6 pt-6 border-t border-border">
                  <div className="text-center">
                    <p className="text-sm text-muted-foreground mb-3">
                      Are you a company looking to hire?
                    </p>
                    <Link to="/login/company">
                      <Button variant="outline" size="sm" className="w-full">
                        Company Login
                      </Button>
                    </Link>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-border">
                  <p className="text-xs text-muted-foreground text-center">
                    By signing in, you agree to our{" "}
                    <Link to="/terms" className="text-brand hover:underline">
                      Terms of Service
                    </Link>{" "}
                    and{" "}
                    <Link to="/privacy" className="text-brand hover:underline">
                      Privacy Policy
                    </Link>
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default TeenLogin;