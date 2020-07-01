import React from 'react';
import ReactDOM from 'react-dom';
import {Table, Column, Cell} from 'fixed-data-table-2';

class TextCell extends React.PureComponent {
  render() {
    const {data, rowIndex, columnKey, ...props} = this.props;
    return (
      <Cell {...props}>
        {data[rowIndex][columnKey]}
      </Cell>
    );
  }
}

class ReorderExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      columns:['one',"two","thg"],
      rows:[{"one":"ad","two":"ad","thg":5,"rf":"5"},
      {"one":"sad","two":"g4b","thg":"asd","rf":"asda"}],

    };    
  }

  componentWillMount() {
    fetch('/products')
    .then(res => res.json())
    .then((data) => {
      this.setState({ rows: data })
      console.log(this.state.rows)
    })
    .catch(console.log);
  }


  render() {
    var dataList = this.state.rows;
    var table_width = 1300;
    return (
    <Table
        rowHeight={50}
        rowsCount={this.state.rows.length}
        width={table_width}
        height={1000}
        headerHeight={50}>
        {Object.keys(this.state.rows[0]).map(function (columnKey, i) {
          return        <Column
          columnKey={columnKey}
          header={<Cell>{columnKey}</Cell>}
          cell={<TextCell data={dataList} />}
          width={table_width/(2*dataList.length)}
        />;
        })}      
      </Table>
    );
  }
}


ReactDOM.render(
  <ReorderExample />,
  document.getElementById('app')
);
