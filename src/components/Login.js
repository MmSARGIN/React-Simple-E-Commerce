import React from 'react'
import './styles/login.css'
import {useFormik} from 'formik'
import validationSchema from './validations'
function Login() {
const formik = useFormik({
    initialValues: {
        email: "",
        password: "",
        confirmPassword:"",
    },
    validationSchema,
    onSubmit: async(values, bag) => {
        console.log(values);
    }
})


    return (
        <form className='login' onSubmit={formik.handleSubmit}>
            
            <label htmlFor="">E-mail </label>
                <input  placeholder='E-mail Giriniz' name='email' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email}/>
           
            <label htmlFor="">Password</label>
                <input type="password" placeholder='Şifrenizi Giriniz' name='password' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.password}/>
            
            <label htmlFor="">Confirm Password</label>
                <input type="password"  placeholder='Şifrenizi Giriniz'name='confirmPassword' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.confirmPassword}/>
            
            <button>Login</button>
        </form>
    )
}

export default Login
