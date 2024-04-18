import React from 'react';
import { Link } from 'react-router-dom';
import { useStyles } from './styles'; 

function Favorites({ favorites }) {
  const classes = useStyles(); 

  const isPostInFavorites = (postId) => {
    return favorites.some((favorite) => favorite.id === postId);
  };

  return (
    <div className={classes.container}>
      <h1>Favorites</h1>
      {favorites.map((favorite) => (
        <div key={favorite.id}>
          <Link to={`/post/${favorite.id}`} className={classes.link}>
            {`Favorite Post ${favorite.id}`}
          </Link>
          <button
            disabled={isPostInFavorites(favorite.id)}
            onClick={() => console.log('Already in favorites')}
          >
            Add to Favorites
          </button>
        </div>
      ))}
    </div>
  );
}

export default Favorites;
