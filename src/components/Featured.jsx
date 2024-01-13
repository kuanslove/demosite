import React, { useState } from 'react'
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs"
import { RxDotFilled } from "react-icons/rx"
const Featured = () => {
    const sliders = [
        {
            url: 'https://res.cloudinary.com/ehizeex-shop/image/upload/v1672672076/netflixApp/burger_emxbtv.jpg'
        },
        {
            url: 'https://res.cloudinary.com/ehizeex-shop/image/upload/v1672672452/netflixApp/pizza_osjb4f.jpg'
        },
        {
            url: 'https://res.cloudinary.com/ehizeex-shop/image/upload/v1672672612/netflixApp/ric_a4ewxo.jpg'
        }
    ];
    const [currentIndex, setCurrentIndex] = useState(0);
    const prevSlider = () => {
        const isFirstSlide = currentIndex == 0;
        const newIndex = isFirstSlide ? sliders.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    }
    const nextSlider = () => {
        const isLastSlide = currentIndex == sliders.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    }
    const moveToSlide = (index) => {
        setCurrentIndex(index);
    }
    return (
        <div className='max-w-[1520px] h-[500px] w-full py-4 px-4 mx-auto relative group'>
            <div
                className='w-full h-full rounded-2xl bg-center bg-cover duration-500'
                style={{ backgroundImage: `url(${sliders[currentIndex].url})` }}></div>
            <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 tranlate-y-[-50%] left-5 
            text-2xl rounded-full p-2 bg-orange-700 text-white cursor-pointer'>
                <BsChevronCompactLeft onClick={prevSlider} />
            </div>
            <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 tranlate-y-[-50%] right-5 
            text-2xl rounded-full p-2 bg-orange-700 text-white cursor-pointer'>
                <BsChevronCompactRight onClick={nextSlider} />
            </div>
            <div className='flex top-4 justify-center py-2'>
                {
                    sliders.map((sliderItems, sliderIndex) => {
                        return (
                        <div className='text-2xl cursor-pointer' key={sliderIndex}>
                        <RxDotFilled onClick={()=>{moveToSlide(sliderIndex);}} />
                        </div>
                        );
                    })
                }
            </div>
        </div>
    )
}

export default Featured