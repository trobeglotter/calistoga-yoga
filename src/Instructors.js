import React, { useState, useEffect } from 'react';
import Oksana from './images/instructorImages/Oksana.jpg'
import Charlotte from './images/instructorImages/Charlotte.jpg'
import Amelia from './images/instructorImages/Amelia.jpg'
import Saadaa from './images/instructorImages/Saadaa.jpg'
import Pao from './images/instructorImages/Pao.jpg'
import Ava from './images/instructorImages/Ava.jpg'
import InstructorCard from './InstructorCard'

export default function Instructors() {
    const [instructorCardArray, createInstructorCard] = useState([]);
    function getInstructorCardJson() {
        fetch('./instructorData.json')
            .then((response) => response.json())
            .then((data) => createInstructorCard(data));
    }
    useEffect(() => {
        getInstructorCardJson()
    });

    const [bioCard, setBioCard] = useState(false);
    const [idClickedBioCard, setIdClickedBioCard] = useState();

    function openBioCard(idClicked) {
        setBioCard((bioCard) => !bioCard);
        setIdClickedBioCard(idClicked);
    }
    function closeBioCard() {
        setBioCard(false);
    }
    return (
        <>
            <div className='instructor-container'>
                < div className='instructor-image-container'>
                    <img onClick={() => openBioCard('Oksana')} id='Oksana' className='instructor-image' src={Oksana} alt='Oksana' />
                    <img onClick={() => openBioCard('Charlotte')} id='Charlotte' className='instructor-image' src={Charlotte} alt='Charlotte' />
                    <img onClick={() => openBioCard('Amelia')} id='Amelia' className='instructor-image' src={Amelia} alt='Amelia' />
                    <img onClick={() => openBioCard('Saadaa')} id='Saadaa' className='instructor-image' src={Saadaa} alt='Saadaa' />
                    <img onClick={() => openBioCard('Pao')} id='Pao' className='instructor-image' src={Pao} alt='Pao' />
                    <img onClick={() => openBioCard('Ava')} id='Ava' className='instructor-image' src={Ava} alt='Ava' />
                </div>
                {bioCard &&
                    instructorCardArray.map((singleCard) => (
                        singleCard.instructorName === idClickedBioCard ? (
                            <InstructorCard
                                onClick={closeBioCard}
                                keyProp={singleCard.key}
                                instructorprop={singleCard.instructorName}
                                bioprop={singleCard.instructorBio}
                            />) : (null)
                    ))
                }
            </div >
        </>
    )
}