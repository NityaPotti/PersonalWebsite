import Navbar from "../components/Navbar";
import me from "../assets/epic.jpeg";
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import projectTimeline from "../components/projects";

function Projects() {
    
    return(

        <>
        <Navbar/>
          <div className="Hero">
              <img alt="Me next to Bookshelf" src={me}/>
          </div>
          <div className= "Home-Text">
            <h2>Coding Projects</h2>
            </div>
            
            <div className="Education">
              <VerticalTimeline> {
                projectTimeline.map(element => {
                    return(
                        <VerticalTimelineElement>
                            
                            <i className={element.icon}></i>
                            <h3 className="vertical-timeline-element-title">
                                {element.title}
                            </h3>
                            <h4>{element.skills}</h4>
                            <h5 className="vertical-timeline-element-subtitle">
                                {element.date}
                            </h5>
                            <div>
                                <p id="description">{element.description}</p>
                                <p id="description">{element.activities}</p>
                                
                            </div>
                        </VerticalTimelineElement>
                    )
                })
              }</VerticalTimeline>
            </div>
          
        </>

    )
}
export default Projects;