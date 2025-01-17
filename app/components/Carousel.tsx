import {MouseEvent, useState} from "react"
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline"

const Carousel = ({items}:{items:string[]}) => {
    const [currentIndex, setCurrentIndex] = useState(0)

    const prevSlide = (e:MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        setCurrentIndex((currentIndex) === 0 ? items.length - 1 : currentIndex - 1)
    }

    const nextSlide = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        setCurrentIndex((currentIndex + 1) % items.length)
    }

    return(
        <div className="relative">
            <button 
                onClick={(e) => prevSlide(e)} 
                className="absolute top-[50%] translate-y-[-50%] mx-2"
            >
                <ChevronLeftIcon className={"w-6 h-6 text-gray-300 " + (items.length > 1 && "hover:text-gray-800")}/>
            </button>
            <img src={items[currentIndex]} className="w-full mx-auto rounded-md"  alt={items[currentIndex]}/>
            <button 
                onClick={(e) => nextSlide(e)}
                className="absolute top-[50%] translate-y-[-50%] mx-2 right-0"
            >
                <ChevronRightIcon className={"w-6 h-6 text-gray-300 " + (items.length > 1 && "hover:text-gray-800")}/>
            </button>
            <div className="slideshowDots flex flex-row justify-center my-2 absolute bottom-0 left-1/2 transform -translate-x-1/2">
                {items.map((_, idx) => (
                    <div
                        key={idx}
                        className={`slideshowDot ${currentIndex === idx ? "bg-black" : "bg-gray-100"} m-2 w-2 h-2 rounded-full hover:cursor-pointer opacity-50`}
                        onClick={() => {
                            setCurrentIndex(idx);
                        }}
                    ></div>
                ))}
            </div>
        </div>
    )
}

export default Carousel