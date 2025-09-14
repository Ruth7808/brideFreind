// components/NamesForm.tsx
import React from "react";
import type { NamesData } from "../models";

interface NamesFormProps {
  names: NamesData;
  setNames: React.Dispatch<React.SetStateAction<NamesData>>;
}

const NamesForm: React.FC<NamesFormProps> = ({ names, setNames }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNames({ ...names, [e.target.name]: e.target.value });
  };

  return (
    <form style={{ direction: "rtl", marginBottom: "2rem" }}>
      <div style={{ display: "flex", gap: "2rem" }}>
        {/* צד החתן */}
        <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "0.5rem" }}>
          <h2>החתן</h2>
          <label>שם החתן</label>
          <input name="groomName" value={names.groomName} onChange={handleChange} placeholder="שם החתן" />

          <label>כבוד האב + שם אב</label>
          <input name="groomFather" value={names.groomFather} onChange={handleChange} placeholder="הרב משה כהן" />

          <label>ישיבה</label>
          <input name="groomYeshiva" value={names.groomYeshiva} onChange={handleChange} placeholder="שם הישיבה" />

          <label>עיר מגורים</label>
          <input name="groomCity" value={names.groomCity} onChange={handleChange} placeholder="עיר" />
        </div>

  {/* צד הכלה */}
  <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "0.5rem" }}>
          <h2>הכלה</h2>
          <label>שם הכלה</label>
          <input name="brideName" value={names.brideName} onChange={handleChange} placeholder="שם הכלה" />

          <label>כבוד האב + שם אב</label>
          <input name="brideFather" value={names.brideFather} onChange={handleChange} placeholder="הרב יוסף כהן" />

          <label>סמינר</label>
          <input name="brideSeminar" value={names.brideSeminar} onChange={handleChange} placeholder="שם הסמינר" />

          <label>עיר מגורים</label>
          <input name="brideCity" value={names.brideCity} onChange={handleChange} placeholder="עיר" />
        </div>
      </div>
      {/* תאריך */}
      <div style={{ marginTop: "2rem" }}>
        <label>תאריך</label>
        <input name="date" value={names.date} onChange={handleChange} placeholder="אור לכו תמוז תשפד" style={{ width: "100%" }} />
      </div>
    </form>
  );
};

export default NamesForm;
