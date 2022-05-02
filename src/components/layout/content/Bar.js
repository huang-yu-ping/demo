import ReactApexChart from "react-apexcharts";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

const ApexChart = () => {
  const { t } = useTranslation();
  const barStyle = {
    series: [
      {
        name: t("male"),
        data: [0, 0],
        color: "#7F95D1"
      },
      {
        name: t("female"),
        data: [0, 0],
        color: "#FF82A9"
      }
    ],
    options: {
      chart: {
        type: "bar",
        height: 350,
        width: "100%",
        toolbar: {
          show: true,
          tools: {
            download: false
          }
        }
      },
      plotOptions: {
        bar: {
          dataLabels: {
            position: "top" // top, center, bottom
          },
          horizontal: false,
          columnWidth: "38%",
          endingShape: "rounded",
          borderRadius: 10
        }
      },
      dataLabels: {
        enabled: true,
        formatter: function (val) {
          if (val === 0) {
            return "";
          }
          return val;
        },
        offsetY: -25,
        style: {
          fontSize: "14px",
          colors: ["#70000B"]
        }
      },
      stroke: {
        show: true,
        width: 2,
        colors: ["transparent"]
      },
      xaxis: {
        categories: [
          t("Common_living_household"),
          t("Independent_living_household")
        ]
      },
      yaxis: {
        min: 0,
        max: 1200000,
        tickAmount: 10
      },
      fill: {
        opacity: 1,
        colors: ["#7F95D1", "#FF82A9"]
      },
      tooltip: {
        y: {
          formatter: function (val) {
            return "$ " + val + " thousands";
          }
        }
      }
    }
  };
  const placeData = useSelector((state) => state.local);

  useEffect(() => {
    setData({
      ...barStyle,
      series: [
        {
          name: t("male"),
          data: [
            placeData.information.household_ordinary_m || 0,
            placeData.information.household_ordinary_f || 0
          ],
          color: "#7F95D1"
        },
        {
          name: t("female"),
          data: [
            placeData.information.household_single_m || 0,
            placeData.information.household_single_f || 0
          ],
          color: "#FF82A9"
        }
      ]
    });
  }, [placeData.place]);

  const [data, setData] = useState(barStyle);

  return (
    <div id="chart">
      <ReactApexChart
        options={data.options}
        series={data.series}
        type="bar"
        height={550}
      />
    </div>
  );
};

export default ApexChart;
