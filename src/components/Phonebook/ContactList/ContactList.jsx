import PropTypes from 'prop-types';
import { FaTrash, FaUserAlt } from 'react-icons/fa';
import {
  StyledContactList,
  StyledContactItem,
  StyledContactIcon,
  StyledContactDel,
} from 'components/Phonebook/ContactList/ContactList.styled';

export default function ContactList({ items, deliteContact }) {
  const elements = items.map(({ id, name, number }) => {
    return (
      <StyledContactItem key={id}>
        <StyledContactIcon>
          <FaUserAlt />
        </StyledContactIcon>
        {name}: {number}
        <StyledContactDel onClick={() => deliteContact(id)}>
          <FaTrash />
        </StyledContactDel>{' '}
      </StyledContactItem>
    );
  });
  return (
    <>
      <StyledContactList>{elements}</StyledContactList>
    </>
  );
}

ContactList.defaultProps = {
  items: [],
};

ContactList.propeTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.number.isRequired,
    })
  ),
};
