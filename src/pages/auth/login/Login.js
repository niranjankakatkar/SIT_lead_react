import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Slide, toast } from 'react-toastify';

export default function Login() {

  const navigate= useNavigate();  
        const[formData,setFormData]=useState({
            name:'',
            email:''
           
        })

        const [username,setEmail]=useState();
        const email=username;
        const [password,setPassword]=useState();

       

        const handleSubmit = async(e)=>{
            e.preventDefault();
            try {
                axios.post("http://43.205.22.150:5000/admin/admin_auth",{username,password})
                .then(result=>{
                    
                    if(result.data.msg===""){
                      
                        axios.post("http://43.205.22.150:5000/auth/login",{email,password})
                        .then(result_=>{

                            if(result_.data.msg===""){
                                toast.error('No Record Found', {
                                    position: "top-right",
                                    autoClose: 3000,
                                    theme: "colored",
                                    transition: Slide,
                                    });
                            }
                            if(result_.data.msg==="0"){
                                toast.warning('Password Mismatch', {
                                    position: "top-right",
                                    autoClose: 3000,
                                    theme: "colored",
                                    transition: Slide,
                                    });
                            }
                            if(result_.data.msg==="1"){
                                toast.success('Login Successfully', {
                                    position: "top-right",
                                    autoClose: 3000,
                                    theme: "colored",
                                    transition: Slide,
                                    });
                                    //console.log(result_);
                                    localStorage.setItem("token", result_.data.id);
                                    localStorage.setItem("loginID", result_.data.loginID);
                                    navigate("/Udashboard");
                            }
                        })
                        .catch(err=>{
        
                        })

                       
                    }
                    if(result.data.msg==="0"){
                        toast.warning('Password Mismatch', {
                            position: "top-right",
                            autoClose: 3000,
                            theme: "colored",
                            transition: Slide,
                            });
                    }
                    if(result.data.msg==="1"){
                        toast.success('Login Successfully', {
                            position: "top-right",
                            autoClose: 3000,
                            theme: "colored",
                            transition: Slide,
                            });
                            localStorage.setItem("token", result.data.id);
                            localStorage.setItem("post", result.data.loginID);
                            navigate("/dashboard");
                    }
                    
                   
                })
                .catch(err=>{

                })
                
                
               
            } catch (error) {
              toast.error('Login Fail', {
                position: "top-right",
                autoClose: 3000,
                theme: "colored",
                transition: Slide,
                });
               // //console.log(error.message);
            }finally{
                setFormData({
                   email:"",
                 password:""
                })
            }
        }
  return (
   <>
   
   <div className="main-wrapper login-body">
        <div className="login-wrapper">
            <div className="container">
                <img className="img-fluid logo-dark mb-2 logo-color" src="assets/img/logo2.png" alt="Logo"/>
                <img className="img-fluid logo-light mb-2" src="assets/img/logo2-white.png" alt="Logo"/>
                <div className="loginbox">
                    <div className="login-right">
                        <div className="login-right-wrap">
                            <h1>Login</h1>
                            <p className="account-subtitle">Access to our dashboard</p>
                            <form  onSubmit={handleSubmit}>
                                <div className="input-block mb-3">
                                    <label className="form-control-label">Email Address</label>
                                    <input type="email" className="form-control" name='username' value={username} onChange={(e)=>setEmail(e.target.value)}/>
                                </div>
                                <div className="input-block mb-3">
                                    <label className="form-control-label">Password</label>
                                    <div className="pass-group">
                                        <input type="password" className="form-control pass-input" name='password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
                                        <span className="fas fa-eye toggle-password"></span>
                                    </div>
                                </div>
                                <div className="input-block mb-3">
                                    <div className="row">
                                        <div className="col-6">
                                            <div className="form-check custom-checkbox">
                                                <input type="checkbox" className="form-check-input" id="cb1"/>
                                                <label className="custom-control-label" htmlFor="cb1">Remember me</label>
                                            </div>
                                        </div>
                                        <div className="col-6 text-end">
                                            <a className="forgot-link" href="#">Forgot Password ?</a>
                                        </div>
                                    </div>
                                </div>
                                <button className="btn btn-lg  btn-primary w-100" type="submit">Login</button>
                               

                              

                                
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

   </>
  )
}
