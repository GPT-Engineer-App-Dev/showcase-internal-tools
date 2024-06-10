import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import UseCase1 from "./pages/UseCase1.jsx";
import UseCase2 from "./pages/UseCase2.jsx";
import UseCase3 from "./pages/UseCase3.jsx";
import Navbar from "./components/Navbar.jsx";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route exact path="/use-case-1" element={<UseCase1 />} />
        <Route exact path="/use-case-2" element={<UseCase2 />} />
        <Route exact path="/use-case-3" element={<UseCase3 />} />
      </Routes>
    </Router>
  );
}

export default App;