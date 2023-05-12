import Image from "next/image"
import MainImage from '../../assets/bg.png';
import { Swipe } from "../Swipe";

const Main = () => {
    return (
        <>
            <div className="flex flex-col w-full h-full relative lg:flex-row">
                <Image
                    src={MainImage}
                    alt="#"
                    style={{
                        objectFit: "cover",
                    }}
                    className="w-full lg:w-[50%]" />
                <div className="relative lg:w-[50%] flex flex-col">
                    <span className="font-itcdemi text-white lg:mb-[20px] text-[20px] absolute -top-[210px] lg:top-auto left-[30px] lg:relative lg:bottom-auto lg:left-auto w-[70%] lg:text-black lg:font-itcbol md:text-[26px] lg:text-[32px] lg:font-black lg:items-center lg:justify-center lg:mx-20 lg:mt-20">Everyday tops, we have something to suit every occasion.</span>
                    <span className="hidden lg:block lg:mb-[50px] font-avenir text-grayish lg:mx-20 text-[12.8px] lg:text-[15px] absolute -top-[120px] lg:top-auto left-[30px] lg:relative lg:bottom-auto lg:left-auto lg:text-black lg:items-center lg:justify-center">At suspendisse augue lectus arcu, accumsan ut sit posuere vitae sit tincidunt semper eu proin leo gravida cursus.</span>
                    <span className="font-avenir text-white lg:mx-20 lg:mb-[30px] lg:w-max text-[12.8px] lg:text-[15px] absolute -top-[120px] lg:top-auto left-[30px] lg:relative lg:bottom-auto lg:left-auto border-b-[1px] border-solid border-white lg:text-black lg:font-black lg:items-center lg:justify-center lg:border-black">Shop all everyday items</span>
                    <div className="relative -mt-10 lg:mt-auto lg:pb-[100px]">
                        <Swipe />
                    </div>
                </div>
            </div>
        </>
    )
}

export { Main }