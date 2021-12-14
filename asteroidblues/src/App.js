import "./App.css"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer";
import Home from "./pages/Home"
import Menu from "./pages/Menu"
import About from "./pages/About";
import Contact from "./pages/Contact";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

const App = () => {
    return (
        <div className="App">
            <Router>
                <Navbar/>
                <Routes>
                    <Route path={"/"} element={<Home/>}/>
                    <Route path={"/menu"} element={<Menu/>}/>
                    <Route path={"/about"} element={<About/>}/>
                    <Route path={"/contact"} element={<Contact/>}/>
                </Routes>
                <Footer/>
            </Router>
        </div>
    )
}

export default App;


// import React from 'react'
// import Course from './Course'
// import {Route, Router, Switch} from "react-router-dom";
//
// const App = () => {
//   const courses = {
//     course: [{
//       id: 1,
//       name: 'Half Stack Half Assed site... Welcome!',
//       parts: [{}]
//     },
//       {
//         name: 'To do:',
//         id: 2,
//         parts: [
//           {
//             name: 'This is an appropriately detailed mix of objectives' +
//                 ' and technical details that are supposed to ' +
//                 ' with the making of this site',
//             id: 1
//           }
//         ]
//       },
//       {
//         name: 'Make a design plan for the site',
//         id: 3,
//         parts: [
//           {
//             name: 'Follow Jays simple style at first',
//             exercises: 1,
//             id: 1
//           },
//           {
//             name: 'Learn how to implement this design',
//             exercises: 1,
//             id: 2
//           },
//           {
//             name: 'aka Understand how to do the menu, the links, the animations, pictures',
//             exercises: 1,
//             id: 3
//           }
//         ]
//       },
//       {
//         name: 'Come up with relevant content',
//         id: 3,
//         parts: [
//           {
//             name: 'Home + pictures',
//             exercises: 1,
//             id: 1
//           },
//           {
//             name: 'CV',
//             exercises: 1,
//             id: 2
//           },
//           {
//             name: 'books',
//             exercises: 1,
//             id: 3
//           },
//           {
//             name: 'travel',
//             exercises: 1,
//             id: 4
//           },
//           {
//             name: 'bucketlist',
//             exercises: 1,
//             id: 5
//           },
//           {
//             name: 'contact',
//             exercises: 1,
//             id: 6
//           }
//         ]
//       }
//     ]
//   }
//
//
//
//   return(
//
//       <Course courses={courses} />
//   )
// }
//
// export default App
