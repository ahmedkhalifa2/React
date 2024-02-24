export default function Progress(props) {

    return <>
        <div className="everySkill">
            <div>
                <div className="tech">{props.name}</div>
                <div style={{width:`${props.pct}%`}} className="degree"></div>
            </div>
        </div>
    </>
}