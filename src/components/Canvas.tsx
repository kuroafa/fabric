"use client";
import React, { useEffect, useState } from "react";
import { fabric } from "fabric";
import Rectangle from "./Shapes/Rectangle";
import SideBar from "./Dashboard/SideBar";
import ToolBar from "./Dashboard/ToolBar";

type Props = {};

const Canvas = (props: Props) => {
  const [canvas, setCanvas] = useState<fabric.Canvas | null>(null);

  useEffect(() => {
    const canvas = initCanvas();
    setCanvas(canvas);
    const updateCanvasSize = () => {
      const { innerWidth, innerHeight } = window;
      canvas.setWidth(innerWidth);
      canvas.setHeight(innerHeight);
      canvas.renderAll();
    };
    updateCanvasSize();

    // Attach event listener for window resize
    window.addEventListener("resize", updateCanvasSize);

    return () => {
      canvas.dispose();
      window.removeEventListener("resize", updateCanvasSize);
    };
  }, []);

  const initCanvas = () => {
    const canvasInstance = new fabric.Canvas("canvas", {
      selection: true,
      backgroundColor: "white",
    });

    return canvasInstance;
  };

  return (
    <>
      <div className="bg-white flex flex-col ">
        <ToolBar canvas={canvas} />
        <div className="flex ">
          <SideBar canvas={canvas} />

          <canvas id="canvas" width={800} height={600} />
        </div>
      </div>
    </>
  );
};

export default Canvas;
