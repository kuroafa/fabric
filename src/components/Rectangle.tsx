import React from "react";
import { fabric } from "fabric";

type Props = {
  canvas: fabric.Canvas | undefined;
};

export type RectType = fabric.Rect;

const Rectangle: React.FC<Props> = ({ canvas }) => {
  const addRectangle = (canvas: fabric.Canvas) => {
    const rect = new fabric.Rect({
      left: 10,
      top: 10,
      height: 280,
      width: 200,
      fill: "blue",
      selectable: true,
      evented: true,
      hasControls: true,
      hasBorders: true,
      
    });
    console.log('Rectangle clicked!');
    rect.set('fill', 'blue');
    canvas.add(rect);
    canvas.renderAll();
  };

  return (
    <div>
      <button onClick={() => addRectangle(canvas!)}>Add Rectangle</button>
    </div>
  );
};

export default Rectangle;
