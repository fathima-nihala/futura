import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import Signup from './Components/Signup';
import Loading from './Components/Loading';
import Display from './Components/Display';
import Cart from './Components/Cart';
import Profile from './Components/Profile';
// import { Store } from './Redux';
function App() {
  const router=createBrowserRouter([
    {
      path:'home',
      element:<Home/>
    },
    {
      path:'signup',
      element:<Signup/>
    },
    {
      path:'/',
      element:<Loading/>
    },
    {
      path:'display',
      element:<Display/>
    },
    {
      path:'cart',
      element:<Cart/>
    },
    {
      path:'prof',
      element:<Profile/>
    }
   
  
  ])
  return (
    <div className="App">
       <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
