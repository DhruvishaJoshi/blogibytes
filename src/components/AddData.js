import React, { useState } from "react";
import "../App.css";
import axios from "axios";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import {
  ClassicEditor,
  Bold,
  Essentials,
  Italic,
  Mention,
  Paragraph,
  Undo,
} from "ckeditor5";
// import { SlashCommand } from "ckeditor5-premium-features";

import "ckeditor5/ckeditor5.css";
import "ckeditor5-premium-features/ckeditor5-premium-features.css";
import { toast, ToastContainer } from "react-toastify";

function AddData() {
  const [input, setInput] = useState({
    title: "",
    authorName: "",
    blogType:"",
    imageLink: "",
  });
  const [myimage, setMyImage] = useState([]);

  const { title, authorName, imageLink, ckEditor1 } = input;

  const notify = (msg) => {
    toast.error(msg);
  };
  const notify1 = (msg) => {
    toast.success(msg);
  };

  const handleBlogData = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };
  const handleCkEditor = (value) => {
    setInput({...input, description: value})
  }
  const saveBlogData = async (e) => {
    e.preventDefault();
    // if(Object.keys(input).length <3)
    // {
    //   notify("All details are required");
    // }
    try {
      if (title == "" || authorName == "" || imageLink == "") {
        notify("All details are required");
      } else {
        const result = await axios.post(
          "http://localhost:3010/blogFromData",
          input
        );
        console.log(result.data)
        notify1("Data Saved Successfully");
      }
    } catch (e) {
      console.log(e);
    }
  };
  // const showImage =()=>{
  //   try{
  //     axios.get("http://localhost:3010/blogFromData")
  //    .then((result)=>{
  //     const showMe = result.data.map((showMe) => showMe.imageLink)
  //     setMyImage(showMe)
  //     console.log(showMe)
  //    })
  //   }
  //   catch(e)
  //   {
  //     console.log(e);
  //   }
  // }
  return (
    <div>
      {/* <div>
        <button onClick={()=>showImage()}>Fetch Image</button>
        <img src={myimage} alt="" />
      </div> */}
      <nav className="navbar navbar-expand-lg add-blog-info-style"></nav>
      <div className="container add-blogData-box">
        <div className="add-blog-h1Style">
          <h1>Start writing here</h1>
          <hr />
          <div className="sentenceBoxForAddBlog">
            <h6>Ready to embark on your writing? Let's begin!</h6>
            <div className="circleStyle">
              <i class="fa-solid fa-blog"></i>
            </div>
          </div>
          <div className="add-blogData-form">
            <form onSubmit={(e) => saveBlogData(e)}>
              <div class="form-group fg1">
                <label for="exampleInputEmail1">Blog Title</label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputEmail1"
                  placeholder="write your blog title"
                  name="title"
                  value={title}
                  onChange={(e) => handleBlogData(e)}
                />
              </div>
              <div class="form-group fg1">
                e<label for="exampleInputPassword1">Author Name</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="author name"
                  name="authorName"
                  value={authorName}
                  onChange={(e) => handleBlogData(e)}
                />
              </div>
              <div class="form-group fg1">
                <label for="exampleInputPassword1">Image</label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputPassword1"
                  placeholder="only google image link will work "
                  name="imageLink"
                  value={imageLink}
                  onChange={(e) => handleBlogData(e)}
                />
              </div>

              <div class="col">
              <label for="exampleInputPassword1">Type of Blog</label>

                  <select
                    id="inputState"
                    name="blogType"
                    class="form-control"
                    onChange={(e) => handleBlogData(e)}
                    // onChange={(e) => handleRegister(e)}
                  >
                    <option name="blogType">--Select Blog Type--</option>
                    <option name="blogType" value="Food">Food</option>
                    <option name="blogType" value="Tech">Tech</option>
                    <option name="blogType" value="Marketing">Marketing</option>

                  </select>
                </div>
              <div className="ckEditor-style fg1">
                <CKEditor
                  editor={ClassicEditor}
                  config={{
                    toolbar: {
                      items: ["undo", "redo", "|", "bold", "italic"],
                    },
                    plugins: [
                      Bold,
                      Essentials,
                      Italic,
                      Mention,
                      Paragraph,
                      Undo,
                    ],
                    licenseKey: "<YOUR_LICENSE_KEY>",
                    mention: {},
                    initialData: "<p>Hello from CKEditor 5 in React!</p>",
                  }}
                  // name="ckEditor1"
                  // value={ckEditor1}
                  onChange={(e,editor)=>handleCkEditor(editor.getData())}
                />
              </div>
              <button type="submit" class="btn add-blog-btn">
                Save Blog
              </button>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default AddData;
