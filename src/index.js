import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import App from './App';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import Blog from './Components/Blog';
import BlogNew from './Components/BlogNew';
import About from './Components/About';

import ThemeContext from './Context/ContextoGeneral';
import { I18nextProvider } from 'react-i18next';
import i18n from './Config/localization/i18n';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeContext>
        <I18nextProvider i18n={i18n}>
          <Navbar />
          <Routes>
            <Route path='/' element={<App></App>}></Route>
            <Route path='/CreatePost' element={<BlogNew></BlogNew>}></Route>
            <Route path='/About' element={<About></About>}></Route>
          </Routes>
          <Footer />
        </I18nextProvider>
      </ThemeContext>
    </BrowserRouter>
  </React.StrictMode>
);
