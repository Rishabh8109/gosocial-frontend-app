import Header from "../component/Header";
import Rightbar from "./Rightbar";
import Sidebar from "./Sidebar";

function Layout({ children }) {
  return (
    <>
      <Header />
      <div className="container">
        <Sidebar />
        <div className="main">{children}</div>
        <Rightbar />
      </div>
    </>
  );
}

export default Layout;
