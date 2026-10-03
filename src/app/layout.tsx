import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Hanken_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const display = Bricolage_Grotesque({ variable: "--font-display", subsets: ["latin"], weight: ["500", "700", "800"] });
const body = Hanken_Grotesk({ variable: "--font-body", subsets: ["latin"], weight: ["400", "500", "600"] });
const mono = JetBrains_Mono({ variable: "--font-mono", subsets: ["latin"], weight: ["500"] });

export const metadata: Metadata = {
  title: "SPI Solutions | Sistemas administrativos, web y apps móviles en Ecuador",
  description:
    "Desarrollamos sistemas administrativos, páginas web, apps móviles y automatizaciones para negocios pequeños y medianos en Ecuador. Asesoría y consultoría en software.",
  openGraph: {
    title: "SPI Solutions",
    description: "Sistemas administrativos, páginas web, apps móviles y consultoría en software para negocios en Ecuador.",
    locale: "es_EC",
    type: "website",
  },
};

export const viewport: Viewport = { width: "device-width", initialScale: 1 };

// Aplica el tema guardado antes de pintar, para evitar el parpadeo claro/oscuro.
const temaInicial = `try{var t=localStorage.getItem("spi-theme");if(t)document.documentElement.setAttribute("data-theme",t)}catch(e){}`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es" className={`${display.variable} ${body.variable} ${mono.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: temaInicial }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
