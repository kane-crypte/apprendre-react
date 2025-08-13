//faire une formulaire complete avec nom, prenom et email,date naissance appliquer le css et la protection des champs 
function App() {
  return (
    <form>
      <label>
        Nom:
        <input type="text" name="name" />
      </label>
      <label>
        Prénom:
        <input type="text" name="surname" />
      </label>
      <label>
        Email:
        <input type="email" name="email" />
      </label>
      <label>
        Date de naissance:
        <input type="date" name="dob" />
      </label>
      <button type="submit">Envoyer</button>
    </form>
  );    
}

export default App
