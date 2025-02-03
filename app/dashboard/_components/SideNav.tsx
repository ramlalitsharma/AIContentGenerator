import Image from "next/image"
import React from 'react'
import {Home} from 'lucide-react'
function SideNav() {

    const MenuList = [
        {
            name : 'Home',
            icon: Home ,
            path:"/dashboard"
        },

    ]
    
  return (
    <div className="h-screen p-5 shadow-sm border">
        <div>
             <Image src="/logo.svg" alt="logo" height={80} width={80}/>
        </div>
    </div>
  )
}

export default SideNav
