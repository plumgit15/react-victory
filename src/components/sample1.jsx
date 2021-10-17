import React from "react";
import { VictoryBar } from "victory";

const Sample1 = () => {
  return (
    <VictoryBar
      data={[
        { x: 1, y: 2, label: "A" },
        { x: 2, y: 4, label: "B" },
        { x: 3, y: 7, label: "C" },
        { x: 4, y: 5, label: "D" },
        { x: 5, y: 5, label: "E" }
      ]}
      events={[
        {
          target: "data",
          eventHandlers: {
            onClick: () => {
              return [
                {
                  target: "labels",
                  mutation: (props) => {
                    return props.text === "クリック"
                      ? null
                      : { text: "クリック" };
                  }
                }
              ];
            }
          }
        }
      ]}
    />
  );
};

export default Sample1;
