import { Circle, Popup } from "react-leaflet";
import numeral from "numeral";
import React from "react";

const casesTypeColors = {
  cases: {
    hex: "#808080",
    rgb: "rgb(204, 16, 52)",
    half_op: "rgba(204, 16, 52, 0.5)",
    multiplier: 100,
  },
  recovered: {
    hex:"#808080",
    rgb: "rgb(125, 215, 29)",
    half_op: "rgba(125, 215, 29, 0.5)",
    multiplier: 200,
  },
  deaths: {
    hex: "#808080",
    rgb: "rgb(251, 68, 67)",
    half_op: "rgba(251, 68, 67, 0.5)",  
    multiplier: 300,
  },    
};

export const sortData = (data) => {
  const sortedData = [...data];
  return sortedData.sort((a, b) => (a.cases > b.cases ? -1 : 1)
)};


export const prettyPrintStat = (stat) => stat ? `+${numeral(stat).format("0,0")}` : "+0"

export const showDataOnMap = (data, casesType = "cases") => (
  data.map((country) => ( 
    <Circle
      center={[country.countryInfo.lat, country.countryInfo.long]}
      color={casesTypeColors[casesType].hex}  
      fillColor={casesTypeColors[casesType].hex}
      fillOpacity={0.4}
      radius={
        Math.sqrt(country[casesType]) * casesTypeColors[casesType].multiplier
      }
    >
    <Popup>
     <div className="info-container">
        <div className="info-flag" style={{backgroundImage:`url(${country.countryInfo.flag})` }}>
        </div>
        <div className="info-name">{country.country}</div>
        <div className="info-confirmed">
          Cases: {numeral(country.cases).format("0,0")}
        </div>
        <div className="info-recovered">
          Recoverd: {numeral(country.recovered).format("0,0")}
        </div>
        <div className="info-deaths">
          Deaths: {numeral(country.deaths).format("0,0")}
        </div>
     </div>
    </Popup>
    </Circle>
  ))
)