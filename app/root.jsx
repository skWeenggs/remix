import {
  Links,  LiveReload, Meta,  Outlet,  Scripts,  ScrollRestoration,} from "@remix-run/react";

import Footer from "./footer/index";
import Header from "./header/index";
import Navbar from "./header/navbar";
import ChatBoot from "./chatbot/index";
import styles from "./tailwind.css";
export function links() {
  return [{ rel: "stylesheet", href: styles }];
}
export const meta = () => ({
  charset: "utf-8",
  title: "New Remix App",
  viewport: "width=device-width,initial-scale=1",
});

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />

        {/* <script src="https://unpkg.com/prop-types@15.6/prop-types.js"></script> */}
         <link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet" />
        <script src="https://cdn.tailwindcss.com" defer></script>
        <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@200;400;700;900&display=swap" rel="stylesheet"
        />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@200;400;700;900&display=swap" rel="stylesheet"
        />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>    
           
      </head>
      <body>

        <Navbar />
        <Header />
        <ChatBoot />
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
        <Footer />

      </body>
    </html>
  );
}
