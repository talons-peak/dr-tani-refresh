import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dna,
  Flower2,
  Activity,
  Pill,
  ArrowRight,
  ExternalLink,
} from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { Layout, PageHeader } from "@/components/layout";

const servicesGenomic = "/images/services-genomic.png";
const servicesFlower = "/images/services-flower.png";
const servicesChiro = "/images/services-chiro.png";
const servicesNutrition = "/images/services-nutrition.png";

const services = [
  {
    icon: Dna,
    image: servicesGenomic,
    title: "Kinesiology Genetic Nutrition Evaluation",
    description:
      "The new trend for supporting health is by including genetics as part of the assessment. Upload genetic information. We will provide the right nutrition. This is nutrition based upon your own unique DNA pattern. Paired with kinesiology this will provide you wellness for the ASKing.",
    link: "/kinesiology",
    linkLabel: "Learn About Kinesiology",
    isInternal: true,
  },
  {
    icon: Flower2,
    image: servicesFlower,
    title: "FlorAlive\u00AE & Flower Essence Evaluation",
    description:
      "Reacting to old unnecessary programming? Come in for a flower essence evaluation. Experience remarkable transformations when taking the correct flower essences.",
    link: "https://www.floralive.com/",
    linkLabel: "Visit FlorAlive",
    isInternal: false,
  },
  {
    icon: Activity,
    image: servicesChiro,
    title: "Chiropractic Care",
    description:
      "Remember it is not holistic if you are not getting the benefits of chiropractic. The structure affects function because your nervous system is intimately associated with your structure. Whether the positions of spinal vertebrae or the knee, hip, shoulder, wrist or foot, even your meridians and the position of your stomach and organs, they all have a tremendous effect for wellness or a lack of health. Be holistic with your health approach. Include chiropractic.",
    link: null,
    linkLabel: null,
    isInternal: false,
  },
  {
    icon: Pill,
    image: servicesNutrition,
    title: "Nutrition, Enzymes, Amino Acids, Homeopathy",
    description:
      "I like to test with kinesiology the compatibility and effectiveness of the various remedies. I like to test with kinesiology for compatibility of the homeopathic remedy with other nutrition for maximum benefit.",
    link: "https://desbio.com/",
    linkLabel: "Learn About Homeopathy (Deseret Biologicals)",
    isInternal: false,
  },
];

export default function Services() {
  return (
    <Layout>
      <PageHeader title="Services Provided" subtitle="What We Offer" />

      <section className="py-16 sm:py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base text-center mb-12 sm:mb-16">
            Comprehensive holistic wellness services combining traditional
            chiropractic with modern nutrigenomic science.
          </p>

          <div className="space-y-8 sm:space-y-10">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="overflow-hidden">
                  <CardContent className="p-0">
                    <div className={`grid md:grid-cols-5 ${index % 2 === 1 ? "md:direction-rtl" : ""}`}>
                      <div className={`relative h-56 md:h-auto md:col-span-2 ${index % 2 === 1 ? "md:order-2" : ""}`}>
                        <img
                          src={service.image}
                          alt={service.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-black/30 to-transparent" />
                        <div className="absolute bottom-4 left-4">
                          <div className="w-12 h-12 rounded-md bg-white/90 dark:bg-background/90 flex items-center justify-center backdrop-blur-sm">
                            <service.icon className="w-6 h-6 text-primary" />
                          </div>
                        </div>
                      </div>
                      <div className={`p-6 sm:p-8 md:col-span-3 flex flex-col justify-center ${index % 2 === 1 ? "md:order-1" : ""}`}>
                        <h3 className="font-serif text-xl sm:text-2xl font-semibold text-foreground mb-3">
                          {service.title}
                        </h3>
                        <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                          {service.description}
                        </p>
                        {service.link && (
                          <div className="mt-4">
                            {service.isInternal ? (
                              <Button variant="outline" size="sm" asChild>
                                <Link href={service.link}>
                                  {service.linkLabel}
                                  <ArrowRight className="w-4 h-4 ml-2" />
                                </Link>
                              </Button>
                            ) : (
                              <Button variant="outline" size="sm" asChild>
                                <a
                                  href={service.link}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  {service.linkLabel}
                                  <ExternalLink className="w-3.5 h-3.5 ml-2" />
                                </a>
                              </Button>
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* EB-Pro Section */}
          <div className="mt-12 sm:mt-16">
            <Card className="bg-accent/30 border-primary/20">
              <CardContent className="p-6 sm:p-8 text-center">
                <h3 className="font-serif text-xl sm:text-2xl font-semibold text-foreground mb-3">
                  EB-Pro Therapy
                </h3>
                <p className="text-muted-foreground text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
                  Designed and developed to restore the body's balance and energy
                  levels, while facilitating and aiding in its natural
                  detoxification process.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
}
