import PropTypes from 'prop-types';

import {
  StyledProfile,
  ProfileDesc,
  ProfileStatistics,
  ProfileStatisticsItem,
} from './Profile.styled';

function Profile(props) {
  const {
    username,
    tag,
    location,
    avatar,
    stats: { followers, views, likes },
  } = props;

  return (
    <StyledProfile>
      <ProfileDesc>
        <img src={avatar} alt="User avatar" className="profileAvatar" />
        <p className="profileName">{username}</p>
        <ul className="profileInfo">
          <li className="tag">{tag}</li>
          <li className="location">{location}</li>
        </ul>
      </ProfileDesc>

      <ProfileStatistics>
        <ProfileStatisticsItem>
          <span className="label">Followers </span>
          <span className="quantity">{followers}</span>
        </ProfileStatisticsItem>
        <ProfileStatisticsItem>
          <span className="label">Views </span>
          <span className="quantity">{views}</span>
        </ProfileStatisticsItem>
        <ProfileStatisticsItem>
          <span className="label">Likes </span>
          <span className="quantity">{likes}</span>
        </ProfileStatisticsItem>
      </ProfileStatistics>
    </StyledProfile>
  );
}

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.objectOf(PropTypes.number.isRequired),
};

export default Profile;
