import React, { useState } from 'react'
import Link from 'next/link'

const Header = ({ changeImage = () => {} }) => {
  return (
    <header className='absolute top-0 right-0 w-auto px-6 md:px-12 z-50'>
      <div className='flex justify-between items-center py-4 md:py-8' id='header-wrapper'>
        <div className='header-left'>
          {/* <Link href='/'>
                        <img src="logo.png" alt='' />
                    </Link> */}
        </div>
        <div className='flex items-center' onClick={changeImage}>
          <a
            // href='https://staging.onboard.center'
            target='_blank'
            className='rn-btn hover:bg-transparent'
          >
            <span>Change Image</span>
          </a>
        </div>
      </div>
    </header>
  )
}

export default Header
