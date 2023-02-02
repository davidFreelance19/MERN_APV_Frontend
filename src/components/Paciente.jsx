import usePacientes from "../hooks/usePacientes";
const Paciente = ({ paciente }) => {
  const {setEdicion, eliminarPaciente} = usePacientes()
  const { email, alta, nombre, propietario, sintomas, _id } = paciente;
  const formatearFecha = (fecha) => {
    const nuevaFecha = new Date(fecha);
    return new Intl.DateTimeFormat("es-MX", { dateStyle: "long" }).format(
      nuevaFecha
    );
  };
  return (
    <div className="mx-5 my-8 bg-white shadow-md px-5 py-10 rounded-md">
      <p className="font-bold uppercase text-indigo-700 mb-3">
        Nombre:{" "}
        <span className="font-normal normal-case text-black">{nombre}</span>
      </p>
      <p className="font-bold uppercase text-indigo-700 mb-3">
        Propietario:{" "}
        <span className="font-normal normal-case text-black">
          {propietario}
        </span>
      </p>
      <p className="font-bold uppercase text-indigo-700 mb-3">
        E-mail:{" "}
        <span className="font-normal normal-case text-black">{email}</span>
      </p>
      <p className="font-bold uppercase text-indigo-700 mb-3">
        Alta:{" "}
        <span className="font-normal normal-case text-black">
          {formatearFecha(alta)}
        </span>
      </p>
      <p className="font-bold uppercase text-indigo-700 mb-3">
        Síntomas:{" "}
        <span className="font-normal normal-case text-black">{sintomas}</span>
      </p>
      <div className="flex gap-10 my-5">
        <button
          type="button"
          className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 hover:cursor-pointer rounded-lg font-bold text-white uppercase"
          onClick={() => setEdicion(paciente)}
        >
          Editar
        </button>
        <button
          type="button"
          className="py-2 px-10 bg-red-600 hover:bg-red-700 hover:cursor-pointer rounded-lg font-bold text-white uppercase"
          onClick={()=> eliminarPaciente(_id)}
        >
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default Paciente;
