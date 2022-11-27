import { createContext, useContext, useEffect } from "react";
import { React, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

const AuthState = (props) => {
  const host = process.env.REACT_APP_BACKEND_URL;
  const localStorageKey = "token";

  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user]);

  const login = async (email, password, showAlert) => {
    const response = await fetch(`${host}/api/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });
    const json = await response.json();
    if (json.success) {
      localStorage.setItem(localStorageKey, json.authtoken);
      setUser(json.user);
      showAlert("logged in Account", "success");
      navigate("/");
    } else {
      showAlert("Invalid Details", "danger");
    }
  };

  const signup = async (credentials, showAlert) => {
    const { name, email, password } = credentials;
    const response = await fetch(`${host}/api/auth/createuser`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    });
    const json = await response.json();
    if (json.success) {
      localStorage.setItem(localStorageKey, json.authtoken);
      setUser(json.user);
      navigate("/");
      showAlert("Succesfully created Account", "success");
    } else {
      showAlert("Invalid credentials", "danger");
    }
  };

  //Get all note
  const getUser = async () => {
    try {
      //API CALL
      const response = await fetch(`${host}/api/getuser`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem(localStorageKey),
        },
      });
      const json = await response.json();
      setUser(json);
    } catch (error) {
      setUser(null);
    }
  };

  const logout = () => {
    localStorage.removeItem(localStorageKey);
    setUser(null);
  };

  return (
    <>
      <AuthContext.Provider value={{ user, login, signup, getUser, logout }}>
        {props.children}
      </AuthContext.Provider>
    </>
  );
};

export const useAuth = () => useContext(AuthContext);

export default AuthState;
