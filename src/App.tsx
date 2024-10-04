// import { Provider } from "react-redux"
// import PageRoutes from "./Routes/PageRoutes"
// import Store from "./Slice/Store"
// import { ToastContainer } from "react-toastify"
// import 'react-toastify/dist/ReactToastify.css';

// // type Props = {}

// const App = () => {
//   return (
//     <div>
//       <Provider store={Store}>
//       <PageRoutes/>
//       <ToastContainer/>
//     </div>
//   )
// }
  
//   export default App

import 'react-toastify/dist/ReactToastify.css';
import PageRoutes from './Routes/PageRoutes';
import { ToastContainer } from 'react-toastify';

export default function App() {
  return (
   <>
    <PageRoutes/>
    <ToastContainer/>
   </>
  )
}