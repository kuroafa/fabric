import React, { useEffect, useState } from "react";
import { fabric } from "fabric";

type Props = {
  canvas: fabric.Canvas;
};

const Rectangle: React.FC<Props> = ({ canvas }) => {
  const [rect, setRect] = useState<fabric.Rect | null>(null);

  const addRectangle = (canvas: fabric.Canvas) => {
    const rect = new fabric.Rect({
      left: 10,
      top: 10,
      height: 280,
      width: 200,
      fill: "red",
      selectable: true,
      evented: true,
      hasControls: true,
      hasBorders: true,
    });
    setRect(rect);
    console.log("Rectangle clicked!");
    rect.set("fill", "blue");
    canvas.add(rect);
    canvas.renderAll();
  };

  useEffect(() => {
    const handleKeyDown = (event: Event) => {
      if (event.code === "Delete") {
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
      <button onClick={() => addRectangle(canvas!)}>Add Rectangle</button>
    </div>
  );
};

export default Rectangle;
