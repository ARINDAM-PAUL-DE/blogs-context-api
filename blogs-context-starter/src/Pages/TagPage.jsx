import React from 'react'
import { useLocation } from 'react-router-dom';
import Pagination from '../Components/Pagination';
import Blogs from '../Components/Blogs';
import Header from '../Components/Header';
import { useNavigate } from 'react-router-dom';

const TagPage = () => {

    const navigation = useNavigate();
    const location = useLocation();
    const tag = location.pathname.split("/").at(-1);

  return (
    <div>
        <Header/>
        <div>
            <button
            onClick={() => navigation(-1)}>
                Back
            </button>
            <h2>
                Blogs Tagged <span>#{tag}</span>
            </h2>
        </div>
        <Blogs/>
        <Pagination/>
    </div>
  )
}

export default TagPage