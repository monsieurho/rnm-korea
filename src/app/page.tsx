/**
 * Main page component for RNM Korea
 * Implements a minimal, black and white design showcasing Korean influencer talent
 */

import { Header } from "@/components/Header/Header";
import { HeroSection } from "@/components/HeroSection/HeroSection";
import { SocialFloat } from "@/components/common/SocialFloat/SocialFloat";
import styles from "./page.module.css";
import { Brands } from "@/components/Brands/Brands";
import { About } from "@/components/About/About";
import { Contact } from "@/components/Contact/Contact";
import { TalentsRow } from "@/components/Talents/TalentsRow";

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />
      <HeroSection />
      <SocialFloat />
      <Brands />
      <About />
      <TalentsRow />
      <Contact />
    </div>
  );
}
