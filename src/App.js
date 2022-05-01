import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import HomeScreen from './views/HomeScreen';
import NavBar from './compenents/NavBar';

function App() {
  return (
    <body>
    <BrowserRouter>
    <NavBar width="23"/> 
    <Routes>
      <Route path="/" element={<HomeScreen />} />
    </Routes>
  </BrowserRouter>
  </body>
  );
}

export default App;
