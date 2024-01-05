import Table23 from "./Pages/Tables23";
import Table22 from "./Pages/Tables22";
import Table21 from "./Pages/Tables21";
import Table20 from "./Pages/Tables20";
import Table19 from "./Pages/Tables19";
import Table18 from "./Pages/Tables18";
import Table17 from "./Pages/Tables17";

import { Breadcrumbs } from "@material-tailwind/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function DisplayData(props) {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/CompetitiveHistory/" element={<Table23 />} />
          <Route path="/CompetitiveHistory/2023" element={<Table23 />} />
          <Route path="/CompetitiveHistory/2022" element={<Table22 />} />
          <Route path="/CompetitiveHistory/2021" element={<Table21 />} />
          <Route path="/CompetitiveHistory/2020" element={<Table20 />} />
          <Route path="/CompetitiveHistory/2019" element={<Table19 />} />
          <Route path="/CompetitiveHistory/2018" element={<Table18 />} />
        </Routes>
      </BrowserRouter>
      <Breadcrumbs separator=" | "></Breadcrumbs>
    </div>
  );
}
