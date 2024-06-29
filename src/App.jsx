import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from './components/NavBar/NavBar'
import  "./App.css";
import Home from './pages/Home/Home'
import Gallery from './pages/Gallery/Gallery'
import CodeSnippet from './pages/CodeSnippet/CodeSnippet'

function App() {

  return (

    <Router>
      <NavBar />
      <div className='container'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/code-snippet" element={<CodeSnippet />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
