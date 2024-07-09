import React from "react";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
// import '../App.css'

function Blogs() {
  const [input, setInput] = useState([]);
  const [search, setSearch] = useState("");
  const searchData = search;
  const [loading, setLoading] = useState(false);
  // console.log("Search-----", search);

  const fetchBlogData = () => {
    setLoading(true);
    try {
      axios.get("http://localhost:3010/blogFromData").then((result) => {
        console.log(result.data);
        setInput(result.data);
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      });
    } catch (e) {
      console.log(e);
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }
  };

  const processSelectedData = (value) => {
    console.log("processSelectedData----", value);
    setLoading(true);
    try {
      axios.get("http://localhost:3010/blogFromData").then((result) => {
        const bType = result.data.filter((bData) => bData.blogType === value);
        console.log(result.data);
        setInput(bType);
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      });
    } catch (e) {
      console.log(e);
    }
    // finally{
    //   setLoading(false)
    // }
  };

  useEffect(() => {
    fetchBlogData();
  }, []);

  const handleBlogType = (e) => {
    const selectValue = e.target.value;
    if (selectValue === "All") {
      fetchBlogData();
    }
    if (
      selectValue === "Food" ||
      selectValue === "Tech" ||
      selectValue === "Marketing"
    ) {
      processSelectedData(selectValue);
    }
  };

  // if(loading)
  // {
  //   return <p>Loading ...</p>
  // }
  return (
    <>
      <div className="container">
        <div class="row search-style">
          <div class="col">
            <form class="d-flex" role="search">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                name="searchData"
                value={searchData}
                onChange={(e) => setSearch(e.target.value)}
              />
            </form>
          </div>
          <div class="col">
            <select
              class="form-select"
              aria-label="Default select example"
              name="blogType"
              onChange={(e) => handleBlogType(e)}
            >
              <option selected value="All">All</option>
              <option value="Food">Food</option>
              <option value="Tech">Tech</option>
              <option value="Marketing">Marketing</option>
            </select>
          </div>
        </div>
        <div className="container">
        <div class="row">
          <div class="col-sm cardStyle">
            {input
              .filter((item) => {
                return search.toLowerCase() === ""
                  ? item
                  : item.title.toLowerCase().includes(search);
              })
              .map((item) => (
                <>
                  <div
                    key={item.id}
                    class="card blogi-card"
                    style={{ width: "18rem" }}
                  >
                    {loading ? (
                      <img
                        class="card-img-top"
                        style={{ height: "12rem" }}
                        src="../images/skeleton-image.jpg"
                        alt="Card image cap"
                      />
                    ) : (
                      <img
                        class="card-img-top"
                        style={{ height: "12rem" }}
                        src={item.imageLink}
                        alt="Card image cap"
                      />
                    )}

                    <div class="card-body">
                      <h5 class="card-title">
                        {loading ? <Skeleton /> : item.title}
                      </h5>
                      <p class="card-text">
                        {loading ? (
                          <Skeleton count={3} />
                        ) : (
                          "Learn how to make dalgona coffe, here easy recipe is provided with some tips with proper measurment"
                        )}
                      </p>
                      {loading ? (
                        <Link
                          class="btn btn-primary skeleton-style"
                        >
                        .............
                        </Link>
                      ) : (
                        <Link
                          to={`/blog/${item.id}`}
                          class="btn btn-primary readHereStyle"
                        >
                          Read Here
                        </Link>
                      )}
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
    </>
  );
}

export default Blogs;
