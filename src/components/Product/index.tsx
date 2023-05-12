import Image, { StaticImageData } from "next/image"

interface IProductProps {
    image: StaticImageData;
    name: string;
    price: string
}

const Product: React.FC<IProductProps> = ({ image, name, price }) => {
    return (
        <div className="flex flex-col text-left pb-6">
            <Image src={image} alt="#" className="w-full" />
            <span className="font-avenir text-[17px] leading-7 mt-2 w-[90%]">{name}</span>
            <div className="flex flex-col lg:flex-row lg:justify-between">
                <span className="font-avenir text-[16px] font-semibold mt-[5px]">{price}</span>
                <div className="flex space-x-1 mt-2">
                    <div className="w-4 h-4 bg-black rounded-full flex items-center justify-center">
                        <div className="w-3 h-3 bg-tealy rounded-full border-2 border-white"></div>
                    </div>
                    <div className="w-4 h-4 bg-pinky rounded-full flex items-center justify-center">
                        <div className="w-3 h-3 bg-pinky rounded-full"></div>
                    </div>
                    <div className="w-4 h-4 bg-purplish rounded-full flex items-center justify-center">
                        <div className="w-3 h-3 bg-purplish rounded-full"></div>
                    </div>
                    <div className="w-4 h-4 bg-greeny rounded-full flex items-center justify-center">
                        <div className="w-3 h-3 bg-greeny rounded-full"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export { Product }