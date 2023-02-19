import styled from 'styled-components';

export const StyledProfile = styled.div`
  width: 450px;
  border-radius: 10px;
  font-weight: 700;
  font-size: 24px;
  box-shadow: 5px 5px 8px 1px rgba(112, 111, 111, 1);
  background-color: white;
`;

export const ProfileDesc = styled.div`
  text-align: center;
  align-items: center;
  padding: 48px 32px;

  & .profileAvatar {
    max-width: 150px;
    margin: 0 auto;
    border: 1px solid #dcdcdc;
    border-radius: 50%;
    outline: none;
    background-color: #f5f5f5;
  }

  & .profileName {
    font-size: 35px;
  }

  & .profileInfo {
    text-align: center;
    color: #bbbbbb;
  }

  & .tag {
    margin-bottom: 10px;
  }
`;

export const ProfileStatistics = styled.ul`
  display: flex;
  text-align: center;
  font-size: 20px;
  font-weight: 400;
  background-color: #f5f5f5;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`;

export const ProfileStatisticsItem = styled.li`
  display: flex;
  flex-direction: column;
  gap: 5px;
  align-items: center;
  justify-content: center;
  padding: 10px 30px;
  width: calc(100% / 3);
  border-top: 1px solid #dcdcdc;
  &:not(:last-child) {
  border-right: 1px solid #dcdcdc;
`;
