import { formatPrice } from "@/lib/utils";
import Image from "next/image";
import React from "react";
import AccordionSections from "./AccordianSections";

const CoursePreview = ({ course }: CoursePreviewProps) => {
  const price = formatPrice(course.price);
  return (
    <div className="course-preview">
      <div className="course-preview__container">
        <div className="course-preview__image-wrapper">
          <Image
            src={course.image || "/placeholder.png"}
            alt="Course Preview"
            width={640}
            height={360}
            className="w-full"
          />
        </div>
        <div>
          <h2 className="course-preview__title">{course.title} </h2>
          <p className="text-gray-400 text-md mb-4">By {course.teacherName}</p>
          <p className="text-sm text-customgreys-dirtyGrey">
            {course.description}
          </p>
        </div>
        <div>
          <h4 className="text-white-50/90 font-semibold mb-2 ">
            Course Content
          </h4>
          <AccordionSections sections={course.sections} />
        </div>
      </div>
      <div className="course-preview__container">
        <h3 className="text-xl mb-4">Price Details (1 item)</h3>
        <div className="flex  justify-between mb-4 text-customgreys-dirtyGrey text-base">
            <span className="fontbold">1x {course.title} </span>
            <span className="fontbold">{price}</span>
        </div>
        <div className="flex  justify-between border-t border-customgreys-dirtyGrey pt-4">
            <span className="fontbold text-lg">Total Amount</span>
            <span className="fontbold text-lg">{price} </span>
        </div>
      </div>
    </div>
  );
};

export default CoursePreview;
