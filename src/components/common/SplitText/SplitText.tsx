/**
 * SplitText component that splits text into characters for animated reveals
 * Inspired by high-end typography animations
 */

import { useEffect, useRef } from "react";
import styles from "./SplitText.module.css";

interface SplitTextProps {
  text: string;
  delay?: number;
  className?: string;
}

export const SplitText = ({
  text,
  delay = 0,
  className = "",
}: SplitTextProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const spans = container.querySelectorAll("span");
    spans.forEach((span, i) => {
      span.style.animationDelay = `${delay + i * 0.05}s`;
    });
  }, [delay]);

  return (
    <div ref={containerRef} className={`${styles.container} ${className}`}>
      {text.split("").map((char, i) => (
        <span key={i} className={styles.char}>
          {char}
        </span>
      ))}
    </div>
  );
};
