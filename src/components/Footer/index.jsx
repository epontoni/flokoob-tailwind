import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className='flex flex-col justify-between items-center py-[3rem] px-[1.5rem] max-w-[80rem] mx-auto md:flex-row'>
      <span className='text-gray-500 text-sm'>&copy; { new Date().getFullYear() } Flokoob. Todos los derechos reservados.</span>
      <ul className='flex flex-row gap-2.5 text-2xl'>
        <li className='hover:text-cyan-500 duration-500'><Link to='https://www.facebook.com/Flokoob23/'><i className='ri-facebook-circle-fill'></i></Link></li>
        <li className='hover:text-cyan-500 duration-500'><Link to='https://www.instagram.com/flokoob23/'><i className='ri-instagram-fill'></i></Link></li>
        <li className='hover:text-cyan-500 duration-500'><Link to='https://wa.me/5493584328924?text=*Hola%20Flokoob*%0ATengo%20una%20consulta%20que%20realizarles.'><i className='ri-whatsapp-fill'></i></Link></li>
        <li className='hover:text-cyan-500 duration-500'><Link to='/contact'><i className='ri-mail-fill'></i></Link></li>
      </ul>
    </footer>
  )
}
