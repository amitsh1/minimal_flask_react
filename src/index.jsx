import React from 'react';
import ReactDOM from 'react-dom';
import {Table, Column, Cell} from 'fixed-data-table-2';


class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);

  }

  handleClick() {
     
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    
    }));
    this.props.onc(this.state);   
    console.log(this);
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
    );
  }
}

class DataListWrapper {
  constructor(indexMap, data) {
    this._indexMap = indexMap;
    this._data = data;
  }

  getSize() {
    return this._indexMap.length;
  }

  getObjectAt(index) {
    return this._data.getObjectAt(
      this._indexMap[index]
    );
  }
}

class FixedRowsExample extends React.Component {
  constructor(props) {
    super(props);
    this.onHorizontalScroll = this.onHorizontalScroll.bind(this);
    const dataList = this.props.data;
    const fixedRowsCount = 3;
    const topIndexMap = [];
    const bottomIndexMap = [];
    const middleIndexMap = [];

    let i = 0;
    while (i < fixedRowsCount) {
      topIndexMap.push(++i);
    }
    while (i < 55 - fixedRowsCount) {
      middleIndexMap.push(++i);
    }
    while (i < 55) {
      bottomIndexMap.push(++i);
    }

    this.state = {
      headerDataList: new DataListWrapper([], dataList),
      topDataList: new DataListWrapper(topIndexMap, dataList),
      middleDataList: new DataListWrapper(middleIndexMap, dataList),
      bottomDataList: new DataListWrapper(bottomIndexMap, dataList),
      scrollLeft: 0,
    };
  }

  render() {
    const {
      headerDataList,
      topDataList,
      middleDataList,
      bottomDataList,
      scrollLeft,
    } = this.state;

    const totalTableHeight = this.props.height;
    const headerHeight = 50;
    const topTableHeight = topDataList.getSize() * 50;
    const bottomTableHeight = bottomDataList.getSize() * 50;
    const middleTableHeight = totalTableHeight - topTableHeight - bottomTableHeight - headerHeight;
    return (
      <div>
        {this.renderTable(headerDataList, {
          height: headerHeight,
          showScrollbarY: false,
          showScrollbarX: false,
          headerHeight,
          scrollLeft,
        })}
        {this.renderTable(topDataList, {
          height: topTableHeight,
          showScrollbarY: false,
          showScrollbarX: false,
          headerHeight: 0,
          scrollLeft,
        })}
        {this.renderTable(middleDataList, {
          height: middleTableHeight,
          showScrollbarX: false,
          headerHeight: 0,
          scrollLeft,
        })}
        {this.renderTable(bottomDataList, {
          height: bottomTableHeight,
          showScrollbarY: false,
          headerHeight: 0,
          onHorizontalScroll: this.onHorizontalScroll,
          scrollLeft,
        })}
      </div>
    );
  }

