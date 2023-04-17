import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Login from "../Login/Login";
import AddEvent from "../AddEevent/AddEvent";
import Home from "../Home/Home";
import PrivateRoute from "./PrivateRoute";
import EventDettails from "../EventDettails/EventDettails";
import Donation from "../Donation/Donation";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/addevent",
        element: (
          <PrivateRoute>
            <AddEvent />
          </PrivateRoute>
        ),
      },
      {
        path: "/",
        element: <Home />,
        loader: () => fetch(`http://localhost:5000/events`),
      },
      {
        path:'/event/dettails/:id',
        element:<PrivateRoute><EventDettails/></PrivateRoute>,
        loader:({params})=>fetch(`http://localhost:5000/event/${params.id}`)
      },
      {
        path:'/donation',
        element:<PrivateRoute><Donation/></PrivateRoute>
      }
    ],
  },
]);
