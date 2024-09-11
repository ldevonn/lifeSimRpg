import TopBar from "../TopBar/TopBar.jsx";
import {Briefcase} from "lucide-react";

const JobListing = ({title, icon, children}) => (
    <div className='mb-6 border p-2'>
        <h2 className='text-xl font-bold mb-2 flex justify-center mt-1 items-center'>
            {icon}
            <span className='ml-2 text-gray-900'>{title}</span>
        </h2>
        <div className='grid grid-cols-1 gap-2'>
            {children}
        </div>
    </div>
)

const JobButton = ({ label, onClick }) => (
  <button
    onClick={onClick}
    className="bg-blue-700 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300 bg-blue-600">
    {label}
  </button>
);

const CareerApply = () => {
    return (
        <>
            <TopBar/>
            <div className='bg-gray-500 shadow-lg shadow-black rounded-md grid grid-cols-3 md:grid-cols-3 gap-4 mt-6 p-4'>
                <div>
                    <JobListing title="Doctor" icon={<Briefcase className='inline'/>}>
                        <JobButton label="Apply for job"></JobButton>
                    </JobListing>
                </div>
                <div>
                    <JobListing title="Engineer" icon={<Briefcase className='inline'/>}>
                        <JobButton label="Apply for job"></JobButton>
                    </JobListing>
                </div>
                <div>
                    <JobListing title="Advisor" icon={<Briefcase className='inline'/>}>
                        <JobButton label="Apply for job"></JobButton>
                    </JobListing>
                </div>
                <div>
                    <JobListing title="CEO" icon={<Briefcase className='inline'/>}>
                        <JobButton label="Apply for job"></JobButton>
                    </JobListing>
                </div>
            </div>
        </>
    );
};

export default CareerApply;