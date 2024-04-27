import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import styles from '../ContactForm/ContactForm.module.css'; 

const validationSchema = Yup.object({
  name: Yup.string()
    .min(3, 'Must be at least 3 characters')
    .max(50, 'Must be 50 characters or less')
    .required('Required'),
  number: Yup.string()
    .min(3, 'Must be at least 3 characters')
    .max(50, 'Must be 50 characters or less')
    .required('Required'),
});

function ContactForm({ onAddContact }) {
  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        onAddContact(values.name, values.number);
        resetForm();
      }}
    >
          <Form className={styles.formContainer}> Name
        <Field type="text" name="name" placeholder="" />
        <ErrorMessage name="name" component="div" />
        Number phone
        <Field type="text" name="number" placeholder="" />
        <ErrorMessage name="number" component="div" />

        <button type="submit">Add Contact</button>
      </Form>
    </Formik>
  );
}

export default ContactForm;