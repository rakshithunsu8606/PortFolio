import React from 'react';
import Header from './Component/Header/Header';
import Grid from './Component/grid/Grid';
import { ThemeProvider } from './Context/ThemeContext';
import UserRoute from './Routes/UserRoute';
import AdminRoute from './Routes/AdminRoute';
import { Route, Routes } from 'react-router-dom';
import PrivateRoute from './Routes/PrivateRoute';

function App(props) {
  return (
    <ThemeProvider>
      {/* <Header /> */}
      <Routes>
        <Route path='/*' element={<UserRoute />} />

        <Route element={<PrivateRoute />}>
          <Route path='/admin/*' element={<AdminRoute />} />
        </Route>
      </Routes>
    </ThemeProvider>
    // <Grid />
  );
}

export default App;