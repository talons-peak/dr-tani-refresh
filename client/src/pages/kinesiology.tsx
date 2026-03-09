import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";
import { Layout, PageHeader } from "@/components/layout";

export default function Kinesiology() {
  return (
    <Layout>
      <PageHeader title="Kinesiology" subtitle="Understanding the Art" />

      <section className="py-16 sm:py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-5 text-muted-foreground leading-relaxed text-sm sm:text-base">
            <p>
              Kinesiology is an art as well as a wonderful way of accessing
              information which is otherwise inaccessible. It is especially
              suited for health concerns. And has perhaps been gifted to mankind
              for that very purpose.
            </p>
            <p>
              There are many other ways of getting your health or illness
              status. All approaches are important. There are many specialists
              who help bring clarity to the important questions concerning your
              health. All are valuable.
            </p>
            <p>
              Each approach has limitations. Each approach provides a unique
              perspective. Kinesiology brings another perspective of life.
              Kinesiology in no way discounts other diagnostic and therapeutic
              talents.
            </p>
            <p>
              Kinesiology does offer qualities which are not found anywhere
              else. Much has to do with the knowledge and experience of the
              kinesiologist.
            </p>
            <p>
              I have grown to appreciate that the best approach is when the
              individual and the doctor are fully engaged together in the
              pursuit of health. That is, the intention is to discover the
              highest health priority. And then discover the best remedy for
              that priority.
            </p>
            <p>
              This should continue until there are no more priorities. The body
              can take it from there. The healing comes from within you. The
              doctor is not the healer. God does the healing. We work together
              to provide the best raw materials, in the right ratios, and the
              structural and neural balance, and a health energy - not too much
              or too little. Just right! That is where the kinesiology comes to
              play. To fine tune to the maximum degree. Real health is with the
              physical, mental, emotional, and spiritual working together for
              your optimal health.
            </p>
          </div>

          <div className="mt-10">
            <Button variant="outline" asChild>
              <Link href="/services">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Services
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
