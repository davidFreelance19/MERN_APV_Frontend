import { useState } from "react";
import clienteAxios from "../config/axios";
import Alerta from "../components/Alerta";
import { Link } from "react-router-dom";
const OlvidePassword = () => {
  const [email, setEmail] = useState("")
  const [alerta, setAlerta] = useState({})
  const handleSubmit = async e =>{
    e.preventDefault()
    if(email === '' || email.length < 6){
      setAlerta({msj: 'El email es obligatorio', error: true})
      return;
    }
    try {
      const {data} = await clienteAxios.post('/veterinarios/olvide-password', {
        email
      })
      setAlerta({msj: data.msj})
    } catch (error) {
      setAlerta({
        msj: error.response.data.msj,
        error: true
      })
    }
  }
  const {msj} = alerta
  return (
    <>
      <div className="">
        <h1 className="text-indigo-600 font-black mb-8 text-5xl md:text-6xl capitalize">
          Recupera tu cuenta y Administra tus{" "}
          <span className="text-black">pacientes</span>
        </h1>
      </div>
      <div className="md:mt-10 shadow-lg px-5 py-10 rounded-xl bg-white">
      {msj && <Alerta alerta={alerta} />}
        <form
          onSubmit={handleSubmit}
        >
          <div className="my-5">
            <label className="uppercase text-gray-600 block text-md md:text-xl font-bold">
              Email
            </label>
            <input
              type="email"
              placeholder="Email de Registro"
              className="border w-full p-3 my-4 bg-gray-50 rounded-xl"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </div>
          <input
            type="submit"
            value="Enviar instrucciones"
            className="uppercase bg-indigo-700 w-full py-3 px-10 rounded-xl font-bold text-white mt-4 hover:cursor-pointer hover:bg-indigo-800 md:w-auto "
          />
        </form>

        <nav className="mt-10 lg:flex lg:justify-between">
          <Link
            to="/registrar"
            className="block text-center my-5 text-gray-500"
          >
            ¿No tienes una cuenta?{" "}
            <span className="text-indigo-700 font-bold">Regístrate</span>
          </Link>
          <Link
            to="/"
            className="block text-center my-5 text-gray-500"
          >
            ¿Ya tienes una cuenta?{" "}
            <span className="text-indigo-700 font-bold">Inicia sesión</span>
          </Link>
        </nav>
      </div>
    </>
  );
};

export default OlvidePassword;
