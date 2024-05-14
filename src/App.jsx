import { Routes, Route } from "react-router-dom";
import RepositoriesPage from "./components/RepositoriesPage";
import SingleRepositoryPage from "./components/SingleRepositoryPage";
import ErrorBoundary from './components/ErrorBoundary';
import NotFoundPage from "./components/NotFoundPage";
import BackArrowUp from "./components/ScrollUp";
import Navbar from "./components/Navbar";
import Footer   from "./components/Footer";



const App = () => {
  return (
   <ErrorBoundary>
     <>
        <Navbar/>
        <Routes>
          <Route exact path="/" element={<RepositoriesPage />} />
          <Route path="/repositoryDetatails" element={<SingleRepositoryPage/>} />
          <Route path="*" element={<NotFoundPage/>} />
        </Routes>
        <Footer/>
        <BackArrowUp />
     
      
    </>
   </ErrorBoundary>
  );
};

export default App;
