// import CustomButton from "./button";
// import Home from "./home";
// import Clock from "./clock";
// import LandingPage from "./landingPage";
// import { LandingData } from "./dummy";
// import LogicalAnd from "./LogicalAnd";
// import Contact from "./contact";
// import LoginControl from "./LoginControl";
// import { youTubeData } from "./dummy";
// import NumberList from "./NumberList";
// import Blog from "./Blog";
// import NameForm from "./NameForm";
// import Reservation from "./Reservation";
// import Calculator from "./TemperatureCalculator/Calculator";
// import CodeSplitting from "./codeSplitting/CodeSplitting";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ContactUs from "./menu/contactUs";
import AboutUs from "./menu/aboutUs";
import Menu from "./menu/menu";
import ButtonClick from "./hooks/buttonClick";

function App() {
  // const messages = ["React", "Re: React", "Re:Re: React"];
  // const handleClick = () => {
  //   console.log("clicked");
  // };
  // const handleFight = () => {
  //   console.log("fight");
  // };
  // const handleScroll = () => {
  //   console.log("scroll");
  // };

  // const numbers = [1, 2, 3, 4, 5];

  // const posts = [
  //   { id: 1, title: "Hello World", content: "Welcome to learning React!" },
  //   {
  //     id: 2,
  //     title: "Installation",
  //     content: "You can install React from npm.",
  //   },
  // ];

  return (
    <div className="App">
      {/* <NumberList numbers={numbers} /> */}
      {/* <Blog posts={posts} /> */}
      {/* <NameForm /> */}
      {/* <Reservation /> */}
      {/* <Calculator /> */}
      {/* <CodeSplitting /> */}
      <Router>
        <Routes>
          <Route path="/" element={<Menu />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/button" element={<ButtonClick />} />
        </Routes>
      </Router>

      {/* {youTubeData.map((data) => {
        return (
          <div key={data.id}>
            <h6>{data.title}</h6>
            <img src={data.image} alt="youtube image" />
          </div>
        );
      })} */}
      {/* {LandingData.map((data) => {
        return (
          <LandingPage
            name={data.name}
            address={data.address}
            colz={data.colz}
          />
        );
      })} */}

      {/* <LandingPage name="John" address="banepa" colz="st xavier" />
      <LandingPage name="Marry" address="dhk" colz="nist" />
      <LandingPage name="Doe" address="panauti" colz="kavre" /> */}

      {/* <Home balance={20000} sender="godfather" /> */}
      {/* <CustomButton name="click me" onClick={handleClick} />
      <CustomButton name="fight me" onClick={handleFight} />
      <CustomButton name="scroll" onClick={handleScroll} />  */}
      {/* <Clock /> */}
      {/* <Contact /> */}
      {/* <LoginControl /> */}
      {/* <LogicalAnd unreadMessages={messages} /> */}
    </div>
  );
}

export default App;

// 1. firstName
// 2. lastName
// 3. contact
// 4. address
// 5. email
// 6. college
// 7. file
