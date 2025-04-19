import React from "react";
import "./index.css";

export const Login = () => {
  return (
    <div className="login">
      <div className="group">
        <img
          className="rectangle"
          alt="Rectangle"
          src="/img/rectangle-78.svg"
        />

        <div className="overlap-group">
          <div className="div">
            <div className="text-wrapper">Lorem Ipsum is simply</div>

            <div className="text-wrapper-2">Lorem Ipsum is simply</div>
          </div>
        </div>
      </div>

      <div className="group-2">
        <div className="group-3">
          <div className="overlap-group-wrapper">
            <div className="overlap-group-2">
              <div className="overlap">
                <div className="text-wrapper-3">Login</div>
              </div>

              <div className="text-wrapper-4">Sign Up</div>
            </div>
          </div>

          <div className="text-wrapper-5">Welcome to ABCourse..!</div>
        </div>

        <div className="group-4">
          <div className="group-5">
            <div className="div-wrapper">
              <div className="text-wrapper-6">Enter your User name</div>
            </div>

            <div className="text-wrapper-7">User name</div>
          </div>

          <div className="overlap-wrapper">
            <div className="overlap-2">
              <div className="group-6">
                <div className="div-wrapper">
                  <div className="text-wrapper-6">Enter your Password</div>
                </div>

                <div className="text-wrapper-7">Password</div>
              </div>

              <div className="invisible">
                <div className="group-7" />
              </div>
            </div>
          </div>

          <p className="p">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>

        <div className="group-8">
          <div className="rectangle-2" />

          <div className="text-wrapper-8">Rememebr me</div>

          <div className="text-wrapper-9">Forgot Password ?</div>
        </div>

        <div className="group-9">
          <div className="overlap-3">
            <div className="text-wrapper-10">Login</div>
          </div>
        </div>
      </div>
    </div>
  );
};
