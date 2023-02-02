import { useEffect, useState } from "react";
import AdminNav from "../components/AdminNav";
import useAuth from "../hooks/useAuth";
import Alerta from "../components/Alerta";
const EditarPerfil = () => {
  const [perfil, setPerfil] = useState({});
  const [alerta, setAlerta] = useState({});
  const { auth, actualizarPerfil } = useAuth();
  useEffect(() => {
    setPerfil(auth);
  }, [auth]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { nombre, email } = perfil;
    if ([nombre, email].includes("")) {
      setAlerta({
        msj: "Email y Nombre son obligatorios",
        error: true,
      });
      return;
    }
    const resultado = await actualizarPerfil(perfil);
    setAlerta(resultado);
  };
  const { msj } = alerta;
  return (
    <>
      <AdminNav />
      <h2 className="font-black text-3xl text-center mt-10">Editar Perfil</h2>
      <p className="text-xl mt-5 mb-10 text-center">
        Modifica tu {""}
        <span className="text-indigo-600 font-bold">perfil aquí</span>
      </p>
      <div className="flex justify-center">
        <div className="w-full md:w-1/2 bg-white p-5 rounded-lg shadow-md">
          {msj && <Alerta alerta={alerta} />}
          <form onSubmit={handleSubmit}>
            <div className="my-3">
              <label className="uppercase font-bold text-gray-600">
                Nombre
              </label>
              <input
                type="text"
                className="border bg-gray-50 w-full p-2 mt-5 rounded-lg"
                name="nombre"
                onChange={(e) =>
                  setPerfil({ ...perfil, [e.target.name]: e.target.value })
                }
                value={perfil.nombre || ""}
              ></input>
            </div>
            <div className="my-3">
              <label className="uppercase font-bold text-gray-600">
                Sitio web
              </label>
              <input
                type="text"
                className="border bg-gray-50 w-full p-2 mt-5 rounded-lg"
                name="web"
                onChange={(e) =>
                  setPerfil({ ...perfil, [e.target.name]: e.target.value })
                }
                value={perfil.web || ""}
              ></input>
            </div>
            <div className="my-3">
              <label className="uppercase font-bold text-gray-600">
                Teléfono
              </label>
              <input
                type="text"
                className="border bg-gray-50 w-full p-2 mt-5 rounded-lg"
                name="telefono"
                onChange={(e) =>
                  setPerfil({ ...perfil, [e.target.name]: e.target.value })
                }
                value={perfil.telefono || ""}
              ></input>
            </div>
            <div className="my-3">
              <label className="uppercase font-bold text-gray-600">Email</label>
              <input
                type="email"
                className="border bg-gray-50 w-full p-2 mt-5 rounded-lg"
                name="email"
                onChange={(e) =>
                  setPerfil({ ...perfil, [e.target.name]: e.target.value })
                }
                value={perfil.email || ""}
              ></input>
            </div>
            <input
              type="submit"
              value="Guardar cambios"
              className="bg-indigo-600 uppercase px-10 py-3 text-white font-bold rounded-lg w-full mt-5 hover:cursor-pointer hover:bg-indigo-700"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default EditarPerfil;
