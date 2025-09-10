import { useState } from "react";
import { Calculator, ArrowRight, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Link } from "react-router-dom";

const Estimate = () => {
  const [size, setSize] = useState("");
  const [material, setMaterial] = useState("");
  const [estimate, setEstimate] = useState<number | null>(null);

  const materials = [
    { value: "vinyl", label: "Vinyl", rate: 300, description: "Durable, easy to clean, removable" },
    { value: "paint", label: "Paint", rate: 500, description: "Permanent, vibrant colors, artistic finish" },
    { value: "laminate", label: "Laminate", rate: 700, description: "Premium finish, long-lasting, luxury feel" }
  ];

  const calculateEstimate = () => {
    if (size && material) {
      const selectedMaterial = materials.find(m => m.value === material);
      if (selectedMaterial) {
        const total = parseFloat(size) * selectedMaterial.rate;
        setEstimate(total);
      }
    }
  };

  const resetCalculator = () => {
    setSize("");
    setMaterial("");
    setEstimate(null);
  };

  return (
    <>
      {/* SEO Meta Tags */}
      <head>
        <title>Estimate Calculator - Custom Appliance Art Pricing | ARTCRIPTIONS</title>
        <meta name="description" content="Calculate your custom appliance art cost. Vinyl ₹300/sq.ft, Paint ₹500/sq.ft, Laminate ₹700/sq.ft. Get instant estimates." />
        <meta name="robots" content="noindex, nofollow" />
      </head>

      <div className="pt-16 lg:pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-primary to-primary-dark text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Calculator className="w-16 h-16 mx-auto mb-6" />
              <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">
                Estimate Calculator
              </h1>
              <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
                Get an instant estimate for your custom appliance art project. 
                Simple, transparent, and accurate pricing.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Calculator Form */}
                <div>
                  <Card className="p-8">
                    <h2 className="font-display text-2xl font-bold mb-6">Calculate Your Project Cost</h2>
                    
                    <div className="space-y-6">
                      <div className="space-y-2">
                        <Label htmlFor="size">Surface Area (sq.ft)</Label>
                        <Input
                          id="size"
                          type="number"
                          placeholder="Enter area in square feet"
                          value={size}
                          onChange={(e) => setSize(e.target.value)}
                          min="1"
                          step="0.1"
                        />
                        <p className="text-sm text-muted-foreground">
                          Measure the width × height of the surface you want to decorate
                        </p>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="material">Material Type</Label>
                        <Select value={material} onValueChange={setMaterial}>
                          <SelectTrigger>
                            <SelectValue placeholder="Choose material type" />
                          </SelectTrigger>
                          <SelectContent>
                            {materials.map((mat) => (
                              <SelectItem key={mat.value} value={mat.value}>
                                <div className="flex items-center justify-between w-full">
                                  <span>{mat.label}</span>
                                  <span className="ml-4 font-semibold">₹{mat.rate}/sq.ft</span>
                                </div>
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      {material && (
                        <Alert>
                          <Info className="h-4 w-4" />
                          <AlertDescription>
                            {materials.find(m => m.value === material)?.description}
                          </AlertDescription>
                        </Alert>
                      )}

                      <div className="flex space-x-4">
                        <Button 
                          onClick={calculateEstimate}
                          className="flex-1"
                          disabled={!size || !material}
                        >
                          Calculate Estimate
                        </Button>
                        <Button 
                          variant="outline" 
                          onClick={resetCalculator}
                        >
                          Reset
                        </Button>
                      </div>
                    </div>
                  </Card>

                  {/* Result */}
                  {estimate && (
                    <Card className="p-6 mt-6 bg-gradient-to-r from-primary/10 to-secondary/10">
                      <div className="text-center">
                        <h3 className="font-display text-xl font-semibold mb-2">Your Estimated Cost</h3>
                        <div className="text-4xl font-bold text-primary mb-2">
                          ₹{estimate.toLocaleString('en-IN')}
                        </div>
                        <p className="text-muted-foreground text-sm mb-4">
                          {size} sq.ft × ₹{materials.find(m => m.value === material)?.rate} per sq.ft
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3">
                          <Button asChild className="flex-1">
                            <Link to="/contact" className="flex items-center justify-center space-x-2">
                              <span>Book Consultation</span>
                              <ArrowRight className="w-4 h-4" />
                            </Link>
                          </Button>
                          <Button variant="outline" asChild className="flex-1">
                            <Link to="/gallery">View Gallery</Link>
                          </Button>
                        </div>
                      </div>
                    </Card>
                  )}
                </div>

                {/* Material Information */}
                <div className="space-y-6">
                  <h2 className="font-display text-2xl font-bold">Material Options</h2>
                  
                  {materials.map((material) => (
                    <Card key={material.value} className="p-6">
                      <div className="flex justify-between items-start mb-3">
                        <h3 className="font-display font-semibold text-xl">{material.label}</h3>
                        <span className="text-2xl font-bold text-primary">₹{material.rate}/sq.ft</span>
                      </div>
                      <p className="text-muted-foreground mb-4">{material.description}</p>
                      
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        {material.value === 'vinyl' && (
                          <>
                            <div>
                              <strong>Durability:</strong> 3-5 years
                            </div>
                            <div>
                              <strong>Removal:</strong> Easy
                            </div>
                            <div>
                              <strong>Finish:</strong> Matte/Glossy
                            </div>
                            <div>
                              <strong>Best for:</strong> Rentals
                            </div>
                          </>
                        )}
                        {material.value === 'paint' && (
                          <>
                            <div>
                              <strong>Durability:</strong> 5-10 years
                            </div>
                            <div>
                              <strong>Removal:</strong> Permanent
                            </div>
                            <div>
                              <strong>Finish:</strong> Artistic
                            </div>
                            <div>
                              <strong>Best for:</strong> Own homes
                            </div>
                          </>
                        )}
                        {material.value === 'laminate' && (
                          <>
                            <div>
                              <strong>Durability:</strong> 10+ years
                            </div>
                            <div>
                              <strong>Removal:</strong> Difficult
                            </div>
                            <div>
                              <strong>Finish:</strong> Premium
                            </div>
                            <div>
                              <strong>Best for:</strong> Luxury projects
                            </div>
                          </>
                        )}
                      </div>
                    </Card>
                  ))}

                  <Alert>
                    <Info className="h-4 w-4" />
                    <AlertDescription>
                      <strong>Note:</strong> These are base rates. Final pricing may vary based on design complexity, 
                      accessibility, and additional services. Contact us for a detailed quote.
                    </AlertDescription>
                  </Alert>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="font-display text-3xl font-bold text-center mb-8">Pricing FAQ</h2>
              
              <div className="space-y-6">
                <Card className="p-6">
                  <h3 className="font-semibold mb-2">What factors affect the final price?</h3>
                  <p className="text-muted-foreground text-sm">
                    Design complexity, number of colors, intricate details, surface condition, 
                    accessibility, and travel distance may affect the final pricing.
                  </p>
                </Card>

                <Card className="p-6">
                  <h3 className="font-semibold mb-2">Do you charge for consultation?</h3>
                  <p className="text-muted-foreground text-sm">
                    Initial consultation and design discussion are completely free. 
                    You only pay when you decide to proceed with the project.
                  </p>
                </Card>

                <Card className="p-6">
                  <h3 className="font-semibold mb-2">What's included in the price?</h3>
                  <p className="text-muted-foreground text-sm">
                    The price includes design creation, materials, professional installation, 
                    surface preparation, and post-installation cleanup.
                  </p>
                </Card>

                <Card className="p-6">
                  <h3 className="font-semibold mb-2">Do you offer payment plans?</h3>
                  <p className="text-muted-foreground text-sm">
                    Yes, we offer flexible payment options. 50% advance to start the project 
                    and 50% upon completion. Contact us to discuss custom payment plans.
                  </p>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Estimate;