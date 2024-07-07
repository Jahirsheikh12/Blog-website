import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import store from "./store/store.js";
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

import {
  Home,
  LoginPage,
  SignupPage,
  EditPost,
  AllPosts,
  AddPost,
  Post,
} from "./pages/index.js";

import { AuthLayout, Login } from "./components/index.js";

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/" element={<App />}>
//       <Route
//         path="/login"
//         element={
//           <AuthLayout authentication={false}>
//             <Login />
//           </AuthLayout>
//         }
//       />
//       <Route
//         path="/signup"
//         element={
//           <AuthLayout authentication={false}>
//             <SignupPage />
//           </AuthLayout>
//         }
//       />
//       <Route
//         path="/edit-post/:slug"
//         element={
//           <AuthLayout authentication>
//             {""}
//             <EditPost />
//           </AuthLayout>
//         }
//       />
//       <Route
//         path="/all-posts"
//         element={
//           <AuthLayout authentication>
//             {""}
//             <AllPosts />
//           </AuthLayout>
//         }
//       />
//       <Route
//         path="/add-post"
//         element={
//           <AuthLayout authentication>
//             {""}
//             <AddPost />
//           </AuthLayout>
//         }
//       />
//       <Route path="/post/:slug" element={<Post />} />

//       {/* <Route path="*" element={<Home />} /> */}
//     </Route>
//   )
// );

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: (
          <AuthLayout authentication={false}>
            <Login />
          </AuthLayout>
        ),
      },
      {
        path: "/signup",
        element: (
          <AuthLayout authentication={false}>
            <SignupPage />
          </AuthLayout>
        ),
      },
      {
        path: "/all-posts",
        element: (
          <AuthLayout authentication>
            {" "}
            <AllPosts />
          </AuthLayout>
        ),
      },
      {
        path: "/add-post",
        element: (
          <AuthLayout authentication>
            {" "}
            <AddPost />
          </AuthLayout>
        ),
      },
      {
        path: "/edit-post/:slug",
        element: (
          <AuthLayout authentication>
            {" "}
            <EditPost />
          </AuthLayout>
        ),
      },
      {
        path: "/post/:slug",
        element: <Post />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
