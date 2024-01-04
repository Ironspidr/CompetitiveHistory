import { Breadcrumbs } from "@material-tailwind/react";

export default function MenuBar() {
  return (
    <div>
      <Breadcrumbs separator=" | ">
        <a href="/">2023</a>
        <a href="/2022">2022</a>
        <a href="/2021">2021</a>
        <a href="/2020">2020</a>
        <a href="/2019">2019</a>
        <a href="/2018">2018</a>
        <a href="/2017">2017</a>
      </Breadcrumbs>
    </div>
  );
}
