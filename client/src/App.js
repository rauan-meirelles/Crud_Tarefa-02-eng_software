function App() {
  return (
    <div className='app-container'>
      <div className='register-container'>
        <h1 className='register-title'>Crud Movies</h1>
        <input type='text' name='name' placeholder=' Nome:' className='register-input'></input>
        <input type='text' name='cost' placeholder=' Preço:' className='register-input'></input>
        <input type='text' name='category' placeholder=' Categoria:' className='register-input'></input>
        <button className='register-button'>Cadastrar</button>
      </div>
    </div>
  );
}