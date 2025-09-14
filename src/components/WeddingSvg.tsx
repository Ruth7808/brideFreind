import React, { useEffect, useRef } from "react";
import type { NamesData } from "../models";
import WeddingSvgUrl from "../assets/12.svg";

interface WeddingSvgProps {
  names: NamesData;
}

const WeddingSvg: React.FC<WeddingSvgProps> = ({ names }) => {
  const svgContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!svgContainer.current) return;

    fetch(WeddingSvgUrl)
      .then((res) => res.text())
      .then((svgText) => {
        svgContainer.current!.innerHTML = svgText;

        const replaceTextWithAlignment = (
          id: string,
          value: string,
          maxWidth: number,
          alignment: "right" | "left" | "center" = "right"
        ) => {
          const el = svgContainer.current!.querySelector<SVGTextElement>(`#${id}`);
          if (!el) return;

          // שמירת המיקום המקורי
          const originalX = parseFloat(el.getAttribute("x") || "0");
          const originalY = parseFloat(el.getAttribute("y") || "0");

          // עדכון הטקסט
          el.textContent = value;

          // חישוב רוחב הטקסט החדש
          const bbox = el.getBBox();
          const textWidth = bbox.width;

          // התאמת המיקום לפי הרוחב המקסימלי והיישור
          let newX = originalX;
          
          if (alignment === "right") {
            // יישור לימין - הטקסט נגמר במיקום המקורי
            newX = originalX - textWidth;
          } else if (alignment === "center") {
            // יישור למרכז
            newX = originalX - (textWidth / 2);
          } else if (alignment === "left") {
            // יישור לשמאל - הטקסט מתחיל במיקום המקורי
            newX = originalX;
          }

          // אם הטקסט רחב מדי, קיצור או התאמה
          if (textWidth > maxWidth) {
            el.setAttribute("textLength", maxWidth.toString());
            el.setAttribute("lengthAdjust", "spacingAndGlyphs");
            
            if (alignment === "right") {
              newX = originalX - maxWidth;
            } else if (alignment === "center") {
              newX = originalX - (maxWidth / 2);
            }
          }

          el.setAttribute("x", newX.toString());
          el.setAttribute("text-anchor", "start"); // תמיד start כי אנחנו מחשבים את המיקום בעצמנו
        };
        
        // החתן - יישור לימין (טקסט נגמר בנקודה קבועה)
        replaceTextWithAlignment("groomName", names.groomName || "שם החתן", 200, "right");
        replaceTextWithAlignment("groomFather", names.groomFather || "שם אב החתן", 200, "right");
        replaceTextWithAlignment("groomYeshiva", names.groomYeshiva || "ישיבה", 200, "right");
        replaceTextWithAlignment("groomCity", names.groomCity || "עיר", 200, "right");
        // הכלה - יישור לשמאל (טקסט מתחיל בנקודה קבועה)
        replaceTextWithAlignment("brideName", names.brideName || "שם הכלה", 200, "left");
        replaceTextWithAlignment("brideFather", names.brideFather || "שם אב הכלה", 200, "left");
        replaceTextWithAlignment("brideSeminar", names.brideSeminar || "סמינר", 200, "left");
        replaceTextWithAlignment("brideCity", names.brideCity || "עיר", 200, "left");

        // תאריך - יישור למרכז
        replaceTextWithAlignment("date", names.date || "אור לכו תמוז תשפ״ד", 300, "center");
      });
  }, [names]);

  return (
    <div
      ref={svgContainer}
      style={{
        width: "600px",
        margin: "0 auto",
        position: "relative",
      }}
    />
  );
};

export default WeddingSvg;