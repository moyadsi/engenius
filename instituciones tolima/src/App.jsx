import { useEffect, useRef, useState } from 'react'
import './App.css'
import React from 'react';
import { getMunicipios } from './Services/EngeniusServices'
import { getInstituciones} from './Services/EngeniusServices'
import { getSedes} from './Services/EngeniusServices'
import { getGrupos} from './Services/EngeniusServices'
import './App.css';


function App() {
  const [Mun, SetMun]=useState()
  const [Inst, SetInst]=useState([])
  const [Sed, SetSed]=useState([])
  const [Grup, SetGrup]=useState([])
  const intento = useRef()
  const intento1 = useRef()
  const intento2 = useRef()
  
  useEffect(()=>{
    getMunicipios(SetMun)
  }, [])

  if(!Mun) return <h1></h1>
  return (
    <div className="App">
    <>
    <h1>TOLIMA </h1>
    
    <img src="https://www.triviantes.com/wp-content/uploads/2022/11/departamento-tolima-2.jpg" style={{ height: '200px' }} className="img-fluid" alt="Responsive image" />

    <br />
    <br />

    <button type="button" onClick={()=> console.log(Mun.data)} class="btn btn-outline-primary">Municipios</button>
    
    <br />

  {/*tabla 1 */}
  <table class="table table-bordered">  
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Nombre </th>
      <th scope="col">Dane</th>
      
      
    </tr>
  </thead>
  <tbody>
    {
      Mun.data.map((Listado, I)=> {
        return <tr key={I}>
          <td>{I+1}</td>
          <td>{Listado.nombre}</td>
          <td>{Listado.dane}</td>
        </tr>
      })
    }
  </tbody>
  </table>

{/*tabla 2 */}

  <form>
    <div class="form-row">
      
    </div>
    
    <div class="form-row">
      
      <div class="form-group col-md-2">
        <br />
        <label for="inputZip">Ingresa el codigo del Municipio</label>
        <br />
        <input type="text" ref={intento} class="form-control" id="inputZip"/>
      </div>
    </div>
    
    <button type="submit" onClick={(e)=>{e.preventDefault();getInstituciones(SetInst,intento.current.value)}} class="btn btn-primary">Ver Instituciones</button>
  </form>

  <table class="table table-striped">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Nombre</th>
        <th scope="col">Dane</th>
      </tr>
    </thead>
    <tbody>
    {
        Inst.map((Listado, I)=> {
          return <tr key={I}>
            <td>{I+1}</td>
            <td>{Listado.nombre}</td>
            <td>{Listado.dane}</td>
          </tr>
        })
      }
    </tbody>
  </table>

{/*tabla 3 */}
      
  <form>
    <div class="form-row">
      
    </div>
    
    <div class="form-row">
      
      <div class="form-group col-md-2">
        <label for="inputZip">Ingresa el codigo de la Institucion</label>
        <input type="text" ref={intento1} class="form-control" id="inputZip1"/>
      </div>
    </div>
    
    <button type="submit" onClick={(e)=>{e.preventDefault();getSedes(SetSed,intento1.current.value)}} class="btn btn-primary">Ver Sedes</button>
  </form>

  <table class="table table-striped">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Nombre</th>
        <th scope="col">Dane</th>
      </tr>
    </thead>
    <tbody>
    {
        Sed.map((Listado, I)=> {
          return <tr key={I}>
            <td>{I+1}</td>
            <td>{Listado.nombre}</td>
            <td>{Listado.dane}</td>
          </tr>
        })
      }
    </tbody>
  </table>  

  {/*tabla 4 */}    
  <form>
    <div class="form-row">
      
    </div>
    
    <div class="form-row">
      
      <div class="form-group col-md-2">
        <label for="inputZip">Ingresa el codigo de la sede</label>
        <input type="text" ref={intento2} class="form-control" id="inputZip2"/>
      </div>
    </div>
    
    <button type="submit" onClick={(e)=>{e.preventDefault();getGrupos(SetGrup,intento2.current.value)}} class="btn btn-primary">Ver Grupo</button>
  </form>

  <table class="table table-striped">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Nombre</th>
        <th scope="col">Dane</th>
      </tr>
    </thead>
    <tbody>
    {
        Grup.map((Listado, I)=> {
          return <tr key={I}>
            <td>{I+1}</td>
            <td>{Listado.nombre}</td>
            <td>{Listado.dane}</td>
          </tr>
        })
      }
    </tbody>
  </table>  

      
    </>
    </div>
  );
}

export default App
