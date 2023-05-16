import React, { useState, useEffect, useCallback } from 'react';
import classData from './classData';
// import { v4 as uuidv4 } from 'uuid'

export default function BookingCalendar() {
    // SETS WEEK NUMBER - IN BETA
    let currentDate = new Date();
    let startDate = new Date(currentDate.getFullYear(), 0, 1);
    let days = Math.floor((currentDate - startDate) /
        (24 * 60 * 60 * 1000));
    let weekNumber = Math.ceil(days / 7);


    const [yogaClassesArray, createYogaClassesArray] = useState([]);
    useEffect(() => {
        createYogaClassesArray(classData);
    }, []);


    const [filtered, setFiltered] = useState([]);


    const checkOptionOksana = useCallback((e) => {
        const checkedValue = e.target.id;
        const checked = e.target.checked;
        if (checked) {
            // Creating the temp variable
            const tempFiltered = [...filtered, checkedValue];
            setFiltered(tempFiltered);
            const newFilteredYogaClassesArray = classData.filter(singleClass => {
                // Calling map on the temp variable instead of the state variable
                return tempFiltered.map(obj => obj === singleClass.instructor || obj === singleClass.yoga).some(val => val);
            });
            createYogaClassesArray(newFilteredYogaClassesArray);
            console.log(newFilteredYogaClassesArray);
        }
    }, [filtered]);

    const checkOptionCharlotte = useCallback((e) => {
        const checkedValue = e.target.id;
        const checked = e.target.checked;
        if (checked) {
            const tempFiltered = [...filtered, checkedValue];
            setFiltered(tempFiltered);
            const newFilteredYogaClassesArray = classData.filter(singleClass => {
                return tempFiltered.map(obj => obj === singleClass.instructor || obj === singleClass.yoga).some(val => val);
            });
            createYogaClassesArray(newFilteredYogaClassesArray);
            console.log(newFilteredYogaClassesArray);
        }
    }, [filtered]);




    const checkOptionAmelia = useCallback((e) => {
        const checkedValue = e.target.id;
        const checked = e.target.checked;
        if (checked) {
            const tempFiltered = [...filtered, checkedValue];
            setFiltered(tempFiltered);
            const newFilteredYogaClassesArray = classData.filter(singleClass => {
                return tempFiltered.map(obj => obj === singleClass.instructor || obj === singleClass.yoga).some(val => val);
            });
            createYogaClassesArray(newFilteredYogaClassesArray);
            console.log(newFilteredYogaClassesArray);
        }
    }, [filtered]);

    const checkOptionSaadaa = useCallback((e) => {
        const checkedValue = e.target.id;
        const checked = e.target.checked;
        if (checked) {
            const tempFiltered = [...filtered, checkedValue];
            setFiltered(tempFiltered);
            const newFilteredYogaClassesArray = classData.filter(singleClass => {
                return tempFiltered.map(obj => obj === singleClass.instructor || obj === singleClass.yoga).some(val => val);
            });
            createYogaClassesArray(newFilteredYogaClassesArray);
            console.log(newFilteredYogaClassesArray);
        }
    }, [filtered]);

    const checkOptionPao = useCallback((e) => {
        const checkedValue = e.target.id;
        const checked = e.target.checked;
        if (checked) {
            const tempFiltered = [...filtered, checkedValue];
            setFiltered(tempFiltered);
            const newFilteredYogaClassesArray = classData.filter(singleClass => {
                return tempFiltered.map(obj => obj === singleClass.instructor || obj === singleClass.yoga).some(val => val);
            });
            createYogaClassesArray(newFilteredYogaClassesArray);
            console.log(newFilteredYogaClassesArray);
        }
    }, [filtered]);

    const checkOptionAva = useCallback((e) => {
        const checkedValue = e.target.id;
        const checked = e.target.checked;
        if (checked) {
            const tempFiltered = [...filtered, checkedValue];
            setFiltered(tempFiltered);
            const newFilteredYogaClassesArray = classData.filter(singleClass => {
                return tempFiltered.map(obj => obj === singleClass.instructor || obj === singleClass.yoga).some(val => val);
            });
            createYogaClassesArray(newFilteredYogaClassesArray);
            console.log(newFilteredYogaClassesArray);
        }
    }, [filtered]);



    const checkOptionVinyasa = useCallback((e) => {
        const checkedValue = e.target.id;
        const checked = e.target.checked;
        if (checked) {
            const tempFiltered = [...filtered, checkedValue];
            setFiltered(tempFiltered);
            const newFilteredYogaClassesArray = classData.filter(singleClass => {
                return tempFiltered.map(obj => obj === singleClass.instructor || obj === singleClass.yoga).some(val => val);
            });
            createYogaClassesArray(newFilteredYogaClassesArray);
            console.log(newFilteredYogaClassesArray);
        }
    }, [filtered]);

    const checkOptionHatha = useCallback((e) => {
        const checkedValue = e.target.id;
        const checked = e.target.checked;
        if (checked) {
            const tempFiltered = [...filtered, checkedValue];
            setFiltered(tempFiltered);
            const newFilteredYogaClassesArray = classData.filter(singleClass => {
                return tempFiltered.map(obj => obj === singleClass.instructor || obj === singleClass.yoga).some(val => val);
            });
            createYogaClassesArray(newFilteredYogaClassesArray);
            console.log(newFilteredYogaClassesArray);
        }
    }, [filtered]);

    const checkOptionBeginner = useCallback((e) => {
        const checkedValue = e.target.id;
        const checked = e.target.checked;
        if (checked) {
            const tempFiltered = [...filtered, checkedValue];
            setFiltered(tempFiltered);
            const newFilteredYogaClassesArray = classData.filter(singleClass => {
                return tempFiltered.map(obj => obj === singleClass.instructor || obj === singleClass.yoga).some(val => val);
            });
            createYogaClassesArray(newFilteredYogaClassesArray);
            console.log(newFilteredYogaClassesArray);
        }
    }, [filtered]);

    const checkOptionMindful = useCallback((e) => {
        const checkedValue = e.target.id;
        const checked = e.target.checked;
        if (checked) {
            const tempFiltered = [...filtered, checkedValue];
            setFiltered(tempFiltered);
            const newFilteredYogaClassesArray = classData.filter(singleClass => {
                return tempFiltered.map(obj => obj === singleClass.instructor || obj === singleClass.yoga).some(val => val);
            });
            createYogaClassesArray(newFilteredYogaClassesArray);
            console.log(newFilteredYogaClassesArray);
        }
    }, [filtered]);

    const checkOptionPower = useCallback((e) => {
        const checkedValue = e.target.id;
        const checked = e.target.checked;
        if (checked) {
            const tempFiltered = [...filtered, checkedValue];
            setFiltered(tempFiltered);
            const newFilteredYogaClassesArray = classData.filter(singleClass => {
                return tempFiltered.map(obj => obj === singleClass.instructor || obj === singleClass.yoga).some(val => val);
            });
            createYogaClassesArray(newFilteredYogaClassesArray);
            console.log(newFilteredYogaClassesArray);
        }
    }, [filtered]);

    const checkOptionPrenatal = useCallback((e) => {
        const checkedValue = e.target.id;
        const checked = e.target.checked;
        if (checked) {
            const tempFiltered = [...filtered, checkedValue];
            setFiltered(tempFiltered);
            const newFilteredYogaClassesArray = classData.filter(singleClass => {
                return tempFiltered.map(obj => obj === singleClass.instructor || obj === singleClass.yoga).some(val => val);
            });
            createYogaClassesArray(newFilteredYogaClassesArray);
            console.log(newFilteredYogaClassesArray);
        }
    }, [filtered]);

    function clearCheckedOptions() {
        createYogaClassesArray(classData);
        setFiltered([]);
    }

    // CLASS CARDS FUNCTIONALITY AND DATA
    const [timeClickedClassCard, setTimeClickedClassCard] = useState();
    const [dayClickedClassCard, setDayClickedClassCard] = useState();
    function clickClassTime(e) {
        let timeClicked = e.target.innerText;
        setTimeClickedClassCard(timeClicked);
    }
    function clickClassDay(e) {
        let dayClicked = e.currentTarget.id;
        setDayClickedClassCard(dayClicked);
    }
    function onHandleClickClassCard(e) {
        clickClassTime(e);
        clickClassDay(e);
    }
    function closeClassCard() {
        setTimeClickedClassCard(null);
        setDayClickedClassCard(null);
    }
    const popupClassCard = yogaClassesArray.map((singleClass) => (
        <>
            <div>
                {singleClass.day === dayClickedClassCard && singleClass.time + ":00" === timeClickedClassCard ? (<div>
                    <div className='close-class-card' onClick={() => closeClassCard()}>x</div>
                    <div className='popup-class-card-text'>
                        <div>Instructor:  <div className='popup-class-card-text-instructor'><b>{singleClass.instructor}</b></div></div>
                        <div>Yoga Style:  <div className='popup-class-card-text-yoga'><b>{singleClass.yoga}</b></div></div>
                        <div className='date-time-class-card-container'>
                            <div>{singleClass.day}</div>
                            <div>{singleClass.time + ":00"}</div>
                        </div>

                    </div>
                    <div className='booknow-button-container'><button className='addtocart-button'>ADD TO CART</button></div>

                </div>) : null}
            </div>
        </>
    ))

    // CALENDAR COLUMS
    const mDayColumn = yogaClassesArray.map((singleClass) => (
        <>
            <div className='single-day-container monday-container'>
                {singleClass.day === 'Monday' ? (<div className='single-day-column'>
                    <div className='single-day-time-button'>{singleClass.time + ":00"}</div>
                </div>) : null}
            </div>
        </>
    ))

    const tDayColumn = yogaClassesArray.map((singleClass) => (
        <>
            <div className='single-day-container tuesday-container'>
                {singleClass.day === 'Tuesday' ? (<div className='single-day-column'>
                    <div className='single-day-time-button'>{singleClass.time + ":00"}</div>
                </div>) : null}
            </div>
        </>
    ))
    const wDayColumn = yogaClassesArray.map((singleClass) => (
        <>
            <div className='single-day-container wednesday-container'>
                {singleClass.day === 'Wednesday' ? (<div className='single-day-column'>
                    <div className='single-day-time-button'>{singleClass.time + ":00"}</div>
                </div>) : null}
            </div>
        </>
    ))
    const thDayColumn = yogaClassesArray.map((singleClass) => (
        <>
            <div className='single-day-container thursday-container'>
                {singleClass.day === 'Thursday' ? (<div className='single-day-column'>
                    <div className='single-day-time-button'>{singleClass.time + ":00"}</div>
                </div>) : null}
            </div>
        </>
    ))
    const fDayColumn = yogaClassesArray.map((singleClass) => (
        <>
            <div className='single-day-container friday-container'>
                {singleClass.day === 'Friday' ? (<div className='single-day-column'>
                    <div className='single-day-time-button'>{singleClass.time + ":00"}</div>
                </div>) : null}
            </div>
        </>
    ))
    const sDayColumn = yogaClassesArray.map((singleClass) => (
        <>
            <div className='single-day-container saturday-container'>
                {singleClass.day === 'Saturday' ? (<div className='single-day-column'>
                    <div className='single-day-time-button'>{singleClass.time + ":00"}</div>
                </div>) : null}
            </div>
        </>
    ))

    return (
        <>
            <div className='booking-calendar'>
                <div className='booking-calendar-search-container'>
                    <form className='booking-calendar-menu-container'>
                        <div className='booking-calendar-menu'>
                            <div className='booking-calendar-menu-header'>Filter by:</div>
                            <div className='booking-calendar-menu-options'>
                                <div className="choice-list choice-list-instructors">
                                    <div className='choice-list-header'>INSTRUCTORS</div>
                                    <label className='choice-list-check-item'>
                                        <input type="checkbox" onChange={e => checkOptionOksana(e)} id={'Oksana'} />

                                        <span>Oksana</span>
                                    </label>

                                    <label className='choice-list-check-item'>
                                        <input type="checkbox" onChange={e => checkOptionCharlotte(e)} id={'Charlotte'} />
                                        <span>Charlotte</span>
                                    </label>

                                    <label className='choice-list-check-item'>
                                        <input type="checkbox" onChange={e => checkOptionAmelia(e)} id={'Amelia'} />
                                        <span>Amelia</span>
                                    </label>

                                    <label className='choice-list-check-item'>
                                        <input type="checkbox" onChange={e => checkOptionSaadaa(e)} id={'Saadaa'} />
                                        <span>Saadaa</span>
                                    </label>

                                    <label className='choice-list-check-item'>
                                        <input type="checkbox" onChange={e => checkOptionPao(e)} id={'Pao'} />
                                        <span>Pao</span>
                                    </label>

                                    <label className='choice-list-check-item'>
                                        <input type="checkbox" onChange={e => checkOptionAva(e)} id={'Ava'} />
                                        <span>Ava</span>
                                    </label>
                                </div>
                                <div className="choice-list choice-list-yogastyles">
                                    <div className='choice-list-header'>YOGA STYLES</div>

                                    <label className='choice-list-check-item'>
                                        <input type="checkbox" onChange={e => checkOptionVinyasa(e)} id={'Vinyasa'} />
                                        <span>Vinyasa</span>
                                    </label>

                                    <label className='choice-list-check-item'>
                                        <input type="checkbox" onChange={e => checkOptionHatha(e)} id={'Hatha'} />
                                        <span>Hatha</span>
                                    </label>

                                    <label className='choice-list-check-item'>
                                        <input type="checkbox" onChange={e => checkOptionBeginner(e)} id={'Beginner'} />
                                        <span>Beginner</span>
                                    </label>

                                    <label className='choice-list-check-item'>
                                        <input type="checkbox" onChange={e => checkOptionMindful(e)} id={'Mindful'} />
                                        <span>Mindful</span>
                                    </label>

                                    <label className='choice-list-check-item'>
                                        <input type="checkbox" onChange={e => checkOptionPower(e)} id={'Power'} />
                                        <span>Power</span>
                                    </label>

                                    <label className='choice-list-check-item'>
                                        <input type="checkbox" onChange={e => checkOptionPrenatal(e)} id={'Prenatal'} />
                                        <span>Prenatal</span>
                                    </label>

                                </div>
                            </div>
                        </div>
                        <div className='choice-list-functionality'>
                            <div className='clear-search-button-container' >
                                <button type='reset' className='clear-search-button' onClick={clearCheckedOptions}>CLEAR</button>
                            </div>
                        </div>
                    </form>
                </div>
                <div className='booking-calendar-calendar-container'>
                    <div className='booking-calendar-header'>
                        <div className='week-number'>WEEK {weekNumber} {">"}</div>
                        <div className='cart'>CART</div>
                    </div>
                    <div className='booking-calendar-schedule'>
                        <div className='calendar-table-container'>
                            <div className='monday-container-header'>MON</div>
                            <div className='tuesday-container-header'>TUE</div>
                            <div className='wednesday-container-header'>WED</div>
                            <div className='thursday-container-header'>THU</div>
                            <div className='friday-container-header'>FRI</div>
                            <div className='saturday-container-header'>SAT</div>
                            <div onClick={(e) => { onHandleClickClassCard(e) }} id={'Monday'} className='single-day-container monday-container'>{mDayColumn}</div>
                            {/* <div onClick={(e) => { onHandleClickClassCard(e) }} id={'Monday'} className='single-day-container monday-container'>{checkedmDayColumn}</div> */}
                            <div onClick={(e) => { onHandleClickClassCard(e) }} id={'Tuesday'} className='single-day-container tuesday-container'>{tDayColumn}</div>
                            <div onClick={(e) => { onHandleClickClassCard(e) }} id={'Wednesday'} className='single-day-container wednesday-container'>{wDayColumn}</div>
                            <div onClick={(e) => { onHandleClickClassCard(e) }} id={'Thursday'} className='single-day-container thursday-container'>{thDayColumn}</div>
                            <div onClick={(e) => { onHandleClickClassCard(e) }} id={'Friday'} className='single-day-container friday-container'>{fDayColumn}</div>
                            <div onClick={(e) => { onHandleClickClassCard(e) }} id={'Saturday'} className='single-day-container saturday-container'>{sDayColumn}</div>
                        </div >
                    </div >
                </div >
            </div >
            <div className='popup-class-card'>
                {popupClassCard}
            </div>
        </>)
}
