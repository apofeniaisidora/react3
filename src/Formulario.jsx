const Formulario = () => {
    return <div>
        <form style={{margin: '20px'}}>
            <label style={{marginRight: '1%'}}>Nombre del colaborador</label>
           <input placeholder="Nombre del colaborador"/> 
           <br></br>
           <br></br>
           <label style={{marginRight: '1%'}}>Correo del colaborador</label>
           <input placeholder="Correo del colaborador"/>
           <br></br>
           <br></br>
           <button style={{marginLeft:'5%'}}> Agregar Colaborador </button>
        </form>
        
    </div>
}
export default Formulario;