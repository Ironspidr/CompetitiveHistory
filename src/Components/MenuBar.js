import { Breadcrumbs } from "@material-tailwind/react";

export default function MenuBar() {
  return (
    <div>
      <Breadcrumbs separator=" | ">
        <a href="/CompetitiveHistory/">2023</a>
        <a href="/CompetitiveHistory/2022">2022</a>
        <a href="/CompetitiveHistory/2021">2021</a>
        <a href="/CompetitiveHistory/2020">2020</a>
        <a href="/CompetitiveHistory/2019">2019</a>
        <a href="/CompetitiveHistory/2018">2018</a>
      </Breadcrumbs>
    </div>
  );
}
