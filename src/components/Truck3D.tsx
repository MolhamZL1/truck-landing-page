import { useEffect, useRef } from 'react';

export function Truck3D() {
  const canvasRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const container = canvasRef.current;
    let animationId: number;
    let rotation = 0;

    const animate = () => {
      rotation += 0.01;

      const truck = container.querySelector('.truck-3d') as HTMLElement;
      if (truck) {
        truck.style.transform = `rotateY(${rotation}rad) translateZ(50px)`;
      }

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, []);

  return (
    <div ref={canvasRef} className="fixed bottom-10 left-10 w-32 h-32 perspective-1000 pointer-events-none hidden lg:block z-50">
      <div className="truck-3d text-7xl transform-style-3d transition-transform duration-100">
        🚚
      </div>
    </div>
  );
}
