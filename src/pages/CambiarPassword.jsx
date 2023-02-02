import { useState } from "react";
import AdminNav from "../components/AdminNav";
import Alerta from "../components/Alerta";
import useAuth from "../hooks/useAuth";
const CambiarPassword = () => {
  const { guardarPassword } = useAuth();
  const [alerta, setAlerta] = useState({});
  const [password, setPassword] = useState({
    pwd_actual: "",
    pwd_nuevo: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (Object.values(password).some((campo) => campo === "")) {
      setAlerta({
        msj: "Todos los campos son obligatorios",
        error: true,
      });
      return;
    }
    if (password.pwd_nuevo.length < 6) {
      setAlerta({
        msj: "El nuevo password debe de tener mínimo 6 caracteres",
        error: true,
      });
      return;
    }
    const respuesta = await guardarPassword(password);
    setAlerta(respuesta)
  };
  const { msj } = alerta;
  return (
    <>
      <AdminNav />
      <h2 className="font-black text-3xl text-center mt-10">
        Cambiar Password
      </h2>
      <p className="text-xl mt-5 mb-10 text-center">
        Modifica tu {""}
        <span className="text-indigo-600 font-bold">password aquí</span>
      </p>
      <div className="flex justify-center">
        <div className="w-full md:w-1/2 bg-white p-5 rounded-lg shadow-md">
          {msj && <Alerta alerta={alerta} />}
          <form onSubmit={handleSubmit}>
            <div className="my-3">
              <label className="uppercase font-bold text-gray-600">
                Password Actual
              </label>
              <input
                type="password"
                className="border bg-gray-50 w-full p-2 mt-5 rounded-lg"
                name="pwd_actual"
                placeholder="Escribe tu password actual"
                onChange={(e) =>
                  setPassword({ ...password, [e.target.name]: e.target.value })
                }
              ></input>
            </div>
            <div className="my-3">
              <label className="uppercase font-bold text-gray-600">
                Nuevo Password
              </label>
              <input
                type="password"
                className="border bg-gray-50 w-full p-2 mt-5 rounded-lg"
                name="pwd_nuevo"
                placeholder="Escribe tu nuevo password"
                onChange={(e) =>
                  setPassword({ ...password, [e.target.name]: e.target.value })
                }
              ></input>
            </div>
            <input
              type="submit"
              value="Actualizar Password"
              className="bg-indigo-600 uppercase px-10 py-3 text-white font-bold rounded-lg w-full mt-5 hover:cursor-pointer hover:bg-indigo-700"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default CambiarPassword;
