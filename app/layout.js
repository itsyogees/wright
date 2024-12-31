import "./styles/globals.scss";
import dynamic from "next/dynamic";

const Navbar = dynamic(() => import("./components/Navbar/page"));
const Footer = dynamic(() => import("./components/Footer/page"));

const ClientProvider = dynamic(() => import("./components/ClientProvider/page"));
export const metadata = {
  title: "Wright Nudge",
  description: "Wright Nudge website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ClientProvider>
          <Navbar />
          {children}
          <Footer />
        </ClientProvider>
      </body>
    </html>
  );
}
