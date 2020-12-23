// import React from "react" se puede importar asi y llamar asi a la clase class Formulario extends React.Component o//
import React,{Component} from "react" //hacemos la desustructuracion del objeto y solo recibimos Component

class Formulario extends Component{
   //constructor recibe los atributos necesarios para poder crear una instancia de esta clase//
  constructor(props){
     super(props) //con suoer le pasamos las props a la clase Component  
  
     this.state={ //creamos el estado inicial
       nombre: "",
       correo: ""
     }
  } 

  //el metodo render es el unico que es obligatorio, si el elemento no requiere props, no es necesario que tenga un constructor
  //con render retornamos el componente//
  render(){
    return(
      <div> 
        <h1>Formulario</h1>
       <br/> 
        <form action="">
         <label htmlfor="name" >Nombre</label>
         <input type="text" className="name" onChange ={e=>this.setState(
           {
             nombre:e.target.value
           }

         )} /> 
         <label htmlfor="correo" >Correo</label>
         {/*agregamos un evento onChange y cuando se produzca el evento llamamos el metodo setState que nos permite setear el nuevo estado, recibe un objeto con los nuevos valores */}
         <input type="text" className="correo" onChange ={e=>this.setState(
           {
             correo:e.target.value
           }

         )} /> 
        </form>       
       <br/>
       <div>
         <h2>{`Hola ${this.state.nombre}`}</h2> {/*llamamos este estado */}
         <h2>{`con el correo ${this.state.correo}`}</h2>
       </div>
      </div>
    )
  }
}
export default Formulario;