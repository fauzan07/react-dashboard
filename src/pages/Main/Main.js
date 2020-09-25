import React from 'react';
import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";
import Tabledata from "../../components/Tabledata/Tabledata";
import './Main.css';


function Main(props) {

  return(
  <div>
    <Navbar />
    <div className="wrapper d-flex align-items-stretch ">
    <Sidebar />
   
          <div className="container bg-main py-4">
              <h3 className="text-start text-secondary pb-3">Dashboard</h3>
                <div className="row justify-content-center">

                    <div className="col-lg-4 col-md-10">
                        <div className="bg-purple border rounded p-5 ">
                          <h5>Stock Total</h5>
                          <h2>$15000</h2>
                          <h5 className="pt-4">incresed by 60%</h5>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-10">
                        <div className="bg-blue border rounded p-5 ">
                          <h5>Stock Total</h5>
                          <h2>$25000</h2>
                          <h5 className="pt-4">incresed by 60%</h5>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-10">
                        <div className="bg-red border rounded p-5 ">
                          <h5>Stock Total</h5>
                          <h2>$35000</h2>
                          <h5 className="pt-4">incresed by 60%</h5>
                        </div>
                    </div>

                </div>
                
                      <Tabledata />
          </div>
    
       </div>
    </div>
  
  );

}

export default Main;
