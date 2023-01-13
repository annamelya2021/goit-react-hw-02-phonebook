const ContactsList = ({ data, onDeleteContacts }) => {
  return (
    <ul>
      {data.map(message => {
        const { name, id, number } = message;

        return (
          <li key={id}>
            <span>{name}</span>: <span>{number}</span>
            <button key={id} onClick={() => onDeleteContacts(id)}>
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default ContactsList;
