
import "./globals.css";
import { AosInit } from "../_components/AosInit";



export const metadata = {
  title: "Food Next",
  description: "Página fictícia de entrega de comida feita com next.js e tailwindCSS - by Gabriely Schiller",
  icons:{
    icon: "/icone.png"
  }
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
        <div className=" w-100vh h-5 bg-gradient-to-r from-red-800 to-red-600"></div>
        {children}
         <AosInit/>
      </body>
    </html>
  );
}
       
       
