import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Pagination from '@material-ui/lab/Pagination';
import { useStyles } from './styles';

function PostsList({ favorites, setFavorites }) {
  const classes = useStyles();
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  //data api added
  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=10`)
      .then(response => {
        setPosts(response.data);
        setTotalPages(Math.ceil(response.headers['x-total-count'] / 10));
      })
      .catch(error => console.error(error));
  }, [page]);

  
  const addToFavorites = (postId) => {
    const isAlreadyFavorite = favorites.some(favorite => favorite.id === postId);

    if (!isAlreadyFavorite) {
      setFavorites([...favorites, { id: postId }]);
    }
  };

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  return (
    <div className={classes.container}>
      <h1>Posts</h1>
      {posts.map(post => (
        <div key={post.id} className={classes.postContainer}>
          <Link to={`/post/${post.id}`}>
            <h2>{post.title}</h2>
          </Link>
          <p>{post.body}</p>
          <button className={classes.addToFavoritesButton} onClick={() => addToFavorites(post.id)}>Add to Favorites</button>
        </div>
      ))}
      <Pagination count={totalPages} page={page} onChange={handlePageChange} color="primary"/>
    </div>
  );
}

export default PostsList;
