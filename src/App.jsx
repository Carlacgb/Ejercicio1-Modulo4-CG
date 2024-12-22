
import { useEffect, useState } from 'react';
import './App.css'
import DoctorCard from './component/doctorCard'
import ServiceList from './component/ServiceList'
import AppointmentForm from './component/AppointmentForm'

function App() {

  const [doctores, setDoctores] = useState([]);
  const [servicios, setServicios] = useState([]);

useEffect(() =>{

  const doctoresData = [
    {
      id:1,
      nombre:'Pamela Gutierrez',
      experiencia:' 5 años',
      descripcion:'Especialista con 5 años de experiencia en medicina general',
      especialidad: 'Médica General'
    },
    {
      id:2,
      nombre:'Doctor 2',
      experiencia: '3 años',
      descripcion: 'Descripcion del doctor 2 que tiene 3 años de experiencia',
      especialidad: 'Ginecología'
    },
    {
      id:3,
      nombre:'Doctor 3',
      experiencia:' 5 años',
      descripcion:'Descripcion del doctor 3 que tiene 5 años de experiencia y sabemos que no tiene experiencia',
      especialidad: 'Nutrición'
    },
    {
      id:4,
      nombre:'Doctor 4',
      experiencia: '9 años',
      descripcion: 'Descripcion del doctor 4 que tiene 9 años de experiencia',
      especialidad: 'Psicología',
    },
    {
      id:5,
      nombre:'Doctor 5',
      experiencia:'6 años',
      descripcion:'Descripcion del doctor 5 que tiene 6 años de experiencia y sabemos que no tiene experiencia',
      especialidad: 'Cardiología',
    },
    {
      id:6,
      nombre:'Doctor 6',
      experiencia: '10 años',
      descripcion: 'Descripcion del doctor 6 que tiene 10 años de experiencia',
      especialidad: 'Broncopulmonar',
    }

  ]

  const serviciosData = ['Medicina general', 'Ginecología','Nutrición','Psicología','Cardiología','Broncopulmonar'];
  setDoctores(doctoresData);
  setServicios(serviciosData);
},[]);


  return (
    <>
      <h3 className='fs-1'>Nuestros Doctores</h3>
      <section className="grillagrip">
        {doctores.map(({id, nombre, experiencia, descripcion, especialidad}) => (
          <DoctorCard key={id} doctor={nombre} experiencia={experiencia} descripcion={descripcion} especialidad={especialidad} />
        ))}
      </section>
      <h3>Servicios Medicos</h3>
      <section className="grillaflex">
       {servicios.map((servicio, index) => (
        <ServiceList key={index} servicio={servicio} />
       ))} 
      </section>
      <h3>Seleccione su Cita</h3>
      <section className='container'>
        <AppointmentForm doctores={doctores}/>
      </section>
     
    </>
  )
}

export default App