import '../Styles/globals.css'
import Link from 'next/link'

function NavBar() {
    return (
      <div className='w-full'>
       <nav className="container mx-auto grid place-content-center bg-[#3A4F50] rounded-xl">
       <ul className="flex flex-row space-x-4">
       <li>
       <a className='hover:bg-[#0EF6CC] rounded-xl p-1' href="/">Inicio</a>
       </li>
       <li>
       <Link className='hover:bg-[#0EF6CC] rounded-xl p-1' href="/Service">Servicio</Link>
       </li>
       <li>
       <Link className='hover:bg-[#0EF6CC] rounded-xl p-1' href="/Donations">Donaciones</Link>
       </li>
       <li>
       <Link className='hover:bg-[#0EF6CC] rounded-xl p-1' href="/Account">Cuenta</Link>
       </li>
       </ul>
       </nav>
      </div>
    )
  }

export default NavBar