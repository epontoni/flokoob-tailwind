import React from 'react'
import './Home.css'
import maraton from '../../assets/maraton.jpg'
import deportista from '../../assets/deportista.jpeg'
import logo from '../../assets/logo.svg'
import Quotes from '../../components/Quotes'

export default function Home() {
  return (
    <main className='max-w-[80rem] mx-auto px-[1.5rem]'>
      <section className='flex flex-col md:flex-row items-center gap-5 px-[1.5rem] my-10'>
        <div>
          <h2 className='tracking-tight font-bold text-4xl leading-9 m-0 md:text-left text-center text-indigo-800 mb-5'>La organización de eventos deportivos hecha fácil.</h2>
          <h3 className='tracking-tight font-bold text-1xl leading-7 m-0 md:text-left text-center text-indigo-700'>Nos encargamos de la organización de tu evento deportivo, desde la inscripción hasta la clasificación.</h3>
        </div>
        <div>
          <img src={maraton} alt="Flokook Cronometraje. Organización de eventos deportivos." className='max-w-[500px] rounded-xl'/>
        </div>
      </section>

      <section className='flex flex-col md:flex-row items-center gap-5 px-[1.5rem] my-5'>
        <div>
          <img src={deportista} alt="Atleta. Kevin Ezequiel Montiel" className='max-w-[400px] rounded-xl' />
        </div>
        <div className='flex flex-row mx-auto w-full justify-center gap-5'>
          <img src={logo} alt="Flokoob" className='max-w-[100px] rounded-xl' />
          <div className='self-center'>
            <h3 className='tracking-tight font-bold text-3xl'>Flokoob</h3>
            <h4 className=''>Solo piensa en competir.</h4>
          </div>
        </div>
      </section>

      <section className='flex items-center items-center justify-center px-[1.5rem] my-10 w-full mx-auto'>
        <Quotes />
      </section>
    </main>
  )
}
