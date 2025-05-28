import React from 'react'
import '../stylesheet/last.css'

import Schedule from './calendar';


import { FaCaretSquareLeft } from "react-icons/fa";
import { FaSquarePlus } from "react-icons/fa6";
import { RiArrowLeftFill } from "react-icons/ri";
import { RiArrowRightFill } from "react-icons/ri";
import { IoMdHeart } from "react-icons/io";

const Last = () => {
  return (
    <div>
      <div className="mainL">
      
      <div className="ldiv1">
        <div className="ldiv1sub">
        <FaCaretSquareLeft style={{color:'skyblue'}} size={30} />
        <FaSquarePlus style={{color:'darkblue'}} size={30} />
        </div>
      </div>

      <div className="ldiv2">
        <div className="ldiv2sub1">
          <p>October 2021</p>
        </div>
        <div className="ldiv2sub2">
          <RiArrowLeftFill size={20} />
          <RiArrowRightFill size={20} />
        </div>
      </div>

      <div className="ldiv3">
       <Schedule/>
        <div className="ldiv31"></div>
        <div className="ldiv32"><p>09:00</p></div>
        <div className="ldiv33"></div>
        <div className="ldiv34"></div>
      </div>

      <div className="ldiv4">
        <div className="ldiv4sub1">
          <div className="dentist">
            <p>Dentist</p>
            <img height={30} src="https://png.pngtree.com/png-vector/20240204/ourmid/pngtree-tooth-png-illustration-png-image_11608665.png" alt="" />
          </div>
          <div className="time1">
            <p>09:00-11:00</p>
          </div>
          <div className="drname1">
            <p>Dr. Cameron Williamson</p>
          </div>
        </div>
        <div className="ldiv4sub2">
          <div className="physiotherapy">
            <p>Physiotherapy Appointment</p>
            <img height={20} src="https://static-00.iconduck.com/assets.00/muscle-plain-emoji-249x256-l1lapfag.png" alt="" />
          </div>
          <div className="time2">
            <p>11:00-12:00</p>
          </div>
          <div className="drname2">
            <p>Dr. Kelvin Djones</p>
          </div>
        </div>
      </div>

      <div className="ldiv5">
        <h2>The Upcoming Schedule</h2>
      </div>
      <div className="ldiv6">
        <p>On Thursday</p>
      </div>

      <div className="ldiv7">
         
           <div className="ldiv7sub1">
            <div className="ldiv7sub1sub">
            <p>Health checkup complete</p>
            <img height={20} src="https://static-00.iconduck.com/assets.00/syringe-emoji-2048x2048-6dto4cbv.png" alt="" />
            </div>
            <p className='ldiv711'>11:00 AM</p>
           </div>

           <div className="ldiv7sub2">
            <div className="ldiv7sub2sub">
              <p>Ophthalmologist</p>
              <img height={20} src="https://emoji.iamrohit.in/img-apple/1f440.png" alt="" />
            </div>
            <p className='ldiv714'>14:00 PM</p>
           </div>
          
      </div>

      <div className="ldiv8">
        <p>On Saturday</p>
      </div>

      <div className="ldiv9">
         
           <div className="ldiv9sub1">
            <div className="ldiv9sub1sub">
            <p>Cardiologist</p>
           <IoMdHeart style={{color:'red'}} size={25} />
            </div>
            <p className='ldiv911'>12:00 AM</p>
           </div>

           <div className="ldiv9sub2">
            <div className="ldiv9sub2sub">
              <p>Neurologist</p>
              <img height={20} src="https://png.pngtree.com/png-clipart/20231202/original/pngtree-doctor-3d-rendered-emoji-icon-png-image_13755185.png" alt="" />
            </div>
            <p className='ldiv914'>16:00 PM</p>
           </div>
          
      </div>

      


      </div>
    </div>
  )
}

export default Last
