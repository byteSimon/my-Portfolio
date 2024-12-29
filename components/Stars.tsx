import React, { useCallback, useEffect, useState } from 'react';
import { loadFull } from "tsparticles";
import type { Engine } from 'tsparticles-engine';
import Particles from "react-tsparticles";

const Stars = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  const getParticleCount = () => {
    const width = window.innerWidth;
    return width < 768 ? 40 : width < 1024 ? 60 : 80;
  };

  // const particlesLoaded = useCallback(async (container: Container | undefined) => {
  //   console.log("Particles container loaded");
  // }, []);

  if (!isVisible) return null;

  return (
    <div className="w-full h-full absolute top-0 left-0 -z-10">
      <Particles
        id="particles-js"
        init={particlesInit}
        // loaded={particlesLoaded}
        options={{
          fps_limit: 30,
          particles: {
            number: {
              value: getParticleCount(),
              density: {
                enable: true,
                value_area: 800
              }
            },
            color: {
              value: "#ffffff"
            },
            shape: {
              type: "circle"
            },
            opacity: {
              value: 0.8, // Increased base opacity (was 0.5)
              random: false,
              anim: {
                enable: true,
                speed: 0.3,
                opacity_min: 0.4, // Increased minimum opacity (was 0)
                sync: false
              }
            },
            size: {
              value: 2.5, // Slightly increased particle size
              random: true,
              anim: {
                enable: true,
                speed: 0.3,
                size_min: 1, // Added minimum size
                sync: false
              }
            },
            line_linked: {
              enable: false
            },
            move: {
              enable: true,
              speed: 0.5,
              direction: "none",
              random: true,
              straight: false,
              out_mode: "out",
              bounce: false,
              attract: {
                enable: false
              }
            }
          },
          interactivity: {
            detect_on: "canvas",
            events: {
              onhover: {
                enable: true,
                mode: "bubble",
                parallax: {
                  enable: false
                }
              },
              onclick: {
                enable: true,
                mode: "push"
              },
              resize: true
            },
            modes: {
              bubble: {
                distance: 80,
                size: 3, // Increased bubble size
                duration: 3,
                opacity: 1, // Maximum opacity for hover effect
                speed: 3
              },
              push: {
                particles_nb: 2
              }
            }
          },
          retina_detect: false
        }}
      />
    </div>
  );
};

export default React.memo(Stars);