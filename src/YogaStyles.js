import React, { useState } from 'react';

import vinyasa from './images/yogaTypesImages/yoga1Vinyasa.jpg';
import hatha from './images/yogaTypesImages/yoga2Hatha.jpg';
import beginner from './images/yogaTypesImages/yoga3Beginner.jpg';
import mindful from './images/yogaTypesImages/yoga4Mindful.jpg';
import power from './images/yogaTypesImages/yoga5Power.jpg';
import prenatal from './images/yogaTypesImages/yoga6Prenatal.jpg';

const yogaStyleImg = [vinyasa, hatha, beginner, mindful, power, prenatal]
const yogaStyleTitle = ['vinyasa', 'hatha', 'beginner', 'mindful', 'power', 'prenatal']
const yogaStyleDescription = [
    "Vinyasa style yoga incorporates smooth transitions between asanas in flowing styles of modern yoga as exercise such as Vinyasa Krama Yoga and Ashtanga Vinyasa Yoga, especially when movement is paired with the breath.",
    "Hatha yoga uses physical techniques to channel the vital force or energy. The Sanskrit word haṭha means 'force', alluding to a system of physical techniques. Each class is different involving just some of the millions of asanas that bring awareness to the body.",
    "This class is for anyone new to yoga or those looking for a lower impact class. The course involves fewer poses so one can adjust at their own pace. Normally, poses can be held for one minute or more but the instructors will limit each pose time to half.",
    "Calistoga Yoga's Mindful class is specially designed for those with a 'running mind'. The movements are comparable to classic forms of Vinyasa but include a mindful technique and have been described as poetic and enlightening.",
    "One of the fundamental differences between Vinyasa and power yoga is the speed of practice. When practising Vinyasa, you go slow and move the body parts with precaution while maintaining a steady flow. Power yoga is carried out much quicker.",
    "Yoga is intended to create a balance between emotional, mental, physical, and spiritual dimensions. Prenatal yoga is about helping you prepare for childbirth by relaxing the body and focusing on safe techniques and poses in all stages of pregnancy."
]

export default function YogaStyles() {
    const [count, setCount] = useState(0);
    if (count > 5) {
        setCount(0);
    }

    return (
        <>
            <div className='yoga-styles-container'>
                <div className='yoga-styles-image-container'>
                    <img id='yogaStyleImg' src={yogaStyleImg[count]} alt='yoga style' />
                    <div className='yoga-style-content'>
                        <div className='offset-button-title'>
                            <div id='yogaStyleDescription'>{yogaStyleDescription[count]}</div>
                            <div id='space' />
                            <div id='yogaStyleTitle'>{yogaStyleTitle[count]}</div>
                            <div id='yogaStyleButtonContainer'>
                                <button id='yogaStyleButton' onClick={() => {
                                    setCount(count + 1);
                                }}>see the styles we offer {">"} </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

