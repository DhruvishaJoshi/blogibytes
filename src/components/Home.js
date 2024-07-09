import React from 'react'
import Navbar from './Navbar'
import HomeFirstSection from './HomeFirstSection'
import Blogs from './Blogs'
import BlogHeading from './BlogHeading'
import Footer from './Footer'

function Home() {
  return (
    <header>
        <div>
            <Navbar />
            <HomeFirstSection />
            <BlogHeading />
            <Blogs />
            <Footer />
            
        </div>
        </header>
  )
}

export default Home