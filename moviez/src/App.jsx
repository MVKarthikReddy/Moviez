import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { FavMoviesList, MoviesList } from "./pages";
import Navbar from "./components/Navbar";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <main className="w-full h-full bg-[var(--primary-bg)] p-2">
        <Toaster />
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<MoviesList />} />
            <Route path="/favorite" element={<FavMoviesList />} />
          </Routes>
        </BrowserRouter>
      </main>
    </>
  );
}

export default App;
