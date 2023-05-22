"use client"
import * as React from 'react';
import {MdLightMode} from "react-icons/md";
import {BsFillMoonFill} from "react-icons/bs";
import {useTheme} from "next-themes";
export interface IDarkModeSwitchProps {
}

export default function DarkModeSwitch (props: IDarkModeSwitchProps) {
  const {systemTheme, theme, setTheme}= useTheme();
  const [mounted, setMounted ] = React.useState<Boolean>(false);
  const currentTheme = theme==="system" ? systemTheme : theme;
  React.useEffect(()=>{
    setMounted(true);
  },[])
  return (
    <div className=''>
      {mounted && currentTheme === "dark" ? <MdLightMode className='cursor-pointer text-xl hover:text-purple-700' onClick={()=>setTheme("light")} /> : <BsFillMoonFill className='cursor-pointer text-xl hover:text-purple-700' onClick={()=>setTheme("dark")} />}
    </div>
  );
}
