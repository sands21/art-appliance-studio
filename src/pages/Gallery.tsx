import { useState } from "react";
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Link } from "react-router-dom";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Mock gallery data - in real app, this would come from a CMS or API
  const galleryItems = [
    {
      id: 1,
      title: "Modern Kitchen Refrigerator",
      before: "https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?w=400&h=300&fit=crop",
      after: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop",
      style: "Modern Minimalist",
      material: "Vinyl",
      size: "12 sq.ft"
    },
    {
      id: 2,
      title: "Artistic Washing Machine",
      before: "https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?w=400&h=300&fit=crop",
      after: "https://images.unsplash.com/photo-1556909114-3fbe4c3d326f?w=400&h=300&fit=crop",
      style: "Abstract Art",
      material: "Paint",
      size: "8 sq.ft"
    },
    {
      id: 3,
      title: "Luxury Refrigerator Design",
      before: "https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?w=400&h=300&fit=crop",
      after: "https://images.unsplash.com/photo-1556909114-6f5d2e3f0b63?w=400&h=300&fit=crop",
      style: "Luxury Patterns",
      material: "Laminate",
      size: "15 sq.ft"
    },
    {
      id: 4,
      title: "Traditional Indian Motifs",
      before: "https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?w=400&h=300&fit=crop",
      after: "https://images.unsplash.com/photo-1556909114-6da59523cf8c?w=400&h=300&fit=crop",
      style: "Traditional Indian",
      material: "Paint",
      size: "10 sq.ft"
    },
    {
      id: 5,
      title: "Floral Kitchen Cabinet",
      before: "https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?w=400&h=300&fit=crop",
      after: "https://images.unsplash.com/photo-1556909114-7b48bb1e8ac9?w=400&h=300&fit=crop",
      style: "Floral & Nature",
      material: "Vinyl",
      size: "20 sq.ft"
    },
    {
      id: 6,
      title: "Contemporary Dishwasher",
      before: "https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?w=400&h=300&fit=crop",
      after: "https://images.unsplash.com/photo-1556909114-5b3c3f36c90f?w=400&h=300&fit=crop",
      style: "Modern Minimalist",
      material: "Laminate",
      size: "6 sq.ft"
    }
  ];

  return (
    <>
      {/* SEO Meta Tags */}
      <head>
        <title>Gallery - Before & After Appliance Art Transformations | ARTCRIPTIONS</title>
        <meta name="description" content="View our portfolio of transformed appliances. Before and after photos of custom art on refrigerators, washing machines, and furniture." />
        <meta name="robots" content="noindex, nofollow" />
      </head>

      <div className="pt-16 lg:pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-primary to-primary-dark text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">
                Our Gallery
              </h1>
              <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
                Witness the transformation. See how we've turned ordinary appliances 
                into extraordinary works of art for our satisfied customers.
              </p>
            </div>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                Before & After Transformations
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Each project tells a unique story of transformation, creativity, and customer satisfaction.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {galleryItems.map((item) => (
                <Card key={item.id} className="overflow-hidden group hover:shadow-lg transition-all duration-300">
                  <div className="relative">
                    {/* Before/After Slider Effect */}
                    <div className="relative overflow-hidden h-64">
                      <div className="absolute inset-0 flex">
                        <div className="w-1/2 relative overflow-hidden">
                          <img 
                            src={item.before} 
                            alt={`${item.title} - Before`}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute top-2 left-2 bg-black/70 text-white px-2 py-1 rounded text-xs font-medium">
                            BEFORE
                          </div>
                        </div>
                        <div className="w-1/2 relative overflow-hidden">
                          <img 
                            src={item.after} 
                            alt={`${item.title} - After`}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute top-2 right-2 bg-primary text-white px-2 py-1 rounded text-xs font-medium">
                            AFTER
                          </div>
                        </div>
                      </div>
                      <div className="absolute inset-y-0 left-1/2 w-0.5 bg-white transform -translate-x-px"></div>
                      
                      {/* Hover overlay */}
                      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <Button
                          variant="secondary"
                          size="sm"
                          onClick={() => setSelectedImage(item.after)}
                          className="flex items-center space-x-2"
                        >
                          <ExternalLink className="w-4 h-4" />
                          <span>View Full Size</span>
                        </Button>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="font-display font-semibold text-lg mb-3">{item.title}</h3>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <div className="flex justify-between">
                        <span>Style:</span>
                        <span className="font-medium">{item.style}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Material:</span>
                        <span className="font-medium">{item.material}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Size:</span>
                        <span className="font-medium">{item.size}</span>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl md:text-4xl font-bold text-primary font-display mb-2">500+</div>
                <div className="text-muted-foreground">Appliances Transformed</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-primary font-display mb-2">50+</div>
                <div className="text-muted-foreground">Cities Served</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-primary font-display mb-2">100%</div>
                <div className="text-muted-foreground">Customer Satisfaction</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-primary font-display mb-2">5★</div>
                <div className="text-muted-foreground">Average Rating</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-artistic">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Ready for Your Transformation?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join our gallery of satisfied customers. Let's create something beautiful together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link to="/estimate" className="flex items-center space-x-2">
                  <span>Get Your Estimate</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/contact">Schedule Consultation</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Full Size Image Modal */}
        <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
          <DialogContent className="max-w-4xl">
            {selectedImage && (
              <img 
                src={selectedImage} 
                alt="Full size view"
                className="w-full h-auto max-h-[80vh] object-contain"
              />
            )}
          </DialogContent>
        </Dialog>
      </div>
    </>
  );
};

export default Gallery;