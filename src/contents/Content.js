import Skills from "./skill/Skills";
import Social from "./social/Social";
import Discr from "./discription/Discr";
import Profile from "./profile/Profile";
import "./content.css"

export default function Content() {
    return (<>
        <Profile></Profile>
        <div className="content" >
            <hr className="hr"></hr>
            <Discr />
            <hr className="hr2"></hr>
            <Skills></Skills>
            <hr className="hr2"></hr>
            <Social />
        </div>
    </>
    );
}