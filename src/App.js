import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Game from "./Components/Game";
import Menu from "./Menu";

function App() {
  // const [meteors, SetMeteors] = useState([]);
  // useEffect(() => {
  //   setInterval(() => {
  //     SetMeteors((prevList) => [...prevList, generateMeteors()]);
  //   }, 2000);
  // }, [meteors]);

  return (
    <div className="App position-relative">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Menu />} />
          <Route path="/game" element={<Game />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
