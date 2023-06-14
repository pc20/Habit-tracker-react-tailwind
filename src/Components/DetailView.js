import React from 'react'
import { useSelector } from 'react-redux';
import HabitCard from './HabitCard';
function DetailView() {
    const { habits } = useSelector((state) => state.allHabits)

    return (
        <div className="container mt-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
                {
                    habits.map((habit, index) => (
                        <HabitCard key={index} habit={habit} />
                    ))
                }
            </div>
        </div>
    )
}

export default DetailView