import { useState } from "react";

function App() {
  const tunings = {
    Standard: ["E", "A", "D", "G", "B", "E"],
    DropD: ["D", "A", "D", "G", "B", "E"],
    OpenG: ["D", "G", "D", "G", "B", "D"],
  };

  const [selectedTuning, setSelectedTuning] = useState("Standard");

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Guitar Tuning Selector</h1>
      <select
        value={selectedTuning}
        onChange={(e) => setSelectedTuning(e.target.value)}
      >
        {Object.keys(tunings).map((tuning) => (
          <option key={tuning} value={tuning}>
            {tuning}
          </option>
        ))}
      </select>
      <h2>Notes:</h2>
      <p>{tunings[selectedTuning].join(" - ")}</p>
    </div>
  );
}

export default App;
