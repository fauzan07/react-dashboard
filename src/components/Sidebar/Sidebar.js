import React from 'react';
import './Sidebar.css';
import Iconimg from './test-img4.png';

const Sidebar=()=> {

    return(
        <div>
           <div className="wrapper">
              <nav id="sidebar">

                <div className="sidebar-header pt-5 pb-1 px-5">
                  <div className="img-icon d-flex"><img src={Iconimg} width="50" alt="logo"/>
                    <h6 className="px-2 pt-2">Angelina Deo</h6>
                  </div>
                  <small className="project-text">Project Manager?</small>
                </div>

                <ul className="list-unstyled px-5">
                  <li>
                  <a href="#">Dashboard<i className="icons fa fa-angle-right"></i></a>
                  </li>
                  <li>
                    <a href="#">UI Elements<i className="icons fa fa-angle-right"></i></a>
                  </li>
                  <li>
                    <a href="#">Components<i className="icons fa fa-angle-right"></i></a>
                  </li>
                  <li>
                    <a href="#">Form Stuff<i className="icons fa fa-angle-right"></i></a>
                  </li>
                  <li>
                    <a href="#">Data Table<i className="icons fa fa-angle-right"></i></a>
                  </li>
                  <li>
                    <a href="#">Icons<i className="icons fa fa-angle-right"></i></a>
                  </li>
                  <li>
                    <a href="#">Sample Page<i className="icons fa fa-angle-right"></i></a>
                  </li>
                  <li>
                    <a href="#">Extra<i className="icons fa fa-angle-right"></i></a>
                  </li>
                </ul>

                <ul className="list-unstyled">
                  <li><a href="" className="btn btn-blue text-white mx-4">Add Project</a></li>
                </ul>

              </nav>
            </div>
        </div>
    );
}



export default Sidebar;