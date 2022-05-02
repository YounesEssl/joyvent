import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import HomeScreen from './views/HomeScreen';
import EventList from './views/EventList';
import NavBar from './compenents/NavBar';

function App() {
  return (
    <body>
    <BrowserRouter>
    <NavBar /> 
    <Routes>
      <Route path="/" element={<HomeScreen />} />
      <Route path="/eventlist" element={<EventList />} />
    </Routes>
  </BrowserRouter>
  </body>
  );
}

export default App;
