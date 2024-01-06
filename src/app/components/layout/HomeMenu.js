import Image from "next/image";
import SectionHeaders from "./SectionHeaders";

export default function HomeMenu() {
    return (
        <div>
            <div className="absolute  left-0 right-0 justify-start  ">
                <div className=" absolute  left-0 -top-[70px] -z-10" >
                    <Image src="/sallad1.png" height={189} width={109} alt="salad" />
                </div>
                <div className=" absolute -top-[100px] right-0 -z-10 ">
                    <Image src="/sallad2.png" height={195} width={107} alt="salad" />
                </div>
            </div>
            <div className="text-center">
                <SectionHeaders subHeader={"checkout"} mainHeader={"Menu"} />
            </div>
            <div className="grid grid-cols-3 gap-4 mt-5">
                <div className="bg-gray-200 hover:bg-white hover:shadow-black/25 hover:shadow-md transition-all p-4 rounded-lg text-center">
                    <div className='text-center '>
                        <img src="/pizza.png" className="max-h-auto max-h-24 block mx-auto" alt="pizza" />
                    </div>

                    <h4 className="font-bold my-2 text-xl">Pepperoni Pizza</h4>
                    <p className="text-gray-500 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. deserunt expedita nihil. Nesciunt.</p>
                    <button className="bg-primary text-white rounded-full mt-4 px-8 py-2">Add to cart $12</button>
                </div>
                <div className="bg-gray-200 hover:bg-white hover:shadow-black/25 hover:shadow-md transition-all p-4 rounded-lg text-center">
                    <div className='text-center '>
                        <img src="/pizza.png" className="max-h-auto max-h-24 block mx-auto" alt="pizza" />
                    </div>

                    <h4 className="font-bold my-2 text-xl">Pepperoni Pizza</h4>
                    <p className="text-gray-500 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. deserunt expedita nihil. Nesciunt.</p>
                    <button className="bg-primary text-white rounded-full mt-4 px-8 py-2">Add to cart $12</button>
                </div>
                <div className="bg-gray-200 hover:bg-white hover:shadow-black/25 hover:shadow-md transition-all p-4 rounded-lg text-center">
                    <div className='text-center '>
                        <img src="/pizza.png" className="max-h-auto max-h-24 block mx-auto" alt="pizza" />
                    </div>

                    <h4 className="font-bold my-2 text-xl">Pepperoni Pizza</h4>
                    <p className="text-gray-500 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. deserunt expedita nihil. Nesciunt.</p>
                    <button className="bg-primary text-white rounded-full mt-4 px-8 py-2">Add to cart $12</button>
                </div>
                <div className="bg-gray-200 hover:bg-white hover:shadow-black/25 hover:shadow-md transition-all p-4 rounded-lg text-center">
                    <div className='text-center '>
                        <img src="/pizza.png" className="max-h-auto max-h-24 block mx-auto" alt="pizza" />
                    </div>

                    <h4 className="font-bold my-2 text-xl">Pepperoni Pizza</h4>
                    <p className="text-gray-500 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. deserunt expedita nihil. Nesciunt.</p>
                    <button className="bg-primary text-white rounded-full mt-4 px-8 py-2">Add to cart $12</button>
                </div>
                <div className="bg-gray-200 hover:bg-white hover:shadow-black/25 hover:shadow-md transition-all p-4 rounded-lg text-center">
                    <div className='text-center '>
                        <img src="/pizza.png" className="max-h-auto max-h-24 block mx-auto" alt="pizza" />
                    </div>

                    <h4 className="font-bold my-2 text-xl">Pepperoni Pizza</h4>
                    <p className="text-gray-500 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. deserunt expedita nihil. Nesciunt.</p>
                    <button className="bg-primary text-white rounded-full mt-4 px-8 py-2">Add to cart $12</button>
                </div>
                <div className="bg-gray-200 hover:bg-white hover:shadow-black/25 hover:shadow-md transition-all p-4 rounded-lg text-center">
                    <div className='text-center '>
                        <img src="/pizza.png" className="max-h-auto max-h-24 block mx-auto" alt="pizza" />
                    </div>

                    <h4 className="font-bold my-2 text-xl">Pepperoni Pizza</h4>
                    <p className="text-gray-500 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. deserunt expedita nihil. Nesciunt.</p>
                    <button className="bg-primary text-white rounded-full mt-4 px-8 py-2">Add to cart $12</button>
                </div>
            </div>
        </div>
    )
}
