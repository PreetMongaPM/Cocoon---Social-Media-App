const Button = ({buttonType})=>{
    return (<>
    <button onClick={console.log("Edit Profile")}>{buttonType}</button></>);
}

export default Button;