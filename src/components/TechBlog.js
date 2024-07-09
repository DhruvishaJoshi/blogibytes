import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import React from "react";
import axios from "axios";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

function TechBlog() {
  const [input, setInput] = useState([]);
  // const [blogType, setBlogType] = useState('');

  const navigate = useNavigate();

  const fetchBlogData = async () => {
    try {
      const result = await axios.get("http://localhost:3010/blogFromData/");
      const bType = result.data.filter((bData) => bData.blogType === "Tech");
      console.log(bType);
      setInput(bType);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    fetchBlogData();
  }, []);

  return (
    <div>
       <Navbar />
      <div className="container">
        <div class="row">
          <div class="col-sm cardStyle">
            {input.map((item) => (
              <>
                <div
                  key={item.id}
                  class="card blogi-card"
                  style={{ width: "18rem" }}
                >
                  <img
                    class="card-img-top"
                    style={{ height: "12rem" }}
                    src={item.imageLink}
                    alt="Card image cap"
                  />
                  <div class="card-body">
                    <h5 class="card-title">{item.title}</h5>
                    <p class="card-text">
                      Learn how to make dalgona coffe, here easy recipe is
                      provided with some tips with proper measurment
                    </p>
                    <Link
                      to={`/blog/${item.id}`}
                      class="btn btn-primary readHereStyle"
                    >
                      Read Here
                    </Link>
                  </div>
                </div>
              </>
            ))}
          </div>
          {/* <div class="col-sm">
              <div class="card blogi-card" style={{ width: "18rem" }}>
                <img class="card-img-top" style={{height: "12rem"}}
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdvfxPQro5-GKFqGUg1XgbtyF0hxBVNgrLFKKPzg-822co7oWKdbcP0XZk6IUhegCw-SY&usqp=CAU" alt="Card image cap" />
                <div class="card-body">
                  <h5 class="card-title">How ChatGpt is changing Content writing</h5>
                  <p class="card-text">
                  ChatGPT is revolutionizing content writing by providing, high-quality, and contextually relevant text
                  </p>
                  <a href="/blog" class="btn btn-primary readHereStyle">
                    Read Here
                  </a>
                </div>
              </div>
            </div>
            <div class="col-sm">
              <div class="card blogi-card" style={{ width: "18rem"}}>
                <img class="card-img-top" style={{height: "12rem"}} 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTwtG_hUxIv4erSXxBONdFoT3zQzQqKYG-ZsNGXgiPWQPbUfxYxdeEBd6Wi9IrBtDgNgc&usqp=CAU" alt="Card image cap" />
                <div class="card-body">
                  <h5 class="card-title">Learn About Digital, Social Media Marketing</h5>
                  <p class="card-text">
                  Master online strategies to engage audiences and boost brand visibility.
                  </p>
                  <a href="/blog" class="btn btn-primary readHereStyle">
                    Read Here
                  </a>
                </div>
              </div>
            </div> */}
        </div>
      </div>
    </div>
  );
}

export default TechBlog;
