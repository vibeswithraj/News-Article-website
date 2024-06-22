import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ArticleProvider } from "./Contexts/ArticleProvider.jsx";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Backdrop, CircularProgress } from "@mui/material";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";
import store from "./Contexts/store.js";
const queryClient = new QueryClient();

const Nav = lazy(() => import("./Components/Nav.jsx"));
const Footer = lazy(() => import("./Components/Footer.jsx"));
const Home = lazy(() => import("./Pages/Home.jsx"));
const ContactUs = lazy(() => import("./Pages/ContactUs.jsx"));
const AboutUs = lazy(() => import("./Pages/AboutUs.jsx"));
const ArticleDetails = lazy(() => import("./Components/ArticleDetails.jsx"));

const App = () => {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <ArticleProvider>
          <Router>
            <Suspense
              fallback={
                <Backdrop sx={{ color: "#ffff" }} open={true}>
                  <CircularProgress color="inherit" />
                </Backdrop>
              }
            >
              <Nav />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/contactus" element={<ContactUs />} />
                <Route path="/aboutus" element={<AboutUs />} />
                <Route path="/articledetail/:id" element={<ArticleDetails />} />
              </Routes>
              <Footer />
            </Suspense>
          </Router>
        </ArticleProvider>
        <Toaster toastOptions={{ position: "top-right" }} />
        <ReactQueryDevtools initialIsOpen={true} />
      </QueryClientProvider>
    </Provider>
  );
};

export default App;
