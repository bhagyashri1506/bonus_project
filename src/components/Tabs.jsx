import React, { useContext, useState } from 'react'
import { getCategoryDetail, productStart } from '../services'
import { AppContext } from '../App'
import Loader from './Loader'
import { toast } from 'react-toastify'

function Tabs() {
    const [state, setState] = useContext(AppContext)
    const [active, setActive] = useState(0)
    return (
        <div class="content t3" id="tab-group-1" style={{ margin: "0px" }}>
            <div class="tab-controls tabs-small tabs-rounded" data-highlight="bg-highlight">
                {[{ name: "ALL" }, { name: "SLOT", }, { name: "FISH" }, { name: "CASINO" }, { name: "CARD" }].map((category, index) => (
                    <a
                        href="#"
                        data-active={active == index ? true : false}
                        className={`${active == index ? "bg-highlight" : ""}`}
                        data-bs-toggle="collapse"
                        data-bs-target={`#tab-${index}`}
                        onClick={() => {
                            setActive(index)
                        }}
                    >
                        <span className='tabs_text'>{category.name}</span>
                    </a>
                ))}
            </div>
            <div className="gamenote">
                <var>
                    <p>🏆🏆🏆
                        <b style={{color:"purple"}}>JILI Slots</b>
                        🏆🏆🏆
                        <br />
                        Slot Coin : 
                        <b style={{color:"white"}}>
                            <b style={{textDecoration:"underline"}}> RM1 : 100 Coins</b>
                        </b>
                    </p>
                    <p>
                        <b className='main_blink_me' style={{color:"yellow", background:"red"}}>EVENT GAME </b>
                        <b style={{color:"yellow"}}>: RomaX, Magic Lamp, Crazy Hunters</b>
                            <br />
                            🎁 PRIZE Pool up to 
                            <b className='main_blink_me' style={{color:"yellow", background:"red"}}>$1,000,000 !</b>
                            <br />
                            🔥 
                            <b style={{color:"orange"}}>Get score multiply 3x during specific  periods, easy to earn High-value rewards.</b>
                            <br />
                            💡 For more info about event 👉 
                            <a href="" target='_blank' style={{display:"content", textDecoration:"underline", color:"yellow"}}> more details</a>
                    </p>
                </var>
            </div>
            <div class="clearfix mb-3"></div>
            {[{ name: "Tab 1" }, { name: "Tab 2" }, { name: "Tab 3" }, { name: "Tab 4" }, { name: "Tab 5" },].map((category, index) => (<div data-bs-parent={`#tab-group-${index}`} class={`collapse ${(active == index) ? "show" : ""}`} id={`tab-${index}`}>
                <div class="row me-0 ms-0 mb-0 position-relative px-2">
                    {Array.from({ length: Math.random() * 15 }).map((p, i) => (
                        <div class="col-4 ps-0 pe-0" >
                            <div class="card card-style m-1">
                                <img src="images/pictures/25s.jpg" class="img-fluid" />
                            </div>
                            <div className='d-flex justify-content-center'>
                                <div class="custom_play_btn">PLAY</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>))}
        </div>
    )
}

export default Tabs