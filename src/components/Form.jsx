import { useState, useEffect } from 'react';

const Form = () => {
    return (
        <div className="md:w-1/2 lg:w-2/5">
            <h2 className="font-black text-3xl text-center">
                Patient's Follow Up
            </h2>
            <p className="text-lg mt-5 text-center mb-10">
                Add and {''}
                <span className="text-indigo-600 font-bold">manage</span>
                {''} patients
            </p>

            <form className="bg-white shadow-md rounded-lg py-10 px-5 mb-10">
                <div className="mb-5">
                    <label htmlFor="pet-name" className="block text-gray-700 capitalize">Pet's name</label>
                    <input
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        type="text"
                        placeholder="Pet's name" name="pet-name" id="pet-name" />
                </div>

                <div className="mb-5">
                    <label htmlFor="owner-name" className="block text-gray-700 capitalize">Owner's name</label>
                    <input
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        type="text"
                        placeholder="Owner's name" name="owner-name" id="owner-name" />
                </div>

                <div className="mb-5">
                    <label htmlFor="email" className="block text-gray-700 capitalize">Email</label>
                    <input
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        type="text"
                        placeholder="Email" name="email" id="email" />
                </div>

                <div className="mb-5">
                    <label htmlFor="discharge" className="block text-gray-700 capitalize">Discharge date</label>
                    <input
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        type="date" name="discharge" id="discharge" />
                </div>

                <div className="mb-5">
                    <label htmlFor="symptoms" className="block text-gray-700 capitalize">Symptoms</label>
                    <textarea
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        placeholder="Describe the symptoms" name="symptoms" id="symptoms" />
                </div>

                <input
                    type="submit"
                    className="bg-indigo-600 w-full p-3 text-white uppercase font-bold
                     hover:bg-indigo-700 cursor-pointer transition-colors"
                    value="Add Patient" />
            </form>
        </div>
    )
}

export default Form