import React, { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import { FaCalendarAlt } from "react-icons/fa";

const Calendar = () => {
    const days = ["S", "M", "T", "W", "T", "F", "S"];
    const months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEPT", "OCT", "NOV", "DEC"];
    const [dateArray, setDateArray] = useState([]);
    const [selectDate, setSelectDate] = useState(dayjs());

    useEffect(() => {
        let arrayOfDate = [];
        const curr_Month = dayjs().month();
        const curr_Year = dayjs().year();
        const firstDateOfMonth = dayjs().year(curr_Year).month(curr_Month).startOf("month");
        const lastDateOfMonth = dayjs().year(curr_Year).month(curr_Month).endOf("month");

        // create prefix date
        for (let i = 0; i < firstDateOfMonth.day(); i++) {
            const date = firstDateOfMonth.day(i);

            arrayOfDate.push({
                currentMonth: false,
                date,
            });
        }

        // generate current date
        for (let i = firstDateOfMonth.date(); i <= lastDateOfMonth.date(); i++) {
            arrayOfDate.push({
                currentMonth: true,
                date: firstDateOfMonth.date(i),
                today:
                    firstDateOfMonth.date(i).toDate().toDateString() ===
                    dayjs().toDate().toDateString(),
            });
        }

        const remaining = 35 - arrayOfDate.length;

        for (
            let i = lastDateOfMonth.date() + 1;
            i <= lastDateOfMonth.date() + remaining;
            i++
        ) {
            arrayOfDate.push({
                currentMonth: false,
                date: lastDateOfMonth.date(i),
            });
        }
        setDateArray(arrayOfDate);
    }, []);

    return (
        <div className='text-white flex justify-center items-center'>
            <div className='w-56 h-72'>
                <div className="flex justify-center items-center select-none font-semibold gap-2">
                    <FaCalendarAlt />
                    {months[dayjs().month()]}, {dayjs().year()}
                </div>
                <div className="grid grid-cols-7 ">
                    {days.map((day, index) => {
                        return (
                            <h1 key={index}
                                className="text-sm text-center h-10 w-10 grid place-content-center select-none">
                                {day}
                            </h1>
                        );
                    })}
                </div>
                <div className='w-full grid grid-cols-7'>
                    {dateArray.map(
                        ({ date, currentMonth, today }, index) => {
                            return (
                                <div
                                    key={index}
                                    className="p-2 text-center h-10 grid place-content-center text-sm border-t"
                                >
                                    <h1
                                        className={
                                            `  h-6 w-6 rounded-full grid place-content-center hover:bg-blue-600 hover:text-white transition-all 
                                    cursor-pointer select-none ${currentMonth ? "" : "text-gray-600"}
                                    ${today ? "bg-red-600 text-white" : ""}
                                    ${selectDate.toDate().toDateString() === date.toDate().toDateString()
                                                ? "bg-black text-white" : ""}`
                                        }
                                        onClick={() => {
                                            setSelectDate(date);
                                        }}
                                    >
                                        {date.date()}
                                    </h1>
                                </div>
                            );
                        }
                    )}
                </div>
            </div>
        </div>
    )
}

export default Calendar