import React, { useState } from "react";
import NamesForm from "./components/NamesForm";
import WeddingSvg from "./components/WeddingSvg";
import type { NamesData } from "./models";

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
    <div style={{ padding: "2rem", fontFamily: "Arial, sans-serif", direction: "rtl" }}>
      <h1>טופס שלט מאורסים</h1>
      <NamesForm names={names} setNames={setNames} />
      <WeddingSvg
        names={names}
      />
    </div>
  );
};

export default App;
