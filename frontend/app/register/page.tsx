"use client";

import React, { useState } from "react";
import { Button, Input, Link, Form, Alert, Divider } from "@nextui-org/react";
import { Icon } from "@iconify/react";
import { register } from "../../utils/api";
import Header from "../components/Header";

const Register = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordErrors, setPasswordErrors] = useState<string[]>([]);
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  const validatePassword = (value: string) => {
    const errors = [];
    if (value.length < 8) {
      errors.push("Password must be 8 characters or more.");
    }
    if (!/[A-Z]/.test(value)) {
      errors.push("Password must include at least 1 upper case letter.");
    }
    if (!/[a-z]/.test(value)) {
      errors.push("Password must include at least 1 lower case letter.");
    }
    if (!/[0-9]/.test(value)) {
      errors.push("Password must include at least 1 number.");
    }
    if (!/[^a-zA-Z0-9]/.test(value)) {
      errors.push("Password must include at least 1 special character.");
    }
    setPasswordErrors(errors);
    setIsPasswordValid(errors.length === 0);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isPasswordValid) {
      try {
        await register(email, password);
        setShowAlert(true);
        setTimeout(() => {
          setShowAlert(false);
        }, 4000); // Hide the alert after 3 seconds
      } catch {
        alert("Registration failed. Please try again.");
      }
    } else {
      alert("Please fix the password errors before submitting.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex flex-grow items-center justify-center">
        <div className="flex w-full max-w-sm flex-col gap-4 rounded-large bg-content1 px-8 pb-10 pt-6 shadow-small">
          <div className="flex flex-col gap-1">
            <h1 className="text-large font-medium">Create your account</h1>
            <p className="text-small text-default-500">
              to continue to SoMeApp
            </p>
          </div>

          <Form
            className="flex flex-col gap-3"
            validationBehavior="native"
            onSubmit={handleSubmit}
          >
            <Input
              isRequired
              label="Email Address"
              name="email"
              placeholder="Enter your email"
              type="email"
              variant="bordered"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              isRequired
              endContent={
                <button type="button" onClick={toggleVisibility}>
                  {isVisible ? (
                    <Icon
                      className="pointer-events-none text-2xl text-default-400"
                      icon="solar:eye-closed-linear"
                    />
                  ) : (
                    <Icon
                      className="pointer-events-none text-2xl text-default-400"
                      icon="solar:eye-bold"
                    />
                  )}
                </button>
              }
              label="Password"
              name="password"
              placeholder="Enter your password"
              type={isVisible ? "text" : "password"}
              variant="bordered"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                validatePassword(e.target.value);
              }}
              errorMessage={() => (
                <ul>
                  {passwordErrors.map((error, i) => (
                    <li key={i}>{error}</li>
                  ))}
                </ul>
              )}
              isInvalid={passwordErrors.length > 0}
            />
            <Button className="w-full mt-4" color="primary" type="submit">
              Register
            </Button>
          </Form>
          <div className="flex items-center gap-4 py-2">
            <Divider className="flex-1" />
            <p className="shrink-0 text-tiny text-default-500">OR</p>
            <Divider className="flex-1" />
          </div>
          <div className="flex flex-col gap-4">
            <Button
              startContent={<Icon icon="flat-color-icons:google" width={24} />}
              variant="bordered"
            >
              Continue with Google
            </Button>
            <Button
              startContent={
                <Icon
                  className="text-default-500"
                  icon="fe:github"
                  width={24}
                />
              }
              variant="bordered"
            >
              Continue with Github
            </Button>
          </div>

          <div className="gap-4 py-2 text-center">
            <p className="text-center text-small">
              Already have an account?&nbsp;
              <Link href="/login" size="sm">
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
      <div className="fixed bottom-0 left-0 p-4">
        {showAlert && (
          <Alert
            color="success"
            title="Account created successfully! You can now sign in."
            className="font-bold"
          ></Alert>
        )}
      </div>
    </div>
  );
};

export default Register;
