import React from 'react'



const Tag = ({post}) => {

    const tags = ["web", "life", "music", "webdev", "movie"];

  return (
    <div className='tag_card'>
        <div className='flex justify-between items-start gap-5'>
            <p className='font-inter text-sm blue_gradient cursor-pointer'>
                {post.tag}
            </p>
        </div>
    </div>
  )
}

export default Tag;