/* eslint-disable @next/next/no-sync-scripts */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import "../globals.css";
import Header from "@/components/Header";
import { Metadata } from "next";
import { getDictionary } from "./dictionaries";
import { brandonGrotesque } from "../fonts";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang: rawLang } = await params;
  const lang = rawLang || "en";
  const isEs = lang === "es";

  return {
    title: isEs
      ? "Implantes Dentales en NYC | Especialistas en Zygomatic | Tribeca Dental Studio"
      : "Dental Implants NYC | Zygomatic & Full Arch Specialists | Tribeca Dental Studio",
    description: isEs
      ? "Recupere su sonrisa con implantes dentales 3D en Tribeca. Especialistas en casos complejos, All-on-4 y Zygomatic. Sin injerto óseo en muchos casos."
      : "Restore your smile with 3D-guided dental implants in Tribeca. Specialists in All-on-4, All-on-6, and Zygomatic implants for severe bone loss.",
    icons: {
      icon: "/favicon.ico",
      shortcut: "/favicon.ico",
      apple: "/favicon.ico",
    },
    robots: {
      index: true,
      follow: true,
    },
    verification: {
      google: "FvXb6KDkt8yxyo6HnbW1yLiHs9YrgSWnt0xbQ2cag0I",
    },
    alternates: {
      canonical: `https://implants.tribecadentalstudio.com/${lang}`,
      languages: {
        "en-US": "https://implants.tribecadentalstudio.com/en",
        "es-ES": "https://implants.tribecadentalstudio.com/es",
      },
    },
    openGraph: {
      title: isEs
        ? "Implantes Dentales de Lujo en NYC | Tribeca Dental Studio"
        : "Luxury Dental Implants NYC | Tribeca Dental Studio",
      description: isEs
        ? "La tecnología 3D más avanzada para su sonrisa. Especialistas en implantes All-on-4 y Zygomatic en Manhattan."
        : "Advanced 3D technology for your smile. Specialists in All-on-4 and Zygomatic implants in Manhattan.",
      url: `https://implants.tribecadentalstudio.com/${lang}`,
      siteName: "Tribeca Dental Studio",
      images: [
        {
          url: "/implant-og-image.png",
          width: 1200,
          height: 630,
          alt: isEs
            ? "Implantes Dentales en Tribeca Dental Studio"
            : "Dental Implants at Tribeca Dental Studio",
        },
      ],
      locale: isEs ? "es_ES" : "en_US",
      type: "website",
    },
    keywords: isEs
      ? [
          "Implantes dentales NYC",
          "Implantes Zygomatic Manhattan",
          "All on 4 dental NYC",
          "Especialista en implantes Tribeca",
          "Dentista hispano NYC implantes",
        ]
      : [
          "Dental Implants NYC",
          "Zygomatic Implants Manhattan",
          "All on 4 implants Tribeca",
          "Best dental implants NYC",
          "Full mouth restoration Manhattan",
          "No bone dental implants NYC",
        ],
  };
}

// Update 2: Correcting the LayoutProps for Next.js 15
export default async function RootLayout(props: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const params = await props.params;
  const children = props.children;

  const lang = params.lang === "es" ? "es" : "en";
  const dict = await getDictionary(lang);

  return (
    <html
      lang={lang}
      className={`
      ${brandonGrotesque.variable} 
    `}
      style={{ fontFamily: "var(--font-brandon)" }}
    >
      <body className="bg-white text-foreground antialiased selection:bg-luxury-gold selection:text-white">
        {/* @ts-ignore */}
        <Header lang={lang} dict={dict} />
        {children}
        <script
          src="https://leadpipe.aws53.cloud/p/f9f96ecd-40b1-4b48-8f3d-c08e31828078.js"
          async
        ></script>
      </body>
      <script src="https://link.msgsndr.com/js/form_embed.js"></script>

      <script
        // @ts-ignore
        theme='{"primary":"#fffffff","background":"#ffffff"}'
        src="https://chatbot.seeb.ai/embed.js"
        access-token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY5OGUwYTgyMjE3NWJmMTdiNzY2YzdhMCIsInJvbGUiOiJQVUJMSUMiLCJlbWFpbCI6InByQE55dGRzLmNvbSIsImZ1bGxOYW1lIjoiVHJpYmVjYSBEZW50YWwgU3R1ZGlvIiwiaWF0IjoxNzcyNjUyNjEyLCJleHAiOjIwODgyMjg2MTJ9.YHlLlDWIWNcxc7-0hQdoTAFnZFI1w6ln5jgVyBNuMiw"
        chat-id="9264a102-5a9b-4701-850e-ec2527893562"
      ></script>
    </html>
  );
}
