const Alerta = ({alerta}) => {
  return (
    <div className={`${alerta.error ? 'from-red-400 to-red-600' : 'from-indigo-400 to-indigo-600'} bg-gradient-to-r p-3 text-center rounded-xl uppercase text-white font-bold text-sm mb-5`}>{alerta.msj}</div>
  )
}

export default Alerta