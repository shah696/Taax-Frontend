import HeroFive from "../../public/components/HeroFive";
import HeroFour from "../../public/components/HeroFour";
import HeroOne from "../../public/components/HeroOne";
import HeroSix from "../../public/components/HeroSix";
import HeroThree from "../../public/components/HeroThree";
import HeroTwo from "../../public/components/HeroTwo";
import Navbar from "../../public/components/Navebar";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroOne />
      <HeroTwo />
      <HeroThree />
      <HeroFour/>
      <HeroFive/>
      <HeroSix/>

    </>
  );
}
