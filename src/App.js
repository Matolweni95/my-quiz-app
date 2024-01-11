import './App.css';
import Home from './components/js/Home';
import Landing from './components/js/Landing';
import Navbar from './components/js/Navbar';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Quiz from './components/js/Quiz';
import JsQuiz from './components/js/JsQuiz';
import CssQuiz from './components/js/CssQuiz';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/html" exact element={<Quiz />} />
          <Route path="/js" exact element={<JsQuiz />} />
          <Route path="/css" exact element={<CssQuiz />} />
        </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
