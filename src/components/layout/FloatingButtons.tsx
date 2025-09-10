import { useState } from "react";
import { Link } from "react-router-dom";
import { Calculator, MessageCircle, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const FloatingButtons = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const { toast } = useToast();

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });
    setIsContactOpen(false);
  };

  return (
    <>
      {/* Floating Contact Button */}
      <div className="fixed bottom-6 left-6 z-40">
        <Button
          onClick={() => setIsContactOpen(true)}
          className="rounded-full w-14 h-14 shadow-lg animate-glow bg-secondary hover:bg-secondary-dark"
          size="sm"
        >
          <MessageCircle className="w-6 h-6" />
        </Button>
      </div>

      {/* Floating Estimate Button */}
      <div className="fixed bottom-6 right-6 z-40">
        <Button
          asChild
          className="rounded-full w-14 h-14 shadow-lg animate-float"
          size="sm"
        >
          <Link to="/estimate">
            <Calculator className="w-6 h-6" />
          </Link>
        </Button>
      </div>

      {/* Contact Form Dialog */}
      <Dialog open={isContactOpen} onOpenChange={setIsContactOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle className="font-display">Quick Contact</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleContactSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                placeholder="Your full name"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="your.email@example.com"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone</Label>
              <Input
                id="phone"
                type="tel"
                placeholder="+91 XXXXX XXXXX"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                placeholder="Tell us about your project..."
                rows={3}
                required
              />
            </div>
            <div className="flex justify-end space-x-2">
              <Button
                type="button"
                variant="outline"
                onClick={() => setIsContactOpen(false)}
              >
                Cancel
              </Button>
              <Button type="submit">Send Message</Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default FloatingButtons;