import React, { useState} from 'react'
import './App.css';
import Axios from 'axios';

function App() {
  const [values, setValues] = useState();

  const handleClickButton = async () => {
    Axios.post("http://localhost:3001/register", {
      name: values.name,
      cost: values.cost,
      category: values.category,
    }).then((response) => {
      console.log(response);
    })
  }

  const handleChangeValues = value => {
    setValues(prevValue=>({
      ...prevValue,
      [value.target.name]: value.target.value,
    }))
  }

  return (
    <div className='app-container'>
      <div className='register-container'>
        <h1 className='register-title'>Crud Movies</h1><input type='text' name='name' placeholder=' Nome:' className='register-input' onChange={handleChangeValues}></input>
        <input type='text' name='cost' placeholder=' Preço:' className='register-input' onChange={handleChangeValues}></input>
        <input type='text' name='category' placeholder=' Categoria:' className='register-input' onChange={handleChangeValues}></input>
        <button className='register-button' onClick={() => handleClickButton()}>Cadastrar</button>
      </div>
    </div>
  );
}

export default App;