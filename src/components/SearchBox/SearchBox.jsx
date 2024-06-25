import { useDispatch, useSelector } from 'react-redux';
import css from './SearchBox.module.css';
import { addFilters, selectFilter } from '../../redux/filtersSlice';

export default function SearchBox() {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const getFilter = e => {
    const name = e.target.value.trim();
    dispatch(addFilters(name));
  };
  return (
    <div className={css.container}>
      <p>Find contacts by name</p>
      <input type="text" value={filter} onChange={getFilter} />
    </div>
  );
}
