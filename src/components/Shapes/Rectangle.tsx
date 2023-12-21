import React, { useEffect, useState } from "react";
import { fabric } from "fabric";
import { IconNode, RectangleVertical } from "lucide";

import { Button } from "../UI/button";

type Props = {
  canvas: fabric.Canvas;
  icon: React.ReactNode;
};

const Rectangle: React.FC<Props> = ({ canvas, icon }) => {
  const [rect, setRect] = useState<fabric.Rect | null>(null);

  const addRectangle = (canvas: fabric.Canvas) => {
    const rect = new fabric.Rect({
      left: 10,
      top: 10,
      height: 280,
      width: 200,
      selectable: true,
      evented: true,
      hasControls: true,
      hasBorders: true,
      hasRotatingPoint: true
    });
    setRect(rect);
    console.log("Rectangle clicked!");
    rect.set("fill", "blue");
    canvas.add(rect);
    rect.center();
    canvas.renderAll();
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.code === "Backspace") {
        const activeObject = canvas.getActiveObject();

        if (activeObject) {
          canvas.remove(activeObject);
          canvas.renderAll();
        }
      }
    };
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      // Clean up when the component unmounts
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [canvas, rect]);

  return (
    <div>
      <div className="" onClick={() => addRectangle(canvas!)}>
        Rectangle {icon}
      </div>
    </div>
  );
};

export default Rectangle;
