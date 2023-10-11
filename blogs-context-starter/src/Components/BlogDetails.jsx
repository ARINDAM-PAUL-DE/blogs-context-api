import React from 'react'
import { NavLink } from 'react-router-dom'


const BlogDetails = ({post}) => {
  return (
    <div className='mt-[50px]'>
        <NavLink to = {`/blog/${post.id}`}>
                <span>{post.title}</span>
        </NavLink>
        <p>
            By
            <span>{post.author}</span>
            on {" "}
            <NavLink to = {`/categories/${post.category.replaceAll(" ","-")}`}>
                <span>{post.category}</span>
            </NavLink>
        </p>
        <p>Posted on {post.date}</p>
        <p>{post.content}</p>
        <div>
            {post.tags.map( (tag, index) => {
                <NavLink key={index} to={`/tags/${tag.replaceAll(" ","-")}`}>
                    <span>{`#${tag}`}</span>
                </NavLink>
            })}
        </div>
    </div>
  )
}

export default BlogDetails




{/* <div key={post.id}>
<p className='font-bold text-lg '>{post.title}</p>
<p className='text-sm mt-[4px]'>
    By <span className='italic'>{post.author}</span> on <span className='underline font-bold'>{post.category}</span>
</p>
<p className='text-sm mt-[4px]'>Posted on {post.date}</p>
<p className='text-md mt-[14px]'>{post.content}</p>
<div className='flex gap-x-3'>
    {post.tags.map((tag, index) => {
        return <span className='text-blue-700 underline font-bold text-xs mt-[6px]' key={index}>{`#${tag}`}</span>
    })}
</div>
</div> */}