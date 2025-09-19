import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const inter = Poppins( {weight:['400'], subsets:["latin"] });


export const metadata: Metadata = {
  title: "SITA IPL",
  description: "Official Website of SITA IPL",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
              <link rel="icon" href="/favicon.png"></link>
      </head>
      <body className={`${inter.className} antialiased `}>
      <div className="flex v-screen overflow-auto  flex-col md:flex-col ">

          <div className="w-full fixed flex-grow md:w-full ">
          <NavBar/>
          </div>
          <div className="mt-16 flex-grow p-6 md:p-12 md:mt-16 ">
            {children}
          </div>
          <div className="w-full flex-grow md:w-full">
          <Footer/>
          </div>
            
      </div>
       
      
      </body>
    </html>
  );
}
