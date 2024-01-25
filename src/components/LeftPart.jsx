import react from 'react' ;
import { Link } from 'react-router-dom';
import badge from './images/badge1.png' ;



const LeftPart = () => {
    return (
        <>
            <div className='lg:w-1/2 flex justify-center items-center sm:w-full'>
                <div className=' w-full flex justify-center items-center'>
                    <div className='lg:w-6/12 flex flex-col gap-5 sm:w-10/12 md:w-1/2 xs:w-3/4'>
                        <img className='relative w-6/12 -left-10 top-16' src={badge} />
                        <form className='flex flex-col gap-6'>
                            <input className='input bg-white w-full p-3 text-center shadow-md' placeholder='Certificate ID' />
                            <Link to='/Certificate' className='btn bg-[#77AA5F] w-full p-3 text-center text-[#000] font-bold' >Get Certificate</Link>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LeftPart ;