import { Separator } from "@/components/ui/separator";
import { Quote } from "lucide-react";
import { Layout, PageHeader } from "@/components/layout";

export default function Mission() {
  return (
    <Layout>
      <PageHeader title="Mission Statement" subtitle="Our Purpose" />

      <section className="py-16 sm:py-20 md:py-28 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-foreground mb-8 sm:mb-12">
            Dr. Tani's Mission Statement
          </h2>

          <div className="relative">
            <Quote className="w-10 h-10 sm:w-12 sm:h-12 text-primary/20 mx-auto mb-4 sm:mb-6" />
            <blockquote className="font-serif text-base sm:text-lg md:text-xl text-foreground/85 leading-relaxed italic max-w-3xl mx-auto">
              With everybody there is an intelligence-power which holds the
              blueprint for health and happiness. Our mission at ASKnutrigenomic
              wellness center is to do our best to understand that blueprint,
              communicate with that intelligence-power and take direction to use
              any and all means necessary to facilitate the expression of that
              intelligence, thereby allowing a resumption and acceleration of
              inner directed healing. We feel to hold no exclusive right to any
              specific gift or talent, and welcome the help of all like-minded
              healing practitioners of any art and science who love and respect
              Life and wish to honor the Divine within so as to further the well
              being of all persons who seek our services.
            </blockquote>
          </div>

          <Separator className="my-10 sm:my-14 max-w-xs mx-auto" />

          <div className="max-w-2xl mx-auto">
            <h3 className="font-serif text-xl sm:text-2xl font-semibold text-foreground mb-4">
              A Personal Note from Dr. Tani
            </h3>
            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
              I hope that this website will help you to feel welcome and
              comfortable. I know that your health and the health of your family
              and friends is very important to you. These pages are here to be a
              guide and a help as you pursue the wonderful path to wellness.
              Working together, you and I with my office will get you going in
              the right direction. On this path there are no shortcuts.
              Nevertheless, some people want to go as fast as possible, others
              want to make a slow go of it. Either way, I have learned that it
              is important that{" "}
              <span className="font-semibold text-foreground">
                you set the pace for wellness.
              </span>
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
