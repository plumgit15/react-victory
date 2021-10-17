import React from "react";
import { VictoryPie } from "victory";

const Sample4 = () => {
  return (
    <VictoryPie
      colorScale={["tomato", "orange", "gold"]}
      data={[
        { x: "サッカー", y: 35 },
        { x: "野球", y: 40 },
        { x: "テニス", y: 25 }
      ]}
    />
  );
};

export default Sample4;
