import { nanoid } from 'nanoid';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import css from './ContactForm.module.css';

const UserSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  number: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
});

export default function ContactForm({ onAdd }) {
  const handleSubmit = (values, actions) => {
    onAdd({ ...values, id: nanoid() });
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      onSubmit={handleSubmit}
      validationSchema={UserSchema}
    >
      <Form className={css.form}>
        <div className={css.container}>
          <label>Name</label>
          <Field className={css.input} type="text" name="name" />
          <ErrorMessage className={css.error} name="name" component="span" />
        </div>

        <div className={css.container}>
          <label>Number</label>
          <Field className={css.input} type="tel" name="number" />
          <ErrorMessage className={css.error} name="number" component="span" />
        </div>

        <button className={css.btn} type="submit">
          add Contact
        </button>
      </Form>
    </Formik>
  );
}
