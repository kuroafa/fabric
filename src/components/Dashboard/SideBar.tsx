import React from "react";
import Rectangle from "../Shapes/Rectangle";
import { Baseline, LayoutTemplate, RectangleVertical, Shapes, Upload } from "lucide-react";
import Circles from "../Shapes/Circles";
import { Circle } from "lucide-react";

type Props = {
  canvas: fabric.Canvas | null;
};

const SideBar = ({ canvas }: Props) => {
  return (
    <div className="bg-black  z-[1000] absolute h-full flex flex-col gap-10 py-5  px-2  ">
      <div className="text-gray-400 flex flex-col items-center gap-2">
        <LayoutTemplate size={20} color="#ffffff" />
        <p className="text-[13px]">Templates</p>
        
      </div>
      <div className="text-gray-400 flex flex-col items-center gap-2">
      <Upload size={20} color="#ffffff" />
        <p className="text-[13px]">Upload</p>
      </div>
      <div className="text-gray-400 flex flex-col items-center gap-2">
      <Baseline color="#ffffff" />
        <p className="text-[13px]">Text</p>
      </div>
      <div className="text-gray-400 flex flex-col items-center gap-2">
      <Shapes color="#ffffff" />
        <p className="text-[13px]">Shapes</p>
      </div>
      
   
    </div>
  );
};

export default SideBar;
