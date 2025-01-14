import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./styles/globals.css";
import Provider from "./Provider";
import ThemeProvider from "./ThemeProvider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <ThemeProvider>
          <Provider>{children}</Provider>
        </ThemeProvider>
      </body>
    </html>
  );
}