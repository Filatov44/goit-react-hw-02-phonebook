import PropTypes from 'prop-types';
import {
  StyledSearchLabel,
  StyledSearchInput,
  StyledSearchWrapper,
} from 'components/Phonebook/Filter/Filter.styled';

function Filter({ filter, changeFilter }) {
    return (
        <StyledSearchWrapper>
          <StyledSearchLabel htmlFor="text">
            Find contacts by name
          </StyledSearchLabel>
          <StyledSearchInput
            name="text"
            type="text"
            value={filter}
            onChange={changeFilter}
          />
        </StyledSearchWrapper>
      
    );
}

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  changeFilter: PropTypes.func.isRequired,
};

export default Filter;
