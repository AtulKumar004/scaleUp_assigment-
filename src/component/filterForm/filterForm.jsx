import React from "react";

import styles from "./filterForm.module.scss";
import FormField from "../FormField/FormField";

function FilterForm({ data, handleFilter , handleClear }) {
  return (
    <div className={styles.inputGroup}>
      <FormField
        label="Name (Contains)"
        id="name"
        name="name"
        value={data?.name}
        onChange={handleFilter}
        // error={errors.name}
      />
      <FormField
        label="Minimum Score"
        id="minScore"
        name="minScore"
        value={data?.minScore}
        onChange={handleFilter}
        type="number"
      />
      <div>
        <FormField
          label="Order By"
          id="orderBy"
          name="orderBy"
          value={data?.orderBy}
          onChange={handleFilter}
          as="select"
          options={[
            
            { value: "", label: "Order By" },
            { value: "name", label: "Name" },
            { value: "release_date", label: "Release data" },
            { value: "score", label: "Score" },
          ]}
        />
      </div>
      
      <FormField
        label=""
        id="submit"
        name="submit"
        value="Apply Filters"
        onChange={handleClear}
        as="button"
        type="submit"
      />
    </div>
  );
}

export default FilterForm;
