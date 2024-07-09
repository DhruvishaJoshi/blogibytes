import React, { useEffect } from "react";
import "../App.css";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useState } from "react";
import Navbar from "./Navbar";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function BlogData() {
  // const initialData ={
  //   authorName:"",
  //   description:"",
  //   imageLink:"",
  //   title:""
  // }
  let { id } = useParams();
  const [loading, setLoading] = useState(false)
  const [input, setInput] = useState();


  const fetchBlogData = () => {
    setLoading(true)
    try {
      axios.get(`http://localhost:3010/blogFromData/${id}`).then((result) => {
        console.log(result.data);
        setInput(result.data);
        setTimeout(()=>{
          setLoading(false)
        },1000)
        
      });
    } catch (e) {
      console.log(e);
    }
const descLength = input?.description.length;
console.log("Desc Lenght------",descLength)

  };
  useEffect(() => {
    fetchBlogData();
  }, []);

  return (
    <>
    <Navbar />
    <div className="container">
      <div className="blog-data">
        {/* {input.map((item) => ( */}
            <h1>{loading? <Skeleton/>:input?.title}</h1>
            <h5 className="h4BlogData">
              <i>{loading?<Skeleton/>:('Author - ',input?.authorName)}</i>
            </h5>
            {loading? <img src="../images/skeleton-image.jpg" alt="" className="blogDataImage" />:<img src={input?.imageLink} alt="" className="blogDataImage" />}
           {
            loading ?  <Skeleton count={5}/> : <div className="blogParaStyle" dangerouslySetInnerHTML={{__html: input?.description}}/>
           } 
         {/* ))} */}
      </div>
    </div>
    </>
  );
}

export default BlogData;
