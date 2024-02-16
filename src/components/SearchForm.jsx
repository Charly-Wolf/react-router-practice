import { Form, useNavigation } from 'react-router-dom';
import Wrapper from '../assets/wrappers/SearchForm';
import { useEffect, useRef } from 'react';

const SearchForm = ({ searchTerm }) => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';

  const searchInputRef = useRef(null);

  useEffect(() => {
    // Focus the input element when the component mounts
    searchInputRef.current.focus();
  }, []);

  return (
    <Wrapper>
      <Form className='form'>
        <input
          type='search'
          name='search'
          className='form-input'
          defaultValue={searchTerm}
          ref={searchInputRef}
        />
        <button type='submit' className='btn' disabled={isSubmitting}>
          {isSubmitting ? 'searching...' : 'search'}
        </button>
      </Form>
    </Wrapper>
  );
};
export default SearchForm;
