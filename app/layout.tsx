import ResponsiveNav from "@/components/Home/Navbar/ResponsiveNav";
import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Home/Footer/Footer";
import ScrollToTop from "@/components/Helper/ScrollToTop";
import AnimatedCursor from "react-animated-cursor"

const font = Sora ({
  weight:['100', '200', '300', '400', '500', '600', '700', '800', ],
  subsets:['latin']
})

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Portfolio with next js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${font.className} antialiased`}>
        <div className="hidden md:block">
          <AnimatedCursor innerSize={8}/>
        </div>
        <ResponsiveNav />
        {children}
        <Footer/>
        <ScrollToTop/>
      </body>
    </html>
  );
}
