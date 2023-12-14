import "./App.css";
import Sidebar from "./Components/Sidebar/Sidebar";
import Main from "./Components/Main/Main";
import SidebarRight from "./Components/SidebarRight/SidebarRight";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Search from "./Components/Search/Search";
import Explore from "./Components/Explore/Explore";
import Messages from "./Components/Messages/Messages";
import Create from "./Components/Create/Create";
import Profile from "./Components/Profile/Profile";

const Home = ({ children }) => {
  return (
    <>
      <Sidebar />
      {children}
      <SidebarRight />
    </>
  );
};

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Home>
                <Main />
              </Home>
            }
          />
          <Route
            path="/home"
            element={
              <Home>
                <Main />
              </Home>
            }
          />
          <Route
            path="/search"
            element={
              <Home>
                <Search />
              </Home>
            }
          />
          <Route
            path="/explore"
            element={
              <>
                <Sidebar />
                <Explore />
              </>
            }
          />
          <Route
            path="/messages"
            element={
              <Home>
                <Messages />
              </Home>
            }
          />
          <Route
            path="/create"
            element={
              <Home>
                <Create />
              </Home>
            }
          />
          <Route
            path="/profile"
            element={
              <Home>
                <Profile />
              </Home>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
