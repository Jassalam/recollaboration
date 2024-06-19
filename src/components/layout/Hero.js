import Image from "next/image";
import Right from "../icons/Right";

export default function Hero() {
    return (
        <section className='hero mt-4'>
            <div className='py-12'> 
                <h1 className='text-4xl font-semibold'>
                    Success is<br/> possible with <br/>best <span className='text-primary'>Talent</span>
                </h1>
                <p className='my-6 text-gray-500 text-sm'>Cut cost, Not corners good match with Best Talent
                    from different Countries, All Risk-free
                </p>
                <div className='flex gap-4 text-sm'>
                    <button className='bg-primary uppercase flex gap-2 items-center text-white px-8 py-2 rounded-full'>
                        Descover Top Talents
                        <Right/>
                    </button>
                    <button className='flex gap-2 py-2 text-gray-600 font-semibold'>
                        Learn More
                        <Right/>
                    </button>
                </div>
            </div>
            <div className='relative'>
                <Image src={'/job1.png'} layout={'fill'}
                    objectFit={'contain'} alt={'Job Agency'} />
            </div>
        </section>
    );
}