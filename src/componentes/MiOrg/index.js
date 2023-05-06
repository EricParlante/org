//import {useState} from "react"
import "./MiOrg.css"

const MiOrg = (props) =>{
    //Estado - Hook
    //useState
    //useState()
    //const [nombreVariable, funcionActualiza] = useState("Valor Inicial")
    console.log(props)
    // const [mostrar, actualizarMostrar] = useState(true);
    // const manejarClick = (props)=>{
    //     console.log("Mostrar/Ocultar Formulario");
    //     actualizarMostrar(!mostrar)
    // }

    return <section className="orgSection">
        <h3 className="title">Mi Organización</h3>
        <img src="/img/add.png" alt="add" onClick={props.cambiarMostrar}/>
    </section>
}

export default MiOrg;