"use client";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";
import Container from "./Container";
import DrSam from "../../public/Dr.-Sam.jpg";
interface DictProps {
  heading: string;
  scan: string;
  price_offer: string;
  benefit: string;
}

export default function Diagnostics({
  dict,
  lang,
}: {
  dict: DictProps;
  lang: string;
}) {
  const scrollToId = useSmoothScroll();
  const isEs = lang === "es";

  return (
    <section className="bg-black text-white py-24 md:py-32">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <div className="w-12 h-[1px] bg-[#C5A059]" />
              <span className="text-[10px] uppercase tracking-[0.5em] text-[#C5A059] font-medium">
                {isEs ? "Cirugía de Élite" : "Elite Surgical Care"}
              </span>
            </div>

            <h2 className="text-4xl md:text-6xl font-serif leading-[1.1]">
              {isEs ? "La Ciencia de la" : "The Science of"} <br />
              <span className="italic font-light text-white/80">
                {isEs ? "Certeza Médica" : "Medical Certainty"}
              </span>
            </h2>

            <div className="space-y-6">
              <p className="text-gray-400 text-[15px] leading-relaxed max-w-md font-light">
                {isEs
                  ? "Dirigido por el Dr. Sam Morhaim, nuestro equipo de especialistas utiliza tecnología de punta presentada en FOX News para resolver incluso los casos de implantes más complejos."
                  : "Led by Dr. Sam Morhaim, our specialist team utilizes cutting-edge technology featured on FOX News to solve even the most complex implant cases."}
              </p>

              <ul className="text-[12px] uppercase tracking-widest text-[#C5A059] space-y-2 opacity-80">
                <li>
                  —{" "}
                  {isEs
                    ? "Especialista en Periodoncia e Implantes"
                    : "Specialist in Periodontics & Implants"}
                </li>
                <li>
                  —{" "}
                  {isEs ? "Presentado en FOX NEWS" : "As Featured on FOX NEWS"}
                </li>
                <li>
                  —{" "}
                  {isEs
                    ? "Experto en Casos Zygomatic y All-on-4"
                    : "Zygomatic & All-on-4 Expert"}
                </li>
              </ul>
            </div>

            <div className="pt-8">
              <button
                onClick={() => scrollToId("leadForm")}
                className="px-10 py-4 border border-[#C5A059] text-[#C5A059] text-[11px] uppercase tracking-[0.4em] hover:bg-[#C5A059] hover:text-black transition-all duration-700"
              >
                {isEs
                  ? "SOLICITAR EVALUACIÓN DE EXPERTOS"
                  : "REQUEST EXPERT EVALUATION"}
              </button>
            </div>
          </div>

          <div className="relative aspect-square bg-black border border-white/5 flex flex-col items-center justify-center p-12 text-center group overflow-hidden">
            <img
              src="./Dr.-Sam.jpg"
              alt="Dr. Sam Morhaim"
              className="absolute inset-0 w-full h-full object-cover opacity-50 grayscale group-hover:grayscale-0 group-hover:opacity-70 group-hover:scale-105 transition-all duration-[2000ms] ease-out"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10" />
            <a href="https://www.foxnews.com/health/new-laser-procedure-treats-gum-disease-with-less-pain" target="_blank">
              <div className="absolute top-6 right-6 z-20 border border-white/20 bg-black/50 backdrop-blur-sm px-4 py-2">
                <span className="text-[10px] font-bold tracking-tighter text-white">
                  AS SEEN ON <span className="text-blue-500">FOX</span>
                  <span className="text-red-600">NEWS</span>
                </span>
              </div>
            </a>

            <div className="relative z-20 space-y-4">
              <h4 className="text-xl font-serif tracking-widest uppercase text-[#C5A059]">
                Dr. Sam Morhaim
              </h4>
              <p className="text-[15px] text-white/60 italic font-light max-w-[280px]">
                {isEs
                  ? "Reconocido por su excelencia quirúrgica en la restauración de sonrisas complejas en Manhattan."
                  : "Renowned for surgical excellence in restoring complex smiles across Manhattan."}
              </p>
            </div>
            <div className="absolute bottom-0 left-0 w-full h-1 bg-[#C5A059] scale-x-0 group-hover:scale-x-100 transition-transform duration-1000 origin-left z-30" />
          </div>
        </div>
      </Container>
    </section>
  );
}
