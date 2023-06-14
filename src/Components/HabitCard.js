import React, { useEffect, useState } from 'react'

function HabitCard(props) {

    const { title, description, details } = props.habit;
    const [totalDone, setTotalDone] = useState(0);
    const [percentage, setPercentage] = useState('');

    useEffect(() => {
        let total = 0;
        details.forEach(element => {
            if (element.status === 'done') total++;
        });
        setTotalDone(total);
        switch (totalDone) {
            case 1:
                setPercentage('14%'); break;
            case 2:
                setPercentage('28%'); break;
            case 3:
                setPercentage('43%'); break;
            case 4:
                setPercentage('57%'); break;
            case 5:
                setPercentage('71%'); break;
            case 6:
                setPercentage('86%'); break;
            default:
                setPercentage('100%'); break;
        }
    }, [details, totalDone]);

    return (
        <div className="m-2 border border-black rounded-lg hover:shadow-md hover:border-opacity-0 hover:scale-105">
            <div className="my-2 flex flex-col justify-between">
                <h2 className="mx-2 text-left text-lg mb-2">{description}
                    <span className="text-xs text-teal-800 font-mono bg-teal-100 inline rounded-full px-2 align-top 
                    float-right">#{title}
                    </span>
                </h2>
                <hr className='my-1 mx-2' />
                <div className="p-2 flex justify-between text-black text-sm">
                    <span>Days : {totalDone}</span>
                    <span>% : {percentage}</span>
                </div>
                <div className=" my-1 mx-2 h-2 bg-blue-200 rounded-full">
                    <div style={{ width: percentage }}
                        className={`h-full text-center text-sm text-black bg-blue-600 rounded-full`}>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HabitCard