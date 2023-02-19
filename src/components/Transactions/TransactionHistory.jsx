import PropTypes from 'prop-types';
import {
  Table,
  TableHeader,
  ColumnTitle,
  TableRow,
  Type,
} from './TransactionHistory.styled';

function TransactionHistory({ items }) {
  return (
    <Table>
      <TableHeader>
        <tr>
          <ColumnTitle>Type</ColumnTitle>
          <ColumnTitle>Amount</ColumnTitle>
          <ColumnTitle>Currency</ColumnTitle>
        </tr>
      </TableHeader>
      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <TableRow key={id}>
            <Type>{type}</Type>
            <td>{amount}</td>
            <td>{currency}</td>
          </TableRow>
        ))}
      </tbody>
    </Table>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string.isRequired)),
};

export default TransactionHistory;
