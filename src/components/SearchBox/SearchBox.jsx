import { useDispatch } from 'react-redux';
import { setFilter } from '../../redux/filtersSlice.js';
import styles from '../SearchBox/SearchBox.module.css'; 

function SearchBox() {
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <div className={styles.formContainer}> 
      <label htmlFor="search">Find contact by name</label>
      <input
        type="text"
        id="search"
        placeholder=""
        onChange={handleChange}
      />
    </div>
  );
}

export default SearchBox;