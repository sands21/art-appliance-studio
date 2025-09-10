import { Link } from "react-router-dom";
import { ArrowRight, Palette, Users, Award, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import heroImage from "@/assets/hero-appliance-art.jpg";

const Home = () => {
  return (
    <>
      <div className="pt-16 lg:pt-20">
        {/* Hero Section */}
        <section className="relative min-h-[90vh] flex items-center bg-brush">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${heroImage})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/60"></div>
          </div>
          
          <div className="relative container mx-auto px-4 z-10">
            <div className="max-w-3xl text-white">
              <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                Turn Your
                <span className="text-secondary block">Appliances</span>
                into Art
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-white/90 leading-relaxed">
                Transform ordinary appliances into stunning works of art with our custom designs. 
                From fridges to furniture - make your home uniquely yours.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild className="bg-secondary hover:bg-secondary-dark text-primary font-semibold">
                  <Link to="/estimate" className="flex items-center space-x-2">
                    <span>Get Free Estimate</span>
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild className="border-white text-white hover:bg-white hover:text-primary bg-transparent">
                  <Link to="/gallery">View Our Gallery</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="space-y-2">
                <div className="text-4xl font-bold text-primary font-display">500+</div>
                <div className="text-muted-foreground">Appliances Transformed</div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl font-bold text-primary font-display">All India</div>
                <div className="text-muted-foreground">Service Coverage</div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl font-bold text-primary font-display">100%</div>
                <div className="text-muted-foreground">Customer Satisfaction</div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                Why Choose ARTCRIPTIONS?
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                We bring artistic vision to your everyday appliances, creating personalized masterpieces for your home.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <Palette className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-display font-semibold text-lg mb-2">Custom Designs</h3>
                <p className="text-muted-foreground text-sm">
                  Unique artwork tailored to your style and preferences
                </p>
              </Card>

              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <Users className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-display font-semibold text-lg mb-2">Expert Artists</h3>
                <p className="text-muted-foreground text-sm">
                  Professional artists with years of experience
                </p>
              </Card>

              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <Award className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-display font-semibold text-lg mb-2">Premium Quality</h3>
                <p className="text-muted-foreground text-sm">
                  High-quality materials that last for years
                </p>
              </Card>

              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <Sparkles className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-display font-semibold text-lg mb-2">Fast Delivery</h3>
                <p className="text-muted-foreground text-sm">
                  Quick turnaround time without compromising quality
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-artistic">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Ready to Transform Your Space?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join hundreds of satisfied customers who have transformed their homes with our artistic designs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link to="/contact" className="flex items-center space-x-2">
                  <span>Start Your Project</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/services">Explore Services</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;