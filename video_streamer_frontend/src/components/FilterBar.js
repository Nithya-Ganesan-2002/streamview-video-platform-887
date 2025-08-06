import React, { useState } from "react";
import "./FilterBar.css";

// PUBLIC_INTERFACE
function FilterBar() {
  /**
   * Video feed filter bar at top of feed area, showing scrollable category pills.
   */
  const FILTERS = [
    "Tous", "Deep House", "Dua Lipa", "Histoire", "En direct",
    "Rock français", "Jazz", "Comédie à sketches",
    "Comédies", "Ballon de football", "Jeux vidéo"
  ];
  const [active, setActive] = useState(0);
  return (
    <nav className="filter-bar">
      <div className="filter-bar-inner">
        {FILTERS.map((filter, idx) => (
          <button
            className={"filter-pill" + (active === idx ? " active" : "")}
            key={filter}
            onClick={() => setActive(idx)}
          >
            {filter}
          </button>
        ))}
      </div>
    </nav>
  );
}
export default FilterBar;
