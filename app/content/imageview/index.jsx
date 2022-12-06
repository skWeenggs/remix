import React, { useState } from 'react'
import Carousel from 'nuka-carousel';

function Slider({ data,setOpen,index,open }) {

console.log(index);
  const [current,setCurrent]=useState(index);
  const [images, setImages] = React.useState([])
  const handleClose = () => {
    setOpen(false);
  }


  const length = data.length;
  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  const prevSlide = () => {
      setCurrent(current === 0 ? length - 1 : current - 1);
  };
  if (!Array.isArray(data) || data.length <= 0) {
      return null;
  }

  return (
    // <div className='h-full max-w-full absolute z-[1030]' style={{ background: 'rgba(0,0,0,.92)' }} >
    //   {console.log(current)}
    //   <Carousel
    //     renderCenterLeftControls={({ previousSlide }) => (
    //       <button onClick={previousSlide} className={"gnext gbtn hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l"} style={{ backgroundColor: 'rgba(0,0,0,0.32)', color: 'white' }}>
    //         <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
    //           <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
    //         </svg>
    //       </button>
    //     )}
    //     renderCenterRightControls={({ nextSlide }) => (
    //       <button onClick={nextSlide} className={"gnext gbtn bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l"} style={{ backgroundColor: 'rgba(0,0,0,0.32)', color: 'white' }}>
    //         <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
    //           <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
    //         </svg>
    //       </button>
    //     )}
    //   >
    //     {data.map((msg,index) => 
      
    //     (
    //       <>
          
    //       <div className='h-screen flex justify-center text-center' >
    //        <img src={msg} className='h-full' style={{ display: 'flex', width: '80%', justifyContent: 'center', justifyItems: 'center', alignItems: 'center', height: '96%' }} />
          
    //         <button onClick={() => handleClose()} className='gnext gbtn bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l'
    //           style={{
    //             position: 'static',
    //             display: 'flex',
    //             marginRight: '-130px',
    //             alignSelf: 'flex-start',
    //             paddingLeft: ' -20px',
    //             /* right: -112px; */
    //             left: '15px',
    //             // marginLeft: '62px',
    //             backgroundColor: 'rgba(0, 0, 0, 0.32)',
    //             color: 'white',
    //           }}>
    //           <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
    //             <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
    //           </svg>
    //         </button>
    //       </div>
         
    //      </>

    //     ))
    //     }
    //   </Carousel>
    // </div>
   
    <div className="flex absolute h-screen w-screen bg-[#0004] z-50 justify-center items-center ">
    <div className={" mr-4 bg-white rounded-3xl p-5 hidden lg:block"} onClick={prevSlide}>
       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" className='h-6 w-6  text-black'>
           <path stroke-linecap="round" stroke-linejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
       </svg>
   </div>
   <div className={"absolute mr-4 top-0 right-0 rounded-3xl p-5 hidden lg:block"} onClick={()=>setOpen(!open)}>
   <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
   <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
   </svg>
   </div>
   {data.map((slide, index) => {
       return (
           <>
               {index === current && (
                   <img src={slide} alt='travel image' className={'h-screen w-full'} />
               )}
           </>
       );
   })}
   <div className={"ml-4 bg-white rounded-3xl p-5 hidden lg:block"} onClick={nextSlide}>
       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" className='h-6 w-6 text-black '  >
           <path stroke-linecap="round" stroke-linejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
       </svg>
   </div>
</div>
  )
}
export default Slider;