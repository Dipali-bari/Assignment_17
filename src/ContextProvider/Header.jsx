import './Header.css';



function Header( {islogin , logout}){
    return(
        <div className="nav"> 
            <div className="logo">
                <img src="https://classes.geekster.in/images/logo/Geekster.svg" alt="logo"/> 
                
            </div>
            <div className="menu">
                <a href="#">Home</a>
                <a href="#">About</a>
                <a href="#">Help</a>
                <a href="#">Ask me</a>
                {
                    islogin ? <button onClick={()=>{logout()}}>Log Out</button> : null
                }
            </div>
        </div>
    );
}
export default Header;