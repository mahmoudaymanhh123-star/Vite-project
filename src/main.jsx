import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <div>
    <div className="relative z-50 bg-white w-full flex  items-center justify-center py-1">
      <div className='flex justify-center items-center pr-67.25'>
        <img className='w-10 h-10 rounded-xl translate-y-1.5' src="/image1.svg" alt="" />
        <h1 className='w-39 h-7 font-[Poppins] font-bold text-[20px] leading-7 text-[#222222] '>Gourmet Bistro</h1>
      </div>
      <nav className='flex  items-center justify-center gap-8 '>
        <a className=' h-6 text-[#6B7280] font-medium font-[poppins] text-[16px] leading-6 cursor-pointer hover:text-[#FF6B35] transition-all duration-300'>Home</a>
        <a className=' h-6 text-[#6B7280] font-medium font-[poppins] text-[16px] leading-6 cursor-pointer hover:text-[#FF6B35] transition-all duration-300'>Menu</a>
        <a className=' h-6 text-[#6B7280] font-medium font-[poppins] text-[16px] leading-6 cursor-pointer hover:text-[#FF6B35] transition-all duration-300'>Our Story</a>
        <a className=' h-6 text-[#6B7280] font-medium font-[poppins] text-[16px] leading-6 cursor-pointer hover:text-[#FF6B35] transition-all duration-300'>Gallery</a>
      </nav>
      <div className='pl-67.25'>
        <button className="bg-[#FF6B35] text-white flex items-center justify-center rounded-full px-6 py-2.5 
             cursor-pointer shadow-gray-800 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 ">
          <span className="font-semibold text-[16px] leading-6 font-[poppins]">Book a Table</span>
        </button>
      </div>
    </div>
    <div>
      <section className='w-full h-120'>
        <img className='absolute object-cover w-full h-160' src="/image2.png" alt="" />
        <div className='relative z-10 h-full flex items-center justify-center  px-6'>
          <div className='w-full max-w-3xl pt-30 pl-30'>
            <div className='w-fit  bg-[#FF6B351A] py-1.5 px-4 rounded-full'>
              <h1 className='font-[poppins] text-[10px] tracking-[0.35px] font-bold text-[#FF6B35]'>THE ART OF DINING</h1>
            </div>
            <h1 className='w-161.25 h-67.5 font-[poppins] font-bold text-[72px] leading-22.5 text-[#FFFFFF] '>Elevated culinary{' '}
              <span className='w-161.25 h-67.5 font-[poppins] font-bold text-[72px] leading-22.5 text-[#FF6B35]'>experiences</span> {' '} for
              every palate.</h1>
            <div className='py-6'><p className='w-lg h-16.25 font-[poppins] font-normal text-[20px] leading-[32.5px] text-[#E5E7EB]'>Discover a symphony of flavors crafted with locally
              sourced ingredients and exceptional passion.</p>
            </div>
            <div className='flex gap-4'>
              <button className='w-48 h-15 rounded-2xl py-4 px-8 bg-[#FF6B35] flex items-center justify-center gap-2 cursor-pointer 
                                 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5'>
                <img src="/image3.svg" alt="" />
                <span className='w-25 h-7 font-[poppins] font-semibold text-[18px] leading-7 text-[#FFFFFF]'>View Menu</span>
              </button>
              <button className='w-52.5 h-15.5 rounded-2xl border-[#FFFFFF33] border-2 backdrop-blur-md py-4 px-8 bg-[#FFFFFF1A] flex items-center justify-center gap-2 cursor-pointer
                                 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5'>
                <img src="/image4.svg" alt="" />
                <span className='whitespace-nowrap font-[poppins] font-semibold text-[18px] leading-7 text-[#FFFFFF]'>Book a Table</span>
              </button>
            </div>
            <div className='mt-8 flex items-center gap-4'>
              <div className='flex -space-x-3'>
                <img className='w-10 h-10 rounded-full object-cover  ' src="/image5.svg" alt="" />
                <img className='w-10 h-10 rounded-full object-cover  ' src="/image6.svg" alt="" />
                <img className='w-10 h-10 rounded-full object-cover  ' src="/image7.svg" alt="" />
              </div>
              <p className='text-lg text-white/90 font-[poppins] font-normal text-[16px] leading-6'>
                <span className='text-lg text-white/90 font-[poppins] font-bold text-[16px] leading-6'>4.9-5</span> from over 2,000+ happy diners
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
    <div>
      <section id='about' className='w-full flex justify-center items-center h-200 pt-32 bg-white'>

        <div className='  grid grid-cols-2 gap-6  items-center'>

          <div className='relative w-120 h-140  '>
            <div className='absolute -top-4 -left-4 w-24 h-24 rounded-3xl bg-[#FF6B35]/10' />

            <img className='relative w-full h-full rounded-3xl object-cover shadow-2xl' src="/image8.png" alt="" />

            <div className='absolute -bottom-6 -right-6  rounded-3xl p-8 bg-[#222222] shadow-xl'>
              <p className=' w-15 h-10 font-[poppins] font-bold text-[36px] leading-10 text-[#FFFFFF]'>15+</p>
              <p className='font-[poppins] font-normal text-[14px] leading-4 tracking-5 uppercase text-[#6B7280]'>Years of Excellence</p>
            </div>
          </div>

          <div className=' flex flex-col gap-6 '>

            <h1 className='w-142 h-30 text-[48px] font-[poppins] leading-15 font-bold text-[#222222] '>Crafting stories on
              every plate since <span className='w-142 h-30 text-[48px] font-[poppins] leading-15 font-bold text-[#FF6B35]'>{' '}2008</span>
              <span className='w-142 h-30 text-[48px] font-[poppins] leading-15 font-bold text-[#222222]'>.</span></h1>

            <p className='w-142 h-29.25 font-[poppins] font-normal text-[18px] leading-[29.5px] text-[#6B7280]'>Gourmet Bistro was born from a simple vision: to create a
              space where culinary excellence meets genuine hospitality.
              Our journey began in a small kitchen with big dreams, focusing
              on the purity of ingredients and the joy of shared meals.</p>

            <p className='w-142 h-29.25 font-[poppins] font-normal text-[18px] leading-[29.5px] text-[#6B7280]'>Today, we continue that legacy, blending traditional
              techniques with modern innovation to bring you a menu that
              celebrates the best of the season.</p>

            <div className='grid grid-cols-2 gap-8'>

              <div className='h-16 flex items-center gap-3 relative rounded-xl '>
                <img src="/image9.svg" alt="" className='w-10 h-10 absolute top-0' />
                <div className=' flex-col pl-13 gap-1'>
                  <h1 className='w-28.5 h-6 font-[poppins] font-bold text-[16px] leading-6 text-[#222222]'>Fresh Harvest</h1>
                  <p className='w-44 h-10 font-[poppins] font-normal text-[14px] leading-5 text-[#6B7280]'>Daily sourced organic
                    ingredients.</p>
                </div>
              </div>
              <div className='h-16 flex items-center gap-3 relative rounded-xl '>
                <img src="/image9.svg" alt="" className='w-10 h-10 absolute top-0' />
                <div className=' flex-col pl-13 '>
                  <h1 className='w-26 h-6 font-[poppins] font-bold text-[16px] leading-6 text-[#222222]'>Expert Chefs</h1>
                  <p className=' h-10 font-[poppins] font-normal text-[14px] leading-5 pt-1 text-[#6B7280]'>Award-winning culinary team.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div >
    <section className='w-full h-220 bg-[#F8F9FA] flex justify-center pt-12'>
      <div className='w-[70%] h-200 flex flex-col items-center justify-center'>
        <div className=' w-168.75 gap-6 flex flex-col  items-center pb-16'>
          <h1 className=' h-12 font-[poppins] font-bold text-[48px] leading-12 text-[#222222]'>Visual Feast</h1>
          <p className=' h-14 font-[poppins] font-normal text-[18px] leading-7 text-center  text-[#6B7280]'>A glimpse into our kitchen and the vibrant atmosphere we've created for
            you.</p>
        </div>
        <div className='w-[90%] grid grid-cols-2 gap-6 items-center'>
          <img className='w-full h-125 rounded-3xl bg-neutral-200' src="/image11.png" alt="" />

          <div className='grid grid-cols-1 gap-6'>
            <img className='w-full h-63.25 rounded-3xl bg-neutral-200' src="/image12.jpg" />
            <div className='grid grid-cols-2 gap-6 pt-5'>
              <img className='w-full h-50 rounded-3xl bg-neutral-200' src='/image13.jpg' />
              <img className='w-full h-50 rounded-3xl bg-neutral-200' src='image14.jpg' />
            </div>
          </div>
        </div>
      </div>
    </section>
  </div >
)

