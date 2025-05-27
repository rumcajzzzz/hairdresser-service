import React, { useState, useEffect, useRef } from "react";

const testimonials = [
  {
    id: 1,
    name: "Anna K.",
    text: "Świetna obsługa i profesjonalne podejście. Polecam każdemu!",
  },
  {
    id: 2,
    name: "Maria S.",
    text: "Zawsze wychodzę zadowolona, a fryzura wygląda rewelacyjnie!",
  },
  {
    id: 3,
    name: "Katarzyna W.",
    text: "Przyjazna atmosfera i doskonały efekt końcowy. Najlepszy salon w mieście.",
  },
  {
    id: 4,
    name: "Paulina D.",
    text: "Jestem stałą klientką od lat – nigdy się nie zawiodłam.",
  },
  {
    id: 5,
    name: "Magdalena R.",
    text: "Profesjonalne doradztwo i perfekcyjne strzyżenie. Polecam!",
  },
  {
    id: 6,
    name: "Tomaszyna L.",
    text: "Zawsze wychodzę z uśmiechem. Jakość usług na najwyższym poziomie.",
  },
  {
    id: 7,
    name: "Ewa J.",
    text: "Fryzura idealna na każdą okazję. Bardzo miła obsługa.",
  },
  {
    id: 8,
    name: "Janina M.",
    text: "Salon wart polecenia – profesjonalizm i miła atmosfera.",
  },
];

const stars = "★★★★★";

export default function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const fadeOutTimeout = setTimeout(() => setFade(false), 4500);

    timeoutRef.current = setTimeout(() => {
      setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
      setFade(true);
    }, 2000);

    return () => {
		if (timeoutRef.current) clearTimeout(timeoutRef.current);
      clearTimeout(fadeOutTimeout);
    };
  }, [currentIndex]);

  function handleDotClick(index: number) {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setFade(false);

    setTimeout(() => {
      setCurrentIndex(index);
      setFade(true);
    }, 300);
  }

  const { name, text } = testimonials[currentIndex];

  return (
    <section
      style={{
        maxWidth: "600px",
        margin: "2rem auto",
        padding: "1rem",
        border: "1px solid #ccc",
        borderRadius: "8px",
        boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        textAlign: "center",
        backgroundColor: "#fff",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <p
        style={{
          fontSize: "1.2rem",
          fontStyle: "italic",
          marginBottom: "1rem",
          minHeight: "4.5rem",
          opacity: fade ? 1 : 0,
          transition: "opacity 0.5s ease-in-out",
        }}
      >
        „{text}”
      </p>
      <div
        style={{
          fontSize: "1.5rem",
          color: "#f39c12",
          marginBottom: "0.5rem",
          letterSpacing: "2px",
          opacity: fade ? 1 : 0,
          transition: "opacity 0.5s ease-in-out",
        }}
        aria-label="Ocena: 5 gwiazdek"
      >
        {stars}
      </div>
      <p
        style={{
          fontWeight: "700",
          fontSize: "1rem",
          color: "#333",
          marginTop: "0",
          opacity: fade ? 1 : 0,
          transition: "opacity 0.5s ease-in-out",
        }}
      >
        — {name}
      </p>
      <div style={{ marginTop: "1rem" }}>
        {testimonials.map((_, idx) => (
          <span
            key={idx}
            onClick={() => handleDotClick(idx)}
            style={{
              cursor: "pointer",
              fontSize: "1.3rem",
              color: idx === currentIndex ? "#f39c12" : "#ccc",
              margin: "0 4px",
              userSelect: "none",
              transition: "color 0.3s ease",
            }}
            aria-label={`Przejdź do opinii numer ${idx + 1}`}
          >
            ●
          </span>
        ))}
      </div>
    </section>
  );
}