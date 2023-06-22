import {useState} from 'react'
import { useActiveMenu } from "react-active-menu";
import { useForm } from 'react-hook-form';
import Layout from './Components/Layout';
import SelectName from './Components/SelectName';
import AccordionMenu from './Components/AccordionMenu/AccordionMenu';
import SideMenu from './Components/SideMenu/SideMenu';
import TypographyMenu from './Components/TypographyMenu/TypographyMenu';
import TextField from './Components/TextField/TextField';
import ButtonUi from './Components/ButtonUi/ButtonUi';
import { data } from './Components/DataGrig';
import Header from './Components/Header/Header';
import ButtonsContainer from './Components/ButtonsCheckRadio/ButtonsContainer';
import './style.sass';

function App() {

  const [activeName, setACtiveName] = useState(false);

  const {
    register, handleSubmit, setError, getValues, formState: {errors}
  } = useForm({defaultValues: {
      email: ''
  }})

  const [click, setClick] = useState(false);

  const onAwayClick = () => {
    return activeName !== false ? setACtiveName(!activeName) : '' 
  || getValues().email === '' && click ? setClick(false) : ''
  }

  const { registerContainer, activeId, registerSection, registerTrigger } = useActiveMenu(
    {
      smooth: true,
      offset: 275
    }
  );

return (
        <>
          <Header/>
          <div className="App" ref={registerContainer} onClick={onAwayClick}>
          <SideMenu registerTrigger={registerTrigger}/>
              <div className='wrapper' >
                <section className='harangue' ref={registerSection("0")} >
                  <div className='wrapper__title' >
                      Тестовое задание
                  </div>
                    <div className='wrapper__subtitle'>Уровень: junior</div>
                  <div className='wrapper__descr'>
                      Привет! Твоё тестовое задание — грамотно заверстать эту прекрасную страничку.
                      В шапке страницы укажи своё ФИО, так всем будет удобнее.
                      В менюхе под иконкой бургером мы хотели бы также видеть твои данные.
                      Ну что, поехали?
                  </div>
                </section>
                <section className='grid' ref={registerSection("1")}>
                    <div className='wrapper__title' >
                        Сетка
                    </div>
                    <div className='wrapper__descr' >
                      Задание предполагает адаптивную вёрстку. 
                      Используется 3 состояния в зависимости от устройства. 
                      Сетка «резиновая» — переменной ширины.
                    </div>
                    <div className='layout' >
                        { data.map( (e, i) =>
                          <Layout 
                            key={i}
                            title={e.title} 
                            content={e.content}
                            column={e.column}
                            width={e.width}
                            space={e.space}
                            img={e.img}
                          />
                        )}
                    </div>
                </section>
                <section className='typography' ref={registerSection("2")} >
                  <div className='wrapper__title' >
                        Типографика
                  </div>            
                  <div className='wrapper__descr'>
                        Используется шрифт Graphik. 
                        На телефонах стили типографики переопределяются
                  </div>                  
                  <TypographyMenu />
                </section>
                <section className='ui' ref={registerSection("3")}>
                    <div className='wrapper__title'>
                        ui
                    </div>

                    <div className='ui__title ui__title__field' >
                        Текстовое поле  
                    </div>
                      <TextField 
                        register={register} 
                        handleSubmit={handleSubmit} 
                        getValues={getValues} 
                        errors={errors} 
                        setError={setError}
                        click={click}
                        setClick={setClick}
                      />

                    <div className='ui__title ui__title__list'>
                          Выпадающий список 
                    </div>
                    <div className='wrapper__descr' >
                          Компонент состоит из текстового поля и выпадающей подсказки
                    </div>
                      <SelectName active={activeName} setACtive={setACtiveName}/>

                      <div className='ui__title ui__title__btn'>
                          Кнопка 
                    </div>
                    <ButtonUi bool={false}/>
                    <ButtonUi bool={true}/>

                    <div className='ui__title'>
                        Чекбокс, радиобаттон
                    </div>
                    <ButtonsContainer/>
                    
                    <div className='ui__title'>
                        Аккордеон
                    </div>
                      <AccordionMenu/>
                </section>
              </div>
          </div>
        </>
  );
}

export default App;
