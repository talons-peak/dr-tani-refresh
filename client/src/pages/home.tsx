import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  Phone,
  Mail,
  MapPin,
  ChevronDown,
  Dna,
  Flower2,
  Activity,
  Pill,
  Heart,
  Award,
  GraduationCap,
  Quote,
  ArrowRight,
} from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { Layout } from "@/components/layout";

const heroBg = "/images/hero-bg.png";
const servicesGenomic = "/images/services-genomic.png";
const servicesFlower = "/images/services-flower.png";
const servicesChiro = "/images/services-chiro.png";
const servicesNutrition = "/images/services-nutrition.png";

function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-[100svh] flex items-center justify-center"
      data-testid="section-hero"
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p
            className="text-white/70 text-xs sm:text-sm tracking-[0.25em] uppercase mb-4 sm:mb-6 font-medium"
            data-testid="text-hero-subtitle"
          >
            38+ Years of Excellence
          </p>
          <h1
            className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-4 sm:mb-6"
            data-testid="text-hero-title"
          >
            Dr. John Tani
          </h1>
          <p
            className="text-lg sm:text-xl md:text-2xl text-white/85 font-light max-w-2xl mx-auto mb-4 sm:mb-6"
            data-testid="text-hero-tagline"
          >
            Where you set the pace for wellness.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-8 sm:mb-10"
        >
          {["Genomic", "Chemical", "Energetic", "Structural"].map((topic) => (
            <Badge
              key={topic}
              variant="outline"
              className="border-white/25 text-white/90 backdrop-blur-sm bg-white/5 no-default-active-elevate"
              data-testid={`badge-topic-${topic.toLowerCase()}`}
            >
              {topic}
            </Badge>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center"
        >
          <Button
            size="lg"
            asChild
            data-testid="button-hero-appointment"
          >
            <Link href="/appointment">
              <Phone className="w-4 h-4 mr-2" />
              Schedule Appointment
            </Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="backdrop-blur-sm bg-white/10 border-white/25 text-white"
            asChild
            data-testid="button-hero-services"
          >
            <Link href="/services">
              View Services
              <ChevronDown className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </motion.div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-6 h-6 text-white/50" />
        </motion.div>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section
      id="about"
      className="py-16 sm:py-20 md:py-28 bg-background"
      data-testid="section-about"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-start">
          <div>
            <p className="text-primary text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase mb-3">
              About the Doctor
            </p>
            <h2
              className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-6"
              data-testid="text-about-title"
            >
              A Lifetime Dedicated to
              <span className="text-primary"> Healing</span>
            </h2>

            <div className="space-y-4 text-muted-foreground leading-relaxed text-sm sm:text-base">
              <p data-testid="text-about-bio">
                Born in West Palm Beach, Florida, Dr. John Tani attended Cardinal
                Newman High School before entering the University of Florida in
                1968. After graduating in 1972, Dr. Tani discovered applied
                kinesiology while visiting Arizona -- a moment that would change
                his life.
              </p>
              <p>
                Watching a chiropractor use AK to identify a thyroid-related
                muscle weakness and immediately strengthen it with the right
                nutrient left him in awe. He knew instantly that he wanted to help
                people in this profound, personal way.
              </p>
              <p>
                Dr. Tani enrolled at Sherman College of Chiropractic in South
                Carolina in 1976, later transferring to Texas Chiropractic
                College where he met his wife Margaret. He completed his Doctor of
                Chiropractic Degree in 1981 and has since been licensed in
                Florida, Louisiana, and Utah.
              </p>
            </div>

            <Button variant="outline" className="mt-6" asChild>
              <Link href="/about">
                Read Full Story
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>

          <div className="space-y-4">
            <Card>
              <CardContent className="p-5 sm:p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center shrink-0">
                    <GraduationCap className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1 text-sm sm:text-base">
                      Education
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      University of Florida, 1972
                    </p>
                    <p className="text-muted-foreground text-sm">
                      Texas Chiropractic College, D.C. 1981
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-5 sm:p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center shrink-0">
                    <Award className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1 text-sm sm:text-base">
                      Experience
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      38+ years of clinical practice in Applied Kinesiology and
                      chiropractic care
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-5 sm:p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center shrink-0">
                    <Heart className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1 text-sm sm:text-base">
                      Membership
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      Utah Chiropractic Physicians Association
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-5 sm:p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1 text-sm sm:text-base">
                      Licensed In
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      Florida, Louisiana, and Utah
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

function MissionSection() {
  return (
    <section
      id="mission"
      className="py-16 sm:py-20 md:py-28 bg-accent/30"
      data-testid="section-mission"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-primary text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase mb-3">
          Our Mission
        </p>
        <h2
          className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-8 sm:mb-12"
          data-testid="text-mission-title"
        >
          Guided by Purpose
        </h2>

        <div className="relative">
          <Quote className="w-10 h-10 sm:w-12 sm:h-12 text-primary/20 mx-auto mb-4 sm:mb-6" />
          <blockquote
            className="font-serif text-base sm:text-lg md:text-xl text-foreground/85 leading-relaxed italic max-w-3xl mx-auto"
            data-testid="text-mission-statement"
          >
            With everybody there is an intelligence-power which holds the
            blueprint for health and happiness. Our mission at ASKnutrigenomic
            wellness center is to do our best to understand that blueprint,
            communicate with that intelligence-power and take direction to use
            any and all means necessary to facilitate the expression of that
            intelligence, thereby allowing a resumption and acceleration of inner
            directed healing.
          </blockquote>
          <p className="mt-6 sm:mt-8 text-muted-foreground text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            We hold no exclusive right to any specific gift or talent, and
            welcome the help of all like-minded healing practitioners of any art
            and science who love and respect Life and wish to honor the Divine
            within.
          </p>
        </div>

        <Separator className="my-10 sm:my-14 max-w-xs mx-auto" />

        <div className="max-w-2xl mx-auto">
          <h3 className="font-serif text-xl sm:text-2xl font-semibold text-foreground mb-4">
            A Personal Note from Dr. Tani
          </h3>
          <p
            className="text-muted-foreground text-sm sm:text-base leading-relaxed"
            data-testid="text-personal-note"
          >
            I hope that this website will help you to feel welcome and
            comfortable. I know that your health and the health of your family
            and friends is very important to you. Working together, you and I
            with my office will get you going in the right direction. On this
            path there are no shortcuts. Nevertheless, some people want to go as
            fast as possible, others want to make a slow go of it. Either way, I
            have learned that it is important that{" "}
            <span className="font-semibold text-foreground">
              you set the pace for wellness.
            </span>
          </p>
        </div>

        <Button variant="outline" className="mt-8" asChild>
          <Link href="/mission">
            Read Full Mission
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </Button>
      </div>
    </section>
  );
}

const services = [
  {
    icon: Dna,
    image: servicesGenomic,
    title: "Kinesiology Genetic Nutrition",
    description:
      "The new trend for supporting health is by including genetics as part of the assessment. Upload genetic information and we will provide the right nutrition based upon your own unique DNA pattern. Paired with kinesiology, this will provide you wellness for the ASKing.",
  },
  {
    icon: Flower2,
    image: servicesFlower,
    title: "FlorAlive & Flower Essence",
    description:
      "Reacting to old unnecessary programming? Come in for a flower essence evaluation. Experience remarkable transformations when taking the correct flower essences tailored to your individual needs.",
  },
  {
    icon: Activity,
    image: servicesChiro,
    title: "Chiropractic Care",
    description:
      "It is not holistic if you are not getting the benefits of chiropractic. Your nervous system is intimately associated with your structure. Whether spinal vertebrae, knee, hip, shoulder, or even your meridians and organ positions -- they all have a tremendous effect on wellness.",
  },
  {
    icon: Pill,
    image: servicesNutrition,
    title: "Nutrition & Homeopathy",
    description:
      "Using kinesiology to test the compatibility and effectiveness of various remedies including nutrition, enzymes, amino acids, and homeopathic preparations. EB-Pro therapy designed to restore the body's balance and energy levels while facilitating natural detoxification.",
  },
];

function ServicesSection() {
  return (
    <section
      id="services"
      className="py-16 sm:py-20 md:py-28 bg-background"
      data-testid="section-services"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-16">
          <p className="text-primary text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase mb-3">
            What We Offer
          </p>
          <h2
            className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-4"
            data-testid="text-services-title"
          >
            Services Provided
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-sm sm:text-base">
            Comprehensive holistic wellness services combining traditional
            chiropractic with modern nutrigenomic science.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-5 sm:gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full hover-elevate group">
                <CardContent className="p-0">
                  <div className="relative h-44 sm:h-48 rounded-t-md overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    <div className="absolute bottom-3 left-4">
                      <div className="w-10 h-10 rounded-md bg-white/90 dark:bg-background/90 flex items-center justify-center backdrop-blur-sm">
                        <service.icon className="w-5 h-5 text-primary" />
                      </div>
                    </div>
                  </div>
                  <div className="p-5 sm:p-6">
                    <h3
                      className="font-serif text-lg sm:text-xl font-semibold text-foreground mb-2"
                      data-testid={`text-service-title-${index}`}
                    >
                      {service.title}
                    </h3>
                    <p
                      className="text-muted-foreground text-sm leading-relaxed"
                      data-testid={`text-service-desc-${index}`}
                    >
                      {service.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Button variant="outline" asChild>
            <Link href="/services">
              View All Services
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section
      id="contact"
      className="py-16 sm:py-20 md:py-28 bg-accent/30"
      data-testid="section-contact"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-16">
          <p className="text-primary text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase mb-3">
            Get In Touch
          </p>
          <h2
            className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-4"
            data-testid="text-contact-title"
          >
            Schedule Your Visit
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-sm sm:text-base">
            The fastest and easiest way to schedule your appointment is to
            contact our office directly. We'll find a convenient time for you.
          </p>
        </div>

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
                      data-testid="link-phone"
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
                      data-testid="link-email"
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
                    <p
                      className="text-muted-foreground text-sm"
                      data-testid="text-address"
                    >
                      12226 S 1000 E, Ste #1
                      <br />
                      Draper, UT 84020
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="pt-2">
              <Button
                size="lg"
                className="w-full"
                asChild
              >
                <a href="tel:1-801-269-8989" data-testid="button-call-now">
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
                  className="w-full h-72 sm:h-80 lg:h-full min-h-[320px] rounded-md"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Office Location"
                  data-testid="map-embed"
                />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <Layout>
      <HeroSection />
      <AboutSection />
      <MissionSection />
      <ServicesSection />
      <ContactSection />
    </Layout>
  );
}
