import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MapPin } from "lucide-react";
import { Layout, PageHeader } from "@/components/layout";

export default function Contact() {
  return (
    <Layout>
      <PageHeader title="Contact Info & Map" subtitle="Get In Touch" />

      <section className="py-16 sm:py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-6 sm:gap-8">
            <div className="lg:col-span-2 space-y-4 sm:space-y-5">
              <Card>
                <CardContent className="p-5 sm:p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-md bg-primary flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1 text-sm sm:text-base">
                        Phone
                      </h3>
                      <a
                        href="tel:1-801-269-8989"
                        className="text-primary font-medium text-base sm:text-lg"
                      >
                        (801) 269-8989
                      </a>
                      <p className="text-muted-foreground text-xs sm:text-sm mt-1">
                        Call to schedule your appointment
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-5 sm:p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-md bg-primary/10 flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1 text-sm sm:text-base">
                        Email
                      </h3>
                      <a
                        href="mailto:askDrTani@gmail.com?subject=Email from Website"
                        className="text-primary font-medium text-sm sm:text-base break-all"
                      >
                        askDrTani@gmail.com
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-5 sm:p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-md bg-primary/10 flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1 text-sm sm:text-base">
                        Address
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        12226 S 1000 E, Ste #1
                        <br />
                        Draper, UT 84020
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="pt-2">
                <Button size="lg" className="w-full" asChild>
                  <a href="tel:1-801-269-8989">
                    <Phone className="w-4 h-4 mr-2" />
                    Call Now to Schedule
                  </a>
                </Button>
              </div>
            </div>

            <div className="lg:col-span-3">
              <Card className="h-full">
                <CardContent className="p-0 h-full">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.865929534269!2d-111.86534126696661!3d40.5279603342994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87528760cca16c0b%3A0x992c36bf3a66c3d5!2s12226+S+1000+E+%231%2C+Draper%2C+UT+84020!5e0!3m2!1sen!2sus!4v1553922133813!5m2!1sen!2sus"
                    className="w-full h-72 sm:h-80 lg:h-full min-h-[400px] rounded-md"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Office Location"
                  />
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
