import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actionsPhonebook from '../../redux/phonebook/actions-phonebook';
import styles from './Contacts.module.css';

const Contacts = ({ contacts, onDeleteContact }) => {
  return (
    <ul className={styles.contacts__list}>
      {contacts &&
        contacts.map(({ id, name, number }) => (
          <li key={id}>
            <div className={styles.item}>
              <p className={styles.info}>
                {name}: {number}
              </p>
              <button
                className={styles.button}
                type="button"
                onClick={() => onDeleteContact(id)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
    </ul>
  );
};
Contacts.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ),
  onDeleteContact: PropTypes.func.isRequired,
};
const filterByInputValue = (allContacts, filter) => {
  const normalizedFilter = filter.toLowerCase();
  return allContacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter),
  );
};
// const mapStateToProps = state => {
//   const { items, filter } = state.contacts;
//   const visibleContacts = filterByInputValue(items, filter);
//   return {
//     contacts: visibleContacts,
//   };
// };
const mapStateToProps = ({ contacts: { items, filter } }) => ({
  contacts: filterByInputValue(items, filter),
});

const mapDispatchToProps = dispatch => ({
  onDeleteContact: idContact =>
    dispatch(actionsPhonebook.deleteContact(idContact)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Contacts);
