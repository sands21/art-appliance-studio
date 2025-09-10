import { Heart, Target, Users, Award } from "lucide-react";
import { Card } from "@/components/ui/card";

const About = () => {
  return (
    <>
      {/* SEO Meta Tags */}
      <head>
        <title>About ARTCRIPTIONS - Our Story & Vision | Appliance Art Company</title>
        <meta name="description" content="Learn about ARTCRIPTIONS' mission to transform appliances into art. Our founder's vision and why appliance art is unique." />
        <meta name="robots" content="noindex, nofollow" />
      </head>

      <div className="pt-16 lg:pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-primary to-primary-dark text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">
                About ARTCRIPTIONS
              </h1>
              <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
                We believe every appliance has the potential to be a masterpiece. 
                Our journey began with a simple vision: to transform the ordinary into extraordinary.
              </p>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
                  Our Story
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    ARTCRIPTIONS was founded with a revolutionary idea: why should beautiful art be limited to walls? 
                    Our founder envisioned a world where every surface in your home could tell a story, express personality, 
                    and showcase artistic brilliance.
                  </p>
                  <p>
                    What started as a small project to beautify a single refrigerator has grown into a movement that has 
                    transformed over 500 appliances across India. We've discovered that when you turn everyday objects 
                    into art, you don't just change how they look – you change how you feel about your space.
                  </p>
                  <p>
                    Based in the cultural heart of Kolkata, we draw inspiration from the city's rich artistic heritage 
                    while embracing modern design trends and techniques.
                  </p>
                </div>
              </div>
              <div className="bg-artistic p-8 rounded-2xl">
                <div className="text-center space-y-6">
                  <div className="w-24 h-24 bg-primary rounded-full flex items-center justify-center mx-auto">
                    <Heart className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="font-display text-2xl font-bold">Our Mission</h3>
                  <p className="text-muted-foreground">
                    To make art accessible and personal by transforming ordinary appliances into extraordinary 
                    expressions of creativity, bringing joy and beauty to every home.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Appliance Art */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                Why Appliance Art is Unique
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Appliance art isn't just decoration – it's a lifestyle choice that reflects who you are and how you live.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="p-6">
                <Target className="w-12 h-12 text-primary mb-4" />
                <h3 className="font-display font-semibold text-xl mb-3">Functional Beauty</h3>
                <p className="text-muted-foreground">
                  Unlike wall art, appliance art serves a dual purpose – it's both beautiful and functional, 
                  making every interaction with your appliances a delightful experience.
                </p>
              </Card>

              <Card className="p-6">
                <Users className="w-12 h-12 text-primary mb-4" />
                <h3 className="font-display font-semibold text-xl mb-3">Conversation Starter</h3>
                <p className="text-muted-foreground">
                  Your artistic appliances become natural conversation pieces, creating memorable experiences 
                  for guests and family alike.
                </p>
              </Card>

              <Card className="p-6">
                <Award className="w-12 h-12 text-primary mb-4" />
                <h3 className="font-display font-semibold text-xl mb-3">Personal Expression</h3>
                <p className="text-muted-foreground">
                  Each design is uniquely yours, reflecting your personality, interests, and style in ways 
                  that traditional decor simply cannot match.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Founder's Vision */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-8 md:p-12 rounded-2xl">
                <div className="text-center mb-8">
                  <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                    Founder's Vision
                  </h2>
                </div>
                <blockquote className="text-center">
                  <p className="text-lg md:text-xl text-muted-foreground italic mb-6 leading-relaxed">
                    "I believe that art should be part of our daily lives, not just something we admire from a distance. 
                    When you wake up and see your beautifully designed refrigerator, when you cook beside an artistic 
                    washing machine, you're living with art. That's when a house truly becomes a home – when every 
                    element reflects who you are and brings you joy."
                  </p>
                  <footer className="font-display font-semibold text-lg text-primary">
                    — Founder, ARTCRIPTIONS
                  </footer>
                </blockquote>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-16 bg-artistic">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                Our Values
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-display font-bold text-2xl">C</span>
                </div>
                <h3 className="font-display font-semibold text-lg mb-2">Creativity</h3>
                <p className="text-muted-foreground text-sm">
                  Every design is an original work of art
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary font-display font-bold text-2xl">Q</span>
                </div>
                <h3 className="font-display font-semibold text-lg mb-2">Quality</h3>
                <p className="text-muted-foreground text-sm">
                  Premium materials and expert craftsmanship
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-display font-bold text-2xl">P</span>
                </div>
                <h3 className="font-display font-semibold text-lg mb-2">Personalization</h3>
                <p className="text-muted-foreground text-sm">
                  Designs that reflect your unique style
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary font-display font-bold text-2xl">S</span>
                </div>
                <h3 className="font-display font-semibold text-lg mb-2">Service</h3>
                <p className="text-muted-foreground text-sm">
                  Dedicated support from concept to completion
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;