import Navbar from "../components/Navbar";
import me from "../assets/Speech.jpeg";
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import awardTimeline from "../components/awards";
function Awards() {
    
    return(

        <>
        <Navbar/>
          <div className="Awards">
              <img alt="Me next to Bookshelf" src={me} style={{ width: '1200px', height: '900px' }} />
          </div>
          <div className= "Home-Text">
            <h2>Recognition</h2>
            </div>
            


            <div className="Education">
              <VerticalTimeline> {
                awardTimeline.map(element => {
                    return(
                        <VerticalTimelineElement>
                            
                            <i className={element.icon}></i>
                            <h3 className="vertical-timeline-element-title">
                                {element.title}
                            </h3>
                            <h4>{element.issuedBy}</h4>
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
export default Awards;