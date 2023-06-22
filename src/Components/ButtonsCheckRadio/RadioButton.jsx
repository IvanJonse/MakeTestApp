import React, {useState} from "react";
import s  from './ButtonsCheckRadio.module.sass'

export default function RadioButton({bool, state,  active, setActive}) {

    return ( 
        <div className={s.ui__buttonWrap__item}  onClick={()=> active !== undefined ? setActive(state) : '' }>   
           
            <button
                style={{borderRadius:'50%'}}
                disabled={bool} 
                className={
                    active === state ? `${s.ui__buttonWrap__item__box__activeRadio} ${s.ui__buttonWrap__item__box}` : `${s.ui__buttonWrap__item__box}`
                }   
            > 
        
                { active === state && state !== undefined
                    ?
                        <div className={s.ui__buttonWrap__item__box__imgRadio} />    
                    : 
                        ''
                }
            
            </button>
                
            <button disabled={bool} className={s.ui__buttonWrap__item__label}> Выбери меня! </button>
   
        </div>
    )
}