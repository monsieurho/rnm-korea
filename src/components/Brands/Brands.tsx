/**
 * Brands Section Component
 * Features an infinite scrolling marquee to showcase partner brands
 * Implements a modern, minimalist design with smooth animations
 */

"use client";

import { useEffect, useRef } from "react";
import styles from "./Brands.module.css";

interface Brand {
  name: string;
}

const brandsList: Brand[] = [
  { name: "SAMSUNG" },
  { name: "HYUNDAI" },
  { name: "LG" },
  { name: "SK" },
  { name: "LOTTE" },
  { name: "KIA" },
  { name: "NAVER" },
  { name: "KAKAO" },
  // Add more Korean brands as needed
];

export const Brands = () => {
  const marqueeRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const marqueeContent = marqueeRef.current;
    if (!marqueeContent) return;

    // Clone first 5 elements for smooth infinite scroll
    for (let i = 0; i < 5; i++) {
      if (marqueeContent.children[i]) {
        marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
      }
    }
  }, []);

  return (
    <section id="clients" className={styles.brandsSection}>
      <div className={styles.marquee}>
        <ul className={styles.marqueeContent} ref={marqueeRef}>
          {brandsList.map((brand, index) => (
            <li key={index} className={styles.brandItem}>
              {brand.name}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
