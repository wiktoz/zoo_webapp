import { ButtonInterface } from "@/app/interfaces/form"
import { ArrowLongRightIcon } from "@heroicons/react/24/solid"
import Spinner from "@/app/components/Spinner"

const Button = ({title, loading, click}:ButtonInterface) => {
    return (
        <div className="bg-secondary py-2 px-6 font-semibold text-center flex justify-center items-center gap-1 hover:cursor-pointer rounded-lg my-2"
            onClick={() => click()}
        >
            {
                loading ?
                    <Spinner/> :
                <>
                    {title}
                    <ArrowLongRightIcon width={20} height={20}/>
                </>
            }
            
        </div>
    )
}

export default Button