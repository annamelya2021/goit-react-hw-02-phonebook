import { List, Item, Button } from './ContactList.styled';
import PropTypes from 'prop-types';

const ContactsList = ({ data, onDeleteContacts }) => {
  return (
    <List>
      {data.map(message => {
        const { name, id, number } = message;

        return (
          <Item key={id}>
            <span>{name}</span>: <span>{number}</span>
            <Button key={id} onClick={() => onDeleteContacts(id)}>
              Delete
            </Button>
          </Item>
        );
      })}
    </List>
  );
};

ContactsList.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      number: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
};
export default ContactsList;
