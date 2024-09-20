import React, { useState } from "react";
import "./Common.css";
import { ToWords } from 'to-words';
import jsPDF from "jspdf";
import BcsWaterMark from "./Images/Bcswatermark.png"; // Import your logo image
import Head from "./Images/Head.png"; // Import your logo image
import Footer from "./Images/InvoiceFoot.png"; // Import your logo image
// import waterMark from "./Images/hmswatermark.png"; // Import your logo image

import callIcon from "./Images/callicon.png"; // Import your logo image
import Signature from "./Images/signature.png";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

let BcsQuotation = () => {
  let [formData, setFormData] = useState({
    no1Rate: "",
    no2Rate: "",
    no3Rate: "",
    no4Rate: "",
    no5Rate: "",
    no6Rate: "",
    no7Rate: "",
    no8Rate: "",
    no9Rate: "",
    no10Rate: "",
    no11Rate: "",
    no12Rate: "",
    no13Rate: "",
    no14Rate: "",
    no15Rate: "",
    no16Rate: "",
    no17Rate: "",
    no18Rate: "",
    no19Rate: "",
    no20Rate: "",

    no1Item: "",
    no2Item: "",
    no3Item: "",
    no4Item: "",
    no5Item: "",
    no6Item: "",
    no7Item: "",
    no8Item: "",
    no9Item: "",
    no10Item: "",
    no11Item: "",
    no12Item: "",
    no13Item: "",
    no14Item: "",
    no15Item: "",
    no16Item: "",
    no17Item: "",
    no18Item: "",
    no19Item: "",
    no20Item: "",

   
    amount1: "",
    amount2: "",
    name: "",
    mobile: "",
    address: "",
    gst: "",
    advanceAmount: ""
   
  });

  let handleInputChange = (event) => {
    let { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  let dateForCount = new Date();

  let handleClear = () => {
    setFormData({
      no1Rate: "",
      no2Rate: "",
      no3Rate: "",
      no4Rate: "",
      no5Rate: "",
      no6Rate: "",
      no7Rate: "",
      no8Rate: "",
      no9Rate: "",
      no10Rate: "",
      no11Rate: "",
      no12Rate: "",
      no13Rate: "",
      no14Rate: "",
      no15Rate: "",
      no16Rate: "",
      no17Rate: "",
      no18Rate: "",
      no19Rate: "",
      no20Rate: "",

      no1Item: "",
      no2Item: "",
      no3Item: "",
      no4Item: "",
      no5Item: "",
      no6Item: "",
      no7Item: "",
      no8Item: "",
      no9Item: "",
      no10Item: "",
      no11Item: "",
      no12Item: "",
      no13Item: "",
      no14Item: "",
      no15Item: "",
      no16Item: "",
      no17Item: "",
      no18Item: "",
      no19Item: "",
      no20Item: "",

    
      name: "",
      mobile: "",
      address: "",
      gst: "",
   
    });
  };

  let toWords = new ToWords({
    localeCode: 'en-IN',
    converterOptions: {
      currency: true,
      ignoreDecimal: false,
      ignoreZeroCurrency: false,
      doNotAddOnly: false,
      currencyOptions: { // can be used to override defaults for the selected locale
        name: 'Rupee',
        plural: 'Rupees',
        symbol: '₹',
        fractionalUnit: {
          name: 'Paisa',
          plural: 'Paise',
          symbol: '',
        },
      }
    }
  });



  
 let day = dateForCount.getDate();

  let count = day + 166;

  let handleSubmit = (event) => {
    count = count + 1;
    // handleClear()
    console.log(count, "count");
    event.preventDefault();

    generatePDF(count);
  };

  let generatePDF = (count) => {
    let pdf = new jsPDF();
    pdf.setFont("helvetica", "normal");

    pdf.setFontSize(55);

    pdf.addImage(Head, "PNG", 12, 8,185,30);
    pdf.addImage(Footer, "PNG", 12, 240,185,30);
   

    pdf.addImage(BcsWaterMark, "PNG", 50, 90, 110, 90);
    pdf.setFont(undefined, "bold");
    pdf.setFontSize(40);
    pdf.setTextColor(46,57,150);
    // pdf.text("H.M Sanitation", 44, 20);
    pdf.setFont(undefined, "none");
    pdf.setTextColor(0, 0, 0);
    pdf.setFontSize(14);

    // pdf.setFontSize(9);
    // pdf.text(13, 30, "No. 320,10th cross NGR Layout, Masjid Road,Roopena Agrahara, Bangalore - 560068");
    // pdf.text(
    //   13,
    //   34,
    //   "E-Mail :blrcraneservice@gmail.com             Web : www.bangalorecraneservice.com"
    // );
    // pdf.setFontSize(15);
    // pdf.setFont(undefined, "bold");

    // pdf.text(160, 18, "Quotation");



    // Add a filled rectangular box to the PDF


    // Set text color to white
  
    pdf.setTextColor(0, 0, 0);
    pdf.setFontSize(16);
    pdf.setFont(undefined, "none");
    // pdf.addImage(callIcon, "PNG", 144, 24, 13, 13);

    // pdf.text(158, 30, "Huzaifa ");
    // pdf.text(158, 36, "7204021703");
    pdf.setFontSize(10);
    //input
    pdf.rect(12, 41, 95, 7);
    pdf.text(`NAME: ${formData.name}`, 13, 45, { align: "left" });
    pdf.rect(12, 48, 95, 7);
    pdf.text(`NUMBER: ${formData.mobile}`, 13, 52.5, { align: "left" });
    pdf.rect(12, 55, 185, 7);
    pdf.text(`ADDRESS: ${formData.address}`, 13, 59.5, { align: "left" });

    let currentDate = new Date().toLocaleDateString();
    var d = new Date(); 
    var t = new Date().getTime();
    var randomnum = Math.floor(Math.random() * (100 -  50000)) + 100;
    randomnum = d.getFullYear() + (d.getMonth()+1) + (d.getDate()) + randomnum; 
    randomnum = randomnum + t;
    randomnum = randomnum - 1699000090000 ;
    console.log(randomnum);
    pdf.rect(107, 41, 90, 7);
    pdf.text(`DATE: ${currentDate}`, 108, 45.4);
    pdf.text(`QUOTATION NO: UJR${randomnum}`, 108, 52.5, { align: "left" });
    let revDom = formData.dom; // Assume this is the date from input in 'YYYY-MM-DD' format
let reversedDom = revDom.split('-').reverse().join('-');
    pdf.text(`DATE OF MOVING: ${reversedDom}`, 108, 59.5, { align: "left" });

    pdf.rect(107, 48, 90, 7);
    pdf.rect(107, 55, 90, 7);

    //end of first layer

    pdf.setFontSize(12);
    pdf.setFillColor(0,0,0);
    pdf.rect(12, 66, 185, 7, "F");

    pdf.setFont(undefined, "bold");
    pdf.setTextColor(255, 255, 255);
    pdf.text(`Sl No`, 14, 71);
    pdf.text(`Particulars`, 56, 71);
 
    pdf.text(`Amount`, 168, 71);

    pdf.setTextColor(0, 0, 0);
    pdf.setFont(undefined, "none");

    pdf.setDrawColor(0, 0, 0);
 
    pdf.rect(12, 73, 14, 7);
    pdf.rect(26, 73, 128, 7);

    pdf.rect(154, 73, 43, 7);
    pdf.text(`01`, 17, 78);
    pdf.text(`${formData.no1Item}`, 30, 78,);
 
   
    pdf.text(`${formData.no1Rate}`, 182, 78,'right');

    //1
    pdf.rect(12, 66, 14, 7);
    pdf.rect(26, 66, 128, 7);

    pdf.rect(154, 66, 43, 7);
    //2
    pdf.rect(12, 80, 14, 7);
    pdf.rect(26, 80, 128, 7);
 
    pdf.rect(154, 80, 43, 7);
    pdf.text(`02`, 17, 85);
    pdf.text(`${formData.no2Item}`, 30, 85,);
   
    pdf.text(`${formData.no2Rate}`, 182, 85,'right');
    //3
    pdf.rect(12, 87, 14, 7);
    pdf.rect(26, 87, 128, 7);

    pdf.rect(154, 87, 43, 7);
    pdf.text(`03`, 17, 92);
    pdf.text(`${formData.no3Item}`, 30, 92,);
   
    pdf.text(`${formData.no3Rate}`, 182, 92,'right');

    //4
    pdf.rect(12, 87, 14, 7);
    pdf.rect(26, 87, 128, 7);

    pdf.rect(154, 87, 43, 7);
    pdf.text(`04`, 17, 99);
    pdf.text(`${formData.no4Item}`, 30, 99);
 
    pdf.text(`${formData.no4Rate}`, 182, 99,'right');
    //5
    pdf.rect(12, 87, 14, 7);
    pdf.rect(26, 87, 128, 7);

    pdf.rect(154, 87, 43, 7);
    pdf.text(`05`, 17, 106);
    pdf.text(`${formData.no5Item}`, 30, 106);
  

    pdf.text(`${formData.no5Rate}`, 182, 106,'right');
    //6
    pdf.rect(12, 94, 14, 7);
    pdf.rect(26, 94, 128, 7);

    pdf.rect(154, 94, 43, 7);
    pdf.text(`06`, 17, 113);
    pdf.text(`${formData.no6Item}`, 30, 113);
    

    pdf.text(`${formData.no6Rate}`, 182, 113,'right');
    //7
    pdf.rect(12, 101, 14, 7);
    pdf.rect(26, 101, 128, 7);
 
    pdf.rect(154, 101, 43, 7);
    pdf.text(`07`, 17, 120);
    pdf.text(`${formData.no7Item}`, 30, 120);
  
    pdf.text(`${formData.no7Rate}`, 182, 120,'right');
    //8
    pdf.rect(12, 108, 14, 7);
    pdf.rect(26, 108, 128, 7);

    pdf.rect(154, 108, 43, 7);
    pdf.text(`08`, 17, 127);
    pdf.text(`${formData.no8Item}`, 30, 127);
  
    pdf.text(`${formData.no8Rate}`, 182, 127,'right');
    //9
    pdf.rect(12, 115, 14, 7);
    pdf.rect(26, 115, 128, 7);

    pdf.rect(154, 115, 43, 7);
    pdf.text(`09`, 17, 134);
    pdf.text(`${formData.no9Item}`, 30, 134);
   
    pdf.text(`${formData.no9Rate}`, 182, 134,'right');
    //10
    pdf.rect(12, 122, 14, 7);
    pdf.rect(26, 122, 128, 7);
   
    pdf.rect(154, 122, 43, 7);
    pdf.text(`10`, 17, 141);
    pdf.text(`${formData.no10Item}`, 30, 141);
  
    pdf.text(`${formData.no10Rate}`, 182, 141,'right');
    //11
    pdf.rect(12, 129, 14, 7);
    pdf.rect(26, 129, 128, 7);
 
    pdf.rect(154, 129, 43, 7);
    pdf.text(`11`, 17, 148);
    pdf.text(`${formData.no11Item}`, 30, 148);
    
    pdf.text(`${formData.no11Rate}`, 182, 148,'right');
    //12
    pdf.rect(12, 136, 14, 7);
    pdf.rect(26, 136, 128, 7);
   
    pdf.rect(154, 136, 43, 7);
    pdf.text(`12`, 17, 155);
    pdf.text(`${formData.no12Item}`, 30, 155);
   
    pdf.text(`${formData.no12Rate}`, 182, 155,'right');
    //13
    pdf.rect(12, 143, 14, 7);
    pdf.rect(26, 143, 128, 7);
  
    pdf.rect(154, 143, 43, 7);
    pdf.text(`13`, 17, 162);
    pdf.text(`${formData.no13Item}`, 30, 162);
  
    pdf.text(`${formData.no13Rate}`, 182, 162,'right');
    //14
    pdf.rect(12, 150, 14, 7);
    pdf.rect(26, 150, 128, 7);
   
    pdf.rect(154, 150, 43, 7);
    pdf.text(`14`, 17, 169);
    pdf.text(`${formData.no14Item}`, 30, 169);
   
    pdf.text(`${formData.no14Rate}`, 182, 169,'right');
    //15
    pdf.rect(12, 157, 14, 7);
    pdf.rect(26, 157, 128, 7);
    
    pdf.rect(154, 157, 43, 7);
    pdf.text("15", 17, 176);
    pdf.text(`${formData.no15Item}`, 30, 176);
    
    pdf.text(`${formData.no15Rate}`, 182, 176,'right');
    
    pdf.rect(12, 164, 14, 7);
    pdf.rect(26, 164, 128, 7);
  
    pdf.rect(154, 164, 43, 7);

    pdf.rect(12, 171, 14, 7);
    pdf.rect(26, 171, 128, 7);
  
    pdf.rect(154, 171, 43, 7);
   
    pdf.rect(12, 178, 142, 10);
    pdf.rect(154, 178, 43, 10);
    pdf.rect(12, 188, 142, 10);
    pdf.rect(154, 188, 43, 10);
    pdf.rect(12, 198, 142, 10);
    pdf.rect(154, 198, 43, 10);




    // pdf.rect(154, 182, 43, 10);
    // pdf.rect(12, 182, 142, 10);
    // pdf.rect(12, 223, 185, 50);
    pdf.setFontSize(16);
    pdf.setFont(undefined, "bold");

   
    

    pdf.text(`Gst ${formData.gst}%`, 126, 195);
    

  
    let a1 = parseInt(formData.no1Rate);
    let a2 = parseInt(formData.no2Rate);
    let a3 = parseInt(formData.no3Rate);
    let a4 = parseInt(formData.no4Rate);
    let a5 = parseInt(formData.no5Rate);
    let a6 = parseInt(formData.no6Rate);
    let a7 = parseInt(formData.no7Rate);
    let a8 = parseInt(formData.no8Rate);
    let a9 = parseInt(formData.no9Rate);
    let a10 = parseInt(formData.no10Rate);
    let a11 = parseInt(formData.no11Rate);
    let a12 = parseInt(formData.no12Rate);
    let a13 = parseInt(formData.no13Rate);
    let a14 = parseInt(formData.no14Rate); 
    let a15 = parseInt(formData.no15Rate);
    
    let subTotal = 0; // Initialize subTotal to 0

// Iterate through variables a1 to a15
[subTotal, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15].forEach(variable => {
    if (!isNaN(variable)) { // Check if variable is a valid number
        subTotal += variable; // Add valid number to subTotal
    }
});

console.log(subTotal); // Output the subTotal


pdf.text(`Advance Amount:`, 15, 220);
pdf.text(`Gst ${formData.gst}%`, 126, 195);
pdf.text(`${formData.advanceAmount}`, 65, 220);
if (isNaN(formData.advanceAmount) || formData.advanceAmount === 0) {
  formData.advanceAmount = "";
}



      pdf.text(`Sub Total`, 125, 185);
    pdf.text(`${subTotal}`, 182, 185,"right");

    let gstTotal = parseInt(subTotal) * formData.gst;
    let gstAmountTotal = gstTotal / 100;

    if (isNaN(gstAmountTotal) || gstAmountTotal === 0 ) {
      gstAmountTotal = "";
    }
    pdf.text(`${gstAmountTotal}`, 182, 195,'right');
  
    pdf.text(` Grand Total`, 115, 205);
    let grandTotal = (parseInt(gstAmountTotal) || 0) + parseInt(subTotal);


    if (isNaN(grandTotal) || grandTotal === 0) {
      grandTotal = "";
    }
    pdf.text(`${grandTotal}`, 182, 205,'right');
    pdf.setFontSize(12);

    pdf.setFont(undefined, "none");
    console.log("subtotal",subTotal)

    let toWords = new ToWords();
    let inWords = toWords.convert(grandTotal, { currency: true });
    pdf.setFont(undefined, "bold");
    pdf.text(`IN WORDS:`, 14, 230);
    pdf.setFont(undefined, "none");
    pdf.text(`${inWords}`, 14, 235.5);
    pdf.line(12, 237, 197,237);
    pdf.setFont(undefined, "bold");

    pdf.setFontSize(16);
    pdf.setTextColor(46,57,150);

  
        pdf.setTextColor(0,0,0);
        pdf.setFont(undefined, "none");
       
        

    pdf.setFontSize(16);
   
    
  
   

    // Remove spaces and special characters from name and mobile
    let sanitizedName = formData.name.replace(/[^a-zA-Z0-9]/g, "");
    

    let pdfName = `Crane_Quotation${sanitizedName}.pdf`;
    console.log(sanitizedName)

    pdf.save(pdfName);
  };

  return (
    <div className="form-container">
      {/* <h4><Link to="/">Go to Home</Link></h4> */}
      <h4>UJR Crane Service Quotation</h4>

      <form onSubmit={handleSubmit}>
        <div className="display-inline">
          <div className="form-group">
            <input
              type="text"
              className="input margin"
              placeholder="Name"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              title="Please enter name"
            />
          </div>

          <div className="form-group">
            <input
              className="input margin"
              type="text"
              id="mobile"
              placeholder="Mobile"
              name="mobile"
              value={formData.mobile}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="display-inline">
          <div className="form-group">
            <input
              className="input margin "
              type="text"
              id="address"
              placeholder="Location"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
            />
          </div>

          <div className="form-group">
            <input
              type="date"
              className="input margin"
              placeholder="Date Of Moving"
              id="dom"
              name="dom"
              required
              value={formData.dom}
              onChange={handleInputChange}
            />
          </div>
         
        </div>
        <div className="display-inline">
        <div className="form-group">
        <input
          className="input margin "
          type="text"
          id="advanceAmount"
          placeholder="Advance"
          name="advanceAmount"
          value={formData.advanceAmount}
          onChange={handleInputChange}
        />
      </div>
       
          <div className="form-group">
            <input
              type="text"
              className="input margin"
              placeholder="Gst"
              id="gst"
              name="gst"
              value={formData.gst}
              onChange={handleInputChange}
            />
          </div>
        </div>
       

        <div className="display-inline ">
          <div className="form-group">
            <label>Particulars</label>
            <input
              className="inputItem margin"
              type="text"
              id="no1Item"
              placeholder="Item 1"
              required
              title="Please enter Item"
              name="no1Item"
              value={formData.no1Item}
              onChange={handleInputChange}
            />
          </div>
         
          <div className="form-group">
            <label>Rate</label>
            <input
              className="inputRate"
              type="text"
              id="no1Rate"
              placeholder="Rate 1"
              name="no1Rate"
              required

              title="Please enter Rate"
              value={formData.no1Rate}
              onChange={handleInputChange}
            />
          </div>
        </div>

        {/* 2 */}
        <div className="display-inline ">
          <div className="form-group">
            <input
              className="inputItem margin"
              type="text"
              id="no2Item"
              placeholder="Item 2"
              name="no2Item"
              value={formData.no2Item}
              onChange={handleInputChange}
            />
          </div>
        
          <div className="form-group">
            <input
              className="inputRate"
              type="text"
              id="no2Rate"
              placeholder="Rate 2"
              name="no2Rate"
              value={formData.no2Rate}
              onChange={handleInputChange}
            />
          </div>
        </div>
        {/* 3 */}
        <div className="display-inline ">
          <div className="form-group">
            <input
              className="inputItem margin"
              type="text"
              id="no3Item"
              name="no3Item"
              placeholder="Item 3"
              value={formData.no3Item}
              onChange={handleInputChange}
            />
          </div>
         
          <div className="form-group">
            <input
              className="inputRate"
              type="text"
              id="no3Rate"
              name="no3Rate"
              placeholder="Rate 3"
              value={formData.no3Rate}
              onChange={handleInputChange}
            />
          </div>
        </div>
        {/* 4 */}
        <div className="display-inline ">
          <div className="form-group">
            <input
              className="inputItem margin"
              type="text"
              id="no4Item"
              placeholder="Item 4"
              name="no4Item"
              value={formData.no4Item}
              onChange={handleInputChange}
            />
          </div>
        
          <div className="form-group">
            <input
              className="inputRate"
              type="text"
              id="no4Rate"
              name="no4Rate"
              placeholder="Rate 4 "
              value={formData.no4Rate}
              onChange={handleInputChange}
            />
          </div>
        </div>
        {/* 5 */}
        <div className="display-inline ">
          <div className="form-group">
            <input
              className="inputItem margin"
              type="text"
              id="no5Item"
              name="no5Item"
              placeholder="Item 5"
              value={formData.no5Item}
              onChange={handleInputChange}
            />
          </div>
          
          <div className="form-group">
            <input
              className="inputRate"
              type="text"
              id="no5Rate"
              placeholder="Rate 5"
              name="no5Rate"
              value={formData.no5Rate}
              onChange={handleInputChange}
            />
          </div>
        </div>
        {formData.no5Rate != "" ? (
          <div>
            <div className="display-inline ">
              <div className="form-group">
                <input
                  className="inputItem margin"
                  type="text"
                  id="no6Item"
                  placeholder="Item 6"
                  name="no6Item"
                  value={formData.no6Item}
                  onChange={handleInputChange}
                />
              </div>
              
              <div className="form-group">
                <input
                  className="inputRate"
                  type="text"
                  id="no6Rate"
                  placeholder="Rate 6"
                  name="no6Rate"
                  value={formData.no6Rate}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <div className="display-inline ">
              <div className="form-group">
                <input
                  className="inputItem margin"
                  type="text"
                  id="no7Item"
                  placeholder="Item 7"
                  name="no7Item"
                  value={formData.no7Item}
                  onChange={handleInputChange}
                />
              </div>
          
              <div className="form-group">
                <input
                  className="inputRate"
                  type="text"
                  id="no7Rate"
                  name="no7Rate"
                  placeholder="Rate 7"
                  value={formData.no7Rate}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <div className="display-inline ">
              <div className="form-group">
                <input
                  className="inputItem margin"
                  type="text"
                  id="no8Item"
                  placeholder="Item 8"
                  name="no8Item"
                  value={formData.no8Item}
                  onChange={handleInputChange}
                />
              </div>
            
              <div className="form-group">
                <input
                  className="inputRate"
                  type="text"
                  id="no8Rate"
                  placeholder="Rate 8"
                  name="no8Rate"
                  value={formData.no8Rate}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <div className="display-inline ">
              <div className="form-group">
                <input
                  className="inputItem margin"
                  type="text"
                  id="no9Item"
                  placeholder="Item 9"
                  name="no9Item"
                  value={formData.no9Item}
                  onChange={handleInputChange}
                />
              </div>
              
              <div className="form-group">
                <input
                  className="inputRate"
                  type="text"
                  id="no9Rate"
                  name="no9Rate"
                  placeholder="Rate 9"
                  value={formData.no9Rate}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <div className="display-inline ">
              <div className="form-group">
                <input
                  className="inputItem margin"
                  type="text"
                  id="no10Item"
                  name="no10Item"
                  placeholder="Item 10"
                  value={formData.no10Item}
                  onChange={handleInputChange}
                />
              </div>
            
              <div className="form-group">
                <input
                  className="inputRate"
                  type="text"
                  id="no10Rate"
                  placeholder="Rate 10"
                  name="no10Rate"
                  value={formData.no10Rate}
                  onChange={handleInputChange}
                />
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
        {formData.no10Rate != "" ? (
          <div>
            {/* 11 */}
            <div className="display-inline ">
              <div className="form-group">
                <input
                  className="inputItem margin"
                  type="text"
                  id="no11Item"
                  placeholder="Item 11"
                  name="no11Item"
                  value={formData.no11Item}
                  onChange={handleInputChange}
                />
              </div>
             
              <div className="form-group">
                <input
                  className="inputRate"
                  type="text"
                  id="no11Rate"
                  placeholder="Rate 11"
                  name="no11Rate"
                  value={formData.no11Rate}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            {/* 12 */}
            <div className="display-inline ">
              <div className="form-group">
                <input
                  className="inputItem margin"
                  type="text"
                  id="no12Item"
                  placeholder="Item 12"
                  name="no12Item"
                  value={formData.no12Item}
                  onChange={handleInputChange}
                />
              </div>
             
              <div className="form-group">
                <input
                  className="inputRate"
                  type="text"
                  placeholder="Rate 12"
                  id="no12Rate"
                  name="no12Rate"
                  value={formData.no12Rate}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            {/* 13 */}
            <div className="display-inline ">
              <div className="form-group">
                <input
                  className="inputItem margin"
                  type="text"
                  id="no13Item"
                  placeholder="Item 13"
                  name="no13Item"
                  value={formData.no13Item}
                  onChange={handleInputChange}
                />
              </div>
           
              <div className="form-group">
                <input
                  className="inputRate"
                  type="text"
                  id="no13Rate"
                  placeholder="Rate 13"
                  name="no13Rate"
                  value={formData.no13Rate}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            {/* 14 */}
            <div className="display-inline ">
              <div className="form-group">
                <input
                  className="inputItem margin"
                  type="text"
                  id="no14Item"
                  placeholder="Item 14"
                  name="no14Item"
                  value={formData.no14Item}
                  onChange={handleInputChange}
                />
              </div>
             
              <div className="form-group">
                <input
                  className="inputRate"
                  type="text"
                  id="no14Rate"
                  placeholder="Rate 14"
                  name="no14Rate"
                  value={formData.no14Rate}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            {/* 15 */}
            <div className="display-inline ">
              <div className="form-group">
                <input
                  className="inputItem margin"
                  type="text"
                  id="no15Item"
                  placeholder="Item 15"
                  name="no15Item"
                  value={formData.no15Item}
                  onChange={handleInputChange}
                />
              </div>
             
              <div className="form-group">
                <input
                  className="inputRate"
                  type="text"
                  id="no15Rate"
                  placeholder="Rate 15"
                  name="no15Rate"
                  value={formData.no15Rate}
                  onChange={handleInputChange}
                />
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
        

        <button type="submit" className="submit-button margin">
          Download
        </button>
        <button className="submit-button" onClick={handleClear}>
          Clear
        </button>
      </form>
    </div>
  );
};

export default BcsQuotation;
