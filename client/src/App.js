import React, { useState, useEffect } from 'react'
import './App.css';
import Axios from 'axios';
import Card from './components/cards/card';

function App() {
  const [values, setValues] = useState();
  const [listMovies, setListMovies] = useState();
  const [newValues, setNewValues] = useState();

  const handleClickButton = async () => {
    Axios.post("http://localhost:3001/register", {
      name: values.name,
      cost: values.cost,
      category: values.category,
    })
    
    setListMovies([...listMovies, {
      name: values.name,
      cost: values.cost,
      category: values.category
    }])
  }

  const handleChangeValues = value => {
    setValues(prevValue=>({
      ...prevValue,
      [value.target.name]: value.target.value,
    }))
  }

  function handleNewValues (value) {
    setNewValues(prevValue=>({
      ...prevValue,
      [value.target.name]: value.target.value,
    }))
  }

  const handleUpdateButton = async () => {
    Axios.put("http://localhost:3001/update", {
      id: newValues.id,
      name: newValues.name,
      cost: newValues.cost,
      category: newValues.category,
    })
    setNewValues("")
  }

  const handleDeleteButton = async () => {
    console.log(newValues.id)
    Axios.delete(`http://localhost:3001/${newValues.id}`)
    setNewValues("")
  }

  useEffect(() => {
    Axios.get("http://localhost:3001/get").then((response) => {
      setListMovies(response.data);
    })
  }, [])

  return (
    <div className='app-container' id="app-container">
      <div className='register-container'>
        <h1 className='register-title'>Crud Movies</h1><input type='text' name='name' placeholder=' Nome:' className='register-input' onChange={handleChangeValues}></input>
        <input type='text' name='name' placeholder=' Nome:' className='register-input' id="register-input-name" onChange={handleChangeValues}></input>
        <input type='text' name='cost' placeholder=' Preço:' className='register-input' id="register-input-cost" onChange={handleChangeValues}></input>
        <input type='text' name='category' placeholder=' Categoria:' className='register-input' id="register-input-category" onChange={handleChangeValues}></input>
        <button className='register-button' id="register-button" onClick={() => handleClickButton()}>Cadastrar</button>
      </div>

      {typeof listMovies !== "undefined" && listMovies.map((value) => {
        return <Card key={value.id} listCard={listMovies} setListCard={setListMovies} id={value.id} name={value.name} cost={value.cost} category={value.category}></Card>
      })}

      <div className='update-container' id="update-container">
        <h1 className='register-title'>Crud Movies</h1>
        <input type='text' name='id' placeholder=' Id:' className='register-input' id="input-id" onChange={handleNewValues}></input>
        <input type='text' name='name' placeholder=' Nome:' className='register-input' id="input-name" onChange={handleNewValues}></input>
        <input type='text' name='cost' placeholder=' Preço:' className='register-input' id="input-cost" onChange={handleNewValues}></input>
        <input type='text' name='category' placeholder=' Categoria:' className='register-input' id="input-category" onChange={handleNewValues}></input>
        <div className='register-buttons'>
        <button className='register-button' id="updater-button" onClick={() => handleUpdateButton()}>Atualizar</button>
        <button className='register-button' id="updater-button" onClick={() => handleDeleteButton()}>Deletar</button>
        <button className='register-button' onClick={() => {
            document.getElementById("update-container").classList.remove("updated-container");
            document.getElementById("app-container").classList.remove("app-container-op");
            document.getElementById("register-input-name").className = "register-input";
            document.getElementById("register-input-cost").className = "register-input";
            document.getElementById("register-input-category").className = "register-input";
            document.getElementById("register-button").classList.remove("register-button-op");
            }}>Fechar</button>
        </div>
      </div>

    </div>
  );
}

export default App;

export const openCard = (e) => {
  e.preventDefault();
  var container = document.getElementsByClassName("update-container")
  container.style.display = "block";
}