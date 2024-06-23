import { FaPhone } from 'react-icons/fa6';
import { IoPerson } from 'react-icons/io5';
import css from './Contact.module.css';

export default function Contact({ data: { id, name, number }, onDelete }) {
  return (
    <div className={css.container}>
      <div className={css.text}>
        <p>
          <IoPerson className={css.icon} />
          {name}
        </p>
        <p>
          <FaPhone className={css.icon} />
          {number}
        </p>
      </div>
      <button className={css.btn} onClick={() => onDelete(id)}>
        Delete
      </button>
    </div>
  );
}
