import styled from 'styled-components';

export const Table = styled.table`
  margin-top: 48px;
  padding: 0;
  text-align: center;
  box-shadow: 5px 5px 8px 1px rgba(112, 111, 111, 1);
  width: 700px;
  color: #bbbbbb;
  background-color: white;
  border-radius: 10px;
`;

export const TableHeader = styled.thead`
  text-transform: uppercase;
  font-size: 24px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  background-color: #03bdd5;
  color: #ffffff;
`;

export const ColumnTitle = styled.th`
  height: 40px;
  &:first-child {
    border-top-left-radius: 10px;
  }
  &:last-child {
    border-top-right-radius: 10px;
  }
`;

export const TableRow = styled.tr`
  font-weight: 400;
  font-size: 22px;
  background-color: #ececec;
  &:nth-child(odd) {
    background-color: white;
  }
`;

export const Type = styled.td`
  text-transform: capitalize;
  width: 33%;
  height: 40px;
`;
