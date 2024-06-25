import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import About from './Components/About/About';
import Home from './Components/Home/Home';
import Contact from './Components/Contact/Contact';
import User from './Components/User/User';
import Github from './Components/Github/Github';
import { Route } from 'react-router-dom';
import { createRoutesFromElements } from 'react-router-dom';



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='' element={<Home />} />z
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      <Route path='user/:userid' element={<User />} />
      <Route path='github' element={<Github />} />
    </Route>
  )
)

ReactDOM.render(
  <>
    <RouterProvider router={router} />
  </>,
  document.getElementById('root')
);









// const router = createBrowserRouter([
//   {
//     path:'/',
//     element:<App />,

//     children:[
//       {
//         path:"",
//         element:<Home />
//       },
//       {
//         path:"about",
//         element:<About />
//       },
//       {
//         path:"contact",
//         element:<Contact />
//       }
//     ]
//   },
// ])