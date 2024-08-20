// export function SecondsCounter (props) {
//     return (
//         <div className="cajaFondo d-inline-flex bg-dark p-2">
//           <div className="cajaReloj rounded-3 mx-2"><i className="fa-regular fa-clock"></i></div>
//           <div className="cajaSegundos rounded-3 mx-2">{props.segundo1}</div>
//           <div className="cajaSegundos rounded-3 mx-2">{props.segundo2}</div>
//           <div className="cajaSegundos rounded-3 mx-2">{props.segundo3}</div>
//           <div className="cajaSegundos rounded-3 mx-2">{props.segundo4}</div>
//           <div className="cajaSegundos rounded-3 mx-2">{props.segundo5}</div>
//           <div className="cajaSegundos rounded-3 mx-2">{props.segundo6}</div>
//         </div>
//     )
// }
export function SecondsCounter ({segundos}) {
  return (
      <div className="cajaFondo d-inline-flex bg-dark p-2">
        <div className="cajaReloj rounded-3 mx-2"><i className="fa-regular fa-clock"></i></div>
        <div className="cajaSegundos rounded-3 mx-2">{segundos[0]}</div>
        <div className="cajaSegundos rounded-3 mx-2">{segundos[1]}</div>
        <div className="cajaSegundos rounded-3 mx-2">{segundos[2]}</div>
        <div className="cajaSegundos rounded-3 mx-2">{segundos[3]}</div>
        <div className="cajaSegundos rounded-3 mx-2">{segundos[4]}</div>
        <div className="cajaSegundos rounded-3 mx-2">{segundos[5]}</div>
      </div>
  )
}
