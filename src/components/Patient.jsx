const Patient = () => {
    return (
        <div className='bg-white mx-5 shadow-md px-5 py-10 rounded-xl'>
            <p className='font-bold mb-3 text-gray-700 '>Name: {''}
                <span className='font-normal normal-case'>Hook</span>
            </p>

            <p className='font-bold mb-3 text-gray-700 '>Owner: {''}
                <span className='font-normal normal-case'>Fernando</span>
            </p>

            <p className='font-bold mb-3 text-gray-700 '>Email: {''}
                <span className='font-normal normal-case'>email@email.com</span>
            </p>

            <p className='font-bold mb-3 text-gray-700 '>Discharge date: {''}
                <span className='font-normal normal-case'>October 1st 2022</span>
            </p>

            <p className='font-bold mb-3 text-gray-700 '>Symptoms: {''}
                <span className='font-normal normal-case'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad, quae cupiditate laboriosam enim fuga magni rem quo, fugiat perferendis cum unde amet ut. Qui possimus doloribus distinctio praesentium, eos illo!</span>
            </p>
        </div>
    )
}

export default Patient