import React from 'react'

const Delivery = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
        <h3 className='text-orange-500 font-bold text-2xl text-center'>
            Quick Delivery App
        </h3>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
            <img className='w-[550px] mx-auto my-4' 
            src="https://res.cloudinary.com/ehizeex-shop/image/upload/v1672676822/NetflixApp/FC_two_phones.6ec9a842f905769677f9_m91off.webp" 
            alt="delivery app" />
            <div className='flex flex-col justify-center'>
                <p className='text-[#00df9a] font-bold'>Get the App</p>
                <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Limitless Convinience on-demand</h1>
                <p>Embark on a gastronomic journey with our delectable recipe that combines the richness of tender chicken breasts with the vibrant flavors of spinach and feta. This Spinach and Feta Stuffed Chicken is a true culinary masterpiece that elevates the dining experience to new heights. Perfect for a special family dinner or entertaining guests, this dish seamlessly blends wholesome ingredients to create a symphony of tastes and textures.</p>
                <button 
                className='bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3'>Get Started</button>
            </div>
        </div>
    </div>
  )
}

export default Delivery