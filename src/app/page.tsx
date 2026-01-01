import ParticlesBackground from "@/components/ParticlesBackground";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Research from "@/components/Research";
import Security from "@/components/Security";
import Skills from "@/components/Skills";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <ParticlesBackground />

      <div className="relative z-10">
        <Hero />
        <Experience />
        <div className="bg-gradient-to-b from-transparent via-blue-500/5 to-transparent">
          <Projects />
        </div>
        <Research />
        <Security />
        <Skills />
        <Footer />
      </div>

      {/* Futuristic Accents */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none -z-20">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-500/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-500/10 blur-[120px] rounded-full" />
      </div>
    </main>
  );
}
