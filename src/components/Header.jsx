import React from 'react'
import { useNavigate } from 'react-router-dom'

function Header() {
    const navigate = useNavigate()
    return (
       <>
        <div class="w-100" style={{ zIndex: "111",position:"fixed", top:"0", left:"0" }}>
            <div class="page-title d-flex justify-content-end my-0 custom_header align-items-center">
                <div className='align-self-center me-auto t3 custom-icon'>
                {/* <a href=".#"  data-bs-toggle="offcanvas" data-bs-target="#menu-sidebar" data-menu="menu-main"> <i class="fa-solid fa-bars"></i></a> */}
                </div>
                <div class="align-self-center" className='currency_icon'>
                    <a href=".#" ><i class="fa-solid fa-globe"></i></a>
                    {/* <button className='reg_btn'>Register</button>
                    <button className='log_btn'>Login</button> */}
                </div>
            </div>
        </div>
              <marquee width="100%" direction="left">
              📣 &nbsp;
              {/* <span><img src={require("../images/speaker.png")} alt="" width="15px" style={{marginRight:"12px"}}/></span> */}
              WELCOME TO U2BET, THANKS FOR PLAYING WITH US!
          
          </marquee>
       </>
    )
}

export default Header