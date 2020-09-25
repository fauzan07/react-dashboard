import React from 'react';
import Iconimg from './test-img4.png';
import './Navbar.css';

const Navbar=()=> {

    return(
        <div>

            <nav className="navbar navbar-light bg-white">
                <a className="navbar-brand pl-4"><span class="logo">BlueBox</span></a>
        
                    <form className="search-bar form-inline d-flex md-form form-sm active-cyan-2 mt-2">
                        <input class="form-control form-control-sm mr-3 w-75" type="text" placeholder="Search"
                            aria-label="Search"/>
                        <i className="fa fa-search" aria-hidden="true"></i>
                    </form>
                    
                    <div className="form-inline">
                        <div className="img-icon d-flex"><img src={Iconimg} width="50" alt="logo"/>
                            <h6 className="px-2 pt-3">Angelina Deo</h6>
                        </div>
                        <a href="" target="blank"><i className="text-facebook fa fa-facebook-square pl-4" aria-hidden="true"></i></a>
                        <a href="" target="blank"><i className="text-insta fa fa-instagram pl-3" aria-hidden="true"></i></a>           
                        <a href="" target="blank"><i className="text-danger fa fa-google pl-3" aria-hidden="true"></i></a>
                        <a href="" target="blank"><i className="text-primary fa fa-linkedin-square pl-3" aria-hidden="true"></i></a>
                    </div>
            </nav>

        </div>
    );
}



export default Navbar;