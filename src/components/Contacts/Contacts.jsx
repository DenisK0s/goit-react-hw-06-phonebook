//модули
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

//действия
import * as actions from '../../redux/phonebook/phonebook-actions';

//стили
import styles from './Contacts.module.css';

const Contacts = ({ contactsItems, onDeleteContact }) => {
  console.log(contactsItems);
  return (
    <div className={styles.Contacts}>
      <ul className={styles.ContactsList}>
        {contactsItems.map(({ id, name, number }) => {
          return (
            <li key={id} className={styles.ContactsListItem}>
              <span className={styles.ContactValue}>
                {name}: {number}
              </span>
              <button type="button" onClick={() => onDeleteContact(id)}>
                delete
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

Contacts.propTypes = {
  contactsItems: PropTypes.array,
  onDeleteContact: PropTypes.func,
};

const filterContacts = (allContacts, filter) => {
  const filterRegisterCorretion = filter.toLowerCase();

  return allContacts.filter(({ name }) =>
    name.toLowerCase().includes(filterRegisterCorretion),
  );
};

const mapStateToProps = ({ phonebook: { contacts, filter } }) => {
  const currentContactsList =
    filter !== '' ? filterContacts(contacts, filter) : contacts;

  return {
    contactsItems: currentContactsList,
  };
};

const mapDispatchToProps = dispatch => {
  return { onDeleteContact: id => dispatch(actions.deleteContact(id)) };
};

export default connect(mapStateToProps, mapDispatchToProps)(Contacts);
