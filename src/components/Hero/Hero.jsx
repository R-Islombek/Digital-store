import React, { useState, useEffect, useRef } from 'react';
import "./Hero.css";


import image1 from "./images/image1.webp";
import image2 from "./images/image2.webp";
import image3 from "./images/image3.webp";
import image4 from "./images/image4.png";


const SLIDES = [
  {
    eyebrow: "Melhores ofertas personalizadas",
    title: "Queima de stoque Nike",
    emoji: "🔥",
    description:
      "Consequat culpa exercitation mollit nisi excepteur do do tempor laboris eiusmod irure consectetur.",
    buttonText: "Ver Ofertas",
    image: image1,
  },
  {
    eyebrow: "Novidades da semana",
    title: "Adidas em destaque",
    emoji: "⚡",
    description:
      "Consequat culpa exercitation mollit nisi excepteur do do tempor laboris eiusmod irure consectetur.",
    buttonText: "Ver Ofertas",
    image: image2,
  },
  {
    eyebrow: "Frete grátis",
    title: "Coleção Puma",
    emoji: "🚀",
    description:
      "Consequat culpa exercitation mollit nisi excepteur do do tempor laboris eiusmod irure consectetur.",
    buttonText: "Ver Ofertas",
    image: image3,
  },
  {
    eyebrow: "Edição limitada",
    title: "Nova coleção",
    emoji: "✨",
    description:
      "Consequat culpa exercitation mollit nisi excepteur do do tempor laboris eiusmod irure consectetur.",
    buttonText: "Ver Ofertas",
    image: image4,
  },
];

const AUTOPLAY_MS = 5000;

const Hero = () => {
  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef(null);

  const goTo = (index) => {
    const total = SLIDES.length;
    setCurrent(((index % total) + total) % total);
  };

  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      goTo(current + 1);
    }, AUTOPLAY_MS);
    return () => clearTimeout(timeoutRef.current);
  }, [current]);

  const slide = SLIDES[current];

  return (
    <section className="hero">
      <div className="container hero__container">
        <div className="hero__content">
          <span className="hero__eyebrow">{slide.eyebrow}</span>
          <h1 className="hero__title">
            {slide.title} <span className="hero__emoji">{slide.emoji}</span>
          </h1>
          <p className="hero__description">{slide.description}</p>
          <button className="hero__cta">{slide.buttonText}</button>

          <div className="hero__dots">
            {SLIDES.map((_, index) => (
              <button
                key={index}
                className={`hero__dot ${index === current ? "hero__dot--active" : ""}`}
                onClick={() => goTo(index)}
                aria-label={`${index + 1}-slaydga o'tish`}
              />
            ))}
          </div>
        </div>

        <div className="hero__media">
          <div className="hero__dotgrid" aria-hidden="true" />
          <img
            key={slide.image}
            src={slide.image}
            alt={slide.title}
            className="hero__image"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
