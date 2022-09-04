const Patient = ({ patient }) => {

    const { name, owner, email, dischargeDate, symptoms } = patient;

    return (
        <div className='bg-white mx-5 shadow-md px-5 py-10 rounded-xl'>
            <p className='font-bold mb-3 text-gray-700 '>Name: {''}
                <span className='font-normal normal-case'>{name}</span>
            </p>

            <p className='font-bold mb-3 text-gray-700 '>Owner: {''}
                <span className='font-normal normal-case'>{owner}</span>
            </p>

            <p className='font-bold mb-3 text-gray-700 '>Email: {''}
                <span className='font-normal normal-case'>{email}</span>
            </p>

            <p className='font-bold mb-3 text-gray-700 '>Discharge date: {''}
                <span className='font-normal normal-case'>{dischargeDate}</span>
            </p>

            <p className='font-bold mb-3 text-gray-700 '>Symptoms: {''}
                <span className='font-normal normal-case'>{symptoms}</span>
            </p>
        </div>
    )
}

export default Patient