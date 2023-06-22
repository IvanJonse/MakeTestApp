import React from 'react'
import s from './ButtonUi.module.sass'

const ButtonUi = ({bool}) => {
  return (
      <button 
          disabled={bool} 
          type='submit' 
          className={s.ui__btn}
      >
              Отправить
      </button>
    
  )
}


export default ButtonUi