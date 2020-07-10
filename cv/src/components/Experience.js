import React from 'react';
import { Table, Icon, Panel } from 'rsuite';

import { EXPERIENCE } from '../DATA';

const { ColumnGroup, Column, HeaderCell, Cell } = Table;

class Experience extends React.Component {
  constructor(props) {
    super(props);
    const data = EXPERIENCE;
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

  render() {
    const { sortColumn, sortType, loading } = this.state;
    return (
      <Panel
        header="Experience"
        shaded
        bordered
        bodyFill
        style={{ margin: '32px', display: 'inline-block', width: 600 }}
      >
        <Table
          headerHeight={80}
          isTree
          defaultExpandAllRows
          rowKey="name"
          autoHeight
          data={this.getData()}
          sortColumn={sortColumn}
          sortType={sortType}
          onSortColumn={this.handleSortColumn}
          loading={loading}
          onRowClick={(data) => {
            console.log(data);
          }}
          onExpandChange={(isOpen, rowData) => {
            console.log(isOpen, rowData);
          }}
          renderTreeToggle={(icon, rowData) => {
            if (rowData.children && rowData.children.length === 0) {
              return <Icon icon="spinner" spin />;
            }
            return icon;
          }}
        >
          <ColumnGroup header="Employer">
            <Column fixed colSpan={2}>
              <HeaderCell></HeaderCell>
              <Cell dataKey="name" />
            </Column>
            <Column flexGrow={1} fixed>
              <HeaderCell>Project</HeaderCell>
              <Cell dataKey="name" />
            </Column>
            {/* <Column flexGrow={1} fixed colSpan={3}>
            <HeaderCell>Technology</HeaderCell>
            <Cell dataKey="name" />
          </Column> */}
          </ColumnGroup>
          <ColumnGroup header="Period">
            <Column fixed sortable>
              <HeaderCell>From</HeaderCell>
              <Cell dataKey="from" />
            </Column>
            <Column fixed sortable>
              <HeaderCell>To</HeaderCell>
              <Cell dataKey="to" />
            </Column>
          </ColumnGroup>
        </Table>
      </Panel>
    );
  }
}

export default Experience;
