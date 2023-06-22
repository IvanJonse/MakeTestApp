import './SideMenu.sass';

export default function SideMenu({registerTrigger}) {

    const list = [
        { text: 'Напутственное слово'},
        { text: 'Сетка'},
        { text: 'Типографика'},
        { text: 'UI'},
    ]

    return (
            <ul className={'sideMenu__list'} >
                {
                    list.map( (item, i )=>
                        <li className={'sideMenu__list__item'} key={i} >
                            <button 
                                type='button'
                                className={'sideMenu__list__item__btn'} 
                                ref={registerTrigger(`${i}`)}
                            >
                                {item.text}
                            </button>
                        </li>
                    )
                }
            </ul>
    )
}