import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  const footerLinks = {
    Platform: [
      { name: "How It Works", href: "/how-it-works" },
      { name: "Opportunities", href: "/opportunities" },
      { name: "For Companies", href: "/for-companies" },
      { name: "Pricing", href: "/pricing" },
    ],
    Resources: [
      { name: "Success Stories", href: "/success-stories" },
      { name: "Parents & Schools", href: "/parents-and-schools" },
      { name: "Blog", href: "/blog" },
      { name: "Help Center", href: "/help" },
    ],
    Company: [
      { name: "About", href: "/about" },
      { name: "Careers", href: "/careers" },
      { name: "Contact", href: "/contact" },
      { name: "Press", href: "/press" },
    ],
    Legal: [
      { name: "Terms of Service", href: "/terms" },
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Cookie Policy", href: "/cookies" },
      { name: "Refund Policy", href: "/refunds" },
    ],
  };

  const socialLinks = [
    { name: "Facebook", href: "#", icon: Facebook },
    { name: "Twitter", href: "#", icon: Twitter },
    { name: "Instagram", href: "#", icon: Instagram },
    { name: "LinkedIn", href: "#", icon: Linkedin },
  ];

  return (
    <footer className="bg-muted border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8">
          {/* Brand */}
          <div className="col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-brand rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">F</span>
              </div>
              <span className="font-poppins font-semibold text-xl text-fg-primary">
                Funngro
              </span>
            </Link>
            <p className="text-fg-body mb-4 max-w-sm">
              Real projects for teens. Real pay. Real experience. Connect with companies and build your future.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="text-fg-body hover:text-brand transition-colors"
                  aria-label={social.name}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-poppins font-medium text-fg-primary mb-4">
                {category}
              </h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-fg-body hover:text-brand transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-fg-body text-sm">
            © 2024 Funngro. All rights reserved.
          </p>
          <p className="text-fg-body text-sm mt-2 md:mt-0">
            Empowering the next generation of creators and innovators.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;