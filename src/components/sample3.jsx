import React from "react";
import { VictoryChart, VictoryLine } from "victory";

const Sample3 = () => {
  return (
    <VictoryChart>
      <VictoryLine
        style={{
          data: { stroke: "#3ab60b" },
          parent: { border: "1px solid #ccc" }
        }}
        data={[
          { x: 1, y: 2 },
          { x: 2, y: 1 },
          { x: 3, y: 5 },
          { x: 4, y: 3 },
          { x: 5, y: 8 }
        ]}
      />
    </VictoryChart>
  );
};

export default Sample3;
