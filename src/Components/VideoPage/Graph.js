import React, { Component } from "react";
import { Line, Bar } from "react-chartjs-2";

class Chart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: {
        labels: [
          "jan",
          "feb",
          "mar",
          "apr",
          "may",
          "jun",
          "jul",
          "aug",
          "sep",
          "oct",
          "nov",
          "dec"
        ],
        datasets: [
          {
            label: "montly video update 2018",
            data: [2, 3, 1, 3, 0, 2, 1, 2, 2, 0, 0, 1],
            backgroundColor: "rgb(145, 23, 14)"
          },
          {
            label: "montly video update 2017",
            data: [2, 3, 0, 4, 0, 2, 1, 2, 2, 1, 4, 1],
            backgroundColor: "rgb(29, 13, 112)"
          }
        ]
      }
    };
  }

  render() {
    return <Bar data={this.state.chartData} options={{}} />;
  }
}
export default Chart;
