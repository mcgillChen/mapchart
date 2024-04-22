import React, { memo } from "react";
import {
  ComposableMap,
  ZoomableGroup,
  Geographies,
  Geography,
  Marker
} from "react-simple-maps";
import "./styles.css";

const geoUrl =
  "https://unpkg.com/world-atlas@1.1.4/world/50m.json";

const MapChart = ({ setTooltipContent }) => {
  return (
    <ComposableMap data-tip="">
      <ZoomableGroup center={[0, 0]}>
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map(geography => (
              <Geography key={geography.rsmKey} geography={geography} />
            ))
          }
        </Geographies>
        <Marker
          coordinates={[8.5, 47.3]}
          onMouseEnter={() => {
            setTooltipContent("Map tooltip");
          }}
          onMouseLeave={() => {
            setTooltipContent("");
          }}
        >
          <circle
            cx={2}
            cy={2}
            r={10}
            style={{
              stroke: "#FF5722",
              strokeWidth: 3,
              opacity: 0.9
            }}
          />
        </Marker>
      </ZoomableGroup>
    </ComposableMap>
  );
};

export default memo(MapChart);
