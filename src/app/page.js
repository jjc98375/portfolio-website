import Image from "next/image";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import ExperienceSection from "./components/ExperienceSection";
import { SpeedInsights } from "@vercel/speed-insights/next";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#131643]">
      {/* <Navbar /> */}
      <div className="container mx-auto px-12 mb-0 xs:mt-36 sm:mt-24">
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <EmailSection />
      </div>
      {/* <Footer /> */}
    </main>
  );
}


