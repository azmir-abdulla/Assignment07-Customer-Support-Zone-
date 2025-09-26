import React from 'react';

const TaskStatus = () => {
    return (

       <div>
        
         <div className=" p-4 ">
            <h2 className="text-2xl mb-4 text-[#34485A] inter-600">Task Status</h2>

            {/* Task Card */}
            <div className="p-4 border rounded-sm shadow-sm bg-gray-50 mb-4 ">
                <h3 className="inter-500 text-[18px] text-[#34485A]">Payment Failed - Card Declined</h3>
                <button className="mt-2 px-4 py-3 bg-green-500 text-white rounded-sm w-full">Complete</button>
            </div>


            {/* Resolved Task Section */}
            <div className="mt-6">
                <h3 className="text-2xl mb-4 text-[#34485A] inter-600">Resolved Task</h3>
                <p className="text-sm text-gray-500">No resolved tasks yet.</p>
            </div>
        </div>
       </div>

    );
};

export default TaskStatus;