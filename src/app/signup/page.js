"use client";
//nextauth
import { signIn } from "next-auth/react";
import { useSession } from "next-auth/react";

//hooks
import { useState, useRef, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
//styles
import "./signup.css";
//navigation
import { useRouter } from "next/navigation";
//toastify
import "react-toastify/dist/ReactToastify.css";

const Signup = () => {
  const { data: session } = useSession();
  const router = useRouter();
  // resavanje slajdera levo-desno
  const [formWrapper1Classes, setFormWrapper1Classes] = useState(
    "form-wrapper is-active"
  );
  const [formWrapper2Classes, setFormWrapper2Classes] =
    useState("form-wrapper");

  const loginButtonHandler = () => {
    setFormWrapper2Classes("form-wrapper");
    setFormWrapper1Classes("form-wrapper is-active");
  };

  const registerButtonHandler = () => {
    setFormWrapper2Classes("form-wrapper is-active");
    setFormWrapper1Classes("form-wrapper");
  };

  //login logika

  const loginEmailRef = useRef();
  const loginPasswordRef = useRef();

  const loginUserHandler = (e) => {
    e.preventDefault();
    signIn("credentials", {
      email: loginEmailRef.current?.value,
      password: loginPasswordRef.current?.value,
      redirect: true,
      callbackUrl: "/",
    });
  };

  //register refovi
  const registerEmailRef = useRef();
  const registerNameRef = useRef();
  const registerSurnameRef = useRef();

  //register logika
  const signupActionHandler = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:5124/Register", {
      method: "POST",
      body: JSON.stringify({
        customer: {
          firstName: registerNameRef.current.value,
          lastName: registerSurnameRef.current.value,
          email: registerEmailRef.current.value,
        },
      }),
      headers: {
        "content-type": "application/json",
      },
    });
    const res = await response.json();
    console.log("dobijam iz funckije signup-a ovo", res);
  };

  return (
    <div className="wrapper">
      <section class="forms-section">
        <h1 class="section-title"></h1>
        <div class="forms">
          <div class={formWrapper1Classes}>
            <button
              onClick={loginButtonHandler}
              type="button"
              class="switcher switcher-login"
            >
              Login
              <span class="underline"></span>
            </button>
            <form class="form form-login">
              <fieldset>
                <legend>
                  Please, enter your email and password for login.
                </legend>
                <div class="input-block">
                  <label for="login-email">E-mail</label>
                  <input
                    ref={loginEmailRef}
                    id="login-email"
                    type="email"
                    required
                  />
                </div>
              </fieldset>
              <button
                onClick={loginUserHandler}
                type="submit"
                class="btn-login"
              >
                Login
              </button>
            </form>
          </div>
          <div class={formWrapper2Classes}>
            <button
              onClick={registerButtonHandler}
              type="button"
              class="switcher switcher-signup"
            >
              Sign Up
              <span class="underline"></span>
            </button>
            <form class="form form-signup">
              <fieldset className="fieldset">
                <legend>
                  Please, enter your email, password and password confirmation
                  for sign up.
                </legend>
                <div>
                  <div class="input-block">
                    <label for="signup-password-confirm">First Name</label>
                    <input
                      ref={registerNameRef}
                      id="signup-password-confirm"
                      type="text"
                      required
                    />
                  </div>

                  <div class="input-block">
                    <label for="signup-email">E-mail</label>
                    <input
                      ref={registerEmailRef}
                      id="signup-email"
                      type="email"
                      required
                    />
                  </div>
                </div>

                <div>
                  <div class="input-block">
                    <label for="surname">Last Name</label>
                    <input
                      ref={registerSurnameRef}
                      id="surname"
                      type="text"
                      required
                    />
                  </div>
                </div>
              </fieldset>
              <button
                onClick={signupActionHandler}
                type="submit"
                class="btn-signup"
              >
                signup
              </button>
            </form>
          </div>
        </div>
      </section>
      <ToastContainer />
    </div>
  );
};

export default Signup;
