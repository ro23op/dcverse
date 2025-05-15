import React, { useState } from 'react';
import Greetings from './Greetings';

const Dashboard = ({ users }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <Greetings />
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
                {users.map((user, index) => (
                    <div key={index} className="bg-gray-50 flex justify-center items-center">
                        <div className="group absolute flex justify-center items-center">
                            <div className="absolute h-30 w-30 max-w-xs overflow-hidden bg-cover bg-no-repeat rounded-full border-4 border-s-yellow-400 border-r-amber-600 border-b-emerald-500 transition-transform group-hover:animate-ping"></div>
                            <img
                                className="h-28 object-cover rounded-full"
                                src={user.avatar}
                                alt={user.name}
                            />
                        </div>

                        <div className="h-64 mx-4 my-4 w-full bg-gradient-to-br from-blue-600 to-fuchsia-600 rounded-3xl shadow-md md:mx-10 xl:my-0">
                            <div className="h-1/2 w-full flex justify-between items-baseline px-3 py-5">
                                <h1 className="text-white font-bold text-xl">Profile</h1>
                            </div>

                            <div className="bg-white h-1/2 w-full rounded-3xl flex flex-col justify-around items-center">
                                <div className="w-full flex justify-between px-4 mt-4">
                                    <div className="text-gray-600 text-sm lg:text-lg font-medium">{user.level}</div>
                                    <div className="text-gray-600 text-sm lg:text-lg font-medium">{user.job}</div>
                                </div>
                                <div className="w-full h-1/2 flex flex-col justify-center items-center">
                                    <h1 className="text-gray-700 font-bold text-xl">{user.name}</h1>
                                    <h1 className="text-gray-500 text-md">{user.location}</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>


            <button
                onClick={() => setIsModalOpen(true)}
                className="fixed bottom-6 right-6 bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-full shadow-lg z-50"
            >
                + Create New Avatar
            </button>

            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
                    <div className="bg-white rounded-xl p-6 w-[90%] max-w-md shadow-lg">
                        <h2 className="text-xl font-semibold mb-4">Create New Avatar</h2>

                        <div className="space-y-4">
                            <input type="text" placeholder="Name" className="w-full border border-gray-300 rounded-md p-2" />
                            <input type="text" placeholder="Job Title" className="w-full border border-gray-300 rounded-md p-2" />
                            <input type="text" placeholder="Location" className="w-full border border-gray-300 rounded-md p-2" />
                            <input type="url" placeholder="Avatar Image URL" className="w-full border border-gray-300 rounded-md p-2" />
                            <select className="w-full border border-gray-300 rounded-md p-2">
                                <option value="">Select Level</option>
                                <option value="Amateur">Amateur</option>
                                <option value="Professional">Professional</option>
                                <option value="Expert">Expert</option>
                            </select>
                        </div>

                        <div className="flex justify-end gap-2 mt-6">
                            <button
                                onClick={() => setIsModalOpen(false)}
                                className="bg-gray-200 hover:bg-gray-300 text-sm px-4 py-2 rounded-md"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={() => setIsModalOpen(false)}
                                className="bg-blue-600 hover:bg-blue-700 text-white text-sm px-4 py-2 rounded-md"
                            >
                                Create (UI Only)
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Dashboard;
