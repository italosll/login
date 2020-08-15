import React from 'react'
import './index.css'
import logo from '../../assets/images/myhelpbuddy.png'
import { Link } from 'react-router-dom'
import {Formik} from 'formik';
import * as Yup from 'yup';


function change(errors,values){

  let flag = true;
  if(errors.email) flag = false;
  if(errors.password) flag = false;
  if(values.email === "" ) flag = false;
  if(values.password === "" )flag = false;
  
  return(flag)
}

function Login(){



    return (
        <div className="app">

          <Formik
            initialValues={{ email: "", password:"" }}

            validationSchema={Yup.object().shape({
              email: Yup.string()
                .email()
                .required("Required"),

              password: Yup.string()
                  .min(8,"The password must contain at least 8 characters")
                  .required("Required")
            })}
          >
            {props => {
              const {
                values,
                touched,
                errors,
                handleChange,
                handleBlur,
              } = props;
              return (

                <div id="box" >
                  <form>

                    <img src={logo} alt="Logo"/>

                    <label htmlFor="email">Email: </label>
                    <input
                      id="email"
                      type="text"
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={
                        errors.email && touched.email
                          ? "text-input error"
                          : "text-input"
                      }
                    />

                    {errors.email && touched.email && (
                      <div className="input-feedback">{errors.email}</div>
                    )}


                    {!(errors.email && touched.email) && (
                      <div className="none">None</div>
                    )}

                    <label htmlFor="password" >Password:</label>
                    <input
                      id="password"
                      type="password"
                      value={values.password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={
                        errors.password && touched.password
                          ? "text-input error"
                          : "text-input"
                      }
                    />

                    {errors.password && touched.password && (
                      <div className="input-feedback">{errors.password}</div>
                    )}

                    {!(errors.password && touched.password) && (
                      <div className="none">None</div>
                    )}

                    {change(errors,values)&&(
                      <Link id="to-users" className="link" to="/users" >Login</Link>
                    )}
                    
                    {!change(errors,values) &&(
                      <Link id="to-root" className="link" to="/">Something is wrong...
                      </Link>
                    )}
                  </form>

                </div>
              );
            }}
          </Formik>

  </div>
);
    
}

export default Login;