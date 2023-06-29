import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

function ButtonComp(props) {
    const { buttonName } = props;
    return (
        <Button variant="primary"><a href={"https://web.telegram.org"} target={"_blank"} rel="noreferrer">{buttonName}</a></Button>
    );
}

export default ButtonComp;  