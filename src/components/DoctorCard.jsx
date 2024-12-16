export default function DoctorCard({doctor, experiencia, descripcion}) {

    return (

        <div className="card col-3 mx-2">
                <div className="card-body">
                    <h5 className="card-title">{doctor}</h5>
                    <p className="card-text">{descripcion}</p>
                    <p className="card-text">{experiencia}</p>

                </div>
        </div>

    );

}