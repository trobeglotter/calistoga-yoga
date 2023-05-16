import React from 'react';

import bioCardImg1 from './images/instructorCardImages/Oksana.jpg'
import bioCardImg2 from './images/instructorCardImages/Charlotte.jpg'
import bioCardImg3 from './images/instructorCardImages/Amelia.jpg'
import bioCardImg4 from './images/instructorCardImages/Saadaa.jpg'
import bioCardImg5 from './images/instructorCardImages/Pao.jpg'
import bioCardImg6 from './images/instructorCardImages/Ava.jpg'

const bioCardImg = [bioCardImg1, bioCardImg2, bioCardImg3, bioCardImg4, bioCardImg5, bioCardImg6]

export default function InstructorCard(instructorCardProp) {

    return (
        <>
            <div className='bio-card'>
                <div onClick={instructorCardProp.onClick} className='bio-card-close'>
                    X
                </div>
                <div>
                    <h3 className='bio-card-title'>
                        {instructorCardProp.instructorprop}
                    </h3>
                </div>
                <div>
                    <img className='bio-card-img' src={bioCardImg[instructorCardProp.keyProp]} alt='profile' />
                </div>
                <div>
                    <p className='bio-card-description'>
                        {instructorCardProp.bioprop}
                    </p>
                </div>
            </div>
        </>
    )
}



