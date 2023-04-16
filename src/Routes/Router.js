import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Login from "../Login/Login";
import AddEvent from "../AddEevent/AddEvent";

export const router=createBrowserRouter(
    [
        {
            path:'/',
            element:<Root/>,
            children:[
               {
                path:'/login',
                element:<Login/>
               },
               {
                path:'addevent',
                element:<AddEvent/>
               }

            ]

            
        }
    ]
)

