import React from 'react'
import Pagination from '../Components/Pagination'
import Header from '../Components/Header'
import Blogs from '../Components/Blogs'

const Home = () => {
  return (
    <div>
        <Header/>
        <div>
            <Blogs/>
            <Pagination/>
        </div>
    </div>
  )
}

export default Home