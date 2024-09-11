import TopBar from "../TopBar/TopBar.jsx";
import {Briefcase} from "lucide-react";
import {useNavigate} from "react-router-dom";

const GameMain = () => {
    const navigate = useNavigate()
    return (
        <div>
            <TopBar/>
            <div className='flex gap-4'>
                <Briefcase/>
                <span onClick={() => navigate('/jobs/apply')}>Apply for a job</span>
            </div>
        </div>
    );
};

export default GameMain;