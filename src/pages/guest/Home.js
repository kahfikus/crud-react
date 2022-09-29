

function Home(){
   
    function ulang(){
        window.location = "/";
    }

    return(
        <>
           Home <br />
            <button onClick={ulang}>Refresh</button>
        </>
    )
}

export default Home;