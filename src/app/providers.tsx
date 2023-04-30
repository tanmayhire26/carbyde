"use client";
import { ThemeProvider } from 'next-themes';
import * as React from 'react';


export interface IProvidersProps {
    children : any
}

export default function Providers (props: any) {
    const {children} = props;
  return (
    <ThemeProvider enableSystem = {true} attribute='class'>
      <div>
        {children}
      </div>
      
    </ThemeProvider>
  );
}
