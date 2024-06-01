import { useState, useEffect } from "react";
import Phonebook from "./components/Phonebook";
import SearchFilter from "./components/SearchFilter";
import PhonebookService from "./services/PhonebookService";
import "./index.css";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [searchFilter, setSearchFilter] = useState("");
  const [notification, setNotification] = useState(null);

  useEffect(() => {
    PhonebookService.getAll().then((response) => {
      setPersons(response);
    });
  }, []);

  const deletePerson = (id) => {
    if (window.confirm("you really wanna delete it?")) {
      PhonebookService.remove(id).then(() => {
        setPersons(persons.filter((person) => person.id !== id));
        showNotification("deleted");
      });
    }
  };

  const addPerson = (event) => {
    event.preventDefault();
    const existingPerson = persons.find((person) => person.name === newName);

    const newPerson = { name: newName, number: newNumber };

    if (existingPerson) {
      if (
        window.confirm(
          `${newName} is already in the phomebook, do you want to replace the old number?`
        )
      ) {
        PhonebookService.update(existingPerson.id, newPerson).then(
          (updatedPerson) => {
            setPersons(
              persons.map((person) =>
                person.id !== existingPerson.id ? person : updatedPerson
              )
            );
            showNotification(`${newName}'s phone number has been updated`);
          }
        );
      }
    } else {
      PhonebookService.create(newPerson).then((addedPerson) => {
        setPersons(persons.concat(addedPerson));
        showNotification(`added ${newName}`);
      });
    }
    setNewName("");
    setNewNumber("");
  };

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  const handleSearchChange = (event) => {
    setSearchFilter(event.target.value);
  };

  const filteredPersons = persons.filter((person) =>
    person.name.toLowerCase().includes(searchFilter.toLowerCase())
  );

  const showNotification = (message) => {
    setNotification(message);
    setTimeout(() => {
      setNotification(null);
    }, 5000);
  };

  return (
    <div>
      {notification && <div className="notification">{notification}</div>}
      <h2>phonebook</h2>
      <Phonebook
        persons={filteredPersons}
        addPerson={addPerson}
        deletePerson={deletePerson}
        newName={newName}
        handleNameChange={handleNameChange}
        newNumber={newNumber}
        handleNumberChange={handleNumberChange}
      />
      <SearchFilter value={searchFilter} onChange={handleSearchChange} />
    </div>
  );
};

export default App;
