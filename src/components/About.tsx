"use client";
import { a } from "framer-motion/client";
import Container from "./Container";
import { motion } from "framer-motion";

interface AboutProps {
  lang: string;
}

export default function About({ lang }: AboutProps) {
  const isEs = lang === "es";

  return (
    <section className="bg-white w-full overflow-hidden flex flex-col items-center py-20 md:py-32">
      <Container>
        {/* Main Brand Hook */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-4 md:gap-24 mb-24">
          <div className="w-full md:w-1/2">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-[9px] uppercase tracking-[0.6em] text-[#C5A059] font-bold block mb-6 md:mb-12"
            >
              {isEs ? "La Visión Clínica" : "The Clinical Vision"}
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2 }}
              className="text-4xl md:text-7xl lg:text-8xl font-serif leading-[1.1] md:leading-[0.95] text-[#1A1A1A] tracking-tight"
            >
              {isEs ? "Donde el Arte" : "Where Artistry"} <br />
              <span className="italic font-extralight text-gray-400">
                {isEs ? "Se Une a la Anatomía." : "Meets Anatomy."}
              </span>
            </motion.h2>
          </div>

          <div className="w-full md:w-[45%]">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.2 }}
            >
              <p className="text-[#4A4A4A] font-light leading-relaxed tracking-wide text-base md:text-xl font-sans italic mb-8">
                {isEs ? (
                  <>
                    <a href="https://tribecadentalstudio.com/team/dr-nina-izhaky/" target="_blank">
                      ◊
                      La Dra. Nina Izhaky
                    </a>
                    &nbsp;
                    <>
                      redefine la odontología restauradora mediante el
                      uso de{" "}
                      <span className="text-black font-normal not-italic underline decoration-black/20 hover:decoration-[#C5A059] transition-all cursor-pointer">
                        <a
                          href="https://tribecadentalstudio.com/services/dental-implants/"
                          target="_blank"
                        >
                          Mapeo 3D de Precisión
                        </a>
                      </span>{" "}
                      — una tecnología que permite la colocación milimétrica de implantes.
                      Ya sea un solo diente o una restauración de arco completo, eliminamos
                      la causa raíz de la pérdida ósea sin las limitaciones de las prótesis tradicionales.
                    </></>
                ) : (
                  <>
                    <a href="https://tribecadentalstudio.com/team/dr-nina-izhaky/" target="_blank">
                      Dr. Nina Izhaky
                    </a>
                    &nbsp;
                    redefines restorative dentistry through{" "}

                    <span className="text-black font-normal not-italic underline decoration-black/20 hover:decoration-[#C5A059] transition-all cursor-pointer">
                      <a
                        href="https://tribecadentalstudio.com/services/dental-implants/"
                        target="_blank"
                      >
                        Precision 3D Mapping
                      </a>
                    </span>{" "}
                    — a breakthrough technology allowing for millimeter-perfect placement.
                    Whether a single tooth or full-arch restoration, we eliminate the root
                    cause of bone loss without the limitations of traditional dentures.
                  </>
                )}
              </p>
            </motion.div>
          </div>
        </div>

        {/* Three Pillars Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-black/5 pt-16">
          {/* Pillar 1: Multi-Specialist Team */}
          <div className="space-y-4">
            <h4 className="font-serif text-xl italic text-[#1A1A1A]">
              {isEs ? "Equipo Multiespecialista" : "Multi-Specialist Team"}
            </h4>
            <p className="text-sm text-gray-500 font-light leading-relaxed">
              {isEs ? (
                <>
                  En Tribeca Dental Studio, sus implantes son el resultado de la
                  colaboración entre cirujanos expertos y ceramistas maestros,
                  todo bajo un mismo techo.
                </>
              ) : (
                <>
                  At Tribeca Dental Studio, your implants are a collaboration between
                  expert surgeons and master ceramists, all working together under
                  one roof for a seamless result.
                </>
              )}
            </p>
          </div>

          {/* Pillar 2: Bone Preservation */}
          <div className="space-y-4">
            <h4 className="font-serif text-xl italic text-[#1A1A1A]">
              {isEs ? "Preservación Ósea" : "Bone Preservation"}
            </h4>
            <p className="text-sm text-gray-500 font-light leading-relaxed">
              {isEs
                ? "Nuestros implantes actúan como raíces naturales, estimulando el hueso de la mandíbula y evitando el colapso facial que suele acompañar a la pérdida de dientes."
                : "Our implants act like natural tooth roots, stimulating the jawbone and preventing the facial collapse that often accompanies tooth loss."}
            </p>
          </div>

          {/* Pillar 3: All-on-4 Technology */}
          <div className="space-y-4">
            <h4 className="font-serif text-xl italic text-[#1A1A1A]">
              <a href="https://tribecadentalstudio.com/restore-your-smile-with-all-on-4-dental-implants/" target="_blank">
                {isEs ? "Arco Completo (All-on-4)" : "Full-Arch (All-on-4)"}

              </a>
            </h4>
            <p className="text-sm text-gray-500 font-light leading-relaxed">
              {isEs ? (
                <>
                  Para casos de pérdida total, nuestra técnica{" "}
                  <a
                    href="https://tribecadentalstudio.com/restore-your-smile-with-all-on-4-dental-implants/"
                    target="_blank"
                    className="text-black font-normal border-b border-black/10 hover:border-[#C5A059] hover:text-[#C5A059] transition-all duration-500"
                  >
                    All-on-4
                  </a>{" "}
                  ofrece una dentadura fija y permanente en un solo día, incluso con poco hueso.
                </>
              ) : (
                <>
                  For total tooth loss, our{" "}
                  <a
                    href="https://tribecadentalstudio.com/restore-your-smile-with-all-on-4-dental-implants/"
                    target="_blank"
                    className="text-black font-normal border-b border-black/10 hover:border-[#C5A059] hover:text-[#C5A059] transition-all duration-500"
                  >
                    All-on-4
                  </a>{" "}
                  technique provides a fixed, permanent set of teeth in a single day—even with minimal bone.
                </>
              )}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}