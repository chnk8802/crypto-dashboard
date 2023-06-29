import { Dropdown } from 'react-bootstrap';

function DynamicDropdownButton({id , items, selectedItem, onClick, theme }) {
  if (id === "currency") {
    return (
      <Dropdown>
    <Dropdown.Toggle variant="primary" className="d-flex align-items-center border-0 mx-2" style={theme}>
    {selectedItem ? `${selectedItem?.quote_unit?.toUpperCase()}` : `${items[0]?.quote_unit?.toUpperCase()}`}
    </Dropdown.Toggle>
    {/* <Dropdown.Menu>
      {items?.map((item) => (
        <Dropdown.Item eventKey={item} onClick={() => { onClick(item); }}>
          {item?.quote_unit.toUpperCase()}
        </Dropdown.Item>
      ))}
    </Dropdown.Menu> */}
  </Dropdown>
  );
  } else if (id === "coin") {
    return (
      <Dropdown>
    <Dropdown.Toggle variant="primary" className="d-flex align-items-center border-0 mx-2" style={theme}>
    {selectedItem ? `${selectedItem?.base_unit?.toUpperCase()}` : `${items[0]?.base_unit?.toUpperCase()}`}
    </Dropdown.Toggle>
    <Dropdown.Menu>
      {items?.map((item) => (
        <Dropdown.Item key={item?.base_unit} eventKey={item} onClick={() => { onClick(item); }}>
          {item?.base_unit.toUpperCase()}
        </Dropdown.Item>
      ))}
    </Dropdown.Menu>
  </Dropdown>
  );
  }
  }
  export default DynamicDropdownButton;