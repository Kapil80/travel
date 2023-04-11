import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Homepage/Home';
//import Search from './Search';
//import NotFound from './NotFound';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route exact path="/" component={Home} />
          {/* <Route path="/search" component={Search} />
          <Route component={NotFound} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
