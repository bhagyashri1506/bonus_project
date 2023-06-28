import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../App'

function Footer() {
  const { active, setActive } = useContext(UserContext)
  const navigate = useNavigate()
  return (
    <>
      <div id="footer-bar" class="footer-bar-1 footer-bar-detached">
        <a href="#" data-active={active == 1 ? true : false} className={`${active == 1 ? "active-nav" : ""}`} onClick={(e) => {
          e.preventDefault()
          setActive(1)
          navigate("/home")
        }} > <img src={require("../images/home.png")} alt="" width="60px" />
          </a>

        {/* <a href="#" data-active={active == 2 ? true : false} className={`${active == 2 ? "active-nav" : ""}`} onClick={(e) => {
          e.preventDefault()
          setActive(2)
          navigate("/promotions")
        }}><img src={require("../images/promo.png")} alt="" width="30px" height="30px" />
          <p>PROMO</p></a> */}
        <a href="#" data-active={active == 3 ? true : false} className={`${active == 3 ? "active-nav" : ""}`} onClick={(e) => {
          e.preventDefault()
          setActive(3)
          navigate("/history")
        }}><img src={require("../images/history.png")} alt="" width="60px" />
          {/* <p>HISTORY</p> */}
        </a>
        <a href="#" data-active={active == 4 ? true : false} className={`${active == 4 ? "active-nav" : ""}`} onClick={(e) => {
          e.preventDefault()
          setActive(4)
          navigate("/livechat")
        }}>
          <img src={require("../images/livechat.png")} alt="" width="60px" />
          {/* <p>LIVECHAT</p> */}
          {/* <span id='chat_count' className='badge_anima main_pulse'>1</span> */}
        </a>
        {/* <a href="#" data-active={active == 5 ? true : false} className={`${active == 5 ? "active-nav" : ""}`} onClick={(e) => {
          e.preventDefault()
          setActive(4)
          navigate("/home")
        }}>
          <img src={require("../images/withdraw.png")} alt="" width="30px" height="30px" />
          <p>WITHDRAW</p>
        </a> */}
        <a href="#" data-menu="menu-settings" data-active={active == 5 ? true : false} className={`${active == 5 ? "active-nav" : ""}`} onClick={(e) => {
          e.preventDefault()
          setActive(5)
          navigate("/settings")
        }}><img src={require("../images/setting.png")} alt="" width="60px" />
          </a>
      </div>
    </>
  )
}

export default Footer