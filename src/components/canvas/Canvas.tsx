import { useRef } from 'react';

export const Canvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  return <canvas ref={canvasRef}></canvas>;
};
