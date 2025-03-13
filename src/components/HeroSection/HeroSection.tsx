"use client";

/**
 * Hero Section component inspired by modernist design principles
 * Features stark typography and geometric elements
 */

import { useEffect, useRef } from "react";
import { SplitText } from "../common/SplitText/SplitText";
import styles from "./HeroSection.module.css";

export const HeroSection = () => {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (contentRef.current) observer.observe(contentRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.content} ref={contentRef}>
        <div className={styles.mainContent}>
          <div className={styles.titleBlock}>
            <h1 className={styles.mainTitle}>
              <SplitText text="RNM—" delay={0.2} />
            </h1>
            <h2 className={styles.subTitle}>
              다음 인플루언서 캠페인을 저희와 함께 시작하세요
            </h2>
          </div>

          <div className={styles.footer}>
            <div className={styles.modernistList}>
              <div>E01: 브랜드 스트랫</div>
              <div>E02: 글로벌 네트워크</div>
              <div>E03: 콘텐츠 생성</div>
              <div>E04: 인플루언서 마케팅</div>
              <div>E05: 이벤트</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.verticalLine} />
    </section>
  );
};
