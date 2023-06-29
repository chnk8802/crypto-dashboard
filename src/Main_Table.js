import Table from 'react-bootstrap/Table';

function TableDefault({ items,filterValue, selectedItem, style }) {
  const filteredItems = items.filter((item) => item.base_unit.includes(filterValue))

  return (
        <Table id='main-table' variant="dark">
          
          <thead>
            <tr>
              <th>Name</th>
              <th>Last</th>
              <th>Buy/Sell Price</th>
              <th>Volume</th>
              <th>Base Unit</th>
            </tr>
          </thead>
          <tbody>
          {filteredItems.map((item) => (
            <tr key={item._id}>
            <td style={style}>{item.name}</td>
            <td style={style}>{item.last}</td>
            <td style={style}>{item?.buy}/{item?.sell}</td>
            <td style={style}>{item.volume}</td>
            <td style={style}>{item.base_unit}</td>
          </tr>
          ))

          }
          </tbody>
        </Table>
  );
}

export default TableDefault;



// const filterCurrent = items.filter((item) => item?._id === selectedItem?._id);
  // const _id = filterCurrent.map((item) => <td style={style}>{item?._id}</td>);
  // const Name = filterCurrent.map((item) => <td style={style}>{item?.name}</td>);
  // const Last = filterCurrent.map((item) => <td style={style}>{item?.last}</td>);
  // const Buy = filterCurrent.map((item) => <td style={style}>{item?.buy}/{item.sell}</td>);
  // const Volume = filterCurrent.map((item) => <td style={style}>{item?.volume}</td>);
  // const Base_Unit = filterCurrent.map((item) => <td style={style}>{item?.base_unit?.toUpperCase()}</td>);
  // const Quote_unit = filterCurrent.map((item) => <td style={style}>{item?.quote_unit?.toUpperCase()}</td>);
  // const stateObj = {
  //   _id,
  //   Name,
  //   Last,
  //   Buy,
  //   Volume,
  //   Base_Unit,
  //   Quote_unit
  // }
  //   return (
  //     <Table id='main-table' variant="dark">
  //       <thead>
  //         <tr>
  //           <th>Name</th>
  //           <th>Last</th>
  //           <th>Buy/Sell Price</th>
  //           <th>Volume</th>
  //           <th>Base_unit</th>
  //           <th>Currency</th>
  //         </tr>
  //       </thead>
  //       <tbody>
  //          <tr>
  //           {stateObj.Name}
  //           {stateObj.Last}
  //           {stateObj.Buy}
  //           {stateObj.Volume}
  //           {stateObj.Base_Unit}
  //           {stateObj.Quote_unit}
  //         </tr> 
  //       </tbody>
  //     </Table>
  //   );