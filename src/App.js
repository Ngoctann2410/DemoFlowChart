import React from 'react';
import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard.jsx';
import About from './pages/About.jsx';
import Analytics from './pages/Analytics.jsx';
import Comment from './pages/Comment.jsx';
import Product from './pages/Product.jsx';
import DemoFlowchart from './components/DemoFlowchart';
import DnDFlow from './components/DnDFlow';
import Sidebar from './components/Sidebar';
import ValidationFlow from './components/ValidationFlow';
import ZoomTransition from './components/ZoomTransition';

// import DynamicFieldSet from './Form/DynamicFieldSet.jsx';
// import DynamicFieldSet from './Form/DynamicFieldSet';
// import TableAdd from './Form/TableAdd';



const App = () => {
  return (
    <BrowserRouter>
      <Navbar>
        <DemoFlowchart>
      <Routes>
        
        <Route path="/" element={<Dashboard />} />
        
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/about" element={<About />} />
        <Route path="/comment" element={<Comment />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/product"  element={<Product />} />
        
      
      </Routes>
        <DnDFlow>
        
        <Sidebar>
      
      
        
        

        
        
        {/* <TableAdd> */}
        {/* <DynamicFieldSet> */}
        
          {/* <ValidationFlow>
            <ZoomTransition>
              
        
       
        </ZoomTransition>
        </ValidationFlow> */}
        {/* </DynamicFieldSet> */}
        {/* </DynamicFieldSet> */}
        {/* </TableAdd> */}
        </Sidebar>
        
        </DnDFlow>
        
        </DemoFlowchart>
      </Navbar>
    </BrowserRouter>
  );
};

export default App;