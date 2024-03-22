import "./Hero.css";
import me from "../assets/HOCO.jpeg";
import html from "../assets/pinkhtml.png";
import javascript from "../assets/javascript.png";
import java from "../assets/java.png";
import css from "../assets/orangecss.png";
import react from "../assets/reactlogo.png";
import swift from "../assets/swiftui.png";
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import education from "../components/education";

function Hero() {
    
    return(
        <>
          <div className="Hero">
              <img alt="Me next to Bookshelf" src={me} style={{ width: '1200px', height: '900px' }} />
          </div>
          <div className= "Home-Text">
            <h2>Hi, I'm Nitya!</h2>
            <h5> ☆ Student Programmer ☆ Dancer ☆ Pianist ☆ Reader ☆ Blogger ☆</h5>
            </div>
            
            <div className="Skills">
            <h2>Skills</h2>
                <div className="firstThree">
                    
                    <img className="logo" src={java} style={{ width: '150px', height: '150px' }}/>
                    <img className="logo" src={html} style={{ width: '150px', height: '150px' }}/>
                    <img className="logo" src={swift} style={{ width: '150px', height: '150px' }}/>
                    
                    
                </div>
                <div className="firstThree">
                <img className="logo" src={javascript} style={{ width: '150px', height: '150px' }}/>
                    <img className="logo" src={react} style={{ width: '150px', height: '150px' }}/>
                    <img className="logo" src={css} style={{ width: '150px', height: '150px' }}/>
                </div>
            </div>


            <div className="Education">
              <h2>Education</h2>
              <VerticalTimeline> {
                education.map(element => {
                    return(
                        <VerticalTimelineElement>
                            
                            <i className={element.icon}></i>
                            <h3 className="vertical-timeline-element-title">
                                {element.title}
                            </h3>
                            <h5 className="vertical-timeline-element-subtitle">
                                {element.date}
                            </h5>
                            <p id="description">{element.description}</p>
                            <p id="description">{element.activities}</p>
                        </VerticalTimelineElement>
                    )
                })
              }</VerticalTimeline>
            </div>
          
        </>

    )
}
export default Hero;