import "./profile.css"

export default function Profile() {
    return (

        <div className="profile">
            <img className="profilePicture" src="back2.jpg" alt="background"></img>
            <div className="me">
                <div className="myName"> 
                    <img src="flash (1).png" alt="flash"></img>
                    <div className="name">Daniel M (Dan M)</div>
                </div>

                <hr></hr>
                <div className="discription">
                    <img src="flash.png" alt="flash"></img>
                    <div className="litleDiscrion">An Elctrical Engineer and Programmer</div>
                </div>
            </div>
        </div>

    );
} 