import React, { Component } from 'react';
import { Table } from 'rsuite';

const { Column, HeaderCell, Cell } = Table;

class TreeTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: fakeTreeData,
    };
  }
  render() {
    const { data } = this.state;
    return (
      <div>
        <Table
          isTree
          defaultExpandAllRows
          rowKey="id"
          height={400}
          data={data}
          onExpandChange={(isOpen, rowData) => {
            console.log(isOpen, rowData);
          }}
          renderTreeToggle={(icon = 'folder', rowData) => {
            if (rowData.children && rowData.children.length === 0) {
              return <Icon icon="spinner" spin />;
            }
            return icon;
          }}
        >
          <Column flexGrow={1}>
            <HeaderCell>Label</HeaderCell>
            <Cell dataKey="labelName" />
          </Column>

          <Column width={100}>
            <HeaderCell>Status</HeaderCell>
            <Cell dataKey="status" />
          </Column>

          <Column width={100}>
            <HeaderCell>Count</HeaderCell>
            <Cell dataKey="count" />
          </Column>
        </Table>
      </div>
    );
  }
}

export default TreeTable;
