import Navbar from "../components/Navbar";
import "./Activities.css";
import me from "../assets/BharathanatyamShiva.jpeg"
function Activities() {
    return(
        <>
        <Navbar />
        
        <div className="Hero">
              <img alt="Me next to Bookshelf" src={me} style={{ width: '1200px', height: '900px' }} />
          </div>
          <h2>Activities</h2>

       



          <div className= "activities">
            <div class="container-pink">
                <h3 className="activities-text">USA Computing Olympics</h3>
                <h6>2022-2023</h6>
                <ul className="ul">
                <li className="list">
                    Founded the USA Computing Olympics club at my high school
                </li>
                <li className="list">
                The club is for bringing members together for group practice towards developing algorithms and creating Java programs for competing nationwide in USA Computing Olympics. 
                </li>
                </ul>
            </div>
            <div class="container-orange">
                <h3 className="activities-text">National Speech and Debate Organization</h3>
                <h6>2017-2023</h6>
                <li className="list">
                Captain of my school's speech team
                </li>
                <li className="list">
                Competes in Oratory (persuasive speech category): 
                    • 65th at national NCFL tournament 
                    • 7th at MN State Nat Quals

                </li>
                <li className="list">
                Competes in Extemp Speaking (Category in which student is given 30 minutes to write and memorize a 7 minute speech about any international political topic) 
                    • 95th at 2021 National NIETOC tournament. 

                </li>
                <li className="list">
                Competed in Storytelling in 7th grade and Extemp Speaking in 8th grade at my middle school speech team and earned first place both years.

                </li>
            </div>
            <div class="container-yellow">
                <h3 className="activities-text">Piano</h3>
                <h6>2013-present</h6>
                <li className="list">Passed 11 out of the 11 MN state level exams with high distinctions.  
                </li>
                <li className="list"> 6 time state finalist in Minnesota Music Teachers Association piano competition </li>
            
            </div>

            
            </div>
            <div>
            <div className= "activities">
                <div class="container-yellow">
                    <h3 className="activities-text">Book-Instagram (@bookconfessionssecrets)</h3>
                    <h6>2019-present</h6>
                    <li className="list">An instagram account for everything books.</li>
                    <li className="list">I take aesthetic photos of books, create relatable book reels on Instagram to connect with other readers and share my thoughts.</li>
                    <li className="list">I have 7600+ followers</li>
                    <li className="list">Collaborated with many authors to do book tours and advertisements.</li>
                    <li className="list">Have had several reels gain millions of views. One reel gained 14mil</li>
                    <h3 className="activities-text">Book Blog: bookconfessionssecrets.wordpress.com</h3>
                    <h6>2019-present</h6>
                    <li className="list"> I post reviews of books I've read on my book blog.</li>
                    <li className="list">About 2000+ monthly viewers.</li>
                    <li className="list">Authors have reached out for my reviews on their books.</li>
                
                </div>
                <div class="container-orange">
                <h3 className="activities-text">Trace Tutoring</h3>
                    <h6>2019-present</h6>
                    <li className="list">President of the high school tutoring club with 100+ tutors.</li>
                    <li className="list">Worked with administration to implement graduation cord incentive to tutors. </li>
                    <li className="list">30+ hours of service</li>
                    <h3 className="activities-text">Pass Tutoring</h3>
                    <h6>2019-present</h6>
                    <li className="list">Captain of middle school tutoring club.</li>
                    <li className="list">Increased participation and member numbers by 30% between 2021 to 2022.</li>
                    <li className="list">25 hours of service</li>
                </div>
                <div class="container-pink">
                    <h3 className="activities-text">National Center for Women and Information Technology Member</h3>
                    <h6>2022-present</h6>
                    <li className="list">2023 State Winner for Aspirations in Computing Scholarship Program.</li>
                    <li className="list"> 2022 State honorable mention for Aspirations in Computing Scholarship Program. </li>
                    <li className="list">As part of MNAIC’s shadowing program, I was able to shadow the CIO of Pohlad Companies.  I gained insight into how technology helps many areas in the business in order to run a successful company.</li>
                    <li className="list">Participated in a mentor mash program and mentored under a computer scientist. She gave me resources, such as online courses in web development and articles about artificial intelligence, helping me get a deeper understanding of computer science.</li>
                </div>

                </div>



                <div className= "activities">
                <div class="container-pink">
                    <h3 className="activities-text">Bharathanatyam</h3>
                    <h6>2012-present</h6>
                    <li className="list">I have been learning Bharathanatyam, a classical Indian dance, for 10 years</li>
                    <li className="list">Performed at 70+ stages and competitions.</li>
                    <li className="list">Helped organize my Bharathanatyam teacher's annual dance program.</li>
                    <h3 className="activities-text">Bollywood Dance</h3>
                    <h6>2010-present</h6>
                    <li className="list"> I choreograph and perform Bollywood dances and have done so since I was 5. </li>
                    <li className="list">Performed my own choreography in front of my entire school in 8th grade and 12th grade.</li>
                    <li className="list">A part of ATL Satrangi: A National Competing College Dance Team</li>
                
                </div>
                <div class="container-yellow">
                <h3 className="activities-text">Ink and Fable club</h3>
                    <h6>2022-2023</h6>
                    <li className="list">Founder and captain EPHS's book club</li>
                    <li className="list">Organized school wide events such as EPHS Book Trivia night and the Book Awards</li>
                </div>
                <div class="container-orange">
                    <h3 className="activities-text">Girls Who Code Member</h3>
                    <h6>2022-present</h6>
                    <li className="list">Earned 5 certifications at Girls Who Code coding program: HTML and CSS, Javascript, Web design for Social Good, Intro to Cybersecurity and Intro to Cryptography.</li>
                    
                </div>

                </div>



          </div>



          

        </>
    )
}
export default Activities;