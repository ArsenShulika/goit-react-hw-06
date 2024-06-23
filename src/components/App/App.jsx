import { useEffect, useState } from 'react';
import initContacts from '../initContacts.json';
import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import SearchBox from '../SearchBox/SearchBox';

export default function App() {
  const [filter, setFilter] = useState('');

  const [contacts, setContacts] = useState(() => {
    const storageContact = window.localStorage.getItem('saveContact');
    return storageContact !== null ? JSON.parse(storageContact) : initContacts;
  });

  useEffect(() => {
    window.localStorage.setItem('saveContact', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = newContact => {
    setContacts(prevContacts => {
      return [...prevContacts, newContact];
    });
  };

  const deleteContacts = contactId => {
    setContacts(prevContacts => {
      return prevContacts.filter(contact => contact.id !== contactId);
    });
  };

  const visibleContacts = contacts.filter(contacts =>
    contacts.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="css.container">
      <h1>Phonebook</h1>
      <ContactForm onAdd={addContact} />
      <SearchBox value={filter} onFilter={setFilter} />
      <ContactList contacts={visibleContacts} onDelete={deleteContacts} />
    </div>
  );
}
