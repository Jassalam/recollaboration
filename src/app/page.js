import Header from "../components/layout/Header";
import Hero from "../components/layout/Hero";
import HomeMenu from "../components/layout/HomeMenu";


export default function Home() {
  return (
    <>
     
      <Hero />
      <HomeMenu/>
      <section className='text-center my-8'>
        <h1 className='text-primary font-semibold'>Contact Us</h1>
        <div className='mt-8'>
        <a className='text-4xl underline text-gray-500' href='tel:+49178787825'>
          +49 178 452 458
        </a></div>
      </section>

     

    </>
  )
}
