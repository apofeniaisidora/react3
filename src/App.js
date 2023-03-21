import { BaseColaboradores } from "./BaseColaboradores";
import { useState } from "react";


function App() {

  const [colaboradores, setColaboradores] = useState(BaseColaboradores);
  const [nombreColaborador, setNombreColaborador] = useState("");
  const [emailColaborador, setEmailColaborador] = useState("");
  const [colaboradoresFiltrados,setColaboradoresFiltrados] = useState(BaseColaboradores);
  console.log(colaboradores)

  const agregarColaborador = () => {
    const nuevoColaborador = {
      id: '1',
      nombre: nombreColaborador,
      correo: emailColaborador,
    };
    setColaboradores([...colaboradores, nuevoColaborador]);
  };

  const filtrarColaboradores = (search) => {
    const colaboradoresFiltrados = colaboradores.filter((colaborador)=> {
      return( 
        colaborador.nombre.includes(search) ||
        colaborador.correo.includes(search)
      );
    });
    setColaboradoresFiltrados([...colaboradoresFiltrados]);
  };

  
  return (
    <div className="App">
      <header style={{display: 'flex' , justifyContent: 'space-around', backgroundColor: 'plum'}}><h3> Buscador de Colaboradores </h3><input style={{height:'2em', marginTop: '1%'}} placeholder='Busca un colaborador' onChange={(e) => filtrarColaboradores(e.target.value)}/></header>
      <div>
        <br></br>
          <label style={{ marginRight: '1%' }}>Nombre del colaborador</label>
          <input placeholder="Nombre del colaborador" value={nombreColaborador} onChange={(e) => setNombreColaborador(e.target.value)} />
          <br></br>
          <br></br>
          <label style={{ marginRight: '1%' }}>Correo del colaborador</label>
          <input placeholder="Correo del colaborador" value={emailColaborador} onChange={(e) => setEmailColaborador(e.target.value)} />
          <br></br>
          <br></br>
          <button style={{ marginLeft: '5%' }} onClick={()=> agregarColaborador()}> Agregar Colaborador </button>

      </div>
      <div style={{marginLeft: '5%'}}>
      <h3>Listado de Colaboradores</h3>
      <br/>
      {colaboradoresFiltrados.map((colaborador) => {
        return ( <li>{colaborador.nombre}-{colaborador.correo}</li> );
      })}</div>
    </div>
  );
}

export default App;


