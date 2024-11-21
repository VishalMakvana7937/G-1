const List = ({menu,name}) => {
    console.log('props',menu);
    return (
        <div>
            <h2>
                {
                    name
                }
            </h2>
            <ul>
                {
                    menu.map((p) => {
                        return(
                            <li>
                                {
                                    p
                                }
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default List