
import React from 'react'
import Link from 'next/link'
const Navebar = () => {
  return (
    <div className='bg-rose-600 h-12'>
      <div className='text-yellow-400 flex justify-between items center'>
        <h1 className='text-xl m-2 cursor-pointer'><b>SADAF</b></h1>
        <h1 className='text-xl m-2 cursor-pointer text-center'><b>SABA</b></h1>
        
        
        
           
      <ul className='flex gap-3 mr-4 cursor-pointer'>
        <Link className='hover:text-blue-700' href={"/"}><b>Home</b></Link>
        <Link className='hover:text-green-700' href={"/"}><b>About</b></Link>
        <Link className='hover:text-purple-500' href={"/"}><b>Skill</b></Link>
        <Link className='hover:text-black' href={"/"}><b>Contact</b></Link>
      </ul>
    </div>
    </div>
  )
}

export default Navebar;