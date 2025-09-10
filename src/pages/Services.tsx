import { CheckCircle, Palette, Wrench, Truck } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Services = () => {
  const styles = [
    {
      name: "Modern Minimalist",
      description: "Clean lines, geometric patterns, and contemporary color palettes",
      features: ["Geometric patterns", "Neutral colors", "Clean aesthetics", "Timeless appeal"]
    },
    {
      name: "Abstract Art",
      description: "Bold colors, flowing forms, and artistic expression",
      features: ["Vibrant colors", "Flowing designs", "Artistic freedom", "Unique patterns"]
    },
    {
      name: "Floral & Nature",
      description: "Beautiful botanical designs and nature-inspired themes",
      features: ["Botanical motifs", "Natural colors", "Organic shapes", "Seasonal themes"]
    },
    {
      name: "Traditional Indian",
      description: "Rich cultural motifs, mandalas, and traditional art forms",
      features: ["Cultural motifs", "Rich colors", "Traditional patterns", "Heritage designs"]
    },
    {
      name: "Luxury Patterns",
      description: "Elegant designs with metallic accents and premium finishes",
      features: ["Metallic accents", "Premium finishes", "Elegant patterns", "Sophisticated look"]
    }
  ];

  const process = [
    {
      step: 1,
      title: "Consultation",
      description: "We discuss your vision, measure your appliances, and understand your style preferences."
    },
    {
      step: 2,
      title: "Design Creation",
      description: "Our artists create custom designs based on your requirements and provide previews."
    },
    {
      step: 3,
      title: "Approval & Planning",
      description: "You approve the final design, and we schedule the installation at your convenience."
    },
    {
      step: 4,
      title: "Professional Installation",
      description: "Our skilled team applies the artwork with precision and care for a perfect finish."
    }
  ];

  return (
    <>
      {/* SEO Meta Tags */}
      <head>
        <title>Our Services - Custom Appliance Art Styles & Process | ARTCRIPTIONS</title>
        <meta name="description" content="Explore our appliance art services: Modern, Abstract, Floral, Traditional Indian, and Luxury styles. Professional consultation to installation." />
        <meta name="robots" content="noindex, nofollow" />
      </head>

      <div className="pt-16 lg:pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-primary to-primary-dark text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">
                Our Services
              </h1>
              <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
                From consultation to installation, we provide comprehensive appliance art services 
                tailored to your unique style and preferences.
              </p>
            </div>
          </div>
        </section>

        {/* Art Styles */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                Our Art Styles
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Choose from our curated collection of art styles, or let us create something completely unique for you.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {styles.map((style, index) => (
                <Card key={index} className="p-6 group hover:shadow-lg transition-all duration-300">
                  <div className="mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center mb-4">
                      <Palette className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-display font-semibold text-xl mb-2">{style.name}</h3>
                    <p className="text-muted-foreground mb-4">{style.description}</p>
                  </div>
                  <ul className="space-y-2">
                    {style.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                Our Process
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                We follow a systematic approach to ensure your vision becomes reality with precision and care.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {process.map((item, index) => (
                <div key={index} className="text-center group">
                  <div className="relative mb-6">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                      <span className="text-white font-display font-bold text-xl">{item.step}</span>
                    </div>
                    {index < process.length - 1 && (
                      <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-border -translate-x-8"></div>
                    )}
                  </div>
                  <h3 className="font-display font-semibold text-lg mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Service Features */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                What's Included
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="p-6 text-center">
                <Palette className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-display font-semibold text-xl mb-3">Custom Design</h3>
                <ul className="text-left space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                    <span>Personalized consultation</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                    <span>Multiple design options</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                    <span>3D preview renderings</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                    <span>Unlimited revisions</span>
                  </li>
                </ul>
              </Card>

              <Card className="p-6 text-center">
                <Wrench className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-display font-semibold text-xl mb-3">Professional Installation</h3>
                <ul className="text-left space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                    <span>Expert application</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                    <span>Surface preparation</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                    <span>Quality assurance</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                    <span>Clean-up service</span>
                  </li>
                </ul>
              </Card>

              <Card className="p-6 text-center">
                <Truck className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-display font-semibold text-xl mb-3">Complete Support</h3>
                <ul className="text-left space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                    <span>Pan-India service</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                    <span>Warranty coverage</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                    <span>Maintenance guidance</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                    <span>24/7 customer support</span>
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-artistic">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's discuss your project and bring your vision to life with our expert services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link to="/estimate">Get Free Estimate</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/contact">Schedule Consultation</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Services;