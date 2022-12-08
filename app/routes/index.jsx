import React,{useEffect,useState,useCallback} from 'react'
import { frame,brands,datasubject,details,client,data } from "../content/frame";
import { Link } from 'react-router-dom';
import onetwo from '../assets/onetwo.png'
import tech from '../assets/tech.png';
import Carousel from 'nuka-carousel/lib/carousel';
import Slider from '~/content/imageview';
import ImagePic from '../ImageViewer/index';
import ProgressLine from '../ProgressLine';
import Slide from '~/closure/Index';
import { RemixBrowser } from "@remix-run/react";
import hydrate from 'react-dom'

const Index=()=> {
	const [open, setOpen] = useState(false);
	const [lock,setlock]=useState(false);
	const [index,setIndex]=useState(0);
	const imageClick = (index) => {
		setlock(true);
		scrollToTop()
		setOpen(true)
		setIndex(index);
	}
	useEffect(() => {
			{lock
			?
			document.body.style.overflow = 'hidden'
			:
			document.body.style.overflow = ''
			}
	  },[lock])

	  const sliderSettings = {
		// ...
		responsive: [
		  {
			breakpoint: 1024,
			settings: {
			 slidesToShow: 2,
			}
		  },
		  {
			breakpoint: 600,
			settings: {
			 slidesToShow: 1,
			}
		   }
		]
	  };

	  const breakPoints = [
	
        // { width: 1, itemsToShow: 1 },
        // { width: 550, slidesToShow: 2 },
        // { width: 850, itemsToShow: 3 },
        // { width: 1000, itemsToShow: 4, itemsToScroll: 2 },
        // { width: 1450, itemsToShow: 5 },
        // { width: 1750, itemsToShow: 6 },
      ]

	useEffect(() => {
        document.title = "Weenggs Technology"
     }, []);
	 const scrollToTop=()=>{
		window.scrollTo({
			  top:0,
			  behavior:"smooth"
		  })
	  };

return (
  <div
   className='min-h-[calc(100vh-110px)]'
  >
	
	

	{open ?
		<Slider data={data}  setOpen={setOpen} index={index} open={open}  lock={lock} setlock={setlock} />
		:
	<>			
	

	  <div className="max-h-screen w-full inline-grid bg-no-repeat bg-center bg-cover bg-[url('https://www.weenggs.com/wp-content/uploads/2019/08/bg.jpg')]">
       <div className='bg-[#060606] opacity-70  flex'>
		<section className='h-[100vh] justify-center items-center  max-w-[1140px] flex m-auto'>
          <div className=' text-center  '>
            <h1 className='text-2xl font-sans lg:text-4xl md:text-4xl mb-10  2xl:text-5xl  text-[#ffffff]'>The epicenter where latest technology meets creativity!</h1>
            <div className='text-center  font-medium md:text-md  2xl:text-2xl  text-sm text-[#e9e5e5] text-md '>
              <div>A team of professionals that help you nurture & grow your business!</div>
              <div>Design & Develop Stunning Websites</div>
              <div>Code some Kick-ass Mobile Applications</div>
              <div>Provide 24/7 Customer Service</div>
            </div>
          </div>
        </section>
        </div>
		<button style={{marginTop:'-165px'}} className=" bg-red-700 z-0 hrover:bg-green m-auto flex font:semibold text-sm text-white align-center uppercase py-3 px-6 2xl:text-2xl  rounded-full">
              <a href='/request-a-quote' > 
                LET'S GET STARTED
              </a>
        </button>
        </div>

	  <div className='bg-[#f8f9fa]'>
		<section className=' py-20  lg:max-w-[1140px] p-10 block m-auto'>
		  <div className=''>
			<p className='text-center text-[15px] font-weight: 700; 2xl:text-2xl  text-[#999] '>YOUR NOT-SO-AVERAGE</p>
			<h1 className='text-sm  md:text-4xl mb-10 text-center 2xl:text-5xl text-[#b52332]'>MOBILE APPS AND WEBSITE DEVELOPERS</h1>
			<div className='text-center mb-10  lg:text-sm text-[#595959] text-sm m-5 2xl:text-2xl '>
			  Inspired by art and technology, we integrate designs and smart development to create some of the most user-centric websites and mobile applications. We are all about bringing your unique ideas to life and delivering success.
			</div>
			
			<div className="container  m-auto my-5">
			  <div className="grid lg:grid-cols-3 w-auto  m-auto ">
			  {frame.map((list,index)=>{
				return (
				  <div key={index} className="lg:w-[300px] md:my-5 bg-white h-auto m-[10px] p-[10px] mb-0 transition duration-500 ease-in-out transform 
				  hover:-translate-y-1 hover:scale-110 rounded-lg  ">
				  <div className='flex justify-center hover:animate-bounce '>
				  <img className='mb-4 text-center m-auto flex' width="80" height="80" src={list.logo}  alt="Weenggs Technology" />
				  </div>
					  <h1 className='text-center p-5 pt-5 text-md 2xl:text-lg uppercase'>{list.name}</h1>
					  <p className='text-[#999999] text-sm text-center 2xl:text-xl hover:animate-pulse'>{list.desc} </p>
				</div>
				)
			  })}
			  </div>
		  </div>
		  </div>
		</section>
		</div>
 
		<div className='bg-[#bf1e2e]'>
			<section className='lg:max-w-[1140px] p-10 block m-auto'>
			  <div className='py-20'>
				<p className='text-center text-[16px] text-[#e5e2e2] 2xl:text-2xl '>THE PERFECT BLEND OF</p>
				<h1 className='  text-[15px] md:text-3xl  mb-10 text-center 2xl:text-3xl text-[#fff]'>CREATIVE-PROWESS, TECHNOLOGY AND EXTRAORDINARY SERVICE!</h1>
				<div className='text-center mb-10  text-sm text-[#fff]  '>
				  <p className='leading-7  text-[#d3d3d3] 2xl:text-lg'>We are a team of experienced strategists, designers, developers and project managers. With get shit done attitude, we can accomplish any challenge out there Our in-depth understanding of futuristic technology is what brought us together and it’s what keeps us moving forward.
				  Leaving the extra-mile way behind, we happen to offer exceptional services to all our clients, including web development, mobile app development, UX design and more.</p>
				</div>
				<div className="text-center 2xl:text-2xl">
					<Link to='/request-a-quote'>
					<button className="bg-[#fff] md:mt-10 2xl:text-2xl font-semibold text-center tracking-[1px] py-3 px-6 rounded-full text-xs text-red-600 capitalize hover:text-green-300 ">
							TELL US WHAT YOU NEED AND WE WILL MAKE THE MAGIC HAPPEN!
					</button>
					</Link>
				</div>
			  </div>
			 
			</section>
		</div>

		<div className='bg-[#fff]'>
				<section className='lg:max-w-[1140px] pt-[100px] block m-auto'>
				<div className='w-full md:flex lg:flex '>
				<div className='lg:pt-20  lg:w-3/6 md:w-3/6 px-4 w-full'>
				<h1 className='text-[#999] text-sm font-bold 2xl:text-xl'>REASONS WHY TOP BRANDS</h1>
				<h1 className='text-[#bf1e2e] lg:text-4xl md:text-2xl 2xl:text-5xl font-bold mb-5'>CHOOSE US!</h1>
		
				<ul className='py-5'>
					{brands.map((listdata,index)=>{
					return(
					<li key={index} className='flex p-1' >
					<i className="fa m-1">&#xf087;</i>
					<div className='ml-1'>
					<h1 className='mb-2 text-base 2xl:text-xl'>{listdata.heading}</h1>
					<p className='m-auto text-gray-500 2xl:text-lg text-sm'>{listdata.desc}</p>
					</div>
					</li >
					)
					})}
				</ul>
				</div>
				<div className='lg:pt-20  pt-5 px-5 lg:w-3/6 md:w-3/6 p-20 '>
				<img className='' src={onetwo} alt='logo' />
				</div>
				</div> 
				</section>
		</div >



		<div className='bg-[#f8f9fa]'>
		
		<section className=' lg:w-full block m-auto '>
			<div className='py-20 h-full '>
			<p className='text-center  text-[#999] 2xl:text-2xl '>OUR</p>
			<h1 className='text-2xl lg:text-5xl md:text-4xl mb-10 text-center 2xl:text-5xl text-[#b52332]'>Work</h1>

			<div className="container  m-auto my-5">
			<div className="grid lg:grid-cols-3 md:grid-cols-2 lg:w-[990px] m-auto ">
				{data.map((item,index) =>{
				return(
					<>
							<div className="rounded-lg " key={index} >
							<button className=' h-[20px] mb-5 lg:hover:animate-bounce'>
							<img className=' ' width="auto" height="auto" src={item}   onClick={() => imageClick(index)}   alt="Weenggs Technology" />
							</button> 
							</div> 
						
						</>
				)})} 

			</div>
			
			</div>
			</div>
		</section>
		
		</div>




		<div className='bg-[#fff]'>
		<section className='lg:pb-20 lg:max-w-[1140px] block m-auto'>
		<div className='w-full md:flex lg:flex '>
			<div className='lg:py-20 p-10 lg:w-3/6 xl:4/6 md:w-3/6  w-full'>
			<h1 className='text-[#999] text-sm  2xl:text-xl'>TECHNOLOGIES WE ARE VERY SAVVY</h1>
			<h1 className='text-[#bf1e2e] lg:font-weight:600; lg:text-4xl md:text-2xl 2xl:text-6xl mb-5 '>WITH OUR SKILLS</h1>
			<div className='py-5'>
				{datasubject && datasubject.map((data,ind)=>{return(
					<ProgressLine key={ind}
					
					label={data.subject}
					visualParts={[
					{
						percentage:data.marks,
						color: "#bf1e2e"
					}
					]} 
				/>
			
				)})} 
			</div>
			</div>

			<div className='lg:pt-36 hidden md:block text-center py-20 lg:full md:w-3/6 '> 
			<img className='lg:hover:translate-y-10 transition duration-300 p-10 ' src={tech} alt='logo' />
			</div>
			</div> 
		</section>
		</div>

		<div className='bg-[#f8f9fa] '>
		<section className=' lg:max-w-[1140px] block m-auto'>
			<div className='py-[100px] h-full '>
			<p className='text-center  text-[#999] 2xl:text-2xl'>OUR</p>
			<h1 className='text-2xl lg:text-4xl md:text-4xl mb-10 text-center 2xl:text-5xl text-[#b52332]'>TESTIMONIALS</h1>
			<div className="container  m-auto my-5">
			
			<div className="flex flex-col w-full p-5  ">
								
						<Carousel autoplay slidesToShow={2} >
	
						{details.map((items,ind)=>{return (
						<>
						<div key={ind} className="grid  grid-cols-1 gap-1  lg:p-8  w-full  bg-[#fff] h-auto  rounded-lg " >
							<p className='text-[#595959] text-sm mb-5  h-[150px] 2xl:text-lg overflow-x-auto '>
							{items.title}
							</p>
						<div className='flex w-fit '>
			
						<img className='mx-4 m-auto rounded-full mr-2' width="80" height="80" src={items.image}   alt="Weenggs Technology" />
							<div className='text-sm text-[#4169e2] flex-wrap m-auto p-2'>
							<h1 className=''>{items.name}</h1>
							<a href="https://hoaviol.com" className="flex-wrap">{items.link}</a>
							</div>
						</div>             
						
						</div>
						</>
						)})}

						</Carousel>
					
					</div>
		
					</div>
				
					</div>
				
				</section>
		</div>


		<div className='bg-[#fff]'>
					<section className='lg:max-w-[1140px] justify-center block m-auto md:my-[100px] '>
						<div className='lg:pt-30 pt-30 p-10 h-full '>
						<p className='text-center  text-[#999] 2xl:text-2xl '>OUR</p>
						<h1 className='text-2xl lg:text-4xl md:text-4xl text-center  text-[#b52332]'>CLIENTS</h1>
						<p className='text-center text-sm text-[#999] 2xl:text-lg '>Some of the many clients we've helped achieve great results</p>
						<div className="container my-5 m-auto">
						<div className="flex flex-col w-full h-fit">		
							<div className=" max-w[1140px] "> 
									
							<Carousel dragging="true" slidesToScroll={1} slidesToShow={3}> 									
									{client && client.map((citem,ind)=>{return(
										<div key={ind} className="h-auto   m-auto ">
											<img className=' m-auto'  src={citem}   alt="img-not-found" />
									</div>
										
										
										)})}
							</Carousel>	
								
							</div>

						</div>
						</div>
						</div>
					
					</section>
		</div>  
	</>
	} 
    </div>
  );
}
export default Index;