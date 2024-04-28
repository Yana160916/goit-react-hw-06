import { useSelector } from 'react-redux';
import Contact from '../Contact/Contact.jsx';
import { selectContacts } from '../../redux/contactsSlice.js';
import { selectNameFilter } from '../../redux/filtersSlice.js'; 
import styles from '../ContactList/ContactList.module.css'; 

function ContactList() {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectNameFilter); 


  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className={styles.container}>
      {filteredContacts.map(contact => (
        <div key={contact.id} className={styles.contactContainer}>
          <Contact contact={contact} />
        </div>
      ))}
    </div>
  );
}

export default ContactList;