import React, { useContext, useEffect } from 'react'
import { AppContext } from '../App'

function TopSlider() {
    const [state] = useContext(AppContext)
    useEffect(() => {
        if (window.refreshSlider) {
            window.refreshSlider()
        }
    }, [state.promotions.length])
    return (
        <>
    
            <div class="splide single-slider slider-no-dots slider-no-arrows slider-visible" id="single-slider-1">
                <div class="splide__track">
                    <div class="splide__list">
                        <div class="splide__slide" style={{ width: "100vw" }}>
                            <div class="card card-style m-0 bg-5 shadow-card shadow-card-m" style={{ height: "129px" }}>
                                <div class="opacity-50"></div>
                            </div>
                        </div>
                        <div class="splide__slide" style={{ width: "100vw" }}>
                            <div class="card card-style m-0 bg-9 shadow-card shadow-card-m" style={{ height: "129px" }}>
                                <div class="opacity-50"></div>
                            </div>
                        </div>
                        <div class="splide__slide" style={{ width: "100vw" }}>
                            <div class="card card-style m-0 bg-7 shadow-card shadow-card-m" style={{ height: "129px" }}>
                                <div class="opacity-50"></div>
                            </div>
                        </div>
                        <div class="splide__slide" style={{ width: "100vw" }}>
                            <div class="card card-style m-0 bg-5 shadow-card shadow-card-m" style={{ height: "129px" }}>
                                <div class="opacity-50"></div>
                            </div>
                        </div>
                        <div class="splide__slide" style={{ width: "100vw" }}>
                            <div class="card card-style m-0 bg-9 shadow-card shadow-card-m" style={{ height: "129px" }}>
                                <div class="opacity-50"></div>
                            </div>
                        </div>
                        <div class="splide__slide" style={{ width: "100vw" }}>
                            <div class="card card-style m-0 bg-7 shadow-card shadow-card-m" style={{ height: "129px" }}>
                                <div class="opacity-50"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <img src={require("../images/bank_banner.png")} alt="" width="100%" className='my-2'/>
            <div className='home_live'>
                <table>
                    <thead>
                        <tr>
                            <td colSpan="5" className='live_table_title'>
                                <span>LIVE TRANSACTION</span>
                                <div className='blink_live'>LIVE <span></span></div>
                            </td>
                        </tr>
                        <tr>
                            <td colSpan="2" className='tbl_green'>Deposit</td>
                            <td colSpan="3" className='tbl_red'>Withdraw</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>60******407</td>
                            <td className='amt'>RM10.00</td>
                            <td>60*******581</td>
                            <td className='amt'>RM900.71</td>
                            <td>PUSSY</td>
                        </tr>
                        <tr>
                            <td>60******407</td>
                            <td className='amt'>RM10.00</td>
                            <td>60*******581</td>
                            <td className='amt'>RM900.71</td>
                            <td>PUSSY</td>
                        </tr>
                        <tr>
                            <td>60******407</td>
                            <td className='amt'>RM10.00</td>
                            <td>60*******581</td>
                            <td className='amt'>RM900.71</td>
                            <td>PUSSY</td>
                        </tr>
                        <tr>
                            <td>60******407</td>
                            <td className='amt'>RM10.00</td>
                            <td>60*******581</td>
                            <td className='amt'>RM900.71</td>
                            <td>PUSSY</td>
                        </tr>
                        <tr>
                            <td>60******407</td>
                            <td className='amt'>RM10.00</td>
                            <td>60*******581</td>
                            <td className='amt'>RM900.71</td>
                            <td>PUSSY</td>
                        </tr>
                   
                    </tbody>
                </table>
            </div>
          
        </>
    )
}

export default TopSlider