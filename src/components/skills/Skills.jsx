import './Skills.css'
import Progress from '../progress/Progress'
export default function Skills() {

    return <>
       <div className="Skills">
    <div className="containerr">
        <div className="head">
            <h1>Skills</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                Ratione natus maiores optio temporibus dicta consectetur 
                laboriosam quos commodi voluptate animi atque 
                consequuntur architecto consequatur, voluptas dolorum expedita. 
                A, doloribus molestiae!
                Ratione natus maiores optio temporibus dicta consectetur 
                laboriosam quos commodi voluptate animi atque 
                consequuntur architecto consequatur, voluptas dolorum</p>
        </div>
        <div className="fucosskill">
            <div className="focuses">
                <p className="headfucus">My Focuses</p>
                <p className="pp">UX/UI Design</p>
                <p className="pp">Responsive Design</p>
                <p className="pp">Web Design</p>
                <p className="pp">Mobil App Design</p>
            </div>
            <div className="sec2">
                <div className="RealySkills">
                    <Progress name="HTML" pct={34}/>
                    <Progress name="CSS" pct={46}/>
                    <Progress name="Javascript" pct={68}/>
                    <Progress name="React" pct={34}/>
                    <Progress name="Photoshop" pct={98}/>
                    <Progress name="Adope" pct={67}/>
                    <Progress name="Wordpress" pct={45}/>
                    <Progress name="Node Js" pct={45}/>
                   
                </div>
            </div>
        </div>
    </div>
   </div>
    </>
}