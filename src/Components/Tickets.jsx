import React from 'react';
import TaskStatus from './TaskStatus';
import Container from './Container';

const Tickets = () => {
    return (

       <Container>
         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 bg-gray-100 min-h-screen">


            <div className="md:col-span-2">
                
                <div className=" p-4 ">
                    <h2 className="text-2xl  mb-4 text-[#34485A] inter-600">Customer Tickets</h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                        <div className="p-4 border rounded-sm shadow-sm bg-white">
                            <div className='flex justify-between items-center mb-2'>
                                <h3 className="inter-500 text-[#001931] tex-lg">Login Issues - Can't Access Account</h3>
                                <span className='px-3 py-1 bg-[#B9F8CF] rounded-[50px] text-[#02A53B]'> <span className='fa-solid fa-circle'></span> Open</span>
                            </div>
                            <p className='text-[#627382] text-base'>Customer is unable to log in to their account. They've tried resetting their password multiple times but still...</p>
                            <div className='flex justify-between items-center mt-4 '>
                                <div  className='flex gap-4 mt-4 '>
                                    <p className="text-sm text-[#627382] inter-500">#1001</p>
                                    <p className='text-[#F83044] text-sm inter-500'>HIGH PRIORITY</p>
                                </div>
                                <div  className='flex gap-4 mt-4 '>
                                    <h4 className='text-[#627382] inter text-sm'>John Smith</h4>
                                    <span className='text-[#627382] inter text-sm'> <span className='fa-regular fa-calendar'></span> 1/15/2024</span>
                                    
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>

            <TaskStatus></TaskStatus>

        </div>
       </Container>

    );
};

export default Tickets;