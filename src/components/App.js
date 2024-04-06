import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Categories from "./Categories";
import Category from "./Category";
import About from "./About";
import Header from "./Header";
import Session from "./Session";
import Register from "./Register";
import Confirmation from "./Confirmation";

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route
          path="/react-router"
          element={<Home title="Welcome to Red30 Tech" />}
        />
        <Route path="about" element={<About />} />
        {/* Nested Routes */}
        <Route path="categories" element={<Categories />}>
          <Route path=":catId" element={<Category />}>
            <Route path=":sessionId" element={<Session />} />
          </Route>
          {/* Deafault child route */}
          <Route index element={<h1>Select a category form above</h1>} />
        </Route>
        <Route path="register" element={<Register />} />
        <Route path="confirmed" element={<Confirmation />} />
        <Route
          path="*"
          element={<h1 className="not-found">Page Not Found</h1>}
        />
      </Routes>
      <footer className="container">
        &copy;2022 | <a href="https://red30tech.com/">Red30 Tech</a>
      </footer>
    </div>
  );
}

export default App;
