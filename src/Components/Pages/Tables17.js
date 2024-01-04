import { useEffect, useState } from "react";
import { Card, Button, Menu } from "@material-tailwind/react";
import MenuBar from "../MenuBar";

export default function Tables17() {
  const apiUrl = "https://www.nj-web.com/pubDB/CompetitiveHistory.json";
  const [data, setData] = useState([]);
  const fetchData = () => {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((actualData) => {
        setData(actualData.y2017);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App ">
      <div className="mx-auto max-w-screen-md pt-5 pb-7 pl-48">
        <MenuBar />
      </div>

      <Card className="h-full w-full overflow-scroll">
        <table className="table-auto border-collapse border-spacing-1 border border-slate-500 text-center">
          <caption className="text-2xl text-blue-gray-800 font-medium">
            Competitive History of 2017
          </caption>
          <thead>
            <tr>
              <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                Event
              </th>
              <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                Placement
              </th>
              <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                Competitors
              </th>
              <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                Conference
              </th>
              <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                Year
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => {
              const isLast = index === data.length - 1;
              const classes = isLast
                ? "p-4"
                : "p-4 border-b border-blue-gray-50";
              return (
                <tr key={index} className="even:bg-blue-gray-50/50">
                  <td className="p-4">{item.Event}</td>
                  <td className="p-4">{item.Placement}</td>
                  <td className="p-4">
                    {item.Competitors[0]}, {item.Competitors[1]},{" "}
                    {item.Competitors[2]}
                  </td>
                  <td className="p-4">{item.Conference}</td>
                  <td className="p-4">{item.Year}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </Card>
    </div>
  );
}

async function GetData23() {
  const apiUrl = "https://www.nj-web.com/pubDB/CompetitiveHistory.json";
  const response = await fetch(apiUrl);
  const data = await response.json();
  return data;
}
