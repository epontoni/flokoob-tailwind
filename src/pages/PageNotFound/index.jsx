import React from 'react'
import './PageNotFound.css'
import logo from '../../assets/logo.svg'
import { Link } from 'react-router-dom'

export default function PageNotFound() {
  return (
    <main className='flex flex-col items-center max-w-[80rem] mx-auto'>
      <img src={logo} alt="Página no encontrada." className='w-2/5 blur-sm'/>
      <h2 className='md:text-4xl text-xl'>¡Página no encontrada!</h2>
      <Link to='/' className='md:text-2xl hover:text-cyan-500 duration-500'>Regresar al Home</Link>
    </main>
  )
}