  renderTable(dataList, additionalProps={}) {
    return (
      <Table
        rowHeight={50}
        rowsCount={dataList.getSize()}
        width={500}
        {...this.props}
        {...additionalProps}
      >
        <Column
          columnKey="id"
          header={<Cell>Id</Cell>}
          cell={<TextCell data={dataList} />}
          fixed={true}
          width={100}
        />
        <Column
          columnKey="avatar"
          header={<Cell>Avatar</Cell>}
          cell={<TextCell data={dataList} />}
          width={50}
        />
        <Column
          columnKey="firstName"
          header={<Cell>First Name</Cell>}
          cell={<TextCell data={dataList} />}
          width={100}
        />
        <Column
          columnKey="lastName"
          header={<Cell>Last Name</Cell>}
          cell={<TextCell data={dataList} />}
          width={100}
        />
        <Column
          columnKey="city"
          header={<Cell>City</Cell>}
          cell={<TextCell data={dataList} />}
          width={250}
        />
        <Column
          columnKey="street"
          header={<Cell>Street</Cell>}
          cell={<TextCell data={dataList} />}
          width={250}
        />
        <Column
          columnKey="zipCode"
          header={<Cell>Zip Code</Cell>}
          cell={<TextCell data={dataList} />}
          width={100}
        />
        <Column
          columnKey="email"
          header={<Cell>Email</Cell>}
          cell={<TextCell data={dataList} />}
          width={400}
        />
        <Column
          columnKey="date"
          header={<Cell>DOB</Cell>}
          cell={<TextCell data={dataList} />}
          width={200}
        />
        <Column
          columnKey="catchPhrase"
          header={<Cell>Catch Phrase</Cell>}
          cell={<TextCell data={dataList} />}
          width={200}
        />
        <Column
          columnKey="companyName"
          header={<Cell>Company Name</Cell>}
          cell={<TextCell data={dataList} />}
          width={200}
        />
        <Column
          columnKey="words"
          header={<Cell>Words</Cell>}
          cell={<TextCell data={dataList} />}
          width={200}
        />
        <Column
          columnKey="sentence"
          header={<Cell>Sentence</Cell>}
          cell={<TextCell data={dataList} />}
          width={200}
        />
      </Table>
    );
  }
  onHorizontalScroll(scrollLeft) {
    this.setState({ scrollLeft });
    return false;
  }

}


