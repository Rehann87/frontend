import { ErrorMessage, FormikProps} from "formik"
import arrow from "../images/arrow.jpg"

type Props = {formikProps: FormikProps<any>}


const Login = ({formikProps}: Props) => {


const {values, setFieldValue ,isSubmitting} = formikProps


  return (

<div className={`h-screen flex justify-center flex-col items-center gap-10 m-auto bg-cover `} style={{ backgroundImage: `url(${arrow})` }}>


<div className='border-2  bg-slate-300 rounded-lg shadow-lg w-[500px] h-[400px] p-7 gap-10 bg-transparent backdrop-blur-[10px]'>
     
      <h1 className="text-center text-3xl text-green-700 mb-2 ">Login</h1>
      <hr className="mb-7" />

  <div className=''>   
<  label className="flex items-baseline text-gray-700 pl-1 text-[20px]">Email</label>
     <input type="text"
        className=' p-1  border-2 border-gray-300 rounded w-full'
         placeholder='email'
         value={values.email}
         onChange={(e)=>setFieldValue("email",e.target.value)}
   />
   <p className="text-red-500"> <ErrorMessage name= "email"/></p>
  </div>
       
  <div className="pt-5">
    <label className="flex items-baseline text-gray-700 text-[20px]">Password</label>
    <input type="password"
          className='border-2 border-gray-300 rounded p-1  w-full'
           placeholder='password'
           value={values.password}
           onChange={(e)=>setFieldValue("password", e.target.value)}
     />
     <p className="text-red-500"><ErrorMessage name= "password"/></p>
  </div>
  
  <div>
    <button type='submit' disabled={isSubmitting} className='border-neutral-700  border-solid rounded bg-blue-500 mt-6 w-full p-2 '>
      {isSubmitting? "Submitting":"Login"}</button>
  </div>
  </div>
</div>


  )
}

export default Login