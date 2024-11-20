import React from 'react'
import { Button } from './ui/button'

const NavBar = () => {
  return (
    <div className='pt-4'>
        <div className='py-4 px-10 rounded-xl flex justify-between items-center bg-custom-accent'>
        <h1 className='text-2xl font-bold text-custom-primary'>Admin Dashboard</h1>
        <div>
            <Button variant={"default"} className='text-xs font-semibold rounded-xl bg-custom-primary text-custom-secondary'>Log Out</Button>
        </div>
    </div>
    </div>
  )
}

export default NavBar