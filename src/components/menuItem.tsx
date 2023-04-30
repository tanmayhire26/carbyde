import Link from 'next/link';
import * as React from 'react';

export interface IMenuItemProps {
    title : string,
    address : string,
    Icon : any

}

export default function MenuItem (props: IMenuItemProps) {
    const {title, address, Icon} = props;
  return (
    <div>
      <Link href={address} className='mx-4 lg:mx-6 hover:text-amber-600 my-4'>
      <Icon className = "text-2xl mx-4 my-4 sm:hidden"/>
      <p className='hidden text-sm sm:inline'>{title}</p>
      </Link>
    </div>
  );
}
