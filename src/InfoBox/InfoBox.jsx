import { Card, CardContent, Typography } from "@mui/material";
import React from "react";
import "./info.css";

const InfoBox = ({ title, cases, isRed, total, active, ...props }) => {
  return (
    <Card 
    onClick={props.onClick}
    className={`infoBox && ${active && 'infoBox--selected'} ${isRed && 'infoBox--red'}`}
    >
      <CardContent>
        <Typography className="infoBox__title" color="primary">
          {title}
        </Typography>
        <h2 className={`infoBox__cases  && ${!isRed && "infoBox__cases--green"}`}>{cases}</h2>
        <Typography className="infoBox__total" color="primary">
          {total} Total
        </Typography>
      </CardContent>
    </Card>
  );
};

export default InfoBox;
