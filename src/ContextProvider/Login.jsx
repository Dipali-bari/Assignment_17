import Home from "./Home";


function Login( {login}){


    return(
        <div>
            <h3>Login Componant</h3>
            <div>
                <div>
                    <input type="text" placeholder="Enter the username" />

                </div>
                <br/>
                <div>
                    <input type="text" placeholder="Enter password" />
                </div>
                <button onClick={()=>{login() }}>Login</button>
            </div>
        </div>
    );

}
export default Login;