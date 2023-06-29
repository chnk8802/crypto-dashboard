import { useState, useEffect } from "react";
import ButtonComp from "./Button";
import ToggleSwitch from "./ToggleSwitch";
import TableDefault from "./Main_Table";
import DynamicDropdownButton from './Dropdown';
import CountDown from "./countdown/Countdown";
import { style_ } from "./countdown/CountdownStyle";
import { darkTheme, lightTheme } from "./theme/themeStyle";

export default function Card() {
    // ----------------
    // ----------------
    const defaultSeconds = 60;
    const defaultAngle = 360;
    const [shouldReset, setShouldReset] = useState(false);
    const [seconds, setSeconds] = useState(defaultSeconds);
    const [angle, setAngle] = useState(defaultAngle);
    const [isLightTheme, setIsLightTheme] = useState(localStorage.getItem('isLightTheme') === 'true' ? true : false);
    const [theme, setTheme] = useState(isLightTheme ? lightTheme : darkTheme);
    
    const [items, setItems] = useState([]);
    const [selectedItem, setSelectedItem] = useState(items[0]);
    const [filterValue, setFilterValue] = useState('');
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${process.env.REACT_APP_DATA_URL}`);  
                const result = await response.json();  
                setItems(result);
            } catch (e) {
                console.log(e);
            }
        }
        fetchData();
        if (seconds === 0) {
            fetchData();
            console.log("<3")
        }
        if (shouldReset) {
            fetchData();
            setShouldReset(false);
        }
    },[seconds, shouldReset])

    const handleTheme = (bool) => {
        if (bool) {
            setTheme(lightTheme);
            localStorage.setItem('isLightTheme', true);
        }
        if (!bool) {
            setTheme(darkTheme)
            localStorage.setItem('isLightTheme', false);
        }
        setIsLightTheme(bool)
    }

    const handleSelect = (item) => {
        setSelectedItem(item);
        setFilterValue(item.base_unit)
        setShouldReset(true);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds((seconds) => {
                return (seconds - 1);
            });
        }, 1000);

        if (seconds === 0) {
            setSeconds(defaultSeconds);
        }

        if (shouldReset) {
            setSeconds(defaultSeconds);
            setShouldReset(false);
        }

        return () => clearInterval(interval);
    }, [seconds, shouldReset]);

    useEffect(() => {
        const intervalID = setInterval(() => {
            setAngle((angle) => {
                return (angle - 6)
            })
        }, 1000);

        if (angle === 0) {
            setAngle(defaultAngle);
        }

        if (shouldReset) {
            setAngle(defaultAngle);
            setShouldReset(false);
        }
        return () => clearInterval(intervalID);
    }, [angle, shouldReset]);
    return (
    <div className="card-outer" id="bootstrap-overrides" style={theme.cardOuter}>
            <div className="cards" id="info">
                <div className="sec_box" id="left">
                    <div>
                        <h1>CRYPTOINFO</h1>
                        <span>.com</span>
                    </div>
                    <div>
                        <span>Powered By</span>
                        <span>&nbsp;Lord Voldermot</span>
                    </div>
                </div>
                <div className="sec_box" id="mid">
                    <DynamicDropdownButton id="currency" items={items} selectedItem={selectedItem} onClick={handleSelect} theme={theme.dropdownBasicButtonCoin} />
                    <DynamicDropdownButton id="coin" items={items} selectedItem={selectedItem} onClick={handleSelect} theme={theme.dropdownBasicButtonCoin} />
                </div>
                <div className="sec_box" id="right">
                    <CountDown style={style_} seconds={seconds} shouldReset={shouldReset} angle={angle} darkTheme={theme} />
                    <ButtonComp buttonName="Telegram" />
                    <ToggleSwitch isLightTheme={isLightTheme} onChange={handleTheme} />
                </div>
            </div>
            <div className="cards" id="table-container">
                <div className="sec_box" id="__table">
                    <TableDefault items={items} selectedItem={selectedItem} filterValue={filterValue} style={theme.td} />
                </div>
            </div>
        </div>
        );
}