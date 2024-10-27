import { hover, noHover } from "./func";
import "./skills.css"

export default function Skill(props) {
    const {divClass, spanId, imgSrc, spanText} = props;
    
    return (
        <div className={divClass}>
                    <span id={spanId}>{spanText}</span>
                    <img className={spanId} src={imgSrc} onMouseEnter={(e) => {
                        hover(e)
                    }} onMouseLeave={(e) => {
                        noHover(e)
                    }} alt=""></img>
        </div>
    );
}