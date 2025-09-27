import React, { use } from 'react';
import TaskStatus from './TaskStatus';
import Container from './Container';

const Tickets = ({ tickets }) => {
    const ticketsData = use(tickets);

    return (



        <Container>






            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 bg-gray-100 min-h-screen">


                <div className="md:col-span-2">

                    <div className=" p-4 ">
                        <h2 className="text-2xl  mb-4 text-[#34485A] inter-600">Customer Tickets</h2>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">



                            {
                                ticketsData.map((ticket) => {

                                    return (
                                        <div key={ticket.id} className="p-4 border rounded-sm shadow-sm bg-white">
                                            <div className='flex justify-between items-center mb-2'>
                                                <h3 className="inter-500 text-[#001931] tex-lg">{ticket.title}</h3>
                                                <span className={`px-3 py-1  rounded-[50px]  ${ticket.status == "Open" ? " bg-[#B9F8CF] text-[#02A53B] " : "bg-[#F8F3B9] text-[#FEBB0C] "
                                                    }`}> <span className='fa-solid fa-circle'></span> {ticket.status}</span>
                                            </div>
                                            <p className='text-[#627382] text-base'>{ticket.description}</p>
                                            <div className='flex justify-between items-center mt-4 '>
                                                <div className='flex gap-4 mt-4 '>
                                                    <p className="text-sm text-[#627382] inter-500">{ticket.id}</p>
                                                    <p className={` text-sm inter-500 
                                        ${ticket.priority == "HIGH PRIORITY" ? "text-red-500" : ticket.priority == "MEDIUM PRIORITY" ? "text-[#FEBB0C]" : "text-[#02A53B]"}`}>{ticket.priority}</p>
                                                </div>
                                                <div className='flex gap-4 mt-4 '>
                                                    <h4 className='text-[#627382] inter text-sm'>{ticket.customer}</h4>
                                                    <span className='text-[#627382] inter text-sm'> <span className='fa-regular fa-calendar'></span> {ticket.createdAt} </span>

                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }




                        </div>
                    </div>
                </div>

                <TaskStatus></TaskStatus>

            </div>
        </Container>

    );
};

export default Tickets;