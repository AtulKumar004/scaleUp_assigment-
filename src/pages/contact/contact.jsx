import React, { useState } from 'react';
import styles from './contact.module.scss';
import FormField from '../../component/FormField/FormField';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    let newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length === 0) {

      alert('Form submitted successfully');

      setFormData({ name: '', email: '', message: '' });
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <div className={styles.contactContainer}>
      <h2 className={styles.title}>GET IN TOUCH</h2>
      <p className={styles.description}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a
        est risus. Aliquam ultricies ornare mi id egestas. Vestibulum
        imperdiet interdum est
      </p>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.inputGroup}>
          <FormField
            label="Name"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            error={errors.name}
            required
          />
          <FormField
            label="Email Address"
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            error={errors.email}
            required
          />
          <FormField
            label="Message"
            id="message"
            name="message"
            type="text"
            as="textarea"
            value={formData.message}
            onChange={handleChange}
            error={errors.message}
            required
          />
        </div>
        <button type="submit" className={styles.submitButton}>
          Send
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
