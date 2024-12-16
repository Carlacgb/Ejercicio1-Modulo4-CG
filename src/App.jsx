
import './App.css'
import DoctorCard from './components/DoctorCard'
import ServiceList from './components/ServiceList'

function App() {

  const doctores = [

    {
      id: 1,
      nombre: 'Doctor 1',
      experiencia: ' 5 años',
      descripcion: 'Descripcion del doctor 1 que tiene 5 años de experiencia y sabemos que no tiene experiencia'
    },

    {
      id: 2,
      nombre: 'Doctor 2',
      experiencia: '3 años',
      descripcion: 'Descripcion del doctor 2 que tiene 3 años de experiencia'

    },

    {
      id: 3,
      nombre: 'Doctor 3',
      experiencia: ' 5 años',
      descripcion: 'Descripcion del doctor 3 que tiene 5 años de experiencia y sabemos que no tiene experiencia'
    },

    {
      id: 4,
      nombre: 'Doctor 4',
      experiencia: '9 años',
      descripcion: 'Descripcion del doctor 4 que tiene 9 años de experiencia'
    },

    {
      id: 5,
      nombre: 'Doctor 5',
      experiencia: '9 años',
      descripcion: 'Descripcion del doctor 4 que tiene 9 años de experiencia'
    }
  ]

  const servicios = ['Cardiología', 'Pediatria', 'Examenes', 'Imagen', 'Kiniseologia']

  return (
    <>

      <h1>Hospital</h1>
      <section>Doctores
        <div className='row'>
          {doctores.map(({ id, nombre, experiencia, descripcion }) => (
            <DoctorCard key={id} doctor={nombre} experiencia={experiencia} descripcion={descripcion} />
          )
          )}


        </div>

      </section>



      <section>
        <ul className="list-group">
          {servicios.map((servicio, index) =>(
          <ServiceList key={index} servicio={servicio} />
          ))}
        </ul>
      </section>

    </>
  )
}

export default App
