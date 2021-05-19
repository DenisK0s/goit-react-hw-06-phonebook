// модули
import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import * as actions from '../src/redux/phonebook/phonebook-actions';

//компоненты
import Container from './components/Container';
import Form from './components/Form';
import Contacts from './components/Contacts';
import Filter from './components/Filter';

//данные
// import contacts from './contacts.json';

class App extends Component {
  // componentDidMount() {
  //   const contactsSting = localStorage.getItem('contacts');
  //   const parcedContacts = JSON.parse(contactsSting);

  //   if (parcedContacts) {
  //     this.setState({ contacts: parcedContacts });
  //   }
  // }

  // componentDidUpdate(prevProps, prevState) {
  //   const { contacts } = this.state;
  //   if (contacts !== prevState.contacts) {
  //     localStorage.setItem('contacts', JSON.stringify(contacts));
  //   }
  // }

  // formSubmitHandler = contactData => {
  //   const { contacts } = this.state;
  //   const isContactExist = contacts.find(
  //     ({ name }) => name === contactData.name,
  //   );

  //   if (!!isContactExist) {
  //     alert(`${isContactExist.name} is already in contacts`);
  //     return;
  //   }

  //   const newContact = { ...contactData, id: uuidv4() };
  //   this.setState(({ contacts }) => ({
  //     contacts: [newContact, ...contacts],
  //   }));
  // };

  FilterContacts = () => {
    const { contacts, filter } = this.state;

    const contactsRegisterCorretion = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(contactsRegisterCorretion),
    );
  };

  render() {
    // const { filter } = this.state;

    // const filtredContacts = this.FilterContacts();
    return (
      <Container>
        <h2 className="Title">Phonebook</h2>
        <Form onSubmit={this.formSubmitHandler} />
        <h2 className="Title">Contacts</h2>
        <Filter />
        <Contacts />
      </Container>
    );
  }
}

export default App;

// const mapStateToProps = state => {
//   return {}
// };

// const mapDispatchToProps = dispatch => {
//   return { someName: () => dispatch(someAction) }
// };

// export default connect(mapStateToProps, mapDispatchToProps)(App);
