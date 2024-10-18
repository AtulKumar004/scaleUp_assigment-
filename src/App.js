import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/home";
import Contact from "./pages/contact/contact";
import Layout from "./layout/layout";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route index element={<Home />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
      </Layout>
    </BrowserRouter>
    </Provider>
  );
}

export default App;
