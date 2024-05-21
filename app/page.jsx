import Image from "next/image";
import PopularTech from "@/components/PopularTech";
import Hero from "@/components/Hero";
export default function Home() {
  return (
    <main>
      <Hero />
      <PopularTech />
    </main>
  );
}
