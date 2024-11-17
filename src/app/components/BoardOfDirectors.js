"use client";

import React, { useState } from "react";
import Image from "next/image";

const BoardOfDirectors = () => {
  const [directors, setDirectors] = useState([
    {
      id: 1,
      name: "Director 1",
      img: "/images/director-3.png",
      title: "Designation goes here",
    },
    {
      id: 2,
      name: "Director 2",
      img: "/images/director-2.png",
      title: "Designation goes here",
    },
    {
      id: 3,
      name: "Director 3",
      img: "/images/director-1.png",
      title: "Designation goes here",
    },
    {
      id: 4,
      name: "Director 4",
      img: "/images/director-2.png",
      title: "Designation goes here",
    },
    {
      id: 5,
      name: "Director 5",
      img: "/images/director-2.png",
      title: "Designation goes here",
    },
  ]);

  const [draggedIndex, setDraggedIndex] = useState(null);

  const handleDragStart = (e, index) => {
    e.stopPropagation();
    setDraggedIndex(index);
    e.dataTransfer.setData('text/plain', index.toString());
  };

  const handleDrop = (e, dropIndex) => {
    e.preventDefault();
    if (draggedIndex === null) return;

    const newDirectors = [...directors];
    const temp = newDirectors[draggedIndex];
    newDirectors[draggedIndex] = newDirectors[dropIndex];
    newDirectors[dropIndex] = temp;
    setDirectors(newDirectors);
    setDraggedIndex(null);
  };

  const handleDragOver = (e) => {
    e.preventDefault(); 
  };

  const handleDragEnd = () => {
    setDraggedIndex(null);
  };

  return (
    <div className="w-full bg-white overflow-hidden select-none">
      <div className="container mx-auto px-6 py-12">
        <div className="text-center mb-16">
          <p className="text-sm text-[#666] uppercase tracking-wide mb-2">
            Board of Directors
          </p>
          <h2 className="text-4xl font-bold text-black leading-snug">
            Meet Our Esteemed Board Of Directors
          </h2>
        </div>

        <div className="flex justify-center items-end gap-8 md:gap-12 lg:gap-16 mb-4">
          {directors.map((director, index) => {
            const isCenterPosition = index === Math.floor(directors.length / 2);
            
            return (
              <div
                key={director.id}
                className={`
                  flex flex-col items-center
                  transition-all duration-300 ease-in-out
                  ${isCenterPosition ? "w-[420px]" : "w-[300px]"}
                  ${draggedIndex === index ? "opacity-50" : "opacity-100"}
                `}
              >
                <div
                  className={`
                    relative rounded-full shadow-lg mb-4
                    ${isCenterPosition ? "w-[420px] h-[420px]" : "w-[300px] h-[300px]"}
                  `}
                  onDrop={(e) => handleDrop(e, index)}
                  onDragOver={handleDragOver}
                >
                  <div className="absolute inset-0 rounded-full overflow-hidden">
                    <Image
                      src={director.img}
                      alt={director.name}
                      fill
                      className={`
                        object-contain select-none
                        ${draggedIndex !== null && draggedIndex !== index ? 
                          "ring-4 ring-blue-300 ring-opacity-50" : ""
                        }
                      `}
                      draggable={false}
                      unoptimized
                    />
                  </div>

                  <div
                    className={`
                      absolute bottom-48 right-[-30px] z-10
                      transition-all duration-200
                      ${isCenterPosition
                        ? "opacity-100"
                        : "opacity-0 hover:opacity-100 md:block hidden"
                      }
                    `}
                  >
                    <span 
                      draggable="true"
                      onDragStart={(e) => handleDragStart(e, index)}
                      onDragEnd={handleDragEnd}
                      className={`
                        inline-flex items-center justify-center
                        w-20 h-20 rounded-full
                        bg-[#011F43] text-white text-xs
                        shadow-lg cursor-move select-none
                        transition-transform duration-200
                        hover:scale-110 active:scale-95
                        ${draggedIndex === index ? "scale-90" : ""}
                      `}
                    >
                      DRAG
                    </span>
                  </div>
                </div>

                <p className="text-[#666] text-sm lg:text-base text-center select-none">
                  {director.title}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BoardOfDirectors;