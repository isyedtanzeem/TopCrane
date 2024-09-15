import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink , Link} from 'react-router-dom';
import Menu from './Pages/Menu';

import './App.css';


import BcsQuotation from './Pages/BcsQuotation';
import BcsInvoice from './Pages/BcsInvoice';



class App extends Component {
  render() {
    return (
      <div className="margin-top">
        <Router>
       
            <Routes basename="/Quotationmaker">
             
              <Route path="/" element={<Menu />} />
        
             
              <Route exact path="/BcsQuotation" element={<BcsQuotation />} />
              <Route exact path="/BcsInvoice" element={<BcsInvoice />} />
            </Routes>
      
        </Router>
      </div>
    );
  }
}

export default App;
