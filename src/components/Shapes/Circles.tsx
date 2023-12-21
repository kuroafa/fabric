import React, { useEffect, useState } from "react";
import { fabric } from "fabric";

type Props = {
  canvas: fabric.Canvas;
  icon: React.ReactNode;
};

const Circles = ({ canvas, icon }: Props) => {
  const [circle, setCircle] = useState<fabric.Circle | null>(null);

  const addCircle = (canvas: fabric.Canvas) => {
    const Circle = new fabric.Circle({
      radius: 150,

      fill: "black",
      selectable: true,
      evented: true,
      hasBorders: true,
      hasControls: true,
    });
    setCircle(Circle);
    canvas.add(Circle);
    Circle.center();
    Circle.set("fill", "blue");
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
  }, [canvas, circle]);

  return (
    <div>
      <div
        onClick={() => {
          addCircle(canvas);
        }}
      >
        Circle {icon}
      </div>
    </div>
  );
};

export default Circles;
