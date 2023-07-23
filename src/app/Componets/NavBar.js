import '../Styles/globals.css'
import Link from 'next/navigation'

function NavBar() {
  const Links = [{
    label: 'Home',
    route: '/'
  } , {
    label: 'Servicio',
    route: '/Service'
  }]
    return (
      <div className='w-full'>
       <nav className="container mx-auto grid place-content-center bg-[#3A4F50] rounded-xl">
       <ul className="flex flex-row space-x-4">
       <li>
       <a className='hover:bg-[#0EF6CC] rounded-xl p-1' href="#">Inicio</a>
       </li>
       {Links.map(({ label, route }) => (
         <li key={route}>
          <Link href={route}>
           {label}
          </Link>
         </li>
       ))}
       <li>
       <a className='hover:bg-[#0EF6CC] rounded-xl p-1' href="#">Donaciones</a>
       </li>
       <li>
       <a className='hover:bg-[#0EF6CC] rounded-xl p-1' href="#">Cuenta</a>
       </li>
       </ul>
       </nav>
      </div>
    )
  }

export default NavBar