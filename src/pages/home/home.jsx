import React, { useEffect } from "react";
import { connect } from "react-redux";
import { filterByName, filterByOrderBy, filterByScore, getVideoGameData, resetFilter } from "../../redux/action";
import styles from "./home.module.scss";
import Card from "../../component/Card/card";
import FilterForm from "../../component/filterForm/filterForm";

function Home({ data, loading, error, filters, getVideoGameData, filterByName, filterByScore, filterByOrderBy, resetFilter }) {
  useEffect(() => {
    getVideoGameData();
  }, [getVideoGameData]);

  const handleFilter = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case 'name':
        filterByName(value);
        break;
      case 'minScore':
        filterByScore(Number(value));
        break;
      case 'orderBy':
        filterByOrderBy(value);
        break;
      default:
        break;
    }
  };

  const handleClear = () => {
    resetFilter();
  };

  return (
    <div className={styles.homeContainer}>
      <aside className={styles.leftColumn}>
        <h2>Left Column</h2>
        <FilterForm data={filters} handleFilter={handleFilter} handleClear={handleClear} />
      </aside>
      <main className={styles.rightColumn}>
        {loading && <p>Loading...</p>}
        {error && <p>Error: {error}</p>}
        {data.length > 0 && (
          <div className={styles.dataComponent}>
            {data.map((item) => (
              <Card key={item?.id} data={item} />
            ))}
          </div>
        )}
        {data.length === 0 && !loading && !error && <p>No results found</p>}
      </main>
    </div>
  );
}

const mapStateToProps = (state) => ({
  data: state.data,
  loading: state.loading,
  error: state.error,
  filters: state.filters,
});

const mapDispatchToProps = {
  getVideoGameData,
  filterByName,
  filterByScore,
  filterByOrderBy,
  resetFilter
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
