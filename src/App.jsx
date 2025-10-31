import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Waitlist from "./pages/Waitlist";

function App() {
  return (
    
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage/>} />
          <Route path="/waitlist" element={<Waitlist/>} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
