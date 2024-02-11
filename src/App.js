import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MeteorShower from "./Components/MeteorShower";
import Shuttle from "./Components/Shuttle";

function App() {
  // const [meteors, SetMeteors] = useState([]);
  // useEffect(() => {
  //   setInterval(() => {
  //     SetMeteors((prevList) => [...prevList, generateMeteors()]);
  //   }, 2000);
  // }, [meteors]);

  return (
    <div className="App position-relative">
      <Shuttle />
      <MeteorShower />
    </div>
  );
}

export default App;
