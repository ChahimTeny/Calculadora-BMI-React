import React, { useState } from 'react'

import './index.css'

function App() {

  /* Declaracion de variables */
  const[peso, setPeso] = useState('')
  const[altura, setAltura] = useState('')
  const[bmi, setBmi] = useState('')
  const[message, setMessage] = useState(0)

  /* Metodo para realizar el calculo */

  let calBmi = (event) => {
    event.preventDefault()
    
    if (peso === 0 || altura === 0){
      alert('Ingresa datos correctos')
    }else{
      let bmi = (peso / (altura * altura) * 703)
      setBmi(bmi.toFixed(1))

      if(bmi<25){
        setMessage('Tienes un paso bajo')
      } else if (bmi>=25 && bmi < 30){
        setMessage('Tu peso es saludable')
      } else {
        setMessage('Tienes sobre peso')
      }
    }
  }

  let imgSrc=''

  if (bmi < 1) {
    imgSrc = null
  } else {
    if(bmi < 25) {
      imgSrc = require('../src/assets/ppeque.jpg')
    } else if (bmi >= 25 && bmi < 30) {
      imgSrc = require('../src/assets/salu.jpg')
    } else {
      imgSrc = require('../src/assets/pgrande.jpg')
    }
  }

  let reload = () => {
    window.location.reload()
  }

  return (
    <div className="App">
      <div className="container">
        <h1 className="center"> Calculadora BMI</h1>
        <form onSubmit={calBmi}>
          <div>
            <label>Peso en (lbs)</label>
            <input value={peso} onChange={(e) => setPeso(e.target.value )}/>
          </div>
          <div>
            <label>Altura en (in)</label>
            <input value={altura} onChange={(event) => setAltura(event.target.value)}/>
          </div>
          <div>
          <button className="btn" type="submit">Calcular</button>
          <button className="btn btn-outline" onClick={reload} type="submit">Refrescar</button>
          </div>
        </form>

        <div className="center">
          <h3>Tu BMI es: {bmi}</h3>
          <p>{message}</p>

          <div className="img-container">
            <img src={imgSrc} alt=''></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
