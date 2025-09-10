import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/services", label: "Our Services" },
    { href: "/gallery", label: "Gallery" },
  ];

  const contactLinks = [
    { href: "/contact", label: "Contact Us" },
    { href: "/testimonials", label: "Testimonials" },
    { href: "/estimate", label: "Get Estimate" },
    { href: "/privacy", label: "Privacy Policy" },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <img
                src="/lovable-uploads/1ebf5273-8a3d-44ab-bc2b-92514d99e199.png"
                alt="ARTCRIPTIONS Logo"
                className="w-10 h-10 object-contain"
              />
              <span className="font-display font-bold text-xl text-primary-foreground">
                ARTCRIPTIONS
              </span>
            </Link>
            <p className="text-primary-foreground/80 text-sm">
              Transform your appliances into stunning works of art. 
              Creating personalized designs for homes across India.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-secondary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-secondary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-secondary transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-display font-semibold text-lg">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link 
                    to={link.href} 
                    className="text-primary-foreground/80 hover:text-secondary transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services & Support */}
          <div className="space-y-4">
            <h3 className="font-display font-semibold text-lg">Services & Support</h3>
            <ul className="space-y-2">
              {contactLinks.map((link) => (
                <li key={link.href}>
                  <Link 
                    to={link.href} 
                    className="text-primary-foreground/80 hover:text-secondary transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-display font-semibold text-lg">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 mt-1 text-secondary shrink-0" />
                <span className="text-primary-foreground/80 text-sm">
                  201 JODHPUR GARDEN, LP 86/4/1,<br />
                  Lake Gardens, Kolkata,<br />
                  West Bengal, India, 700045
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-secondary" />
                <a 
                  href="mailto:info@artcriptionsllp.com" 
                  className="text-primary-foreground/80 hover:text-secondary transition-colors text-sm"
                >
                  info@artcriptionsllp.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-secondary" />
                <a 
                  href="mailto:contact@artcriptionsllp.com" 
                  className="text-primary-foreground/80 hover:text-secondary transition-colors text-sm"
                >
                  contact@artcriptionsllp.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-primary-foreground/60 text-sm">
              © 2024 ARTCRIPTIONS. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 text-sm">
              <span className="text-secondary font-medium">500+ appliances transformed</span>
              <span className="text-primary-foreground/60">•</span>
              <span className="text-secondary font-medium">Serving clients across India</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;