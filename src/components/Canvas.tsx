"use client";
import React, { useEffect, useState } from "react";
import { fabric } from "fabric";
import Rectangle from "./Rectangle";

type Props = {};

const Canvas = (props: Props) => {
  const [canvas, setCanvas] = useState<fabric.Canvas>();

  useEffect(() => {
    setCanvas(initCanvas());
  }, []);

  const initCanvas = () => {
    const canvasInstance = new fabric.Canvas("canvas", {
      selection: true,
      height: 800,
      width: 800,
      backgroundColor: "gray",
    });

    return canvasInstance;
  };

  return (
    <>
      <div>
        <Rectangle canvas={canvas} />
        <canvas id="canvas" style={{ border: "1px solid black" }} />
      </div>
    </>
  );
};

export default Canvas;
