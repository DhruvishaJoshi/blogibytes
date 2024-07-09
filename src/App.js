import './App.css';
import Home from './components/Home';
import FoodBlog from './components/FoodBlog';
import TechBlog from './components/TechBlog';
import MarketingBlog from './components/MarketingBlog';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import BlogData from './components/BlogData';
import RegisterUser from './components/RegisterUser';
import Login from './components/Login';
import AddData from './components/AddData';
import BlogNavigation from './components/BlogNavigation';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/food" element={<FoodBlog/>}/>
          <Route path="/tech" element={<TechBlog/>}/>
          <Route path="/marketing" element={<MarketingBlog/>}/>
          <Route path="/blog/:id" element={<BlogData/>}/>
          <Route path="/register" element={<RegisterUser/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/add-data" element={<AddData/>}/>
          <Route path='/blogNavigation' element={<BlogNavigation/>}/>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
