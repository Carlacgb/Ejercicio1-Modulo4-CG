# EJERCICIO 1 - MÓDULO 4

## 1. Creación de Componentes en ReactJS

Se crearon los componentens:
- DoctorCard: donde se muestra la información de cada doctor.
- ServiceList: Lista de los servicios médicos.
- AppoinmentForm: formulario para agendar citas.

## 2. Uso de JSX para Renderización de Datos
En todos los componentes se implementa JSX para visualizar los elementos.

## 3. Flujo de Datos con Props
- Se pasan los datos desde App.jsx al componente doctorCard mediante props.
- Se pasan los datos desde App.jsx que tiene que ver con los servicios al componente ServiceList.jsx
- Se implementa props para manejar los datos de entrada en el formulario de citas
(AppointmentForm), como el nombre del paciente y el doctor seleccionado.

## 4. Listas y Keys en React
Se implementa listas y keys en React para renderizar dinámicamente la lista de doctores y servicios. Esto en el componente principal App.jsx.

## 5. Formulario con Manejo de Estado
Se crea el componente AppointmentForm donde se utiliza Hooks como useState para manejar los datos del formulario (nombre del paciente, especialidad del doctor, fecha de la cita).

## 6. Introducción a Hooks y Ciclo de Vida
Se implementa useEffect para cargar la lista de doctores y servicios cuando el componente principal se monta en el DOM.