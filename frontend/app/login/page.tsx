"use client";

import React, { useState } from "react";
import {Button, Input, Checkbox, Link, Form, Divider,
} from "@nextui-org/react";
import { Icon } from "@iconify/react";
import Header from "../components/Header";
import { login } from "@/utils/api";

const Login = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      await login(email, password, rememberMe);
      alert("Login successful!");
    } catch {
      alert("Login failed. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex flex-grow items-center justify-center">
        <div className="flex w-full max-w-sm flex-col gap-4 rounded-large bg-content1 px-8 pb-10 pt-6 shadow-small">
          <div className="flex flex-col gap-1">
            <h1 className="text-large font-medium">Sign in to your account</h1>
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
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="flex w-full items-center justify-between px-1 py-2">
              <Checkbox
                name="remember"
                size="sm"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              >
                Remember me
              </Checkbox>
              <Link className="text-default-500" href="#" size="sm">
                Forgot password?
              </Link>
            </div>
            <Button className="w-full" color="primary" type="submit">
              Sign In
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
          <p className="text-center text-small">
            Need to create an account?&nbsp;
            <Link href="/register" size="sm">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
