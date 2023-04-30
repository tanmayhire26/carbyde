import * as React from 'react';
import MenuItem from './menuItem';
import { AiFillHome, AiFillInfoCircle } from 'react-icons/ai';
import Link from 'next/link';
import DarkModeSwitch from './darkModeSwitch';

export interface IHeaderProps {
}

export default function Header(props: IHeaderProps) {
    return (
        <div className='flex justify-between mx-2 max-w-6xl sm:mx-auto items-center py-6'>
            <div className='flex'>
                <MenuItem title="Home" address="/" Icon={AiFillHome} />
                <MenuItem title="About" address="/about" Icon={AiFillInfoCircle} />
            </div>
            <div className='flex items-center space-x-4'>
                <DarkModeSwitch/>
                <Link href = "/">
                    <span className='text-3xl font-bold text-white bg-black mx-4 py-1 px-2 rounded'>
                        Carbyde
                    </span>
                </Link>
            </div>
        </div>
    );
}
