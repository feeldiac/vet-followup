import React from 'react'
import Patient from './Patient'

const PatientsList = () => {
    return (
        <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
            <h2 className='font-black text-3xl text-center'>Patient's List</h2>
            <p className='text-xl mt-5 mb-10 text-center'>
                Manage yours {''}
                <span className='text-indigo-600 font-bold'>
                    Patients and Appointments
                </span>
            </p>
            <Patient />
        </div>
    )
}

export default PatientsList