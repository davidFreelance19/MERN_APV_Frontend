import { useState } from "react";
import { Link } from "react-router-dom";
import clienteAxios from "../config/axios";
import Alerta from "../components/Alerta";
const Registrar = () => {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repetirPassword, setRepetirPassword] = useState("");
  const [alerta, setAlerta] = useState({});
  const handleSubmit = async (e) => {
    e.preventDefault();
    if ([nombre, email, password, repetirPassword].includes("")) {
      setAlerta({ msj: "Se tienen campos vacios", error: true });
      return;
    }
    if (password !== repetirPassword) {
      setAlerta({ msj: "Los password no son iguales", error: true });
      return;
    }
    if (password.length < 6) {
      setAlerta({
        msj: "El password es muy corto, agrega mas de 6 caracteres",
        error: true,
      });
      return;
    }
    setAlerta({});

    // Crear el usuario en la api
    try {
      const url = `/veterinarios`;
      await clienteAxios.post(url, { nombre, email, password });
      setAlerta({
        msj: "Creado correctamente, revisa tu email",
        error: false,
      });
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
          Crea tu Cuenta y Administra tus{" "}
          <span className="text-black">pacientes</span>
        </h1>
      </div>
      <div className="md:mt-10 shadow-lg px-5 py-10 rounded-xl bg-white">
        {msj && <Alerta alerta={alerta} />}
        <form onSubmit={handleSubmit}>
          <div className="my-5">
            <label className="uppercase text-gray-600 block text-md md:text-lg font-bold">
              Nombre
            </label>
            <input
              type="text"
              placeholder="Tu nombre"
              className="border w-full p-3 my-4 bg-gray-50 rounded-xl"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />
          </div>

          <div className="my-5">
            <label className="uppercase text-gray-600 block text-md md:text-lg font-bold">
              Email
            </label>
            <input
              type="email"
              placeholder="Email de Registro"
              className="border w-full p-3 my-4 bg-gray-50 rounded-xl"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="my-5">
            <label className="uppercase text-gray-600 block text-md md:text-lg font-bold">
              password
            </label>
            <input
              type="password"
              placeholder="Tu password"
              className="border w-full p-3 my-4 bg-gray-50 rounded-xl capitalize"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="my-5">
            <label className="uppercase text-gray-600 block text-md md:text-lg font-bold">
              Repetir password
            </label>
            <input
              type="password"
              placeholder="Repite tu password"
              className="border w-full p-3 my-4 bg-gray-50 rounded-xl capitalize"
              value={repetirPassword}
              onChange={(e) => setRepetirPassword(e.target.value)}
            />
          </div>
          <input
            type="submit"
            value="crear cuenta"
            className="uppercase bg-indigo-700 w-full py-3 px-10 rounded-xl font-bold text-white mt-4 hover:cursor-pointer hover:bg-indigo-800 md:w-auto "
          />
        </form>

        <nav className="mt-10 lg:flex lg:justify-between">
          <Link to="/" className="block text-center my-5 text-gray-500">
            ¿Ya tienes una cuenta?{" "}
            <span className="text-indigo-700 font-bold">Inicia sesión</span>
          </Link>
          <Link
            to="/olvide-password"
            className="block text-center my-5 text-gray-500"
          >
            Olvide{" "}
            <span className="text-indigo-700 font-bold">Mi Password</span>
          </Link>
        </nav>
      </div>
    </>
  );
};

export default Registrar;
