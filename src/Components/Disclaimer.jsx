import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowRight} from '@fortawesome/free-solid-svg-icons';


const Disclaimer = () => {
    return (
        <>
            <div className="w-full h-auto justify-center text-center bg-slate-100 py-5 md:justify-center">
                <div className="font-black text-3xl py-5">
                    <h1>Disclaimer</h1>
                </div>

                <div className="w-full md:w-[50rem] h-auto grid grid-cols-1 md:grid-cols-2 gap-x-10 justify-center items-center m-auto gap-y-5 px-5">
                    <div className="pt-6 md:p-8 text-center md:text-left space-y-4 border border-slate-500 rounded-3xl">
                        <img className="w-24 h-24 md:w-[20rem] md:h-auto md:rounded rounded-2xl mx-auto" src="https://cdn.apollohospitals.com/dev-apollohospitals/2024/05/transplant-disclaimer-min-m.webp" alt="" width="384" height="512" />
                        <div className="text-sky-500 dark:text-sky-400 font-medium text-center shadow">
                        Transplant Disclaimer <FontAwesomeIcon icon={faArrowRight} className='bg-indigo-800 text-white rounded-full'/>
                        </div>
                    </div>
                    <div className="pt-6 md:p-8 text-center md:text-left space-y-4 border border-slate-500 rounded-3xl">
                        <img className="w-24 h-24 md:w-[20rem] md:h-auto md:rounded rounded-2xl mx-auto" src="https://cdn.apollohospitals.com/dev-apollohospitals/2024/05/recruitment-disclaimer-min-m.webp" alt="" width="384" height="512" />
                        <div className="text-sky-500 dark:text-sky-400 font-medium text-center shadow">
                         Recruitment Disclaimer <FontAwesomeIcon icon={faArrowRight} className='bg-indigo-800 text-white rounded-full'/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Disclaimer