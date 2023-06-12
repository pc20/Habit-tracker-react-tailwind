import React from 'react'
import { useSelector } from 'react-redux';
import HabitCard from './HabitCard';
function DetailView() {

    const { habits } = useSelector((state) => state.allHabits)
    console.log(habits);
    return (
        <div>
            {
                habits.map((habit, idx) => (
                    <HabitCard habit={habit} />
                ))
            }
        </div>
    )
}

export default DetailView