import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Outlet,
  useLocation,
} from "react-router-dom";
import Main from "../pages/Main";
import Login from "../pages/Login";
import Register from "../pages/Register";
import MovieDetail from "../pages/MovieDetail";
import Navbar from "../components/Navbar";
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";
import { toastWarnNotify } from '../helpers/ToastNotify'


const AppRouter = () => {
  const { currentUser } = useContext(AuthContext);
  console.log(currentUser);
  console.log(currentUser?.displayName);
  function PrivateRouter() {
    let location = useLocation();
    if (!currentUser) {
      // Redirect them to the /login page, but save the current location they were
      // trying to go to when they were redirected. This allows us to send them
      // along to that page after they login, which is a nicer user experience
      // than dropping them off on the home page.
      return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return <Outlet />;
  }
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {/* <Route path="/details/:id" element={<MovieDetail />} /> */}

        //! 1. private routing yöntemi. bunda yukarıda bir PrivateRouter() tanımlamamız lazım. Ama bunda tek Private Router ın için istediğimiz sayıda route koyabiliriz. O yüzden best practice bunu kullanmak 
       <Route element={<PrivateRouter />}>
          <Route path="/details/:id" element={<MovieDetail />} />
          {/* <Route path="/users/:id" element={<UserDetail />} />*/}
          {/* <Route path="/example/" element={<Exampla />} />*/}

        </Route> 

        //! 2. private routing yöntemi. Tek tek her sayfa için ayrı ayarlama yapmak lazım olduğu için private router a ihtiyaç olan çoklu sayfalarda üstteki daha iyi 
         {/* <Route
          path="/details/:id"
          element={currentUser ? <MovieDetail /> : <Navigate to="/login"  replace/>}
        /> */}
      </Routes>
    </Router>
  );
};

export default AppRouter;
