import React, { useState } from "react";
import Link from 'next/link';


const Header = () => {

    return (
        <header className='absolute top-0 right-0 w-auto px-6 md:px-12 z-50'>
            <div className='flex justify-between items-center py-4 md:py-8' id="header-wrapper">
                <div className="header-left">
                    {/* <Link href='/'>
                        <img src="logo.png" alt='' />
                    </Link> */}
                </div>
                <div className="flex items-center">
                    <Link href='/login'>
                        <a className="rn-btn">
                            <span>Giriş yap</span>
                        </a>
                    </Link>
                </div>
            </div>
        </header>
    )
}

export default Header;