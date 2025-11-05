
import './App.module.css'

import { useState} from 'react'

function App() {


  const[numero1, setNumero1] = useState()
  const[numero2, setNumero2] = useState()
  const[respSoma, setRespSoma] = useState()
  const[respSub, setRespSub] = useState()
  const[respMult, setRespMult] = useState()
  const[respDiv, setRespDiv] = useState()

  const soma = () => setRespSoma(parseFloat(numero1) + parseFloat(numero2))
  const subtracao = () => setRespSub(parseFloat(numero1) - parseFloat(numero2))
  const multiplicacao = () => setRespMult(parseFloat(numero1) * parseFloat(numero2))
  const divisao = () => setRespDiv(parseFloat(numero1) /  parseFloat(numero2))



  return (
    <>
     <h1>CALCULADORA</h1>
     <div>
      <label htmlFor="n1">Digite um número</label>
      <input type="number" id='n1'  value={numero1} onChange={(e) => setNumero1(e.target.value)}/>
     </div>
     <div>
      <label htmlFor="n2">Digite um número</label>
      <input type="number" id='n2'  value={numero2} onChange={(e) => setNumero2(e.target.value)}/>
     </div>
     
     <div>
   
        <div>
          <h2>SOMA</h2>
          {respSoma}
          <button onClick={soma}>SOMAR</button>
        </div>


     </div>
     <div>
   
        <div>
          <h2>SUBTRAIR</h2>
          {respSub}
          <button onClick={subtracao}>SUBTRAIR</button>
        </div>


     </div>
     <div>
   
        <div>
          <h2>MULTIPLICAÇÃO</h2>
          {respMult}
          <button onClick={multiplicacao}>MULTIPLICAR</button>
        </div>


     </div>
     <div>
   
        <div>
          <h2>DIVISÃO</h2>
          {respDiv}
          <button onClick={divisao}>DIVIDIR</button>
        </div> 


     </div>
    </>
  )
}

export default App