class TextCell extends React.PureComponent {
  render() {
    const {data, rowIndex, columnKey, ...props} = this.props;
    console.log(data, rowIndex, columnKey);
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
    this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
    this.state = {
      is_bla:false,
      columns:['one',"two","thg"],
      rows:[{"id":"aaa","avatar":"ad","firstName":5,"lastName":"5"},
      {"id":"avatsar","avatar":"sad","firstName":"5","lastName":"5s"},
      {"id":"avatsar","avatar":"sad","firstName":"5","lastName":"5s"},
      {"id":"avatsar","avatar":"sad","firstName":"5","lastName":"5s"},
      {"id":"ggg","avatar":"sad","firstName":"5","lastName":"5s"},
      {"id":"avatsar","avatar":"sad","firstName":"5","lastName":"5s"},
      {"id":"avatsar","avatar":"sad","firstName":"5","lastName":"5s"},
      {"id":"avatsar","avatar":"sad","firstName":"5","lastName":"5s"},
      {"id":"avatsar","avatar":"sad","firstName":"5","lastName":"5s"},
      {"id":"avatsar","avatar":"sad","firstName":"5","lastName":"5s"},
      {"id":"avatsar","avatar":"sad","firstName":"5","lastName":"5s"},
      {"id":"avatsar","avatar":"sad","firstName":"5","lastName":"5s"},
      {"id":"avatsar","avatar":"sad","firstName":"5","lastName":"5s"},
      {"id":"avatsar","avatar":"sad","firstName":"5","lastName":"5s"},
      {"id":"avatsar","avatar":"sad","firstName":"5","lastName":"5s"},
      {"id":"avatsar","avatar":"sad","firstName":"5","lastName":"5s"},
      {"id":"avatsar","avatar":"sad","firstName":"5","lastName":"5s"},
      {"id":"avatsar","avatar":"sad","firstName":"5","lastName":"5s"},
      {"id":"avatsar","avatar":"sad","firstName":"5","lastName":"5s"},
      {"id":"avatsar","avatar":"sad","firstName":"5","lastName":"5s"},
      {"id":"avatsar","avatar":"sad","firstName":"5","lastName":"5s"},
      {"id":"avatsar","avatar":"sad","firstName":"5","lastName":"5s"},
      {"id":"avatsar","avatar":"sad","firstName":"5","lastName":"5s"},
      {"id":"avatsar","avatar":"sad","firstName":"5","lastName":"5s"},
      {"id":"avatsar","avatar":"sad","firstName":"5","lastName":"5s"},
      {"id":"avatsar","avatar":"sad","firstName":"5","lastName":"5s"},
      {"id":"avatsar","avatar":"sad","firstName":"5","lastName":"5s"},
      {"id":"avatsar","avatar":"sad","firstName":"5","lastName":"5s"},
      {"id":"avatsar","avatar":"sad","firstName":"5","lastName":"5s"},
      {"id":"avatsar","avatar":"sad","firstName":"5","lastName":"5s"},
      {"id":"avatsar","avatar":"sad","firstName":"5","lastName":"5s"},
      {"id":"avatsar","avatar":"sad","firstName":"5","lastName":"5s"},
      {"id":"avatsar","avatar":"sad","firstName":"5","lastName":"5s"},
      {"id":"avatsar","avatar":"sad","firstName":"5","lastName":"5s"},
      {"id":"avatsar","avatar":"sad","firstName":"5","lastName":"5s"},
      {"id":"avatsar","avatar":"sad","firstName":"5","lastName":"5s"},
      {"id":"avatsar","avatar":"sad","firstName":"5","lastName":"5s"},
      {"id":"avatsar","avatar":"sad","firstName":"5","lastName":"5s"},
      {"id":"avatsar","avatar":"sad","firstName":"5","lastName":"5s"},
      {"id":"avatsar","avatar":"sad","firstName":"5","lastName":"5s"},
      {"id":"avatsar","avatar":"sad","firstName":"5","lastName":"5s"},
      {"id":"avatsar","avatar":"sad","firstName":"5","lastName":"5s"},
      {"id":"avatsar","avatar":"sad","firstName":"5","lastName":"5s"},
      {"id":"avatsar","avatar":"sad","firstName":"5","lastName":"5s"},
      {"id":"avatsar","avatar":"sad","firstName":"5","lastName":"5s"},
      {"id":"avatsar","avatar":"sad","firstName":"5","lastName":"5s"},
      {"id":"avatsar","avatar":"sad","firstName":"5","lastName":"5s"},
      {"id":"avatsar","avatar":"sad","firstName":"5","lastName":"5s"},
      {"id":"avatsar","avatar":"sad","firstName":"5","lastName":"5s"},
      {"id":"avatsar","avatar":"sad","firstName":"5","lastName":"5s"},
      {"id":"avatsar","avatar":"sad","firstName":"5","lastName":"5s"},
      {"id":"avatsar","avatar":"sad","firstName":"5","lastName":"5s"},
      {"id":"avatsar","avatar":"sad","firstName":"5","lastName":"5s"},
      {"id":"avatsar","avatar":"sad","firstName":"5","lastName":"5s"},
      {"id":"avatsar","avatar":"sad","firstName":"5","lastName":"5s"},
      {"id":"avatsar","avatar":"sad","firstName":"5","lastName":"5s"},
      {"id":"avatsar","avatar":"sad","firstName":"5","lastName":"5s"},
      {"id":"avatsar","avatar":"sad","firstName":"5","lastName":"5s"},
      {"id":"avatsar","avatar":"sad","firstName":"5","lastName":"5s"},                                
      {"id":"avatsar","avatar":"sad","firstName":"5","lastName":"5s"},                                
      ],

    };    
  }

  reder() {
    fetch(this.state.is_bla ? '/products' :'/products1')
    .then(res => res.json())
    .then((data) => {
      this.setState({ rows: data })
      console.log(this.state.rows,"fetched")
    })
    .catch(console.log);
  }

  handleFahrenheitChange(temperature) {
    this.setState({is_bla: temperature.isToggleOn});
    console.log('temperature',this);
    this.reder();
  }
  render() {
    var dataList = this.state.rows;
    var table_width = 1300;
    return (
      // <FixedRowsExample data={this.state.rows} height={1500}/>
      // <div>
      // {Object.keys(this.state.rows[0]).map(function (columnKey, i) {
      //   return <h1>{dataList[columnKey]}</h1>;
      // })}      
      // </div>
    
    <div><Toggle onc={this.handleFahrenheitChange} >asd</Toggle><Table
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
      width={200}
    />;
    })}      
  </Table></div>    
    );
  }
}


ReactDOM.render(
  <ReorderExample />,
  document.getElementById('app')
);
