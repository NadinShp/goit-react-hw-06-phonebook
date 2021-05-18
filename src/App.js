import 'modern-normalize/modern-normalize.css';
import Contacts from './components/Contacts/Contacts';
import ContactForm from './components/Form/ContactForm';
import Filter from './components/Filter/Filter';
import styles from './App.module.css';

const App = () => (
  <div className={styles.wrapper}>
    <h1>Phonebook</h1>
    <ContactForm />
    <h2>Contacts</h2>
    <Filter />
    <Contacts />
  </div>
);

export default App;
