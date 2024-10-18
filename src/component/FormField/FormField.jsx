import React from 'react';
import styles from './FormField.module.scss';

function FormField({ label, id, name, type = 'text', value, onChange, error, required, as = 'input', options = [], children }) {
  const InputComponent = as;

  const renderInput = () => {
    const commonProps = {
      id,
      name,
      value,
      onChange,
      className: error ? `${styles.input} ${styles.error}` : styles.input,
    };

    switch (as) {
      case 'select':
        return (
          <select {...commonProps}>
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        );
      case 'textarea':

        return <textarea spellcheck="false" data-listener-added_32fa0ba5="true" {...commonProps} rows={3} />;
      case 'button':
        return (
          <button {...commonProps} type={type} onClick={onChange}>
            {value}
          </button>
        );
      default:
        return <input {...commonProps} type={type} />;
    }
  };

  return (
    <div className={styles.formField}>
      {label && (
        <label htmlFor={id} className={styles.label}>
          {label}
          {required && <span className={styles.required}>*</span>}
        </label>
      )}
      {renderInput()}
      {error && <span className={styles.errorMessage}>{error}</span>}
    </div>
  );
}

export default FormField;
