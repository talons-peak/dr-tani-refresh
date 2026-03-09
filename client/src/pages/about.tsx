import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  GraduationCap,
  Award,
  Heart,
  MapPin,
  Quote,
} from "lucide-react";
import { motion } from "framer-motion";
import { Layout, PageHeader } from "@/components/layout";

const drTaniPortrait = "./images/dr-tani-portrait.jpg";

export default function About() {
  return (
    <Layout>
      <PageHeader title="About the Doctor" subtitle="Get to Know Dr. Tani" />

      {/* Portrait & Intro */}
      <section className="py-16 sm:py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-5 gap-10 md:gap-16 items-start">
            <div className="md:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <img
                  src={drTaniPortrait}
                  alt="Dr. John Tani"
                  className="w-full max-w-sm mx-auto rounded-lg shadow-lg"
                />
              </motion.div>
            </div>

            <div className="md:col-span-3">
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-6">
                A Lifetime Dedicated to
                <span className="text-primary"> Healing</span>
              </h2>

              <div className="space-y-4 text-muted-foreground leading-relaxed text-sm sm:text-base">
                <p>
                  Born in West Palm Beach, Florida to John and Mary Tani, Dr.
                  John Tani attended Cardinal Newman High School. He entered the
                  University of Florida in 1968. That makes him a 'Gator'. He
                  became a member of Delta Chi fraternity and graduated from the
                  U of F in 1972.
                </p>
                <p>
                  After various pursuits Dr. Tani learned about applied
                  kinesiology while visiting in Arizona. Dr. Tani enrolled in
                  professional chiropractic college in the fall of 1976 at the
                  Sherman College in South Carolina. After his first year, he
                  transferred to Texas Chiropractic College. It was in Texas
                  that he met his wife Margaret. Working, attending college and
                  starting a family was a big challenge. Dr. Tani completed his
                  Doctor of Chiropractic Degree in 1981. He has been licensed in
                  Florida, Louisiana, and Utah. He and Margaret have reared
                  three children.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 mt-8">
                <Card>
                  <CardContent className="p-5">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center shrink-0">
                        <GraduationCap className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1 text-sm">
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
                  <CardContent className="p-5">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center shrink-0">
                        <Award className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1 text-sm">
                          Experience
                        </h3>
                        <p className="text-muted-foreground text-sm">
                          38+ years of clinical practice in Applied Kinesiology
                          and chiropractic care
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-5">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center shrink-0">
                        <Heart className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1 text-sm">
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
                  <CardContent className="p-5">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center shrink-0">
                        <MapPin className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1 text-sm">
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
        </div>
      </section>

      {/* Kinesiology Experience */}
      <section className="py-16 sm:py-20 bg-accent/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-foreground mb-8 text-center">
            Kinesiology Experience
          </h2>

          <div className="space-y-5 text-muted-foreground leading-relaxed text-sm sm:text-base">
            <p>
              My first exposure to AK (Applied Kinesiology) was in 1976. A
              Doctor of Chiropractic in Phoenix Arizona was demonstrating AK at
              a meditation center downtown. He was able to help people in a way
              so different from everything I had previously known.
            </p>
            <p>
              As I watched him evaluate a woman who had volunteered herself, he
              found a muscle weakness associated with the thyroid. The exact
              right nutrient caused an immediate response to strengthen that
              previously weak muscle. I was fascinated. While in awe my mouth
              dropped opened.
            </p>
            <p>
              I wanted to know how I could help people in such a wonderful
              personal way. Enquiring with his young associate I learned that
              this was a subject taught by Dr. George Goodheart called
              kinesiology. I immediately wrote that down. This was the beginning
              of a life changing experience that would thrill me and still
              thrills me today.
            </p>
            <p>
              I pursued the subject. I enrolled in chiropractic college. At
              every possible opportunity I studied with and worked for
              experienced doctors. I put to the test each new concept from
              muscle testing to cranial adjustment. I wrote down, memorized and
              explored each new procedure. I imitated the kinesiologists who I
              was privileged to work with until I made it my own. Soon I was
              blending the styles and techniques of many doctors and allowing my
              own God given personality to manifest.
            </p>
            <p>
              While on my own, I meditated and pondered much. In time, I
              realized that there was a new instructor that knew more about life
              and health than us all together. And you know that instructor was
              there working patiently with me all along (as he also works with
              you). That Divine Spark of Life had been softly directing, molding
              and instructing me. When it was and has been always "Ask and you
              shall receive. Seek and you shall find."
            </p>
            <p>
              I have been doing AK since 1979 when I started muscle testing in
              clinic at Texas Chiropractic College. The pursuit of knowledge is
              essential. If we don't know anything then how will we know what
              question to ask. Ask and we may find that the answer goes right
              over our heads. There is an answer to every question. The blessing
              is that there are more answers than we have knowledge of questions
              to ask. Study is essential. I have ventured into what I have
              considered unexplored territory. The journey is exciting. Along
              the way I have been able to help many people. I am thankful to God
              who is above and in and round about all that exists for this great
              experience of Life, the Healings, Directed Design kinesiology and
              chiropractic. There are laws of health that govern and the highest
              good of all is manifest.
            </p>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-16 sm:py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Quote className="w-10 h-10 sm:w-12 sm:h-12 text-primary/20 mx-auto mb-6" />
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-foreground mb-8">
            Philosophy
          </h2>

          <blockquote className="font-serif text-base sm:text-lg md:text-xl text-foreground/85 leading-relaxed italic max-w-3xl mx-auto">
            God is good. Love is better than hate. We are governed by
            inexorable laws. Do good and good may return. What ever happens is
            to our highest good when we learn by it. We don't always know what
            is to our own highest good. God does. It is possible to live an
            exuberant life. And living we make mistakes. Mistakes can teach
            much. We can change our direction and end up in a better situation.
            God's love is capable of transforming us. Life can be fun if we are
            thankful.
          </blockquote>

          <Separator className="my-10 sm:my-14 max-w-xs mx-auto" />

          <p className="text-muted-foreground text-sm">
            <strong className="text-foreground">C.V.:</strong> University of Florida 1972, Texas Chiropractic College 1981
          </p>
        </div>
      </section>
    </Layout>
  );
}
