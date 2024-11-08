import './App.css'
import chair from './assets/images/hero-img.png'
import productOne from './assets/images/p-1.jpg'
import productTwo from './assets/images/p-2.jpg'
import productThree from './assets/images/p-3.jpg'
import productFour from './assets/images/p-4.jpg'
import productFive from './assets/images/p-5.jpg'
import heroImg from './assets/images/hero-img.png'
import { FaPhoneAlt } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import fast from "./assets/images/fast.png";
import delivery from "./assets/images/delivery.png";
import customers from "./assets/images/customers.png";
import { FaLocationPin } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { FaGlobe } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa";
import Iframe from 'react-iframe';

function App() {

  return (
    <>
    {/* Hero Section */}
    <section className={`bg-img w-screen h-screen`}>
      <nav className='px-3 py-4 mx-4 md:px-8 md:py-4 md:mx-12'>
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div>
            <span className='md:text-xl font-head'>NTI</span>
        </div>
        {/*   Links */}
        <div className='hidden md:flex space-x-6 font-btn-text tracking-wider md:text-xl'>
         <span>Home</span>
         <span>About</span>
         <span>Testimonals</span>
         <span>Products</span>
        </div>


       {/*button  */}

        <div>
          <a href="" className='bg-[#f0e8e1] px-4 py-2 rounded-xl shadow-lg
            hover:bg-[#2b1100] hover:text-white 
           transition-all ease-in-out
          drop-shadow-md font-btn-text md:text-2xl'>Order now</a>
        </div>

      </div>
      </nav>

    {/* MAIN   */}
        <div className='mt-28 md:mt-0 py-8 px-2 mx-3 md:mx-12 md:py-12 md:px-6 flex justify-between flex-col md:flex-row items-center '>
        <div className='text-center md:text-start justify-center md:items-start items-center flex flex-col'>
            <h1 className='font-head text-6xl md:text-7xl'>Find your </h1> 
            <h1 className='font-texts text-4xl md:text-5xl'>Dream furniture</h1>
            <p className='font-para text-2xl md:text-2xl'>Nature World of Furniture and interiors..</p>
           <div className='mt-4 text-white hover:text-[#2b1100] bg-[#2b1100] hover:bg-[#f5f0ef] 
            border-[#2b1100] border transition-all ease-in-out
           hover:border-green-900 font-btn-text md:text-xl text-xl w-fit md:mt-3 px-6 py-4 rounded-2xl'>
             <a href="" className='flex items-center  '>Explore Products
             <FaChevronRight className='ml-2' />
             </a></div>
        </div>

          <div>
            <img src={heroImg} className='md:w-[45em] w-[50rem] floating' alt="" />
          </div>

        </div>
      </section>

      {/* Products Secion */}
      <section className=' bg-white h-auto py-12'>
        <div className=' mx-4 md:mx-12'>
            <h1 className='text-center font-head text-3xl md:text-4xl'>Products</h1>
        
        {/* Cards */}

        <div className="grid md:grid-cols-4 grid-cols-1 py-12 gap-10">
          <div className="h-fit py-4 w-fit text-center rounded-3xl shadow-xl border border-[#b99c88] bg-[#f5f0ef]">
              <div>
                <img src={productFive} alt="" />
              </div>
              {/* Name and Price */}
              <div className="px-6 h-fit flex justify-between items-center">
                <div className="">
                  <span className='font-btn-texts md:text-xl'>Chair</span>
                </div>
                <div>
                  <span className='font-btn-text md:text-xl'>#35,000</span>
                </div>
              </div>
              <a href="" className=' font-btn-text bg-[#2b1100] my-3 text-white px-6 py-1 rounded-md'>Order Now</a>
          </div>
          <div className="h-fit py-4 w-fit text-center rounded-3xl shadow-xl border border-[#b99c88] bg-[#f5f0ef]">
              <div>
                <img src={productTwo} alt="" />
              </div>
              {/* Name and Price */}
              <div className="px-6  flex justify-between items-center">
                <div className="">
                  <span className='font-btn-texts md:text-xl'>Chair</span>
                </div>
                <div>
                  <span className='font-btn-text md:text-xl'>#35,000</span>
                </div>
              </div>
              <a href="" className=' font-btn-text bg-[#2b1100] my-3 text-white px-6 py-1 rounded-md'>Order Now</a>
          </div>
          <div className="h-fit py-4 w-fit text-center rounded-3xl shadow-xl border border-[#b99c88] bg-[#f5f0ef]">
              <div>
                <img src={productOne} alt="" />
              </div>
              {/* Name and Price */}
              <div className="px-6  flex justify-between items-center">
                <div className="">
                  <span className='font-btn-texts md:text-xl'>Chair</span>
                </div>
                <div>
                  <span className='font-btn-text md:text-xl'>#35,000</span>
                </div>
              </div>
              <a href="" className=' font-btn-text bg-[#2b1100] my-3 text-white px-6 py-1 rounded-md'>Order Now</a>
          </div>
          <div className="h-fit py-4 w-fit text-center rounded-3xl shadow-xl border border-[#b99c88] bg-[#f5f0ef]">
              <div>
                <img src={productThree} alt="" />
              </div>
              {/* Name and Price */}
              <div className="px-6  flex justify-between items-center">
                <div className="">
                  <span className='font-btn-texts md:text-xl'>Chair</span>
                </div>
                <div>
                  <span className='font-btn-text md:text-xl'>#35,000</span>
                </div>
              </div>
              <a href="" className=' font-btn-text bg-[#2b1100] my-3 text-white px-6 py-1 rounded-md'>Order Now</a>
          </div>
        </div>
        </div>

      </section>
      {/* About */}
      <section className=' bg-white h-screen py-12 bg-img'>
        <div className=' mx-4 md:mx-12'>
        <div className="grid grid-cols-1 md:grid-cols-2 py-12">
          <div className=''>
              <h1 className=' font-head text-4xl md:text-5xl my-3'>About Nature's Furntinure</h1>
              <p className='font-texts'>Lorem ipsum dolor sit, amet consectetur
               adipisicing elit. Inventore similique eveniet minus.
               Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt
                reprehenderit similique quas, natus nemo accusamus eum rem numquam aperiam aspernatur?</p>
            <div className='mt-6 space-x-3'>
            
              <a  className="font-btn-text inline-flex items-center md:text-xl bg-[#fff] my-3 text-[#2b1100] px-6 py-3 rounded-xl">Contact Us
              <FaPhoneAlt className='ml-2'  />
              </a>
            </div>

          </div>

          <div>
              <img src={heroImg} className='md:w-[60em]' alt="" />
          </div>
        
        </div>
        </div>  
      </section>
      {/* Why */}
      <section className=' bg-white h-auto py-12'>
        <div className=' mx-4 md:mx-12'>
        <h1 className='text-center font-head text-3xl md:text-4xl'>Why Choose Us</h1>
       
        <div className="grid gap-10 grid-cols-1 md:grid-cols-3 place-items-center py-8">
          <div className='bg-[#f5f0ef] shadow-xl border-[#b99c88] border-[0.8px] justify-center flex flex-col items-center p-6 rounded-2xl'>
            
            <img src={fast} className='w-20' alt="" />
            <div>
              <h1 className='font-btn-text text-2xl text-center'>Fast and Reliable</h1>
            </div>
          </div>

          
          <div
           className='bg-[#f5f0ef] shadow-xl border-[#b99c88] border-[0.8px] justify-center flex flex-col items-center p-6 rounded-2xl'>
            
            <img src={customers} className='w-20' alt="" />
            <div>
              <h1  className='font-btn-text text-2xl text-center'>Satisfied Customers</h1>
            </div>
          </div>
          <div  className='bg-[#f5f0ef] shadow-xl border-[#b99c88] border-[0.8px] justify-center flex flex-col items-center p-6 rounded-2xl'>
            
            <img src={delivery} className='w-20' alt="" />
            <div>
              <h1  className='font-btn-text text-2xl text-center'>Nationwide Delivery</h1>
            </div>
          </div>
        </div>
        </div>  
       
      </section>
      {/* Contact */}
      <section className='bg-white h-auto py-12 bg-img'>
      <div className=' mx-4 md:mx-8'>
      <h1 className='text-center font-head text-3xl md:text-4xl'>Contact Us</h1>
       
       <div className="grid grid-cols-1 gap-x-12 md:grid-cols-2 items-center py-10">
        <div>
       
        <Iframe url="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15857.994507269892!2d7.5238636!3d6.45833!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1044a5b32dafc413%3A0xbc1e1921c4a3ffd!2sNatureWorld%20Interior%20and%20Furniture!5e0!3m2!1sen!2sng!4v1731107108844!5m2!1sen!2sng"
        width=""
        height=""
        id=""
        className="w-full h-96 flex justify-center items-center"
       />
     
     
        </div>

        <div>
          <ul className='space-y-8 mt-3'>

            <li className=' font-texts'><FaLocationPin className='inline-flex' size={20}/> 4th Avenue Funiture Plaza SO9</li>
            <li  className=' font-texts'><FaGlobe className='inline-flex' size={20}/> www.naturefunitures.com</li>
            <li  className=' font-texts'><FaPhone className='inline-flex' size={20}/>  +234 9134537728</li>
            <li  className=' font-texts'><IoMdMail className='inline-flex' size={20}/> naturefuniture@gmail.com</li>
          </ul>
        </div>
      
       </div>
        </div>

      </section>
      {/* Footer */}
      <footer className='bg-white py-8'>
        <div className="mx-4 md:mx-8">
          <div className="grid grid-cols-1 place-items-center gap-x-20 md:grid-cols-2">
            <div>

            <h3 className='font-head md:text-2xl'>Nature Funiture's</h3>
            <p className='font-para md:text-xl'>Nature World of Furniture and interiors.</p>
            </div>
            <div className='hidden md:flex '>
                <span className='font-head underline underline-offset-4 md:text-lg'>Links</span>
                <ul>
                  <li className='font-para text-xl'> <a href="">Home</a></li>
                  <li> <a href="" className='font-para text-xl'>About</a></li>
                  <li> <a href="" className='font-para text-xl'>Products</a></li>
                  <li> <a href="" className='font-para text-xl'>Why Us</a></li>
                </ul>
          
                
            </div>
           
          </div>
          <div className="flex flex-col mt-6 justify-center items-center">
          <div className='inline-flex space-x-3'>
            <FaInstagram size={20} />
         
            <FaWhatsapp size={20} />
            </div>
          <p className='flex justify-center items-center font-para'>All Rights Resserved. 2024</p>
          </div>
        </div>

      </footer>
    </>
  )
}

export default App
