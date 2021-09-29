const Route = ReactRouterDOM.Route;
const Link = ReactRouterDOM.Link;
const HashRouter = ReactRouterDOM.HashRouter;
const UserContext = React.createContext(null);

function Card(props){
    function classes(){
        const bg = props.bgcolor ? ' bg-' + props.bgcolor : ' ';
        const txt = props.txtcolor ? ' text-' + props.txtcolor : ' text-white';
        return 'card mb-3' + bg + txt;
    }

    return (
        <div className={classes()} style={{maxWidth: "30rem"}}>
            <div className="card-header">{props.header}</div>
            <div className="card-header text-right">{props.activeUser}</div>
            <div className="card-body">
                {props.title && (<h5 className="card-title">{props.title}</h5>)}
                {props.text && (<p className="card-text">{props.text}</p>)}
                {props.body}
                {props.status && (<div id='createStatus'>{props.status}</div>)}
            </div>
        </div>
    );
}

function HandleMsg(props){
    return(
    <>
        <h5>{props.message}</h5>
        <br/>
        <h5>{`Your new balance is ${props.balance}`}</h5>
        <button type="submit"
            className="btn btn-light"
            onClick={() => {props.setShow(true);}}>{props.return}
        </button>
    </>)
}

function BalanceMsg(props){
    return(
    <>
        <h5>{props.message}</h5>
        <button type="submit"
            className="btn btn-light"
            onClick={() => {props.setShow(true);}}>{props.return}
        </button>
    </>)
}

function HandleWrong(props){
    return(
        <>
            <h5>{props.message}</h5>
            <button type="submit"
                className="btn btn-light"
                onClick={() => {
                    props.setShow(true)
                    props.setWrong(false)
                    }}>{props.return}
            </button>
        </>)
}















/*
function Deposit(){
    const [show, setShow] = React.useState(true);
    const [wrong, setWrong] = React.useState(false);
    const [status, setStatus] = React.useState('');

    return(
        <Card
            bgcolor="primary"
            header="Deposit"
            status={status}
            body={wrong ? 
                <DepositWrong setShow={setShow} setWrong={setWrong}/>:(show ?
                <DepositForm setShow={setShow} setWrong={setWrong}/> :
                <DepositMsg setShow={setShow} setWrong={setWrong}/>)}
        />
    )
}

function DepositMsg(props){
    return(
    <>
        <h5>Success</h5>
        <button type="submit"
            className="btn btn-light"
            onClick={() => {props.setShow(true);}}>Return to Deposit
        </button>
    </>)
}

function DepositWrong(props){
    return(
        <>
            <h5>Email or Amount Unknown</h5>
            <button type="submit"
                className="btn btn-light"
                onClick={() => {
                    props.setShow(true)
                    props.setWrong(false)
                    }}>Return to Deposit
            </button>
        </>)
}

function DepositForm(props){
    const [email, setEmail] = React.useState('');
    const [balance, setBalance] = React.useState(0);
    const ctx = React.useContext(UserContext);  
  
    function handle(){
        console.log(email,balance);
        ctx.users.forEach((user) => {
            if (user.email === email && balance >= 0){
                // the + infront of balance makes sure to add and not just concatinate
                user.balance += +balance;
                props.setShow(false);
            }
            else {
                props.setWrong(true);
            }
        })
    }    
  
    return (<>
      Email address<br/>
      <input type="input" 
        className="form-control" 
        placeholder="Enter email" 
        value={email} 
        onChange={e => setEmail(e.currentTarget.value)}/><br/>
  
      Amount<br/>
      <input type="number" 
        className="form-control" 
        placeholder="Enter Amount" 
        value={balance} 
        onChange={e => setBalance(e.currentTarget.value)}/><br/>
  
      <button type="submit" 
        className="btn btn-light" 
        onClick={handle}>Deposit</button>
  
    </>);
}
*/ 