"use client";
import React, { useEffect, useState } from "react";
import { fabric } from "fabric";
import Rectangle from "./Rectangle";

type Props = {};

const Canvas = (props: Props) => {
  const [canvas, setCanvas] = useState<fabric.Canvas | null>(null);

  useEffect(() => {
    const canvas = initCanvas();
    setCanvas(canvas);

    return () => {
      canvas.dispose();
    };
  }, []);

  const initCanvas = () => {
    const canvasInstance = new fabric.Canvas("canvas", {
      selection: true,
      height: 800,
      width: 800,
      backgroundColor: "red",
    });

    return canvasInstance;
  };

  return (
    <>
      <div>
        <Rectangle canvas={canvas} />
        <canvas id="canvas" width={800} height={600} />
      </div>
    </>
  );
};

export default Canvas;
