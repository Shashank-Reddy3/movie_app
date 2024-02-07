import React, { useEffect, useState } from 'react';
import './Nav.css';


function Nav() {
    const [show,handleShow]=useState(false);
    const Navbar=()=>{
        if(window.scrollY>100){
            handleShow(true);
        }
        else{
          handleShow(false);            
        }

        }
    

    useEffect(()=>{
        window.addEventListener("scroll",Navbar);
        return ()=> window.removeEventListener("scroll",Navbar)
    },[])
  return (
    <div className={`nav ${show && 'nav_black'}`}>
        <div className="nav_contents">
        <img className='logo_n' src="https://images.ctfassets.net/y2ske730sjqp/821Wg4N9hJD8vs5FBcCGg/9eaf66123397cc61be14e40174123c40/Vector__3_.svg?w=460" alt="" />
      <img className='logo_a' src="https://tse1.mm.bing.net/th?id=OIP.i2HBuWmNU78kbh4kUkDr7gAAAA&pid=Api&P=0&h=180" alt="" />
    </div>
    </div>
  )
}

export default Nav
