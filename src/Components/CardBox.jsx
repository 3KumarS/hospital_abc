import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPhone} from '@fortawesome/free-solid-svg-icons';

const CardBox = () => {
    return(
        <>
            <div className="w-full h-auto bg-sky-100 justify-center place-items-center">
                <div className="py-5 place-items-center justify-center">
                    <div className="text-semibold">
                        <p>The Apollo World of Care</p>
                    </div>
                    <div className="font-bold text-xl">
                        <big>International Patient Care</big>
                    </div>
                    <div className="font-semibold overflow-auto">
                        <small>“Bringing healthcare of International standards within the reach of every individual.”</small>
                    </div>
                </div>
                <div className='grid grid-cols-2 w-full h-auto justify-center place-items-center p-10'>
                    <div className='w-full h-auto justify-center place-items-center'>
                        <div className='w-full h-auto mx-auto grid lg:grid-cols-3 md:grid-cols-3 grid-cols-3 justify-center place-items-center'>
                            <figure className="bg-slate-100 rounded-xl shadow-2xl dark:bg-slate-800 h-[23vh] w-[150px] justify-center text-center hover:bg-indigo-300 hover:text-white">
                                <div className='place-items-center pt-3'>
                                    <img src="https://www.apollohospitals.com/wp-content/themes/apollohospitals/assets-v2/images/ips_hsptl.svg" alt="icon" />
                                </div>
                                <div className="text-sky-500 dark:text-sky-400 hover:text-white font-medium pt-3">
                                    <small>Hospitals</small>
                                </div>
                            </figure>
                            <figure className="bg-slate-100 rounded-xl shadow-2xl px-1 dark:bg-slate-800 h-[23vh] w-[150px] justify-center text-center my-5 hover:bg-indigo-300 hover:text-white">
                                <div className='place-items-center pt-3'>
                                    <img src="https://www.apollohospitals.com/wp-content/themes/apollohospitals/assets-v2/images/ips_speciality.svg" alt="" />
                                </div>
                                <div className="text-sky-500 dark:text-sky-400 hover:text-white pt-3 font-medium">
                                    <small>Speciality</small>
                                </div>
                            </figure>
                            <figure className="bg-slate-100 rounded-xl shadow-2xl px-1 dark:bg-slate-800 h-[23vh] w-[150px] justify-center text-center my-5 hover:bg-indigo-300 hover:text-white">
                                <div className='place-items-center pt-3'>
                                    <img src="https://www.apollohospitals.com/wp-content/themes/apollohospitals/assets-v2/images/ips_planyourtrip.svg" alt="icon" />
                                </div>
                                <div className="text-sky-500 dark:text-sky-400 hover:text-white pt-3 font-medium">
                                    <small>Plan Your Trip</small>
                                </div>
                            </figure>
                            <figure className="bg-slate-100 rounded-xl shadow-2xl px-1 dark:bg-slate-800 h-[23vh] w-[150px] justify-center text-center my-5 hover:bg-indigo-300 hover:text-white">
                                <div className='place-items-center pt-3'>
                                    <img src="https://www.apollohospitals.com/wp-content/themes/apollohospitals/assets-v2/images/ips_testimonials.svg" alt="icon" />
                                </div>
                                <div className="text-sky-500 dark:text-sky-400 hover:text-white pt-3 font-medium">
                                    <small>Testimonials</small>
                                </div>
                            </figure>
                            <figure className="bg-slate-100 rounded-xl shadow-2xl px-1 dark:bg-slate-800 h-[23vh] w-[150px] justify-center text-center my-5 hover:bg-indigo-300 hover:text-white">
                                <div className='place-items-center pt-3'>
                                    <img src="https://www.apollohospitals.com/wp-content/themes/apollohospitals/assets-v2/images/ips_faq.svg" alt="icon" />
                                </div>
                                <div className="text-sky-500 dark:text-sky-400 hover:text-white pt-3 font-medium">
                                    <small>FAQ’s</small>
                                </div>
                            </figure>
                            <figure className="bg-slate-100 rounded-xl shadow-2xl px-1 dark:bg-slate-800 h-[23vh] w-[150px] justify-center text-center my-5 hover:bg-indigo-300 hover:text-white">
                                <div className='place-items-center pt-3'>
                                    <img src="https://www.apollohospitals.com/wp-content/themes/apollohospitals/assets-v2/images/ips_doctor.svg" alt="icon" />
                                </div>
                                <div className="text-sky-500 dark:text-sky-400 hover:text-white pt-3 font-medium">
                                    <small>Find A Doctor</small>
                                </div>
                            </figure>
                            <figure className="bg-slate-100 rounded-xl shadow-2xl px-1 dark:bg-slate-800 h-[23vh] w-[150px] justify-center text-center my-5 hover:bg-indigo-300 hover:text-white">
                                <div className='place-items-center pt-3'>
                                    <img src="https://www.apollohospitals.com/wp-content/themes/apollohospitals/assets-v2/images/ips_onlineconsultation.svg" alt="icon" />
                                </div>
                                <div className="text-sky-500 dark:text-sky-400 hover:text-white pt-3 font-medium">
                                    <small>Online Consultation</small>
                                </div>
                            </figure>
                            <figure className="bg-slate-100 rounded-xl shadow-2xl px-1 dark:bg-slate-800 h-[23vh] w-[150px] justify-center text-center my-5 hover:bg-indigo-300 hover:text-white">
                                <div className='place-items-center pt-3'>
                                    <img src="https://www.apollohospitals.com/wp-content/themes/apollohospitals/assets-v2/images/ips_Apollo Insurance.svg" alt="icon" />
                                </div>
                                <div className="text-sky-500 dark:text-sky-400 hover:text-white pt-3 font-medium">
                                    <small>Apollo Insurance</small>
                                </div>
                            </figure>
                            <figure className="bg-slate-100 rounded-xl shadow-2xl px-1 dark:bg-slate-800 h-[23vh] w-[150px] justify-center text-center my-5 hover:bg-indigo-300 hover:text-white">
                                <div className='place-items-center pt-3'>
                                    <img src="https://www.apollohospitals.com/wp-content/themes/apollohospitals/assets-v2/images/ips_visa.svg" alt="icon" />
                                </div>
                                <div className="text-sky-500 dark:text-sky-400 hover:text-white pt-3 font-medium">
                                    <small>Visa</small>
                                </div>
                            </figure>
                        </div>
                        <div className='p-5 gap-x-10 border-2 rounded-md bg-white shadow border-green-800 hover:bg-green-600 hover:text-white grid grid-cols-2 justify-items-center place-items-end'>
                            <div className='font-light text-gray-500 hover:text-white'>
                                <code>International Number</code>
                            </div>
                            <div>
                                <h4><FontAwesomeIcon icon={faPhone} className="text-blue-500 text-xl" /> (+91) 40 4344 1066</h4>
                            </div>
                        </div>
                    </div>
                    <div className='place-items-center shadow-2xl border-8 rounded-xl border-white w-auto'>
                        <img src="https://cdn.apollohospitals.com/apollohospitals/international.png" alt="Apollo Heart Institute Expertise" className='rounded w-auto h-[90vh]' />
                    </div>
                </div> 
            </div>
        </>
    )
}

export default CardBox