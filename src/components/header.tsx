import * as React from 'react';
import MenuItem from './menuItem';
import { AiFillHome, AiFillInfoCircle } from 'react-icons/ai';
import Link from 'next/link';
import DarkModeSwitch from './darkModeSwitch';
import { BsAward, BsNewspaper } from 'react-icons/bs';

export interface IHeaderProps {
}

export default function Header(props: IHeaderProps) {
    return (
        <div className='flex justify-between mx-2 max-w-6xl sm:mx-auto items-center py-6'>
            <div className='flex'>
                <MenuItem title="Home" address="/" Icon={AiFillHome} />
                <MenuItem title="About" address="/about" Icon={AiFillInfoCircle} />
                <MenuItem title="News" address="/news" Icon={BsNewspaper} />
                <MenuItem title='Rankings' address="/rankings" Icon={BsAward}/>
            </div>
            <div className='flex items-center space-x-4'>
                <DarkModeSwitch/>
                <Link href = "/">
                    <span className='text-3xl font-bold text-white bg-black mx-4 py-1 px-2 rounded'>
                        Carbyde
                    </span>
                </Link>
                <Link href = "/login">
                    <span className='text-xl bg-gradient-to-r from-slate-100 to-purple-400 rounded'>
                        Log in
                    </span>
                </Link>
            </div>
        </div>
    );
}
