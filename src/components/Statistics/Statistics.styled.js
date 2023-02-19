import styled from 'styled-components';
import setBgColor from 'utils/setBgColor';

export const StatisticsTable = styled.section`
  display: block;
  width: 450px;
  margin-top: 48px;
  border-radius: 10px;
  box-shadow: 5px 5px 8px 1px rgba(112, 111, 111, 1);
  background-color: white;
`;

export const Title = styled.h2`
  margin-top: 20px;
  margin-bottom: 20px;
  font-size: 35px;
  text-align: center;
  color: #bbbbbb;
`;

export const StatList = styled.ul`
  display: flex;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-basis: 20%;
  gap: 4px;
  padding-top: 20px;
  padding-bottom: 20px;
  color: white;
  background-color: ${props => setBgColor};

  &:first-child {
    border-bottom-left-radius: 10px;
  }

  &:last-child {
    border-bottom-right-radius: 10px;
  }
`;

export const Label = styled.span`
  font-size: 20px;
`;

export const Percentage = styled.span`
  font-size: 24px;
  font-weight: 700;
`;
