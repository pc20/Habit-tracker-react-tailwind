import React from 'react'

function HabitCard(props) {
    const { title, description, details } = props.habit;
    return (
        <>
            <div>{title}</div>
            <div>{description}</div>
            <div>
                {
                    details.map((data) => (
                        <ul>
                            <li> {data.day}</li>
                            <li>{data.status}</li>
                        </ul>
                    ))
                }
            </div>
        </>
    )
}

export default HabitCard