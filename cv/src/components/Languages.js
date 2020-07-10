import React from 'react';
import { Table } from 'rsuite';

const { Column, HeaderCell, Cell } = Table;

// | Language | Level         |
// | -------- | ------------- |
// | Dutch    | Mother Tongue |
// | English  | Fluent        |
// | French   | Intermediate  |

const LANGUAGES = [
  { name: 'Dutch', level: 'Mother Tongue' },
  { name: 'English', level: 'Fluent' },
  { name: 'French', level: 'Intermediate' },
];

class Languages extends React.Component {
  constructor(props) {
    super(props);
    // const data = fakeData.filter((v, i) => i < 8);
    const data = LANGUAGES;
    this.state = {
      addColumn: false,
      data,
    };
    this.handleSortColumn = this.handleSortColumn.bind(this);
  }

  getData() {
    const { data, sortColumn, sortType } = this.state;

    if (sortColumn && sortType) {
      return data.sort((a, b) => {
        let x = a[sortColumn];
        let y = b[sortColumn];
        if (typeof x === 'string') {
          x = x.charCodeAt();
        }
        if (typeof y === 'string') {
          y = y.charCodeAt();
        }
        if (sortType === 'asc') {
          return x - y;
        } else {
          return y - x;
        }
      });
    }
    return data;
  }

  handleSortColumn(sortColumn, sortType) {
    this.setState({
      loading: true,
    });

    setTimeout(() => {
      this.setState({
        sortColumn,
        sortType,
        loading: false,
      });
    }, 500);
  }
  // height={420}
  render() {
    const { sortColumn, sortType, loading } = this.state;
    return (
      <div style={{ maxWidth: '50vw' }}>
        <Table
          data={this.getData()}
          sortColumn={sortColumn}
          sortType={sortType}
          onSortColumn={this.handleSortColumn}
          loading={loading}
          onRowClick={(data) => {
            console.log(data);
          }}
        >
          <Column flexGrow={2} fixed sortable>
            <HeaderCell>Language</HeaderCell>
            <Cell dataKey="name" />
          </Column>
          <Column flexGrow={1} fixed sortable>
            <HeaderCell>Level</HeaderCell>
            <Cell dataKey="level" />
          </Column>
        </Table>
      </div>
    );
  }
}

export default Languages;
