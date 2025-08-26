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
  const [loginMethod, setLoginMethod] = useState("email");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [showOtp, setShowOtp] = useState(false);

  const handleSendOtp = () => {
    setShowOtp(true);
  };

  const handleLogin = () => {
    // Handle login logic here
    console.log("Login attempt");
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-subtle flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full">
          <div className="text-center mb-8">
            <Link to="/" className="inline-flex items-center text-brand hover:text-brand-600 mb-6">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Link>
            <h1 className="font-poppins font-semibold text-fg-primary mb-2">
              Welcome Back
            </h1>
            <p className="text-fg-body">
              Sign in to your account to continue your journey
            </p>
          </div>

          <Card className="border-0 shadow-card">
            <CardHeader>
              <CardTitle className="text-center font-poppins">Sign In</CardTitle>
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
                        Verify & Sign In
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
                        Verify & Sign In
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
                  Don't have an account?{" "}
                  <Link to="/signup" className="text-brand hover:text-brand-600 font-medium">
                    Sign up here
                  </Link>
                </p>
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
    </Layout>
  );
};

export default Login;