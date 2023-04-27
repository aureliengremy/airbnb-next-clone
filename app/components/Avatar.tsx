'use client';

import Image from 'next/image'

const Avatar = () => {
  return (
    <Image className='rounded-full' src='/images/placeholder.jpeg' width={30} height={30} alt="Avatar" />
  )
}

export default Avatar