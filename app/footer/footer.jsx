import React from 'react'
import img from '../assets/weenggs.png'
import { NavLink,Link } from "@remix-run/react";
const Footer = () => {
  return (
    <div class="bg-[#444] h:full lg:text-left">
    <div class="container m-auto p-10 ">
        <div class="grid lg:grid-cols-3  lg:max-w-[1140px] m-auto ">
        <div class=" lg:max-w-[350px]">
        <NavLink to='/' id="scrollToTop">
         <img class='mb-6 custom-logo bg-transparent' width="200" height="50" src={img} alt="Weenggs Technology" />
        </NavLink>

            <ul class="list-none mb-0 w-[270px]">
            <li>
              <p class='text-white mb-5 text-base  letter-spacing: 0.025em'>
            We craft some artistic yet powerful iOS & Android applications for you.
            </p>
            </li>
            
            </ul>
        </div>

        <div class=" lg:max-w-[350px]">
            <h1 class="uppercase text-base font-bold text-[16px] mb-2.5 text-white">CONTACT US</h1>

            <ul class="list-none text-base mb-0">
            <div class='flex text-white'>
            <li class='m-1 flex'>
                <i class="fa fa-skype" ></i>
            </li>
            <Link to={"#"} class="ml-3 mb-4">weenggs</Link>
            </div>
            <div class='flex text-white'>
            <li class='m-1 flex'>
            <i class="fa fa-envelope"></i>
            </li>
            <Link to={"mailto:info@weenggs.com"} class="ml-3 mb-4">hr@weenggs.com</Link>

            </div>
            <div class='flex text-white'>
            <li class='m-1 flex'>
            <i class="fa fa-phone"></i>
            </li>
            <Link to="tel:+919428616132" class="ml-4 mb-4">91 9428616132</Link>
            </div>
            <div class='flex text-white'>
            <li class='m-1 flex'>
            <i class="fa fa-location-arrow"></i>
            </li>
            <Link to={"/contact"} class="ml-4 mb-4">221 Avalon, Katargam,<br />
                Surat – 395004,<br/>
                GJ, India
            </Link>

            </div>
           
            </ul>
        </div>

        <div class=" lg:max-w-[350px]">
            <h1 class="uppercase font-bold mb-2.5 text-[16px] text-base text-white">NAVIGATE</h1>

            <ul class="list-none text-base text-white">
            <li class='mb-4 lg:w-[300px] '>
                <NavLink class="w-full inline-block" to={'/'}  >Home</NavLink>
            </li>

            <li class='mb-4'>
                <NavLink class="w-full inline-block" to="/about" id="scrollToTop">About us</NavLink>
            </li>
            <li class='mb-4'>
                <NavLink class="w-full inline-block" to="/portfolio" id="scrollToTop">Portfolio</NavLink>
            </li>
            <li class='mb-4'>
            <NavLink class="w-full inline-block" to="/careers" id="scrollToTop" >Carrers</NavLink>
            </li>
            <li class='mb-4'>
            <NavLink class="w-full inline-block" to="/contact" id="scrollToTop" >Contact</NavLink>
            </li>
            </ul>
        </div>

    
        </div>
    </div>

    <div class="text-white bg-[#666]  text-center p-2.5 text-[13px]">
        <p class="max-w-[1140px] m-auto">
            © Copyright <Link to="/">weenggs.com</Link>. All Right Reserved.
            <Link class="" to="https://tailwind-elements.com/"></Link>
        </p>
    </div>
  
   </div>
  )
}

export default Footer