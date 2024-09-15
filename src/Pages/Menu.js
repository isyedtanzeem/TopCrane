import React, { useState } from "react";
import "./Form.css";
import jsPDF from "jspdf";

import Logo from "./logo.png"; // Import your logo image
import SupportLogo from "./support-logo.png";

import resix from "./Images/resix.png";
import Signature from "./Images/signature.png";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const Menu = () => {
  return (
    <div className="form-container">
      <h2 className="headStyle">TOP Crane Service</h2>
      
      <div className="button-container">
        <Link to="/BcsQuotation" className="bcsbutton">
          Quotation
        </Link>
        <Link to="/BcsInvoice" className="bcsbutton">
          Invoice
        </Link>
      </div>
    </div>
  );
};

export default Menu;
