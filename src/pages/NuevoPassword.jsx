import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Alerta from "../components/Alerta";
import clienteAxios from "../config/axios";
const NuevoPassword = () => {
  const [password, setPassword] = useState("");
  const [alerta, setAlerta] = useState({});
  const [tokenValido, setTokenValido] = useState(false);
  const [passwordModificado, setPasswordModificado] = useState(false);
  const params = useParams();
  const { token } = params;
  useEffect(() => {
    const comprobarToken = async () => {
      try {
        await clienteAxios(`/veterinarios/olvide-password/${token}`);
        setAlerta({ msj: "Coloca tu nuevo password" });
        setTokenValido(true);
      } catch (error) {
        setAlerta({
          msj: "Hubo un error con el enlace",
          error: true,
        });
      }
    };
    comprobarToken();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password.length < 6) {
      setAlerta({
        msj: "El password debe tener minimo 6 caracteres",
        error: true,
      });
      return;
    }
    try {
      const url = `/veterinarios/olvide-password/${token}`;
      const { data } = await clienteAxios.post(url, { password });
      console.log(data);
      setAlerta({ msj: data.msj });
      setPasswordModificado(true);
    } catch (error) {
      setAlerta({
        msj: error.response.data.msj,
        error: true,
      });
    }
  };
  const { msj } = alerta;
  return (
    <>
      <div className="">
        <h1 className="text-indigo-600 font-black mb-8 text-5xl md:text-6xl capitalize">
          Reestablece tu password y Administra tus{" "}
          <span className="text-black">pacientes</span>
        </h1>
      </div>
      <div className="md:mt-10 shadow-lg px-5 py-10 rounded-xl bg-white">
        {msj && <Alerta alerta={alerta} />}
        {tokenValido && (
          <>
            <form onSubmit={handleSubmit}>
              <div className="my-5">
                <label className="uppercase text-gray-600 block text-md md:text-lg font-bold">
                  Nuevo password
                </label>
                <input
                  type="password"
                  placeholder="tu nuevo password"
                  className="border w-full p-3 my-4 bg-gray-50 rounded-xl capitalize"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <input
                type="submit"
                value="Guardar nuevo password"
                className="uppercase bg-indigo-700 w-full py-3 px-10 rounded-xl font-bold text-white mt-4 hover:cursor-pointer hover:bg-indigo-800 md:w-auto "
              />
            </form>

            {passwordModificado && (
              <Link to="/" className="block text-center my-5 text-gray-500">
                {" "}
                <span className="text-indigo-700 font-bold">Inicia sesión</span>
              </Link>
            )}
          </>
        )}
      </div>
    </>
  );
};

export default NuevoPassword;
