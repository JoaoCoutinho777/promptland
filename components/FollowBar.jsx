"use client"

import React from 'react'
import Image  from 'next/image';
import { useSession } from 'next-auth/react';

const FollowBar = () => {
    const {data: session} = useSession();

  return (
    <div className='px-6 py-4 hidden lg:block'>
        <div className='bg-neutral-800 rounded-xl p-4'>
            <h2 className='text-white text-xl font-semibold'>Recommended</h2>
            <div className='flex flex-col gap-6 mt-4'>
                <div className='flex flex-row gap-4'>
                    {/* <Image 
                        src={session?.user.image}
                        alt='user_image'
                        width={40}
                        height={40}
                        className='rounded-full object-contain'
                    /> */}
                    <div className='flex flex-col'>
 {/*                        <p className='text-white font-semibold text-sm'>{session?.user.name}</p>
                        <p className="text-neutral-400 text-sm">{session?.user.email}</p> */}
                    </div>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default FollowBar