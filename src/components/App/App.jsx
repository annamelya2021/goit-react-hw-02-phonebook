import ContactForm from 'components/ContactForm';
import ContactsList from 'components/Contacts';
import Filter from 'components/Filter';
import { Component } from 'react';
import { Notify } from 'notiflix';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  formSubmitHandler = data => {
    const { contacts } = this.state;

    for (const { name } of contacts) {
      if (name.toLowerCase() === data.name.toLowerCase()) {
        Notify.failure(`${name} is already in contacts.`);
        return;
      }
    }

    this.setState(previousState => ({
      contacts: [...previousState.contacts, data],
    }));
  };

  filterNamesAdd = data => {
    this.setState({
      filter: data,
    });
    this.filterByName();
  };

  filterByName = () => {
    const { contacts, filter } = this.state;
    const normalized = filter.toLocaleLowerCase();
    return contacts.filter(contact =>
      contact.name.toLocaleLowerCase().includes(normalized)
    );
  };

  onDeleteContacts = id => {
    this.setState(prev => ({
      contacts: prev.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    const data = this.filterByName();
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm submit={this.formSubmitHandler} />
        <h2>Contacts</h2>
        <Filter filter={this.filterNamesAdd} />
        <ContactsList data={data} onDeleteContacts={this.onDeleteContacts} />
      </div>
    );
  }
}

export default App;
