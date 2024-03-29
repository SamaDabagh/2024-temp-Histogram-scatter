import React from "react";
import { ResponsiveScatterPlotCanvas } from "@nivo/scatterplot";
import { BasicTooltip } from "@nivo/tooltip";
import "./styles.css";
import { data } from "./data";

export default function App() {
  const colors = ["#9DA880"];
  console.log("data", data);
  return (
    <div
      style={{
        width: "100%",
        height: "80vh",
      }}
    >
      <ResponsiveScatterPlotCanvas
        colors={colors}
        data={[
          {
            id: "Tozihe delkhah",
            data: data,
          },
        ]}
        renderNode={(ctx, node) => {
          // console.log(ctx, node);

          ctx.beginPath();
          ctx.arc(node.x, node.y, node.size / 2, 0, 2 * Math.PI);
          ctx.fillStyle = "#9DA880";
          ctx.fill();
          ctx.strokeStyle = "red";
          ctx.stroke();
        }}
        margin={{ top: 60, right: 60, bottom: 70, left: 90 }}
        gridXValues={[0]}
        gridYValues={[0]}
        xScale={{ type: "linear", min: 0, max: "auto" }}
        xFormat=" >-.2f"
        yScale={{ type: "linear", min: 0, max: "auto" }}
        yFormat=">-.2f"
        nodeSize={12}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          orient: "bottom",
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "Diameter",
          legendPosition: "middle",
          legendOffset: 46,
        }}
        axisLeft={{
          orient: "left",
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "Total Discharge (lit/s)",
          legendPosition: "middle",
          legendOffset: -60,
        }}
        // tooltip={() => (
        //   <BasicTooltip id="Pipe" value="Data" color="red" enableChip />
        // )}
        legends={[
          {
            dataFrom: "keys",
            anchor: "top-left",
            direction: "row",
            justify: false,
            translateX: 0,
            translateY: -30,
            itemsSpacing: 2,
            itemWidth: 130,
            itemHeight: 0,
            itemDirection: "left-to-right",
            itemOpacity: 0.85,
            symbolSize: 12,
          },
        ]}
      />
    </div>
  );
}
