import Skill from "./Skill";

export default function Skills() {
    return (
        <div className="skills">
                <Skill divClass="cs" spanId="css"  imgSrc="css-3.png" spanText="CSS"></Skill>
                <Skill divClass="py" spanId="python"  spanText="Python" imgSrc="python (1).png"></Skill>
                <Skill divClass="a" spanId="atom"  imgSrc="atom.png" spanText="React"></Skill>
                <Skill divClass="jscript" spanId="js"  imgSrc="js.png" spanText="JS"></Skill>
                <Skill divClass="h" spanId="html"  imgSrc="html2.png" spanText="Html"></Skill>
                <Skill divClass="n" spanId="node"  imgSrc="node-js.png" spanText="Node"></Skill>
                <Skill divClass="cl" spanId="c"  imgSrc="c-.png" spanText="C"></Skill>            
            </div>
    );
}