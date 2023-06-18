import React, { useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.svg'
import { Link } from 'react-router-dom'

function Navbar() {
  const [menu, setMenu] = useState(false)

  const menuToggle = () => {
    setMenu(!menu)
  }
  return (
    <nav className='p-5 {/*bg-white shadow*/} md:flex md:items-center md:justify-between max-w-[80rem] mx-auto'>
      <div className="flex justify-between items-center">
        <Link to='/'>
          <span className='text-2xl cursor-pointer'>
            <img className='h-10 mr-5 inline' src={logo} alt="Flokoob" />
            <span>Flokoob</span>
          </span>
        </Link>

        <span className='text-3xl cursor-pointer mx-2 md:hidden block' onClick={menuToggle}>
          <i className={!menu ? 'ri-menu-line' : 'ri-close-line'}></i>
        </span>
      </div>

      <ul className={`md:flex md:items-center z-[1] md:z-auto md:static absolute bg-white w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 opacity-0 top-[-400px] transition-all ease-in duration-500 ${menu ? 'top-[80px] opacity-100' : 'top-[-400px] opacity-0'}`}>
        <li className='mx-4 my-6 md:my-0'><Link onClick={menuToggle} className='text-xl hover:text-cyan-500 duration-500' to='/'>Inicio</Link></li>
        <li className='mx-4 my-6 md:my-0'><Link onClick={menuToggle} className='text-xl hover:text-cyan-500 duration-500' to='/events'>Próximos Eventos</Link></li>
        <li className='mx-4 my-6 md:my-0'><Link onClick={menuToggle} className='text-xl hover:text-cyan-500 duration-500' to='/contact'>Contacto</Link></li>
        <li className='mx-4 my-6 md:my-0'><Link onClick={menuToggle} className='text-xl hover:text-cyan-500 duration-500' to='/clasifications'>Clasificaciones</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar