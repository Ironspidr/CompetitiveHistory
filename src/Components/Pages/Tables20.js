import { useEffect, useState } from "react";
import { Card, Button } from "@material-tailwind/react";

export default function Table23(props) {
  const apiUrl = "https://www.nj-web.com/pubDB/CompetitiveHistory.json";
  const [data, setData] = useState([]);
  const fetchData = () => {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((actualData) => {
        setData(actualData.y2020);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="App">
      <form>
        <select name="year">
          <option value="2023" selected>
            2023
          </option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
          <option value="2018">2018</option>
          <option value="2017">2017</option>
        </select>
        <select name="conf">
          <option value="ISLC">ISLC</option>
          <option value="SLC">SLC</option>
          <option value="NLC">NLC</option>*
        </select>
        <button type="submit">Submit</button>
      </form>

      <Card className="h-full w-full overflow-scroll">
        <table className="table-auto">
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
