const Phonebook = ({ persons, addPerson, deletePerson, newName, handleNameChange, newNumber, handleNumberChange }) => {
  return (
    <div>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumberChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>numbers</h2>
      <ul>
        {persons.map((person) => (
          <li key={person.id}>
            {person.name}: {person.number}
            <button onClick={() => deletePerson(person.id)}>delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Phonebook;
