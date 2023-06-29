function CountDown(props) {
    const {style, seconds, angle, darkTheme} = props
    
    let angleGtSup;
    let display;
    if (angle >= 180) {
        angleGtSup = 180;
        display = "none";

    } else {
        angleGtSup = angle;
        display = "block";
    }
    const x = {
        s1: {
            width: "50%",
            height: "100%",
            position: "absolute",
            left: "0",
            right: "0",
            transformOrigin: "right center",
            backgroundColor: "#3dc6c1",
            zIndex: "2",
            transform: `rotate(${angleGtSup}deg)`
        },
        s2: {
            width: "50%",
            height: "100%",
            position: "absolute",
            left: "0",
            right: "0",
            transformOrigin: "right center",
            backgroundColor: "#3dc6c1",
            zIndex: "3",
            transform: `rotate(${angle}deg)`,
        },
        s3: {
            width: "50%",
            height: "100%",
            position: "absolute",
            left: "0",
            right: "0",
            transformOrigin: "right center",
            backgroundColor: "white",
            zIndex: "4",
            display: display,
        }
    }
    
    return (
        <div className="main-container center" style={style.mainContainer}>
            <div className="circle-container center" style={style.circleContainer}>
                <div className="semicircle s1" style={x.s1}></div>
                <div className="semicircle s2" style={x.s2}></div>
                <div className="semicircle s3" style={x.s3}></div>
                <div className="outermost-circle" style={darkTheme.outermostCircle}> 
                    <span id="count" style={darkTheme.count}>{seconds}</span>
                </div>
            </div>
        </div>
    );
}

export default CountDown;