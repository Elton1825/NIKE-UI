import React from 'react'
import { offer } from '../assets/images'
import Button from '../components/Button'
import { arrowRight } from '../assets/icons'

const SpecialOffers = () => {
  return ( 
    <section className='flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container'> {/**flex-col-reverse used because the image goes down if the scrren resolutio is reduced */}
        <div className='flex-1'>
          <img src={offer} height={687} width={773}
            className='object-contain w-full'
          />
        </div>
        <div>
          <div className='flex flex-1 flex-col'>
          
          <h2 className=' font-palanquin text-4xl capitalize  font-bold lg:max-w-lg'>
            
          <span className='text-coral-red '> Special </span> Offers
          
          
          </h2>
          <p className='mt-4 lg:max-w-lg info-text '
          > Embark on the shopping journey that redefines your experience with unbeatable deals. From premier selectios to incredible savings,
           we offer unparalleled value that sets us apart </p>

          <p className='mt-6 lg:max-w-lg info-text '> Navigate a realm of possibilities designed to fulfill your unique desires ,
            surpassing the loftiest expectations . Your journey with us is nothing sort of exceptional  </p>

          <div className='mt-11 flex flex-wrap gap-4'>
           <Button  label="View details" />
           <Button 
            label="Learn more" backgroundColor="bg-white " borderColor="border-slate-gray" textColor="text-slate-gray"
            ></Button>
          </div>
          

        </div>
        </div>
    </section>
  )
}

export default SpecialOffers