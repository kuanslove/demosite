import React, { useState } from 'react'
import { mealData } from "../data/data"
import { ArrowSmRightIcon } from "@heroicons/react/outline"
const Meal = () => {
    const categories = ["All", "Pizza", "Chicken", "Salad"];
    const [foods, setFoods] = useState(mealData);
    const filterCat = (category) => {
        setFoods(mealData.filter((meal)=>{
            if(category == "All") {
                return true;
            }
            return meal.category == category.toLowerCase();
        }));
    }
    return (
        <div className='mx-w-[1520px] m-auto px-4 py-12'>
            <h1 className='text-orange-500 font-bold text-2xl text-center py-2'>Our Meals</h1>
            <div className='flex flex-col lg:flex-row justify-center'>
                <div className='flex justify-center md:justify-center'>
                    {
                        categories.map((cat) => {
                            return (
                                <button className='m-1 border-orange-700 text-white bg-orange-700
                            hover:bg-white hover:text-orange-700 hover:border-orange-700'
                                    key={cat} onClick={()=>{filterCat(cat)}}>{cat}</button>
                            );
                        })
                    }
                </div>
            </div>
            <div className='grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-4 gap-6 py-4'>
                {
                    foods.map((meal) => {
                        return (
                            <div className='border-none hover:scale-105 duration-300' key={meal.id}>
                                <img src={meal.image}
                                    className='w-full h-[200px] object-cover rounded-lg'
                                    alt={meal.name} />
                                <div className='flex justify-between py-2 px-4'>
                                    <p className='font-bold'>{meal.name}</p>
                                    <p className='bg-orange-700 w-20 h-20 
                                    rounded-full -mt-10 text-white py-4 px-2 border-8 
                                    font-bold flex justify-center items-center'>{meal.price}</p>
                                </div>
                                <div className='pl-2 py-4 -mt-7'>
                                    <p className='flex items-center text-indigo-600 px-2'>View More<ArrowSmRightIcon className='w-5 ml-2' /></p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Meal