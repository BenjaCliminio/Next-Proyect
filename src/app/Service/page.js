import NavBar from '../Componets/NavBar'

function Service (){
    return(
     <div className='bg-[#1B2223] text-[#F4FEFD]'>
      <header className="text-2xl flex justify-center mb-6">
       <h2 className='text-[#0EF6CC] mt-10 font-bold'>Servicio</h2>
      </header>
      <NavBar />
      <section>
      <div>
       <p className="flex justify-center text-gray-400 mt-3 p-3 ml-6">Bueno, dejando de lado quienes somos pasemos a lo importante...</p>
       <p className="flex justify-center text-2xl mt-5 mb-10">¿A que nos dedicamos?</p>
      </div>
      <div className="w-full h-36 bg-[#3A4F50] rounded-xl">
       <p className="p-2 mt-2 ml-3">En (Nombre) ofrecemos un servicio en donde podes registrar a tu mascota/as creandoles su propio perfil y te brindamos un QR totalmente unico para tus peluditos. yo creo que no hace falta decir que es totalmente <span className='text-lg'>GRATIS</span></p>
      </div>
      <div>
       <p className='flex justify-center text-2xl mt-10'>Que le puedo cargar al perfil?</p>

      </div>
      </section>
     </div>
    )
}

export default Service