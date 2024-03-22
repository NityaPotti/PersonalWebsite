export const MenuItems = [ //array. The reason we use export keyword is so that this array is usable in other js files
{
   title : "Home",
   url : "/",
   cName : "nav-links",
   icon : "fa-solid fa-house"
},
{ //array of objects. { are used to define pbject literals (new object with properties and values already initialized)
    title : "Activities + Projects",
    url : "/Activities",
    cName : "nav-links",
    icon : "fa-solid fa-computer"
 },
 {
    title : "Awards",
    url : "/Awards",
    cName : "nav-links",
    icon : "fa-solid fa-award"
 },
//  {
//     title : "Photo Journal",
//     url : "/Photo",
//     cName : "nav-links",
//     icon : "fa-solid fa-camera"
//  }
]