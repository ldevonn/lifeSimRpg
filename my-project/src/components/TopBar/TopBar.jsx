import {Heart, Battery, DollarSign, Brain, Clock, Smile, Menu} from 'lucide-react'
import {useNavigate} from "react-router-dom";
const TopBar = () => {

    const navigate = useNavigate()

    let playerDemo = {
        playerName: "Devon",
        health: 100,
        energy: 100,
        money: 1000,
        intelligence: 100,
        time: "01/01/24: 9:00 AM",
        happiness: 100

    }

    return (
        <>
            <div className="bg-gray-800 text-white p-4 shadow-lg">
            <div className='container mx-auto flex items-center justify-between'>
                <div className='flex items-center space-x-4'>
                    <span className='font-bold text-xl cursor-pointer' onClick={() => navigate('/main')}>{playerDemo.playerName}</span>
                    <div className='flex items-center'>
                        <Heart className="w-5 h-5 text-red-500 mr-1"/>
                        <span>{playerDemo.health}%</span>
                    </div>
                    <div className='flex items-center'>
                        <Battery className='w-5 text-green-500 mr-1'/>
                        <span>{playerDemo.energy}%</span>
                    </div>
                    <div className='flex items-center'>
                        <DollarSign className='w-5 text-green-400 mr-1'/>
                        <span>{playerDemo.money}</span>
                    </div>
                    <div className='flex items-center'>
                        <Brain className='w-5 text-pink-500 mr-1'/>
                        <span>{playerDemo.intelligence}</span>
                    </div>
                    <div className='flex items-center'>
                        <Smile className='w-5 text-yellow-500 mr-1'/>
                        <span>{playerDemo.happiness}%</span>
                    </div>
                    <div className='flex items-center'>
                        <Clock className='w-5 text-gray-300 mr-1' />
                        <span>{playerDemo.time}</span>
                    </div>
                    <div className='flex items-center'>
                        <Menu className='size-6 cursor-pointer'/>
                    </div>
                </div>
            </div>
        </div>

        </>
    )
}

export default TopBar