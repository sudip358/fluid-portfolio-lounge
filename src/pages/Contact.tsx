
import { PageTransition } from "@/components/PageTransition";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Linkedin, Send } from "lucide-react";

const Contact = () => {
  return (
    <PageTransition>
      <div className="container max-w-5xl px-6 py-24 md:py-32">
        <div className="flex flex-col space-y-6">
          <div className="text-center mb-10">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4">Get in Touch</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Have a project in mind or want to discuss SEO strategies? Feel free to reach out.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="col-span-1">
              <div className="space-y-6">
                <Card className="p-6">
                  <div className="flex flex-col space-y-4">
                    <div className="flex items-center space-x-3">
                      <Mail className="h-5 w-5 text-primary" />
                      <p>sudipkumar211@gmail.com</p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Phone className="h-5 w-5 text-primary" />
                      <p>+91 8180861312</p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <MapPin className="h-5 w-5 text-primary" />
                      <p>Mumbai, India</p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Linkedin className="h-5 w-5 text-primary" />
                      <a href="https://www.linkedin.com/in/sudiip-kumr/" className="hover:underline">linkedin.com/in/sudiip-kumr</a>
                    </div>
                  </div>
                </Card>
              </div>
            </div>

            <div className="col-span-2">
              <Card className="p-6">
                <form className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">Name</label>
                      <Input id="name" placeholder="Your name" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">Email</label>
                      <Input id="email" type="email" placeholder="Your email" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">Subject</label>
                    <Input id="subject" placeholder="How can I help you?" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">Message</label>
                    <Textarea id="message" rows={5} placeholder="Your message..." />
                  </div>
                  <Button type="submit" className="w-full md:w-auto flex items-center gap-2">
                    Send Message <Send className="h-4 w-4" />
                  </Button>
                </form>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Contact;
