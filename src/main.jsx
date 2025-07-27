import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import tinyMce from "./TinyMce.js"
import App from './App.jsx'
import { Provider } from 'react-redux'
import store from './store/store.js'
import { AuthLayout } from './components/index.js'

import AllPost from './Pages/AllPost.jsx'
import AddPost from './Pages/AddPost.jsx'
import EditPosts from './Pages/EditPosts.jsx'
import Post from './Pages/Post.jsx'
import Home from './Pages/Home.jsx'
import Login from './Pages/Login.jsx'
import Signup from './Pages/Signup.jsx';


import { RouterProvider } from 'react-router-dom'
import { createBrowserRouter } from 'react-router-dom'
import Account from './components/Header/Account.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home/>
      },
      {
        path: '/login',
        element: (
          <AuthLayout authentication={false}>
            <Login />
          </AuthLayout>
        )
      },
      {
        path: '/signup',
        element: (
          <AuthLayout authentication={false}>
            <Signup />
          </AuthLayout>
        )
      },
      {
        path: '/all-posts',
        element: (
          <AuthLayout authentication={true}>
            {" "}
            <AllPost />
          </AuthLayout>
        )
      },
      {
        path: '/add-post',
        element: (
          <AuthLayout authentication/* ={true} */>
            {" "}
            <AddPost />
          </AuthLayout>
        )
      },
      {
        path: '/Account',
        element: (
          <AuthLayout authentication>
            {" "}
            <Account />
          </AuthLayout>
        )
      },
      {
        path: '/edit-post/:slug',
        element: (
          <AuthLayout authentication>
            {" "}
            <EditPosts />
          </AuthLayout>
        )
      },
      {
        path: "/post/:slug",
        element: <Post />
      }
    ]
    
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
)
