import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";
const Header = () => {
  const { cerrarSesion } = useAuth();
  return (
    <header className="py-10 px-4 bg-indigo-600">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center">
        <h1 className="font-bold text-indigo-200 text-2xl text-center">
          Administrador de Pacientes de{" "}
          <span className="text-white font-black">Veterinaria</span>
        </h1>
        <nav className="flex gap-4 flex-col lg:flex-row mt-5 lg:mt-0 items-center">
          <Link className="text-white text-sm uppercase font-bold" to="/admin">
            Pacientes
          </Link>
          <Link className="text-white text-sm uppercase font-bold" to="/admin/perfil">
            Perfil
          </Link>
          <button
            type="button"
            className="text-white text-sm uppercase font-bold"
            onClick={cerrarSesion}
          >
            Cerrar Sesión
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
