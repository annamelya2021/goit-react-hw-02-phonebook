import { Component } from 'react';
import shortid from 'shortid';
import { Input, Form, Button, Label } from './ContactForm.styled';
import PropTypes from 'prop-types';

class ContactForm extends Component {
  state = { id: '', name: '', number: '' };

  onHandleImputChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({
      [name]: value,
    });
    this.setState({ id: shortid.generate() });
  };

  onHandleSubmit = e => {
    e.preventDefault();
    console.log('this.state :>> ', this.state);
    this.props.submit(this.state);
    this.reset();
  };

  nameImputId = shortid.generate();
  numberImportId = shortid.generate();

  reset = () => {
    this.setState({ id: '', name: '', number: '' });
  };

  render() {
    return (
      <Form onSubmit={this.onHandleSubmit}>
        <Label htmlFor={this.nameImputId}>
          Name:
          <Input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            id={this.nameImputId}
            value={this.state.name}
            onChange={this.onHandleImputChange}
          />
        </Label>
        <Label htmlFor={this.numberImportId}>
          Number:
          <Input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={this.state.number}
            id={this.numberImportId}
            onChange={this.onHandleImputChange}
          />
        </Label>

        <Button type="submit">Add contact</Button>
      </Form>
    );
  }
}
ContactForm.propTypes = {
  submit: PropTypes.func.isRequired,
};

export default ContactForm;
