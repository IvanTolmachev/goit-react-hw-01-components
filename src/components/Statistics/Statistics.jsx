import PropTypes from 'prop-types';
import css from './Statistics.module.css';

export const Statistics = ({ title, data }) => {
  return (
    <section className={css.statistics}>
      {title && <h2 className={css.title}>{title}</h2>}
      <ul className={css['stat-list']}>
        {data.map(data => (
          <li key={data.id} className={css.item}>
            <span className={css.label}>{data.label}</span>
            <span className={css.percentage}>{data.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  data: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string,
      percentage: PropTypes.number,
    })
  ),
};
