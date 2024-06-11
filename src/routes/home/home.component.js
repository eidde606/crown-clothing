import React from "react";
import { Outlet } from "react-router-dom";
import Categories from "../../components/categories-data";
import Directory from "../../components/directory/directory.component";

const Home = () => {
  return (
    <div>
      <Directory Categories={Categories} />
      <Outlet />
    </div>
  );
};

export default Home;
