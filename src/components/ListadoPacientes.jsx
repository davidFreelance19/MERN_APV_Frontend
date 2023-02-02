import Paciente from "./Paciente";
import usePacientes from "../hooks/usePacientes";

const ListadoPacientes = () => {
  const { pacientes } = usePacientes();
  return (
    <>
      {pacientes.length ? (
        <>
          <p className="text-lg text-center font-semibold mb-8">
            Listado de tus {""}{" "}
            <span className="text-indigo-600 font-bold">pacientes </span>
          </p>
          {pacientes.map(paciente => <Paciente paciente={paciente} key={paciente._id}/>)}
        </>
      ) : (
        <p className="text-lg text-center font-semibold mb-8">
          Empieza a registrar {""}{" "}
          <span className="text-indigo-600 font-bold"> pacientes </span>
        </p>
      )}
    </>
  );
};

export default ListadoPacientes;
