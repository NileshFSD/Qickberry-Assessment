import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Registration from "./Pages/Registration";
import Login from "./Pages/Login";
import style from "../src/style.css";
import Post from "./Pages/Post";
import Picture from "./Pages/Picture";
import MainPage from "./Pages/MainPage";
import ProtectedRoute from "./Pages/ProtectedRoute";
import { Provider } from "react-redux";
import store from "./Redux/store";
import Error from "./Pages/Error";
import ProtectedAuth from "./Pages/ProtectedAuth";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <Routes>
            <Route element={<ProtectedRoute />}>
              <Route path="/mainpage" element={<MainPage />} />
              <Route path="/post" element={<Post />} />
              <Route path="/pictures" element={<Picture />} />
            </Route>
            <Route element={<ProtectedAuth />}>
              <Route path="/" element={<Registration />} />
              <Route path="/login" element={<Login />} />
            </Route>

            <Route path="*" element={<Error />} />
          </Routes>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
