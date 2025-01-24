import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar,faHospital,faSearchPlus,faDesktop,faMemory} from '@fortawesome/free-solid-svg-icons';


const CardFooter = ()=> {
    return (
        <>
            <div className='bg-violet-500 w-full h-auto  gap-x-5 text-center justify-center m-auto place-items-center'>
                <blockquote>
                    <h1 className='text-white font-bold py-3 text-3xl'>What Would You Like To Do Today?</h1>
                </blockquote>
                <div className='w-full h-auto gap-x-1 gap-y-1 grid lg:grid-cols-6 md:grid-cols-3 grid-cols-1 justify-center shadow mx-auto place-items-center px-28'>
                    <figure className="bg-slate-100 rounded-xl shadow dark:bg-slate-800 md:h-[20vh] w-[150px] justify-center text-center hover:bg-indigo-300 hover:text-white">
                        <div className='place-items-center pt-3'>
                            <img src="https://www.apollohospitals.com/wp-content/themes/apollohospitals/assets-v3/images/bookappt_icon.svg" alt="icon" width="64" />
                        </div>
                        <div className="text-sky-500 dark:text-sky-400 hover:text-white font-medium pt-3">
                            <small>Book Appointment</small>
                        </div>
                    </figure>
                    <figure className="bg-slate-100 rounded-xl shadow px-1 dark:bg-slate-800 md:h-[20vh] w-[150px] justify-center text-center my-5 hover:bg-indigo-300 hover:text-white">
                        <div className='place-items-center pt-3'>
                            <img src="https://www.apollohospitals.com/wp-content/themes/apollohospitals/assets-v3/images/finddoctor_icon.svg" alt="icon" /> 
                        </div>
                        <div className="text-sky-500 dark:text-sky-400 hover:text-white pt-3 font-medium">
                            <small>Find Doctor</small>
                        </div>
                    </figure>
                    <figure className="bg-slate-100 rounded-xl shadow px-1 dark:bg-slate-800 md:h-[20vh] w-[150px] justify-center text-center my-5 hover:bg-indigo-300 hover:text-white">
                        <div className='place-items-center pt-3'>
                            <img src="https://www.apollohospitals.com/wp-content/themes/apollohospitals/assets-v3/images/findhsptl_icon.svg" alt="icon" />
                        </div>
                        <div className="text-sky-500 dark:text-sky-400 hover:text-white pt-3 font-medium">
                            <small>Find Hospital</small>
                        </div>  
                    </figure>
                    <figure className="bg-slate-100 rounded-xl shadow px-1 dark:bg-slate-800 md:h-[20vh] w-[150px] justify-center text-center my-5 hover:bg-indigo-300 hover:text-white">
                        <div className='place-items-center pt-3'>
                            <img src="https://www.apollohospitals.com/wp-content/themes/apollohospitals/assets-v3/images/bookhelathcheck_icon.svg" alt="icon" />
                        </div>
                        <div className="text-sky-500 dark:text-sky-400 hover:text-white pt-3 font-medium">
                            <small>Book Health Check-Up</small>
                        </div> 
                    </figure>
                    <figure className="bg-slate-100 rounded-xl shadow px-1 dark:bg-slate-800 md:h-[20vh] w-[150px] justify-center text-center my-5 hover:bg-indigo-300 hover:text-white">
                        <div className='place-items-center pt-3'>
                            <img src="https://www.apollohospitals.com/wp-content/themes/apollohospitals/assets-v3/images/buymedicines_icon.svg" alt="icon" />
                        </div>
                        <div className="text-sky-500 dark:text-sky-400 hover:text-white pt-3 font-medium">
                            <small>Consult Online</small>
                        </div>   
                    </figure>
                    <figure className="bg-slate-100 rounded-xl shadow px-1 dark:bg-slate-800 md:h-[20vh] w-[150px] justify-center text-center my-5 hover:bg-indigo-300 hover:text-white">
                        <div className='place-items-center pt-3'>
                            <img src="https://cdn.apollohospitals.com/apollohospitals/View%20Health%20Record.svg" alt="icon" />
                        </div>
                        <div className="text-sky-500 dark:text-sky-400 hover:text-white pt-3 font-medium">
                            <small>View Health Record</small>
                        </div>
                    </figure>
                    
                </div>
                
            </div>
        </>
    )
}

export default CardFooter