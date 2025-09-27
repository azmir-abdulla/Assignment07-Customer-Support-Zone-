import React from 'react';
import { useState } from 'react';
import Tickets from './Tickets';
import TaskStatus from './TaskStatus';
import Container from './Container';
import Cards from './Cards';
import { ToastContainer, toast, Bounce } from 'react-toastify';



const Main = ({ tickets }) => {
    const [taskList, setTaskList] = useState([]);
    const [resolvedList, setResolvedList] = useState([]);

    const handleAlert = (ticketTitle) => {
        setTaskList((prev) => [...prev, ticketTitle]);
        toast.success("In Progress");
    };

    const handleComplete = (task, index) => {
        setResolvedList((prev) => [...prev, task]);
        setTaskList((prev) => prev.filter((_, i) => i !== index));
    };

    return (
        <Container>
            <ToastContainer position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                transition={Bounce}>

            </ToastContainer>

            <Cards inProgress={taskList.length} resolved={resolvedList.length} />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 bg-gray-100 min-h-screen">
                <Tickets tickets={tickets} handleAlert={handleAlert} />
                <TaskStatus
                    taskList={taskList}
                    resolvedList={resolvedList}
                    handleComplete={handleComplete}
                />
            </div>
        </Container>
    );
};
export default Main;