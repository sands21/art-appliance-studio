import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    service: "",
    message: "",
    newsletter: false
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent Successfully!",
      description: "We'll get back to you within 24 hours with a detailed response.",
    });
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      city: "",
      service: "",
      message: "",
      newsletter: false
    });
  };

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <>
      {/* SEO Meta Tags */}
      <head>
        <title>Contact ARTCRIPTIONS - Get Your Custom Appliance Art Quote</title>
        <meta name="description" content="Contact ARTCRIPTIONS for custom appliance art. Located in Kolkata, serving all India. Get free consultation and quotes." />
        <meta name="robots" content="noindex, nofollow" />
      </head>

      <div className="pt-16 lg:pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-primary to-primary-dark text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">
                Contact Us
              </h1>
              <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
                Ready to transform your appliances? Let's discuss your project and bring your vision to life.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <Card className="p-8">
                  <h2 className="font-display text-2xl font-bold mb-6">Get in Touch</h2>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => handleInputChange("name", e.target.value)}
                          placeholder="Your full name"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          placeholder="your.email@example.com"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => handleInputChange("phone", e.target.value)}
                          placeholder="+91 XXXXX XXXXX"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="city">City</Label>
                        <Input
                          id="city"
                          value={formData.city}
                          onChange={(e) => handleInputChange("city", e.target.value)}
                          placeholder="Your city"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="service">Service Interested In</Label>
                      <Select value={formData.service} onValueChange={(value) => handleInputChange("service", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="refrigerator">Refrigerator Art</SelectItem>
                          <SelectItem value="washing-machine">Washing Machine Art</SelectItem>
                          <SelectItem value="furniture">Furniture Art</SelectItem>
                          <SelectItem value="multiple">Multiple Appliances</SelectItem>
                          <SelectItem value="consultation">General Consultation</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Tell Us About Your Project *</Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => handleInputChange("message", e.target.value)}
                        placeholder="Describe your vision, preferred style, appliances you want to transform, timeline, budget range, etc."
                        rows={5}
                        required
                      />
                    </div>

                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="newsletter"
                        checked={formData.newsletter}
                        onCheckedChange={(checked) => handleInputChange("newsletter", checked as boolean)}
                      />
                      <Label htmlFor="newsletter" className="text-sm">
                        Subscribe to our newsletter for design inspiration and special offers
                      </Label>
                    </div>

                    <Button type="submit" className="w-full" size="lg">
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </Button>
                  </form>
                </Card>
              </div>

              {/* Contact Information & Map */}
              <div className="space-y-8">
                {/* Contact Details */}
                <Card className="p-6">
                  <h3 className="font-display text-xl font-bold mb-6">Contact Information</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <MapPin className="w-5 h-5 text-primary mt-1 shrink-0" />
                      <div>
                        <p className="font-medium">Our Address</p>
                        <p className="text-muted-foreground text-sm">
                          201 JODHPUR GARDEN, LP 86/4/1<br />
                          Lake Gardens, Kolkata<br />
                          West Bengal, India - 700045
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3">
                      <Mail className="w-5 h-5 text-primary" />
                      <div>
                        <p className="font-medium">Email Us</p>
                        <div className="text-sm space-y-1">
                          <p>
                            <a href="mailto:info@artcriptionsllp.com" className="text-primary hover:underline">
                              info@artcriptionsllp.com
                            </a>
                          </p>
                          <p>
                            <a href="mailto:contact@artcriptionsllp.com" className="text-primary hover:underline">
                              contact@artcriptionsllp.com
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3">
                      <Clock className="w-5 h-5 text-primary" />
                      <div>
                        <p className="font-medium">Business Hours</p>
                        <div className="text-muted-foreground text-sm">
                          <p>Monday - Saturday: 9:00 AM - 7:00 PM</p>
                          <p>Sunday: 10:00 AM - 5:00 PM</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>

                {/* Google Map */}
                <Card className="p-6">
                  <h3 className="font-display text-xl font-bold mb-4">Find Us</h3>
                  <div className="aspect-video w-full rounded-lg overflow-hidden">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.394!2d88.3643!3d22.5448!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0277b8f9b3b3b3%3A0x3f9b9b9b9b9b9b9b!2sLake+Gardens%2C+Kolkata%2C+West+Bengal!5e0!3m2!1sen!2sin!4v1234567890"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="ARTCRIPTIONS Location"
                    />
                  </div>
                </Card>

                {/* Quick Response Promise */}
                <Card className="p-6 bg-gradient-to-r from-primary/10 to-secondary/10">
                  <h3 className="font-display text-xl font-bold mb-4">Our Response Promise</h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span>We respond to all inquiries within 24 hours</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span>Free consultation calls available</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span>Detailed project estimates provided</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span>No obligation quotes</span>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Service Areas */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                Service Areas
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                While we're based in Kolkata, we serve customers across India with our mobile service team.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {[
                'West Bengal', 'Maharashtra', 'Delhi NCR', 'Karnataka',
                'Tamil Nadu', 'Gujarat', 'Rajasthan', 'Uttar Pradesh',
                'Madhya Pradesh', 'Andhra Pradesh', 'Telangana', 'Bihar',
                'Odisha', 'Kerala', 'Punjab', 'Haryana'
              ].map((state) => (
                <div key={state} className="text-center p-4 bg-white rounded-lg">
                  <div className="font-medium text-primary">{state}</div>
                  <div className="text-sm text-muted-foreground">Service Available</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Contact;