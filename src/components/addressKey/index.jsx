
import './styles.css'

export const AddressKey = (props) => {
    return (
        <div id="lists">
            <ul>
                {Object.entries(props.address).map(key => {
                    return (
                        <li id="chave" >{`${key[0]}:`}</li>
                    )
                })}
            </ul>
            <ul>
                {Object.entries(props.address).map(value => {

                    return (
                        <li id="value" >{ value[1]  === "" ? "Não Informado" : value[1] }</li>
                    )
                })}
            </ul>
        </div>
    )
}