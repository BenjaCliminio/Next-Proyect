import NavBar from '../Componets/NavBar'
import Footer from '../Componets/Footer'
import { BsCamera } from 'react-icons/bs'
import { CiLocationOn } from 'react-icons/ci'
import { LiaAddressBookSolid } from 'react-icons/lia'

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
       <p className="flex justify-center text-2xl mt-5 mb-10 font-bold">¿A que nos dedicamos?</p>
      </div>
      <div className="w-full h-36 bg-[#3A4F50] rounded-xl">
       <p className="p-2 mt-2 ml-3">En (Nombre) ofrecemos un servicio en donde podes registrar a tu mascota/as creandoles su propio perfil y te brindamos un QR totalmente unico para tus peluditos. yo creo que no hace falta decir que es totalmente <span className='text-lg text-[#0EF6CC]'>GRATIS</span></p>
      </div>
      <div>
       <p className='flex justify-center text-2xl mt-10'>Que le puedo cargar al perfil?</p>
      </div>
      <div className='mt-5'>
       <p className='flex justify-center text-2xl font-bold text-[#0EF6CC]'>#1</p>
       <p className='flex justify-center font-bold mt-3'>Puedes subir Fotos de tu Peludito</p>
      </div>
      <div>
      <BsCamera className='ml-5 -mt-7 text-[#0EF6CC]' size={30} />
      </div>
      <div className='mt-5'>
       <p className='flex justify-center text-2xl font-bold text-[#0EF6CC]'>#2</p>
       <p className='flex justify-center font-bold mt-3'>Puedes subir tu Direccion</p>
      </div>
      <div>
      <CiLocationOn className='ml-4 -mt-7 text-[#0EF6CC]' size={35} />
      </div>
      <div className='mt-5'>
       <p className='flex justify-center text-2xl font-bold text-[#0EF6CC]'>#3</p>
       <p className='flex justify-center font-bold mt-3'>Puedes subir datos importantes</p>
      </div>
      <div>
      <LiaAddressBookSolid className='ml-4 -mt-7 text-[#0EF6CC]' size={35} />
      </div>
      <p className="flex justify-center text-2xl font-bold mt-7 mb-10">¿Pero de que me sirve el QR?</p>
      <div className="w-full h-40 bg-[#3A4F50] rounded-xl">
       <p className="p-2 mt-2 ml-3">El QR va a servir para que lo imprimas y se lo pegues en el collar a tu mascota y en caso de que se pierda y alguien lo encuentre pueda escanear el QR y ver datos como direccion o numero de telefono para poder ayudar a un <span className='text-lg text-[#0EF6CC]'>Gran Rencuentro!!</span></p>
      </div>
      <Footer />
      </section>
     </div>
    )
}

export default Service