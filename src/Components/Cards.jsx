import React from 'react';
import Container from './Container';
import vector1 from '../assets/vector1.png'

const Cards = () => {
    return (
        <Container>
<div className='main flex  gap-6 my-10 flex-col md:flex-row items-center justify-center'>
        <div className='card'>
        <div
          className='rounded-lg h-[250px] w-[708px] bg-gradient-to-r from-[#632EE3] to-[#9F62F2] p-7 text-white overflow-hidden relative'
        >
          <div className='absolute inset-0 flex justify-between items-start opacity-70'>
            <img
              className='w-[50%] h-full object-cover'
              src={vector1}
              alt="Decorative Vector Line Background"
            />
            <img
              className='transform scale-x-[-1] w-[50%] h-full object-cover'
              src={vector1}
              alt="Mirrored Decorative Vector Line Background"
            />
          </div>

          <div
            className='flex justify-center items-center flex-col gap-3 m-auto mt-20 relative z-10'
          >
            <p className='inter text-2xl font-normal'>
              In-Progress
            </p>
            <h1 className='inter-600 text-6xl font-semibold'>
              0
            </h1>
          </div>
        </div>
      </div>

      <div className='card'>
        <div
          className='rounded-lg h-[250px] w-[708px] bg-gradient-to-r from-[#54CF68] to-[#00827A] p-7 text-white overflow-hidden relative'
        >
          <div className='absolute inset-0 flex justify-between items-start opacity-70'>
            <img
              className='w-[50%] h-full object-cover'
              src={vector1}
              alt="Decorative Vector Line Background"
            />
            <img
              className='transform scale-x-[-1] w-[50%] h-full object-cover'
              src={vector1}
              alt="Mirrored Decorative Vector Line Background"
            />
          </div>

          <div
            className='flex justify-center items-center flex-col gap-3 m-auto mt-20 relative z-10'
          >
            <p className='inter text-2xl font-normal'>
              In-Progress
            </p>
            <h1 className='inter-600 text-6xl font-semibold'>
              0
            </h1>
          </div>
        </div>
      </div>
      </div>

        </Container>
    );
};

export default Cards;