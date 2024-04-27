import { useSelector } from 'react-redux';
import Contact from '../Contact/Contact.jsx';
import { selectContacts } from '../../redux/contactsSlice.js';
import styles from '../ContactList/ContactList.module.css'; 

function ContactList() {
  const contacts = useSelector(selectContacts);

  return (
    <div className={styles.container}>
      {contacts.map(contact => (
        <div key={contact.id} className={styles.contactContainer}>
          <Contact contact={contact} />
        </div>
      ))}
    </div>
  );
}

export default ContactList;