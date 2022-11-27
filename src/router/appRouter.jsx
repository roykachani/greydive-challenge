import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from '../pages/home';
import ClientPage from '../pages/client';
import ErrorPage from '../pages/error';

const AppRouter = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:clientName/:userTester" element={<ClientPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default AppRouter;
