import { React} from "react";
import "../App.css";
import { Link } from "react-router-dom";
// import axios from "axios";
// import { useState } from "react";
import {FaBars,FaTimes} from 'react-icons/fa'
function Navbar() {

  return (
    <>
      <nav class="navbar navbar-expand-lg blogi-nav-bg">
        <div class="container-fluid mobile-width-style">
          <Link class="navbar-brand nav-logo" to="/">
            Blogi<span>Bytes</span>
          </Link>
    
          <div class="blogi-nav-items" id="navbarNav">
            <ul class="navbar-nav myNav nav justify-content-end">
          
              <li class="nav-item">
                <Link class="nav-link active" aria-current="to" to="/">
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/food">
                  Foodie Visit Here
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/tech">
                  Tech Information
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/marketing">
                  Marketing
                </Link>
              </li>
              {/* <button>
                <FaTimes />
              </button> */}
            </ul>

          </div>
        </div>
      </nav>
      {/* <button>
        <FaBars />
      </button> */}
    </>
  );
}

export default Navbar;
