function Spa() {
    return (
        <HashRouter>
        <div>
            <NavBar/>
            <UserContext.Provider value={{user:'Not Logged In'}}>
                <div className="container" style={{padding: "20px"}}>
                    <Route path="/" exact component={Home}/>
                    <Route path="/createAccount" component={CreateAccount}/>
                    <Route path="/allData" component={AllData}/>
                    <Route path="/deposit" component={Deposit}/>
                    <Route path="/withdraw" component={Withdraw}/>
                    <Route path="/login" component={Login}/>
                    <Route path="/balance" component={Balance}/>
                </div>
            </UserContext.Provider>
        </div>
        </HashRouter>
    )
}

ReactDOM.render(<Spa/>, 
    document.getElementById('root')
);