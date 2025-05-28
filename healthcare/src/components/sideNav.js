import React from 'react'
import { IoGrid } from "react-icons/io5";
import '../stylesheet/sideNav.css'

import { LuArrowUpDown } from "react-icons/lu";
import { FaCalendarDays } from "react-icons/fa6";
import { FaNotesMedical } from "react-icons/fa6";
import { TbGraphFilled } from "react-icons/tb";
import { IoChatbubbleEllipsesSharp } from "react-icons/io5";
import { IoIosCall } from "react-icons/io";
import { IoSettings } from "react-icons/io5";

const SideNav = () => {
  return (
    <div >
      <div className="main">

        <div className="mLogo">
          <div className="h"> <span>Health</span></div>
          <div className="hh"><span>care.</span></div>
        </div>

        <div className="general">

          <div className="t1">
            <p>General</p>
          </div>

          <div className="t2">
            <div className="t2logo">
              <IoGrid style={{color:'deepblue'}} />
            </div>
            <div className="t2text">
              <p>Dashboard</p>
            </div>
          </div>

          <div className="t3">
            <div className="t3logo">
            <LuArrowUpDown style={{color:'gray'}} />
            </div>
            <div className="t3text">
              <p>History</p>
            </div>
          </div>

          <div className="t4">
            <div className="t4logo">
              <FaCalendarDays style={{color:'gray'}} />

            </div>
            <div className="t4text">
              <p>Calendar</p>
            </div>
          </div>

          <div className="t5">
            <div className="t5logo">
              <FaNotesMedical style={{color:'gray'}} />

            </div>
            <div className="t5text">
              <p>Appointments</p>
            </div>
          </div>

          <div className="t6">
            <div className="t6logo">
              <TbGraphFilled style={{color:'gray'}} />

            </div>
            <div className="t6text">
              <p>Statistics</p>
            </div>
          </div>

        </div>

        <div className="tools">

          <div className="t7">
            <p>Tools</p>
          </div>

          <div className="t8">
            <div className="t8logo">
              <IoChatbubbleEllipsesSharp style={{color:'gray'}} />

            </div>
            <div className="t8text">
              <p>Chat</p>
            </div>
          </div>

          <div className="t9">
            <div className="t9logo">
              <IoIosCall style={{color:'gray'}} />

            </div>
            <div className="t9text">
              <p>Support</p>
            </div>
          </div>

          <div className="t10">
            <div className="t10logo">
             <IoSettings style={{color:'gray'}} />
            </div>
            <div className="t10text">
              <p>Settings</p>
            </div>
          </div>
        </div>


    </div>
    </div>
  )
}

export default SideNav
