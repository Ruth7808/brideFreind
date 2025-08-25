// components/Preview.tsx
import React from "react";
import { NamesData } from "../App";

interface PreviewProps {
  names: NamesData;
}

const Preview: React.FC<PreviewProps> = ({ names }) => {
  return (
    <div style={{
      background: "#f0f0f0",
      padding: "2rem",
      borderRadius: "8px",
      fontSize: "1rem"
    }}>
      <div style={{
        display: "flex",
        justifyContent: "space-between"
      }}>
        {/* צד החתן */}
        <div style={{ flex: 1 }}>
          <div>{names.groomName || "שם החתן"} נ"י</div>
          <div>{names.groomFather || "כבוד האב + שם אב"} שליט"א</div>
          <div>ישיבת {names.groomYeshiva || "ישיבה"}</div>
          <div>{names.groomCity || "עיר"}</div>
        </div>

        {/* צד הכלה */}
        <div style={{ flex: 1 ,textAlign: "left" }}>
          <div>{names.brideName || "שם הכלה"} תח'י</div>
          <div>{names.brideFather || "כבוד האב + שם אב"} שליט"א</div>
          <div>סמינר {names.brideSeminar || "סמינר"}</div>
          <div>{names.brideCity || "עיר"}</div>
        </div>
      </div>
      {/* למטה במרכז */}
      <div style={{ width: "100%", textAlign: "center", marginTop: "1rem", fontSize: "1.2rem" }}>
        בס"ד {names.date || "אור לכו תמוז תשפד"}
      </div>
    </div>
  );
};

export default Preview;
