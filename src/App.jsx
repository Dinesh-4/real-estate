import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import './App.css'
import Companies from "./components/Companies/Companies";
import Residencies from "./components/Residencies/Residencies";
import Value from "./components/Value/Value";
import Conatact from "./components/Contact/Conatact";
import GetStarted from "./components/GetStarted/GetStarted";

function App() {
  return (
    <div className="App">
      <div>
        <div className="white-gradient"/>
        <Header />
        <Hero />
      </div>
      <Companies />
      <Residencies />
      <Value />
      <Conatact />
      <GetStarted />
    </div>
  );
}

export default App;
