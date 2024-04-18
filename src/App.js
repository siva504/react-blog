import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@material-ui/core/styles';
import PostsList from './PostsList';
import SinglePost from './SinglePost';
import Favorites from './Favorites';
import Header from './Header';

function App() {
  const [favorites, setFavorites] = useState([]);
  const theme = createTheme();

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div>
          <Header favoritesCount={favorites.length} />
          <Routes>
            <Route
              path="/"
              element={<PostsList favorites={favorites} setFavorites={setFavorites} />}
            />
            <Route
              path="/post/:id"
              element={<SinglePost favorites={favorites} setFavorites={setFavorites} />}
            />
            <Route
              path="/favorites"
              element={<Favorites favorites={favorites} />}
            />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
