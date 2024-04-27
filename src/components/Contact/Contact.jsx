import PropTypes from 'prop-types';
import styles from '../Contact/Contact.module.css'
import { FaUser, FaPhone } from 'react-icons/fa6'; 

function Contact({ contact, onDelete }) {
  return (
    <div className={styles.contactContainerClass}> 
      <li>
        <p className={styles.paragraphClass}>
          <FaUser className={styles.icon} /> 
          {contact.name}
        </p>
        <p className={styles.paragraphClass}>
          <FaPhone className={styles.icon} /> {contact.number}
        </p>
      </li>
      <button className={styles.deleteButtonClass} onClick={onDelete}>Delete</button>
    </div>
  );
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired,
  onDelete: PropTypes.func.isRequired,
  contactContainerClass: PropTypes.string.isRequired,
  paragraphClass: PropTypes.string.isRequired,
  deleteButtonClass: PropTypes.string.isRequired
};

export default Contact;