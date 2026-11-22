import Image from "next/image";
import Navbar from "./pages/Navbar";
import Header from "./pages/Header";
import BG from "../images/globe.png";
import Seekers from "./pages/Seekers";
import SmartJob from "./pages/SmartJob";
import Feature from "./pages/Feature";
import Pricing from "./pages/Pricing";

export default function Home() {
  return (
   <div>
     <header
      style={{ backgroundImage: `url(${BG.src})` }}
      className="bg-cover bg-center bg-no-repeat"
    >
      <Navbar></Navbar>
      <Header></Header>
      <Seekers></Seekers>
    </header>

    <SmartJob></SmartJob>
    <Feature></Feature>
    <Pricing></Pricing>
   </div>
  );
}
