import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useStyles } from './styles';

function SinglePost({ favorites, setFavorites }) {
  const { id } = useParams();
  const classes = useStyles();
  const [post, setPost] = useState(null);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(response => setPost(response.data))
      .catch(error => console.error(error));
  }, [id]);

  const addToFavorites = () => {
    const updatedFavorites = favorites || [];
    const isAlreadyFavorite = updatedFavorites.some(favorite => favorite.id === parseInt(id, 10));

    if (!isAlreadyFavorite) {
      setFavorites([...updatedFavorites, { id: parseInt(id, 10) }]);
      setIsFavorite(true);
    }
  };

  return (
    <div className={classes.container}>
      <Link to="/">Back to Posts</Link>
      {post && (
        <div className={classes.postContainer}>
          <h1>{post.title}</h1>
          <img
            className={classes.postImage}
            src={`https://source.unsplash.com/collection/928423/1280x720?${Math.random()}`}
            alt="Random"
          />
          <p>{post.body}</p>
          {!isFavorite && <button className={classes.addToFavoritesButtonInPost}
                onClick={addToFavorites}>Add to Favorites</button>}
        </div>
      )}
    </div>
  );
}

export default SinglePost;
