"use client";
import * as React from "react";

import { NextUIProvider } from "@nextui-org/react";

import { ReactNode } from "react";

export default function Provider({ children }: { children: ReactNode }) {
  return <NextUIProvider>{children}</NextUIProvider>;
}
