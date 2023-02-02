import { useState, useEffect } from "react";
import Alerta from "./Alerta";
import usePacientes from "../hooks/usePacientes";
const Formulario = () => {
  const [nombre, setNombre] = useState("");
  const [propietario, setPropietario] = useState("");
  const [email, setEmail] = useState("");
  const [alta, setAlta] = useState("");
  const [sintomas, setSintomas] = useState("");
  const [alerta, setAlerta] = useState({});
  const { guardarPaciente, paciente } = usePacientes();
  const [id, setId] = useState(null)
  useEffect(() => {
    if(paciente?.nombre){
        setNombre(paciente.nombre)
        setPropietario(paciente.propietario)
        setAlta(paciente.alta)
        setEmail(paciente.email)
        setSintomas(paciente.sintomas)
        setId(paciente._id)
    }
  }, [paciente]);
  const handleSubmit = (e) => {
    e.preventDefault();

    //Validar el formulario
    if ([nombre, propietario, email, alta, sintomas].includes("")) {
      setAlerta({
        msj: "Todos los campos son obligatorios",
        error: true,
      });
      return;
    }
    setAlerta({
        msj: 'Guardado Correctamente'
    });
    setTimeout(() => {
        setAlerta({})
    }, 2000);
    setNombre('')
    setSintomas('')
    setPropietario('')
    setEmail('')
    setAlta('')
    setId(null)

    guardarPaciente({ nombre, propietario, email, alta, sintomas, id });
  };
  const { msj } = alerta;
  return (
    <>
      <p className="text-lg text-center font-semibold mb-8">
        Añade tus pacientes y {""}{" "}
        <span className="text-indigo-600 font-bold">Administralos</span>
      </p>
      {msj && <Alerta alerta={alerta} />}
      <form
        className="bg-white px-5 py-10 mb-10 md:mb-0 shadow-lg rounded-lg"
        onSubmit={handleSubmit}
      >
        <div className="mb-5">
          <label
            htmlFor="mascota"
            className="text-gray-700 uppercase font-bold"
          >
            Nombre Mascota
          </label>
          <input
            id="mascota"
            type="text"
            placeholder="Nombre de la Mascota"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="propietario"
            className="text-gray-700 uppercase font-bold"
          >
            Nombre del propietario
          </label>
          <input
            id="propietario"
            type="text"
            placeholder="Nombre del propietario"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={propietario}
            onChange={(e) => setPropietario(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label htmlFor="email" className="text-gray-700 uppercase font-bold">
            E-mail Propietario
          </label>
          <input
            id="email"
            type="email"
            placeholder="E-mail del Propietario"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label htmlFor="alta" className="text-gray-700 uppercase font-bold">
            Fecha Alta
          </label>
          <input
            id="alta"
            type="date"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={alta}
            onChange={(e) => setAlta(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="sintomas"
            className="text-gray-700 uppercase font-bold"
          >
            Síntomas
          </label>
          <textarea
            id="sintomas"
            placeholder="Describe los Síntomas"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={sintomas}
            onChange={(e) => setSintomas(e.target.value)}
          />
        </div>
        <input
          type="submit"
          value={id ? 'Guardar Cambios ' : 'Agregar paciente'}
          className="uppercase bg-indigo-700 w-full py-3 px-10 rounded-md font-bold text-white mt-4 hover:cursor-pointer hover:bg-indigo-800"
        />
      </form>
    </>
  );
};

export default Formulario;
