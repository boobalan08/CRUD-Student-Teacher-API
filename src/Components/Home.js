import React from "react";
import NavBar from "./NavBar";
import ProgressCard from "./CardsList/ProgressCard";
import Cards from "./CardsList/Cards";
import { PartnerCard } from "./CardsList/PartnerCard";

const Home = () => {
  return (
    <div>
      <NavBar />
      <ProgressCard />
      <hr/>
      <PartnerCard />
      <hr/>
      <Cards />
    </div>
  );
};

export default Home;
