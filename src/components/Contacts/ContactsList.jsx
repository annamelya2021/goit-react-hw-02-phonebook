import { List, Item, Button } from './ContactList.styled';

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

export default ContactsList;
