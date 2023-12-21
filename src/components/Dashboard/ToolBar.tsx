import React from "react";
import Rectangle from "../Shapes/Rectangle";
import Circles from "../Shapes/Circles";
import { ArrowRightToLine, Circle, Home, RectangleHorizontal, RectangleVertical, Redo, Undo } from "lucide-react";
import Hamburger from 'hamburger-react'
import { Button } from "../UI/button";

type Props = {
  canvas: fabric.Canvas;
};

const ToolBar = ({ canvas }: Props) => {
  return (
    <div className=" py-2 bg-gradient-to-br from-blue-300 via-dark-blue-500 to-slate-600 items-center flex-wrap flex justify-between px-5 gap-2  ">
        <div className="flex items-center gap-6 ">
            <Hamburger size={20}/>
            <h2 className="text-sm  hidden md:block">Home</h2>
            <div className="hidden md:hidden sm:block"><Home color="#ffffff" /></div>
            <h2 className="text-sm  hidden  sm:block">file</h2>
            <div className="flex gap-3">
            <div className="bg-black rounded-full p-2">
                <Undo size={20} color="#ffffff" />
            </div>
            <div className="bg-black rounded-full p-2">
                <Redo size={20} color="#ffffff" />
            </div>
            </div>
            
        </div>
        <div>
            <Button className="bg-black py-3 px-5 rounded-[10px] text-sm flex flex-row gap-2">Next <ArrowRightToLine size={20} color="#ffffff" /></Button>
        </div>
      
    </div>
  );
};

export default ToolBar;
