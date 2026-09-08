import { useRef, useEffect, useState } from 'react';
import { usePresence } from 'motion/react';

interface SandTransitionImageProps {
  src: string;
  alt: string;
  className?: string;
}

function SandTransitionImage({ src, className = '' }: SandTransitionImageProps) {
  const [isPresent, safeToRemove] = usePresence();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [loaded, setLoaded] = useState(false);
  const filterId = useRef(`sand-${Math.random().toString(36).substr(2, 9)}`);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.referrerPolicy = 'no-referrer';

    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);
      setLoaded(true);
    };

    img.src = src;
  }, [src]);

  useEffect(() => {
    if (!loaded) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrame: number;
    const startTime = performance.now();
    const duration = 900;

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Easing: quartic ease-out
      const easedProgress = 1 - Math.pow(1 - progress, 4);

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Create sand/particle dissolve effect
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const data = imageData.data;

      for (let i = 0; i < data.length; i += 4) {
        const x = (i / 4) % canvas.width;
        const y = Math.floor(i / 4 / canvas.width);

        // Create dissolve pattern based on noise
        const noise = Math.sin(x * 0.02 + y * 0.02 + elapsed * 0.01) * 0.5 + 0.5;
        const threshold = easedProgress * 1.2;

        if (noise < threshold) {
          data[i + 3] = Math.max(0, data[i + 3] * (1 - (threshold - noise)));
        }
      }

      ctx.putImageData(imageData, 0, 0);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else if (!isPresent && safeToRemove) {
        safeToRemove();
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrame);
    };
  }, [loaded, isPresent, safeToRemove]);

  return (
    <div className={`relative ${className}`}>
      {/* SVG Filter for extra sand effect */}
      <svg className="absolute w-0 h-0">
        <defs>
          <filter id={filterId.current}>
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.8"
              numOctaves="4"
              result="noise"
            />
            <feDisplacementMap
              in="SourceGraphic"
              in2="noise"
              scale="15"
              xChannelSelector="R"
              yChannelSelector="G"
            />
          </filter>
        </defs>
      </svg>

      <canvas
        ref={canvasRef}
        className="w-full h-full object-contain mix-blend-lighten"
        style={{ filter: `url(#${filterId.current})` }}
      />

      {/* Fallback image while loading */}
      {!loaded && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-gray-600 border-t-transparent rounded-full animate-spin" />
        </div>
      )}
    </div>
  );
}

export default SandTransitionImage;
