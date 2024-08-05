export const awards = [ //array. The reason we use export keyword is so that this array is usable in other js files
{
   id: 1,
   title : "State Winner for Aspirations in Computing Award",
   issuedBy: "National Center for Women in Technology (NCWIT)",
   date : "May 2023",
   description: "Award recipients are selected based on their aspirations and their computing and leadership experience.",
   icon : "fa-solid fa-medal"
},
{
    id: 2,
    title : "7th in the National Qualifiers MN State Tournament",
    issuedBy: "National Speech and Debate Association",
    date : "Mar 2022",
    description: "Within the nation's 3rd most competitive state for speech, I was a finalist in MN's statewide national qualifiers tournament.",
    icon : "fa-solid fa-microphone"
 },
 {
    id: 3,
    title : "6 Time State Winner for Statewide Piano Competition",
    issuedBy: "MMTA",
    date : "2015, 2019, 2020, 2021, 2023",
    description: "40 winners selected out of 700 competitors.",
    icon : "fa-solid fa-music"
 },
{ //array of objects. { are used to define pbject literals (new object with properties and values already initialized)
    id: 4,
    title : "AP Scholar with Distinction",
    issuedBy: "College Board",
    date : "July 2023",
    description: "Granted to students who receive an average score of at least 3.5 on all AP Exams taken, and scores of 3 or higher on five or more of these exams.",
    icon : "fa-solid fa-medal"
 },
 { //array of objects. { are used to define pbject literals (new object with properties and values already initialized)
    id: 5,
    title : "65th at National Speech Tournament",
    issuedBy: "NCFL",
    date : "May 2022",
    description: "Within the category of Original Oratory, with over 300 of the best competitors from the nation.",
    icon : "fa-solid fa-microphone"
 }

]
export default awards;