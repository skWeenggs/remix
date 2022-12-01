/* eslint-disable react-hooks/rules-of-hooks */
import React,{useEffect, useState} from 'react'
import {carrier} from '../content/carreier'
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';

const Careers = () => {
    useEffect(() => {
        document.title = "Careers | Weenggs Technology"
     }, []);
    const [ind,setInd]=useState();
   const handlechange=(e,index)=>{
     e.preventDefault();
    setExpend(!isexpended)
    setInd(index)
    console.log(index)
   }
    const [isexpended,setExpend]=useState(true);
  return (
    <div>
        <div className='h-full w-full  bg-no-repeat bg-center bg-cover '>
    <div className='bg-[#060606] opacity-90 z-0 flex'>
    <section className='lg:h-[320px]  lg:w-[990px] block m-auto'>
      <div className='lg:h-[320px] m-auto flex text-center flex-col justify-center'>
        <h1 className='text-2xl pt-10 lg:text-5xl md:text-5xl  text-center  text-[#ffffff] z-30'>Careers</h1>
        <div className='text-center mb-10 font-md lg:text-xm   text-gray-500  m-5' style={{letterSpacing:'5px'}}>
        OUR CULTURE
        </div>
       
      </div>
    </section>
    </div>
    </div>

    <div className='bg-[#fff]'>
    <section className='lg:max-w-[1140px] block m-auto'>
     <div className='w-full md:flex lg:flex '>
     <div className='lg:pt-20  lg:w-3/6 md:w-3/6 py-5 md:py-20  w-full'>
     
     <h1 className='text-[#000] m-5 text:text-2xl lg:text-4xl  mb-5'>We use unique, custom-built tools to give us the edge</h1>

     <ul className='py-5 m-5'>
       
       <h1 className='m-auto text-sm text-gray-400'>If you are good at something and want to check your skills, feel free to apply for your favorite position on<br/> <a href="#" className="text-blue-500"> hr@weenggs.com</a>  </h1>
     </ul>
     </div>
     <div className='lg:pt-20 py-5 md:py-20 p-10  lg:w-3/6 md:w-3/6 '>
   
    

       <Accordion allowMultipleExpanded={false}  className='w-full' >
       {carrier.map((item,index)=>{
        return(
        <div className='m-5 border-2' key={index} >
          <AccordionItem >
              <AccordionItemHeading onClick={(e)=>{handlechange(e,index)}}>
                 
                <AccordionItemButton>
                <div className='flex m-3 justify-between '>
                   <div className=''>
                   {item.brand}
                   </div>
                   { ind == index ? <i className='fa fa-caret-up text-green-400 mr-2'></i>  :  <i className='fa fa-caret-right mr-2'></i>  }

                 </div>
                  <hr/>
                  </AccordionItemButton>
                
              </AccordionItemHeading>
              <AccordionItemPanel>
                  <p className='m-auto p-2 text-sm text-gray-400'>
                   {item.desc}
                  </p>
              </AccordionItemPanel>
          </AccordionItem>
         </div>
        )
      })}
      </Accordion>
      </div>

     </div> 
     <div className="bg-blue-100 border-l-4 mb-4 border-[#659bbc] text-[#659bbc]  p-4" role="alert">
        <p className="text-[16px] text-[#659bbc]">Remember</p>
        <p className="text-sm">Work from office is the first preference but developer can still apply for WFH position as well. Previous work record and document verification is required while interviewing.</p>
      </div>
    </section>
    </div>
    </div>
  )
}

export default Careers