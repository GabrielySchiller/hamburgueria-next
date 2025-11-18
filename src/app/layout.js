
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
        {children}
         <AosInit/>
      </body>
    </html>
  );
}
       
       
