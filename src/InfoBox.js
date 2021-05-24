import React from "react";

import "./InfoBox.css";

import { Card, CardContent, Typography } from "@material-ui/core";

const InfoBox = ({ title, active, isRed, cases, total, ...props }) => {
  return (
    <Card
      onClick={props.onClick}
      className={`infoBox ${active && "infoBox--selected"} ${
        isRed && "infoBox--red"
      }`}
    >
      <CardContent>
        {/* Title */}
        <Typography className="infoBox__title" color="textSecondary">
          {title}
        </Typography>

        {/* No. of cases */}
        <h2 className={`infoBox__cases ${!isRed && "infoBox__cases--green"}`}>
          {cases} /day
        </h2>

        {/* Total cases */}
        <Typography className="infoBox__total" color="textSecondary">
          {total} Total
        </Typography>
      </CardContent>
    </Card>
  );
};

export default InfoBox;
