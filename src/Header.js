import React from 'react';
import { Link } from 'react-router-dom';
import FavoriteIcon from '@material-ui/icons/Favorite';
import HomeIcon from '@material-ui/icons/Home';
import { useStyles } from './styles';

function Header({ favoritesCount }) {
  const classes = useStyles();

  return (
    <div className={classes.header}>
      <Link to="/" className={classes.link}>
        <HomeIcon fontSize="large" />Home
      </Link>
      <h1 className={classes.h1}>React-Blog</h1>
      <Link to="/favorites" className={classes.link}>
        <FavoriteIcon fontSize="large" />Favorite
        <span className={classes.favoritesCount}>({favoritesCount})</span>
      </Link>
    </div>
  );
}

export default Header;
