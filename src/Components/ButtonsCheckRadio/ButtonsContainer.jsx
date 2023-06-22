import {useState} from 'react'
import CheckBoxButton from './CheckBoxButton' 
import RadioButton from './RadioButton' 

export default function ButtonsContainer () {
    const [activeBox, setActiveBox] = useState('radio1')

    return (
        <div className='ui__buttonWrap'>
            <div className='ui__buttonWrap__wrap'>
                
                <CheckBoxButton bool={true} state={false}/>
                <CheckBoxButton bool={false} state={false}/>
                <CheckBoxButton bool={false} state={true}/>
            </div>
            <div className='ui__buttonWrap__wrap'>
                <RadioButton bool={true} />
                <RadioButton bool={false} state='radio1' active={activeBox} setActive={setActiveBox} />
                <RadioButton bool={false} state='radio2' active={activeBox} setActive={setActiveBox} />
            </div>
        </div>
    )
}