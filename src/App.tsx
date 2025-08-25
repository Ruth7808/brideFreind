// App.tsx
import React, { useState } from "react";
import NamesForm from "./components/NamesForm";
import Preview from "./components/Preview";

export interface NamesData {
  groomName: string;
  groomFather: string;
  groomYeshiva: string;
  groomCity: string;
  brideName: string;
  brideFather: string;
  brideSeminar: string;
  brideCity: string;
  date: string;
}

const App: React.FC = () => {
  const [names, setNames] = useState<NamesData>({
    groomName: "",
    groomFather: "",
    groomYeshiva: "",
    groomCity: "",
    brideName: "",
    brideFather: "",
    brideSeminar: "",
    brideCity: "",
    date: "",
  });

  return (
    <div style={{ padding: "2rem", fontFamily: "Arial, sans-serif",direction:'rtl' }}>
      <h1>טופס שלט מאורסים</h1>
      <NamesForm names={names} setNames={setNames} />
      <Preview names={names} />
    </div>
  );
};

export default App;
