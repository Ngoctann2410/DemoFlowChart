import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard.jsx';
import About from './pages/About.jsx';
import Analytics from './pages/Analytics.jsx';
import Comment from './pages/Comment.jsx';
import Product from './pages/Product.jsx';
// import DemoFlowchart from './components/DemoFlowchart';
import DnDFlow from './components/DnDFlow';
import Sidebar from './components/Sidebar';
import ValidationFlow from './components/ValidationFlow';
import ZoomTransition from './components/ZoomTransition';


const App = () => {
  return (
    <BrowserRouter>
      <Navbar>
        {/* <DemoFlowchart> */}
        
        <DnDFlow>
        <Sidebar>
          <ValidationFlow>
            <ZoomTransition>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <navbar>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/about" element={<About />} />
          <Route path="/comment" element={<Comment />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/product" element={<Product />} />
          </navbar>
        
        </Routes>
        </ZoomTransition>
        </ValidationFlow>
        </Sidebar>
        </DnDFlow>
        
        {/* </DemoFlowchart> */}
      </Navbar>
    </BrowserRouter>
  );
};

export default App;