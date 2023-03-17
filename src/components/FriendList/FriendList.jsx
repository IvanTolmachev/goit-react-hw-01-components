import PropTypes from 'prop-types';
import css from './FriendList.module.css';

export const FriendList = ({ friends }) => {
  return (
    <ul className={css.list}>
      {friends.map(friend => (
        <li key={friend.id} className={css.item}>
          {/* <span className={css.stats}></span> */}
          <span
            className={friend.isOnline ? css.statsIsOnline : css.statsIsOffline}
          ></span>

          <img
            className={css.avatar}
            src={friend.avatar}
            alt={friend.name}
            width="48"
          />
          <p className={css.name}>{friend.name}</p>
        </li>
      ))}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      username: PropTypes.string,
      avatar: PropTypes.string,
      name: PropTypes.string,
      isOnline: PropTypes.bool,
      id: PropTypes.number.isRequired,
    })
  ),
};
