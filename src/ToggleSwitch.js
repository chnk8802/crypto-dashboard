import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css'

function ToggleSwitch({ onChange, isLightTheme }) {
    return (
        <Form>
            <Form.Check type="switch" id="custom-switch" defaultChecked={isLightTheme} onClick={(e) => {onChange(e.target.checked)}}/>
        </Form>
    );
}
export default ToggleSwitch;