import React, { useState } from "react";
import ReactTooltip from "react-tooltip";
import './styles.css';

import MapChart from "./MapChart";

export default function App() {
  const [content, setContent] = useState("");
  return (
    <div>
      <h1 data-tip="hover me">Hover me</h1>
      <h1 data-tip="hover me again">Hover me again</h1>
      <MapChart setTooltipContent={setContent} />
      <ReactTooltip>{content}</ReactTooltip>
    </div>
  );
}
