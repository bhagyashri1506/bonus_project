import React from 'react';
import { useNavigate } from 'react-router-dom';

const BalanceWrapper = () => {
  const navigate = useNavigate()
  return (
    <>
      <div className="balance_wrapper">
        <div>
          <div className="pinfo">
            <div className="bal_links">
              <a href=".#" onClick={e => {
                e.preventDefault()
                navigate("/")
              }}>LOGIN</a>
              <a href=".#" onClick={e => {
                e.preventDefault()
                navigate("/signup")
              }} className='reg'>REGISTER</a>
            </div>
          </div>
          <div className="pbalance">
            <div className="pbal_btns">
              <a href=".#" onClick={e => {
                e.preventDefault()
                navigate("/deposit")
              }} className="pbal_btn vc-deposit">Deposit</a>
              <a href=".#" onClick={e => {
                e.preventDefault()
                navigate("/withdraw")
              }} className="pbal_btn vc-withdraw">Withdraw</a>
              <a href=".#" onClick={e => {
                e.preventDefault()
                navigate("/home")
              }} className="pbal_btn vc-refresh">REFRESH</a>
            </div>
            <p>BALANCE:</p>
            <p className='vc_balance'>RM0.00</p>
            <div className="vc-note">
              <div></div>
              <div>
                <p>Minimum Deposit:
                  <b>RM5.00</b>
                </p>
                <p>Minimum Withdrawal:
                  <b>RM50.00</b>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bonus_wrapper">
        <div id="promotion">
          <div className="center_wrapper">
            <div className="packet_grp">
              <div className="packet_title">
                <b style={{ color: "orange" }}>BONUS888【SPONSOR BY MEGA888】</b>
              </div>
              <div className="packet_wrapper">
                <div className="packet ineligible">
                  <img src={require("../images/bonus-bg.png")} alt="" />
                  <div className="packet_text">
                    <p>RM10 FREE RM37</p>
                    <p>RM37.00</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="packet_grp">
              <div className="packet_title">
                <b style={{ color: "gold" }}>BONUS888 SPECIAL FREE</b>
              </div>
              <div className="packet_wrapper">
                <div className="packet">
                  <img src={require("../images/bonus-bg.png")} alt="" />
                  <div className="packet_text">
                    <p>RM10 FREE RM37</p>
                    <p>RM37.00</p>
                  </div>
                </div>
                <div className="packet ineligible">
                  <img src={require("../images/bonus-bg.png")} alt="" />
                  <div className="packet_text">
                    <p>RM10 FREE RM37</p>
                    <p>RM37.00</p>
                  </div>
                </div>
                <div className="packet ineligible">
                  <img src={require("../images/bonus-bg.png")} alt="" />
                  <div className="packet_text">
                    <p>RM10 FREE RM37</p>
                    <p>RM37.00</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="packet_grp">
              <div className="packet_title">
                <b style={{ color: "gold" }}>BONUS888【SPONSOR BY MEGA888】</b>
              </div>
              <div className="packet_wrapper">
                <div className="packet ineligible">
                  <img src={require("../images/bonus-bg.png")} alt="" />
                  <div className="packet_text">
                    <p>RM10 FREE RM37</p>
                    <p>RM37.00</p>
                  </div>
                </div>
                <div className="packet ineligible">
                  <img src={require("../images/bonus-bg.png")} alt="" />
                  <div className="packet_text">
                    <p>RM10 FREE RM37</p>
                    <p>RM37.00</p>
                  </div>
                </div>
                <div className="packet ineligible">
                  <img src={require("../images/bonus-bg.png")} alt="" />
                  <div className="packet_text">
                    <p>RM10 FREE RM37</p>
                    <p>RM37.00</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="packet_grp">
              <div className="packet_title">
                <b style={{ color: "gold" }}>BONUS888【SPONSOR BY MEGA888】</b>
              </div>
              <div className="packet_wrapper">
                <div className="packet ineligible">
                  <img src={require("../images/bonus-bg.png")} alt="" />
                  <div className="packet_text">
                    <p>RM10 FREE RM37</p>
                    <p>RM37.00</p>
                  </div>
                </div>
                <div className="packet ineligible">
                  <img src={require("../images/bonus-bg.png")} alt="" />
                  <div className="packet_text">
                    <p>RM10 FREE RM37</p>
                    <p>RM37.00</p>
                  </div>
                </div>
                <div className="packet ineligible">
                  <img src={require("../images/bonus-bg.png")} alt="" />
                  <div className="packet_text">
                    <p>RM10 FREE RM37</p>
                    <p>RM37.00</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="packet_grp">
              <div className="packet_title">
                <b style={{ color: "gold" }}>BONUS888【SPONSOR BY MEGA888】</b>
              </div>
              <div className="packet_wrapper">
                <div className="packet ineligible">
                  <img src={require("../images/bonus-bg.png")} alt="" />
                  <div className="packet_text">
                    <p>RM10 FREE RM37</p>
                    <p>RM37.00</p>
                  </div>
                </div>
                <div className="packet ineligible">
                  <img src={require("../images/bonus-bg.png")} alt="" />
                  <div className="packet_text">
                    <p>RM10 FREE RM37</p>
                    <p>RM37.00</p>
                  </div>
                </div>
                <div className="packet ineligible">
                  <img src={require("../images/bonus-bg.png")} alt="" />
                  <div className="packet_text">
                    <p>RM10 FREE RM37</p>
                    <p>RM37.00</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="packet_grp">
              <div className="packet_title">
                <b style={{ color: "gold" }}>BONUS888【SPONSOR BY MEGA888】</b>
              </div>
              <div className="packet_wrapper">
                <div className="packet ineligible">
                  <img src={require("../images/bonus-bg.png")} alt="" />
                  <div className="packet_text">
                    <p>RM10 FREE RM37</p>
                    <p>RM37.00</p>
                  </div>
                </div>
              </div>
              <div className="packet ineligible">
                <img src={require("../images/bonus-bg.png")} alt="" />
                <div className="packet_text">
                  <p>RM10 FREE RM37</p>
                  <p>RM37.00</p>
                </div>
              </div>
              <div className="packet ineligible">
                <img src={require("../images/bonus-bg.png")} alt="" />
                <div className="packet_text">
                  <p>RM10 FREE RM37</p>
                  <p>RM37.00</p>
                </div>
              </div>
            </div>
            <div className="packet_grp">
              <div className="packet_title">
                <b style={{ color: "gold" }}>BONUS888【SPONSOR BY MEGA888】</b>
              </div>
              <div className="packet_wrapper">
                <div className="packet ineligible">
                  <img src={require("../images/bonus-bg.png")} alt="" />
                  <div className="packet_text">
                    <p>RM10 FREE RM37</p>
                    <p>RM37.00</p>
                  </div>
                </div>
                <div className="packet ineligible">
                  <img src={require("../images/bonus-bg.png")} alt="" />
                  <div className="packet_text">
                    <p>RM10 FREE RM37</p>
                    <p>RM37.00</p>
                  </div>
                </div>
                <div className="packet ineligible">
                  <img src={require("../images/bonus-bg.png")} alt="" />
                  <div className="packet_text">
                    <p>RM10 FREE RM37</p>
                    <p>RM37.00</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="refer_wrapper">
        <div className="wrapper bg">
          <p>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
          </p>
          <a href="" className='refer_btn ref'>Invite Friend</a>
          <a href="" className='refer_btn downline'>Downline</a>
          <a href="" className='refer_btn copy'>Copy Referrer Link</a>
          <a href="" className='refer_btn more'>More Info</a>
        </div>
      </div>
      <div className="lucky-wrapper"></div>
      <div className="movie-wrapper">
        <div>
          <div className="movie">
          </div>
        </div>
      </div>
      <div className="soccer-display">
        <div id="soccer">
          <div>
            <var>
              <div className="match">
                <div className="team">
                  <img src={require("../images/team1.png")} alt="" />
                  <div className="team_name">Burnley</div>
                </div>
                <div className="match_info">
                  <span className="label">Start Time</span>
                  <span className="date">12 Aug 2023</span>
                  <span className="time">00:30</span>
                  <a href="" className="betmatch">BET NOW</a>
                </div>
                <div className="team">
                <img src={require("../images/team2.png")} alt="" />
                <div className="team_name">Man City</div>
                </div>
              </div>
            </var>
          </div>
          <div className="show_more">Show More</div>
        </div>
      </div>
      <div className="site_tabs">
        <div className="w-100">
          <div style={{width:"1185px"}}>
            <div className="site-tab" style={{width:"79px"}}>
              <img src={require("../images/game1.png")} alt="" width="100%" />
            </div>
            <div className="site-tab" style={{width:"79px"}}>
              <img src={require("../images/game2.png")} alt="" width="100%" />
            </div>
            <div className="site-tab" style={{width:"79px"}}>
              <img src={require("../images/game3.png")} alt="" width="100%" />
            </div>
            <div className="site-tab" style={{width:"79px"}}>
              <img src={require("../images/game4.png")} alt="" width="100%" />
            </div>
            <div className="site-tab" style={{width:"79px"}}>
              <img src={require("../images/game5.png")} alt="" width="100%" />
            </div>
            <div className="site-tab" style={{width:"79px"}}>
              <img src={require("../images/game6.png")} alt="" width="100%" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default BalanceWrapper