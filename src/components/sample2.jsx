import React from "react";
import { VictoryChart, VictoryGroup, VictoryBar } from "victory";

const Sample2 = () => {
  return (
    <VictoryChart>
      <VictoryGroup offset={20} colorScale={"qualitative"}>
        <VictoryBar
          data={[
            { x: 1, y: 1 },
            { x: 2, y: 2 },
            { x: 3, y: 5 }
          ]}
        />
        <VictoryBar
          data={[
            { x: 1, y: 2 },
            { x: 2, y: 1 },
            { x: 3, y: 7 }
          ]}
        />
        <VictoryBar
          data={[
            { x: 1, y: 3 },
            { x: 2, y: 4 },
            { x: 3, y: 9 }
          ]}
        />
      </VictoryGroup>
    </VictoryChart>
  );
};

export default Sample2;
