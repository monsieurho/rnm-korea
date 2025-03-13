/**
 * About Section Component
 * Presents company information with dynamic content blocks and parallax effects
 * Includes team showcase and company milestones
 */

"use client";

import { useEffect, useRef } from "react";
import { SplitText } from "../common/SplitText/SplitText";
import styles from "./About.module.css";

export const About = () => {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(styles.visible);
        }
      },
      { threshold: 0.1 }
    );

    if (contentRef.current) {
      observer.observe(contentRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className={styles.aboutSection}>
      <div className={styles.content} ref={contentRef}>
        <div className={styles.textContainer}>
          <p className={styles.aboutText}>
            RNM은 브랜드와 인플루언서를 연결하는 새로운 방식을 제시합니다.
            우리는 단순한 마케팅 에이전시가 아닌, 문화를 만들어가는 크리에이티브
            파트너입니다. 매일 변화하는 디지털 환경 속에서, 우리는 브랜드의
            진정성과 인플루언서의 창의성이 만나는 지점을 찾아냅니다. 한국의
            독특한 디지털 문화를 이해하고, 글로벌 시장에서도 통용되는 캠페인을
            만들어내는 것. 그것이 RNM이 추구하는 가치입니다.
          </p>
        </div>
      </div>
    </section>
  );
};
