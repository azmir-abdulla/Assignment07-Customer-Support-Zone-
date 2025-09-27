
const TaskStatus = ({ taskList, resolvedList, handleComplete }) => {
    return (
        <div className="p-4">
            <h2 className="text-2xl mb-4 text-[#34485A] inter-600">Task Status</h2>

            {taskList.length === 0 ? (
                <p className="text-sm text-gray-500">No active tasks.</p>
            ) : (
                taskList.map((task, index) => (
                    <div key={index} className="p-4 border rounded-sm shadow-sm bg-gray-50 mb-4">
                        <h3 className="inter-500 text-[18px] text-[#34485A]">{task}</h3>
                        <button
                            onClick={() => handleComplete(task, index)}
                            className="mt-2 px-4 py-3 bg-green-500 text-white rounded-sm w-full"
                        >
                            Complete
                        </button>
                    </div>
                ))
            )}

            <div className="mt-6">
                <h3 className="text-2xl mb-4 text-[#34485A] inter-600">Resolved Task</h3>
                {resolvedList.length === 0 ? (
                    <p className="text-sm text-gray-500">No resolved tasks yet.</p>
                ) : (
                    <ul className="space-y-2">
                        {resolvedList.map((task, i) => (
                            <li key={i} className="p-2 border rounded-sm bg-green-50 text-green-700">
                                {task}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};
export default TaskStatus;