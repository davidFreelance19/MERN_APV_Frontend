import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import clienteAxios from "../config/axios"
import Alerta from "../components/Alerta";
const ConfirmarCuenta = () => {
  const [cuentaConfirmada, setCuentaConfirmada] = useState(false);
  const [cargando, setCargando] = useState(true);
  const [alerta, setAlerta] = useState({});
  const params = useParams();
  const { id } = params;
  useEffect(() => {
    const confirmarCuenta = async () => {
      try {
        const url = `/veterinarios/confirmar/${id}`;
        const { data } = await clienteAxios(url);
        setCuentaConfirmada(true)
        setAlerta({
          msj: data.msj,
        })
      } catch (error) {
        setAlerta({
          msj: error.response.data.msj,
          error: true,
        });
      }
      setCargando(false);
    };
    confirmarCuenta();
  }, []);
  return (
    <>
      <div className="">
        <h1 className="text-indigo-600 font-black mb-8 text-5xl md:text-6xl capitalize">
          Confirma tu cuenta y Administra tus{" "}
          <span className="text-black">pacientes</span>
        </h1>
      </div>
      <div className="md:mt-10 shadow-lg px-5 py-10 rounded-xl bg-white">
        {!cargando && <Alerta alerta={alerta} />}
        {cuentaConfirmada && (<Link
            to="/"
            className="block text-center my-5 text-gray-500"
          >
            <span className="text-indigo-700 font-bold">Inicia sesión</span>
          </Link>)}
      </div>
    </>
  );
};

export default ConfirmarCuenta;
