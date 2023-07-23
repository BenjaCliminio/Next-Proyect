import '../app/Styles/globals.css'
import About from '../app/Componets/About'
import Contact from '../app/Componets/Contact'
import Footer from '../app/Componets/Footer'
import NavBar from '../app/Componets/NavBar'

function HomePage() {
  return (
    <div className='bg-[#1B2223] text-[#F4FEFD]'>
     <header className="text-2xl flex justify-center mb-6">
      <h1 className='text-[#0EF6CC] mt-10 font-bold'>UNDIFINED</h1>
     </header>
     <NavBar />
     <section>
      <div className='flex justify-center mt-10 mb-10'>
      <img className='h-64 w-64' src="./assets/imagenHuellas.webp"  />
      </div>
      <div>
      <p className="flex justify-center">¿Todavia no nos Conoces?</p>
      <p className="flex justify-center text-gray-400">Te invito a que nos conozcamos!</p>
      <div className="flex justify-center mt-5">
      <a className="w-auto bg-[#0EF6CC] p-3 rounded-full hover:bg-[#09AC8E]" href="#">Sobre Nosotros</a>
      </div>
      </div>
      <About />
      <Contact />
      <Footer />
     </section>
    </div>
  )
}

export default HomePage