import React, { useState } from 'react';
import {
    FaTh,
    FaBars,
    FaUserAlt,
    FaRegChartBar,
    FaCommentAlt,
    FaShoppingBag,
    FaRegUserCircle,
    FaLocationArrow,
    FaThList
}from "react-icons/fa";
import { NavLink } from 'react-router-dom';

import {
    AiOutlineMenu,
    AiOutlineSearch,
    AiOutlineClose,
    AiFillTag,
  } from "react-icons/ai";
  import {
    BsFillPersonLinesFill,
    BsFillSaveFill,
    BsPersonCheck,
  } from "react-icons/bs";

  import { FiGrid } from "react-icons/fi";



const Navbar = ({children}) => {
    const [nav, setNav] = useState(false);
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        {
            path:"/",
            name:"Dashboard",
            icon:<FaTh/>
        },
        {
            path:"/about",
            name:"About",
            icon:<FaRegUserCircle/>
        },
        {
            path:"/analytics",
            name:"Analytics",
            icon:<FaRegChartBar/>
        },
        {
            path:"/comment",
            name:"Comment",
            icon:<FaCommentAlt/>
        },
        {
            path:"/product",
            name:"Choose Charts",
            icon:<FaLocationArrow/>
        },
       
    ]
    return (

        
        <div className="container">
           <div style={{width: isOpen ? "200px" : "50px"}} className="sidebar">
               <div className="top_section">
                   <h1 style={{display: isOpen ? "block" : "none"}} className="logo">Charts <span className='font-bold'>Design</span></h1>
                   <div style={{marginLeft: isOpen ? "50px" : "0px"}} className="bars">
                       <AiOutlineMenu onClick={toggle}/>
                   </div>
               </div>
               {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link" activeclassName="active">
                           <div className="icon">{item.icon}</div>
                           <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                       </NavLink>
                   ))
               }
           </div>

           
           <main>{children}</main>


           <button className='bg-black text-black hidden md:flex items-center px-2 rounded-full'>
        <FiGrid size={40} onClick={()=> setNav(!nav)} className='mr-3 ' 
        
        
        /> Options
        {/* <AiOutlineClosed>
            onClick={()=> setNav(!nav)}
          size={50}
          className='absolute right-4 top-4 cursor-pointer'
          </AiOutlineClosed> */}
        
      </button>
      
      
        </div>
        

        
    );
};

export default Navbar;