"use client";
import { useState } from "react";
import Container from "./Container";
import { motion, AnimatePresence } from "framer-motion";

interface FAQProps {
  lang: string;
}

export default function FAQ({ lang }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const isEs = lang === "es";

  const faqs = [
    {
      q: isEs
        ? "¿Soy candidato si me han dicho que no tengo suficiente hueso?"
        : "Am I a candidate if I was told I have low bone density?",
      a: isEs
        ? "Absolutamente. En Tribeca Dental Studio, nos especializamos en implantes Zygomatic y técnicas de arco completo que se anclan en el hueso de la mejilla, eliminando la necesidad de injertos óseos complejos en la mayoría de los casos."
        : "Absolutely. At Tribeca Dental Studio, we specialize in Zygomatic implants and full-arch techniques that anchor into the cheekbone, eliminating the need for complex bone grafting in most cases.",
    },
    {
      q: isEs 
        ? "¿Cuánto tiempo dura el proceso de recuperación?" 
        : "How long is the recovery process?",
      a: isEs
        ? "Gracias a nuestra tecnología de mapeo 3D y cirugía guiada, el trauma tisular se minimiza. La mayoría de los pacientes de All-on-4 salen con una sonrisa funcional el mismo día y regresan a sus actividades normales en pocos días."
        : "Thanks to our 3D mapping and guided surgery technology, tissue trauma is minimized. Most All-on-4 patients walk out with a functional smile the same day and return to normal activities within a few days.",
    },
    {
      q: isEs
        ? "¿Cuál es la vida útil de un implante dental?"
        : "What is the lifespan of a dental implant?",
      a: isEs
        ? "Con el cuidado adecuado y visitas regulares, los implantes dentales están diseñados para ser una solución de por vida. A diferencia de los puentes o dentaduras, los implantes se integran permanentemente con su estructura ósea."
        : "With proper care and regular visits, dental implants are designed to be a lifelong solution. Unlike bridges or dentures, implants permanently integrate with your bone structure.",
    },
    {
      q: isEs
        ? "¿Es doloroso el procedimiento quirúrgico?"
        : "Is the surgical procedure painful?",
      a: isEs
        ? "Priorizamos su comodidad. Ofrecemos varios niveles de sedación, desde sedación consciente hasta anestesia general administrada por profesionales. La mayoría de los pacientes reportan menos molestias de las que esperaban."
        : "We prioritize your comfort. We offer various levels of sedation, from conscious sedation to board-certified general anesthesia. Most patients report significantly less discomfort than they anticipated.",
    },
  ];

  return (
    <section className="bg-white pb-32 md:pb-20 md:pt-20" id="faq">
      <Container>
        <div className="flex flex-col md:flex-row gap-16 md:gap-24">
          <div className="md:w-1/3">
            <h2 className="text-4xl font-serif sticky top-24 text-[#1A1F2B]">
              {isEs ? "Autoridad" : "Clinical"} <br />
              <span className="italic font-light text-[#C5A059]">
                {isEs ? "Profesional." : "Certainty."}
              </span>
            </h2>
          </div>

          <div className="md:w-2/3 border-t border-black/5">
            {faqs.map((faq, i) => (
              <div key={i} className="border-b border-black/5">
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full py-8 flex justify-between items-center text-left group"
                >
                  <span className="text-[11px] uppercase tracking-[0.3em] text-black/60 group-hover:text-[#C5A059] transition-colors duration-500 font-bold">
                    {faq.q}
                  </span>
                  <span
                    className={`text-xl font-light text-[#C5A059] transition-transform duration-500 ${openIndex === i ? "rotate-45" : ""}`}
                  >
                    +
                  </span>
                </button>

                <AnimatePresence>
                  {openIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{
                        duration: 0.5,
                        ease: [0.04, 0.62, 0.23, 0.98],
                      }}
                      className="overflow-hidden"
                    >
                      <p className="pb-8 text-slate-500 font-light leading-relaxed italic max-w-xl text-sm">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}