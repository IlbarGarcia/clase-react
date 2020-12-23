// import React from "react" se puede importar asi y llamar asi a la clase class Formulario extends React.Component o//
import React,{Component} from "react" //hacemos la desustructuracion del objeto y solo recibimos Component

class Formulario extends Component{
   //constructor recibe los atributos necesarios para poder crear una instancia de esta clase//
  constructor(props){
     super(props) //con super le pasamos las props a la clase Component  

  } 

  //el metodo render es el unico que es obligatorio, si el elemento no requiere props, no es necesario que tenga un constructor
  //con render retornamos el componente//
  render(){
    return(
      <div> 
        <h1>Formulario</h1>
         <h2>{`Hola ${this.props.nombre}`}</h2>
         <h3>{`tu correo es ${this.props.correo}`}</h3>
      </div>
    )
  }
}
export default Formulario;