import React from 'react'
import { useSelector } from 'react-redux';
import HabitCard from './HabitCard';
function DetailView() {

    const { habits } = useSelector((state) => state.allHabits)
    console.log(habits);
    return (
        <div>
            {
                habits.map((habits, idx) => (
                    <HabitCard />
                ))
            }
        </div>
    )
}

export default DetailView