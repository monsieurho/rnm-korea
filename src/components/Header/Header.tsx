"use client";

/**
 * Modernist Header component with stark black and white design
 * Includes smooth scrolling navigation and Korean/English bilingual support
 */

import { useCallback } from "react";
import Link from "next/link";
import styles from "./Header.module.css";

export const Header = () => {
  // Function to handle smooth scrolling to sections
  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <button
          onClick={() => scrollToSection("hero")}
          className={styles.logo}
          style={{
            background: "none",
            border: "none",
            padding: "0",
            fontSize: "24px",
            fontWeight: "400",
          }}
        >
          RNM
        </button>

        <nav className={styles.navigation}>
          <button
            onClick={() => scrollToSection("clients")}
            className={styles.navLink}
          >
            Clients <span className={styles.korean}>고객</span>
          </button>
          <span className={styles.separator}>/</span>
          <button
            onClick={() => scrollToSection("about")}
            className={styles.navLink}
          >
            About <span className={styles.korean}>소개</span>
          </button>
          <span className={styles.separator}>/</span>
          <button
            onClick={() => scrollToSection("contact")}
            className={styles.navLink}
          >
            Contact <span className={styles.korean}>연락처</span>
          </button>
        </nav>
      </div>
      <div className={styles.horizontalLine} />
    </header>
  );
};
