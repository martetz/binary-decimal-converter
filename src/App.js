import TextField from '@material-ui/core/TextField';




function App() {
  return (
    <div className='container'>
      <h2>Конвертер</h2>
      
      <div className='card'>
      <TextField
          className='binary'
          id="outlined-secondary"
          label="Двочиная"
          variant="outlined"
          color="secondary"
      />

      <TextField
          className='decimal'
          id="outlined-secondary"
          label="Десятичная"
          variant="outlined"
          color="primary"
      />
      </div>  
  </div>
  );
}

export default App;
