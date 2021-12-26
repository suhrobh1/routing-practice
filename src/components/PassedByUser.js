
const PassedByUser = (props) => {

    const {passedValue, textColor, backgroundColor} = props;


    return(
        isNaN(passedValue) ?
        <div style={{ color: `${textColor}`, backgroundColor: `${backgroundColor}`}}>
            <p>The word is: {passedValue} </p>
        </div>
        : 
        <div>
            <p>The number is: {passedValue} </p>
        </div>
    )
}

export default PassedByUser;