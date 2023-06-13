import React from 'react'

function HabitCard(props) {
    const { title, description } = props.habit;
    // const [totalDone, setTotalDone] = useState(0);
    // let percent = '';
    // function getTotalDone() {
    //     let total = 0;
    //     details.array.forEach(element => {
    //         if (element.status === 'done') total++;
    //     });
    //     setTotalDone(total);
    //     percent = 'w-' + total + '/7';
    // }

    return (
        <div className="m-2 border border-black rounded-lg hover:shadow-md hover:border-opacity-0 hover:scale-110
        transition-all duration-200">
            <div className="my-2 flex flex-col justify-between">
                <h2 className="mx-2 text-left text-lg mb-2">{description}
                    <span className="text-xs text-teal-800 font-mono bg-teal-100 inline rounded-full px-2 align-top 
                    float-right">#{title}</span></h2>
                <div className='flex flex-col mx-5'>
                    <p className="text-black text-sm text-left">
                        4/7 days completed
                    </p>
                    <div className="h-2 bg-blue-200 rounded-full">
                        <div className={`h-full text-center text-xs text-black bg-blue-600 rounded-full`}>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HabitCard