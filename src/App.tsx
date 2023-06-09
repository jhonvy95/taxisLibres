import { Hero, Navbar } from "./components";
import HomeAbout from "./components/Home/homeAbout/HomeAbout";
import HomeAwards from "./components/Home/homeAwards/HomeAwards";
import HomeForm from "./components/Home/homeForm/HomeForm";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <HomeAbout />
      <HomeAwards />
      <HomeForm />
    </>
  );
}

export default App;
