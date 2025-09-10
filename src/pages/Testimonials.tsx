import { Star, Quote, User } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Priya Sharma",
      location: "Mumbai, Maharashtra",
      rating: 5,
      project: "Kitchen Refrigerator - Floral Design",
      testimonial: "ARTCRIPTIONS completely transformed my kitchen! The floral design on my refrigerator is absolutely stunning. Every guest who visits asks where I got it done. The team was professional, and the quality exceeded my expectations. Worth every rupee!",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b647?w=100&h=100&fit=crop&crop=face"
    },
    {
      id: 2,
      name: "Rajesh Patel",
      location: "Ahmedabad, Gujarat",
      rating: 5,
      project: "Washing Machine - Modern Abstract",
      testimonial: "I was skeptical about art on appliances, but ARTCRIPTIONS changed my mind completely. The abstract design on my washing machine turned my utility room into an art gallery. The vinyl material is easy to maintain, and it still looks brand new after 2 years.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
    },
    {
      id: 3,
      name: "Dr. Anita Reddy",
      location: "Hyderabad, Telangana",
      rating: 5,
      project: "Multiple Appliances - Traditional Indian",
      testimonial: "We hired ARTCRIPTIONS for our entire kitchen - refrigerator, microwave, and dishwasher. The traditional Indian motifs are breathtaking. My mother-in-law, who's usually hard to please, was absolutely delighted. Professional service from start to finish.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop&crop=face"
    },
    {
      id: 4,
      name: "Amit Verma",
      location: "Delhi, NCR",
      rating: 5,
      project: "Living Room Furniture - Luxury Patterns",
      testimonial: "The luxury laminate finish on our entertainment unit is phenomenal. It's been 3 years, and it still looks as good as new. ARTCRIPTIONS doesn't just create art; they create lasting memories. Highly recommend for anyone looking to add personality to their home.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face"
    },
    {
      id: 5,
      name: "Meera Krishnan",
      location: "Chennai, Tamil Nadu",
      rating: 5,
      project: "Kitchen Cabinets - Contemporary Design",
      testimonial: "Living in a rental, I thought I couldn't personalize my space. ARTCRIPTIONS used removable vinyl that looks like expensive paint work. When I move, I can take my art with me! Innovative solution and beautiful execution.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
    },
    {
      id: 6,
      name: "Karan Singh",
      location: "Pune, Maharashtra",
      rating: 5,
      project: "Home Office Setup - Minimalist Design",
      testimonial: "Working from home became so much more inspiring after ARTCRIPTIONS transformed my office furniture. The minimalist design on my storage units and desk creates the perfect ambiance for productivity. Clean, professional, and absolutely gorgeous.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
      />
    ));
  };

  return (
    <>
      {/* SEO Meta Tags */}
      <head>
        <title>Customer Testimonials - Real Reviews for ARTCRIPTIONS | Appliance Art</title>
        <meta name="description" content="Read genuine customer testimonials about ARTCRIPTIONS appliance art services. 5-star reviews from satisfied customers across India." />
        <meta name="robots" content="noindex, nofollow" />
      </head>

      <div className="pt-16 lg:pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-primary to-primary-dark text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">
                Customer Testimonials
              </h1>
              <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
                Don't just take our word for it. Here's what our customers say about 
                their ARTCRIPTIONS experience.
              </p>
            </div>
          </div>
        </section>

        {/* Statistics */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              <div className="space-y-2">
                <div className="text-4xl font-bold text-primary font-display">4.9/5</div>
                <div className="text-muted-foreground">Average Rating</div>
                <div className="flex justify-center">
                  {renderStars(5)}
                </div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl font-bold text-primary font-display">500+</div>
                <div className="text-muted-foreground">Happy Customers</div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl font-bold text-primary font-display">100%</div>
                <div className="text-muted-foreground">Satisfaction Rate</div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl font-bold text-primary font-display">0</div>
                <div className="text-muted-foreground">Unsatisfied Customers</div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                What Our Customers Say
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Real experiences from real customers across India who trusted us with their appliance transformations.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              {testimonials.map((testimonial) => (
                <Card key={testimonial.id} className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start space-x-4 mb-4">
                    <div className="shrink-0">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-semibold text-lg">{testimonial.name}</h3>
                        <div className="flex">
                          {renderStars(testimonial.rating)}
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground mb-1">{testimonial.location}</p>
                      <p className="text-sm text-primary font-medium">{testimonial.project}</p>
                    </div>
                  </div>
                  
                  <div className="relative">
                    <Quote className="absolute top-0 left-0 w-8 h-8 text-primary/20 -translate-x-2 -translate-y-2" />
                    <p className="text-muted-foreground italic leading-relaxed pl-4">
                      "{testimonial.testimonial}"
                    </p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Trust Indicators */}
        <section className="py-16 bg-artistic">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                Trusted Across India
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                From metro cities to smaller towns, customers across India trust ARTCRIPTIONS 
                for their appliance art needs.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 text-center">
              {['Mumbai', 'Delhi', 'Bangalore', 'Chennai', 'Kolkata', 'Hyderabad', 'Pune', 'Ahmedabad', 'Surat', 'Jaipur', 'Lucknow', 'Kanpur'].map((city) => (
                <div key={city} className="py-4">
                  <div className="font-semibold text-primary">{city}</div>
                  <div className="text-sm text-muted-foreground">50+ Projects</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                Ready to Join Our Happy Customers?
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Experience the ARTCRIPTIONS difference. Let us transform your appliances 
                into beautiful works of art that you'll love for years to come.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link to="/contact">Start Your Project</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/estimate">Get Free Estimate</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Review Form CTA */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <h3 className="font-display text-2xl font-bold mb-4">
                Are You Our Customer?
              </h3>
              <p className="text-muted-foreground mb-6">
                We'd love to hear about your experience! Share your story and help others 
                discover the joy of appliance art.
              </p>
              <Button variant="outline" asChild>
                <Link to="/contact">Share Your Review</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Testimonials;