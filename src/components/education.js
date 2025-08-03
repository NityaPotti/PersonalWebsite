export const education = [ //array. The reason we use export keyword is so that this array is usable in other js files
{
   id: 1,
   title : "Georgia Institute of Technology",
   date : "Aug 2023-present",
   description: "Computer Science Major with Threads in Artifical Intelligence and Info-Internetworks",
   activities : "The Women's Network (President), IOS Club, GITMAD (Android Development) club, Epic Intentions Non Profit Consulting Organization, ATL Satrangi National College Dance Team",
   icon : "fa-solid fa-building-columns"
},
{ //array of objects. { are used to define pbject literals (new object with properties and values already initialized)
    id: 2,
    title : "Eden Prairie High School",
    date : "Sept 2019-May 2023",
    description: "4.0 UW GPA, AP Scholar with Distinction",
    activities: "School's National Speech and Debate Captain, Founder of EPHS's USA Computing Olympics Organization, President of High School Tutoring Organization, Founder of Ink and Fable Reading and Writing Club and Captain of Middle School Tutoring Organization",
    icon : "fa-solid fa-school"
 }
]
export default education;