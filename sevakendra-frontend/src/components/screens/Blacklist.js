import { useState, useEffect } from "react";
import * as XLSX from "xlsx";
import "./blacklist.css";
import "bootstrap/dist/css/bootstrap.min.css";
import * as ReactBootStrap from "react-bootstrap";
import React from 'react';


function Blacklist() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fileUrl =
      "https://docs.google.com/spreadsheets/d/1Rj0r4ydTOVmfPj5tTbEvKxpU_7Scvy_G/edit#gid=79213859"; 

    fetch(fileUrl)
      .then((response) => response.arrayBuffer())
      .then((data) => {
        const workbook = XLSX.read(new Uint8Array(data), { type: "array" });
        const sheetName = workbook.SheetNames[0];
        const sheet = workbook.Sheets[sheetName];
        const parsedData = XLSX.utils.sheet_to_json(sheet);
        setData(parsedData);
      })
      .catch((error) => {
        console.error("Error fetching file:", error);
      });
  }, []);

  const handleDownload = () => {
    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet 1");
    const fileBuffer = XLSX.write(workbook, {
      bookType: "xlsx",
      type: "array",
    });
    const file = new Blob([fileBuffer], {
      type:
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    });
    const fileUrl = URL.createObjectURL(file);
    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = "Blacklisted NGOs By Government of India.xlsx";
    link.click();
  };

  return (
    
    <div className="App">
         <ReactBootStrap.Modal.Title    style={{
    color: "green",
    fontSize: "28px",
    fontWeight: "bold",
    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
    textAlign: "center",
    marginBottom: "20px",
    fontFamily: "Arial, sans-serif",
  }}><h1><strong>
                              👀 OUR VISION</strong></h1>
                            </ReactBootStrap.Modal.Title>

                            <ReactBootStrap.Modal.Body style={{textAlign: "left", border: "3px solid #ccc",
    borderRadius: "8px",
    padding: "20px", }}>
                              <p>
                              Our vision for the website is to create a platform that focuses on connecting NGOs of different categories with people for donations, while also providing a comprehensive list of banned NGOs. Through our website, we aim to facilitate a seamless and user-friendly interface that allows individuals to explore and engage with NGOs that align with their interests and values.

The primary objective is to foster a spirit of giving and support noble causes by providing a transparent and secure donation process. Users will have the opportunity to make donations to registered NGOs, ensuring that their contributions reach the intended beneficiaries. We prioritize transparency and accountability by showcasing detailed profiles of NGOs, highlighting their mission, accomplishments, and ongoing projects.

<br></br> As we move forward, we are committed to continuous improvement and innovation. We will actively seek user feedback, incorporating their suggestions and evolving to meet the changing needs of the philanthropic landscape. Our ultimate goal is to build a global network of NGOs and individuals, fostering cross-cultural collaborations and international support for important causes.

                              </p><br></br> <br></br> 
                              <h1   style={{
    color: "red",
    fontSize: "18px",
    fontWeight: "bold",
    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
    textAlign: "left",
    marginBottom: "20px",
    fontFamily: "Arial, sans-serif",
  }}><strong>BLACKLIST NGOs </strong> </h1>
                              <p>
                               This list is regularly updated and serves as a valuable resource for individuals to ensure their donations are directed to trustworthy organizations. We believe in safeguarding the generosity of our users and protecting them from potential scams or organizations with dubious practices.

Our vision extends beyond monetary donations. We aim to create a community-driven platform where users can engage with NGOs through feedback, comments, and sharing their personal experiences. This fosters a sense of connection and allows individuals to actively participate in the causes they support.

Furthermore, our website will serve as a knowledge hub, raising awareness about various social issues addressed by NGOs. 
                              </p>
                            </ReactBootStrap.Modal.Body>
      {data.length > 0 && (
        <div className="table-container">
          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr>
                  {Object.keys(data[0]).slice(1).map((key) => (
                    <th key={key}>{key}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {data.slice(0).map((row, index) => (
                    <tr key={index}>
                    {Object.values(row).slice(1).map((value, index) => (
                      <td key={index} className="text-cell">
                        <div className="multiline-text">{value}</div>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      <br />

      <button className="download-button" onClick={handleDownload}style={{
    padding: "10px 20px",
    background: "linear-gradient(to right, #4a90e2, #8f50ff)",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.3)",
    transition: "background 0.3s",
    fontFamily: "Arial, sans-serif",
    fontSize: "16px",
  }}>
        Download
      </button>

      <br /><br /><strong>
     📝 Reference- Government of India</strong>
    </div>
  );
}

export default Blacklist;
