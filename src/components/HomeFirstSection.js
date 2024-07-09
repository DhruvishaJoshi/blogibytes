import React from "react";
import RegisterUser from "./RegisterUser";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
function HeaderSection() {
  const navigate = useNavigate();
  const handleUser =()=>{
    navigate("/login")
  }
  return (
    <>
      <div class="container blogi-headerSection-style">
      <div class="row headerSection-image-content">
        <div class="col headerSection-content">
          <h1 className="headerSection-h1">
            Dive into <span>blogging</span> with BlogiBytes
          </h1>
          <h3 className="headerSection-h3">Strart your blogging with us</h3>
          <p className="headerSection-para">
            Fellow bloggers! BlogiBytes welcomes you. Join us to connect with like-minded individuals and elevate your
            blogging experience.
          </p>
          <div className="headerSection-buttons">
            <div class="dropdown">
              <button
                class="btn btn-secondary dropdown-toggle blogi-dropDown"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Select Blog Type
              </button>
              <ul class="dropdown-menu">
                <li>
                  <Link class="dropdown-item" to="/food">
                    Food
                  </Link>
                </li>
                <li>
                  <Link class="dropdown-item" to="/tech">
                    Tech
                  </Link>
                </li>
                <li>
                  <Link class="dropdown-item" to="/marketing">
                    Marketing
                  </Link>
                </li>
              </ul>
            </div>
            <button type="button" class="btn btn-dark headerSection-addBlog-btn" onClick={handleUser}>Add Blog</button>

          </div>
        </div>
        <div class="col">
          <img
            src="../images/headerImage.png"
            class="img-fluid headerSection-image-style"
            alt="..."
          />
        </div>
        </div>
      </div>
    </>
  );
}

export default HeaderSection;
