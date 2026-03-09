import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, MapPin, AlertCircle } from "lucide-react";
import { Link } from "wouter";
import { Layout, PageHeader } from "@/components/layout";

export default function Appointment() {
  return (
    <Layout>
      <PageHeader title="Schedule Appointment" subtitle="Book Your Visit" />

      <section className="py-16 sm:py-20 bg-background">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card>
            <CardContent className="p-6 sm:p-10">
              <div className="text-center mb-8">
                <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center mx-auto mb-6">
                  <Phone className="w-7 h-7 text-primary-foreground" />
                </div>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-foreground mb-4">
                  Call to Schedule
                </h2>
                <p className="text-muted-foreground text-sm sm:text-base leading-relaxed max-w-xl mx-auto">
                  The fastest and easiest way to schedule your appointment with
                  us is to contact our office at{" "}
                  <a
                    href="tel:1-801-269-8989"
                    className="text-primary font-semibold"
                  >
                    (801) 269-8989
                  </a>
                  .
                </p>
              </div>

              <div className="flex justify-center mb-8">
                <Button size="lg" asChild>
                  <a href="tel:1-801-269-8989">
                    <Phone className="w-4 h-4 mr-2" />
                    Click to Call!
                  </a>
                </Button>
              </div>

              <div className="space-y-4 text-muted-foreground text-sm sm:text-base leading-relaxed">
                <p>
                  One of our staff members will promptly schedule you with a
                  convenient time to see the doctor. For your use we also have
                  office{" "}
                  <Link
                    href="/contact"
                    className="text-primary font-medium underline underline-offset-2"
                  >
                    directions and maps
                  </Link>{" "}
                  available.
                </p>

                <div className="flex items-start gap-3 bg-accent/50 rounded-lg p-4 mt-6">
                  <AlertCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <p className="text-foreground text-sm">
                    Please call immediately and get started on the fast and sure
                    track to wellness as the majority of health conditions tend
                    to worsen or recur without the appropriate care.
                  </p>
                </div>

                <p className="text-center pt-4 text-foreground font-medium">
                  Sincerely,
                  <br />
                  Dr. Tani and Staff
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="mt-6">
            <CardContent className="p-5 sm:p-6">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-md bg-primary/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1 text-sm sm:text-base">
                    Office Location
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    12226 S 1000 E, Ste #1
                    <br />
                    Draper, UT 84020
                  </p>
                  <Link
                    href="/contact"
                    className="text-primary text-sm font-medium mt-2 inline-block underline underline-offset-2"
                  >
                    View Map & Directions
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </Layout>
  );
}
