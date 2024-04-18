import { makeStyles } from '@material-ui/styles';

export const useStyles = makeStyles((theme) => ({
  
  container: {
    maxWidth: '800px',
    margin: '0 auto',
    padding: theme.spacing(4),
    backgroundColor: theme.palette.background.default,
  },
  postContainer: {
    marginBottom: theme.spacing(4),
    padding: theme.spacing(3),
    border: '1px solid #ddd',
    borderRadius: theme.spacing(1),
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[2],
    transition: 'box-shadow 0.3s ease-in-out',
    '&:hover': {
      boxShadow: theme.shadows[4],
    },
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  link: {
    color: theme.palette.secondary.main,
    textDecoration: 'none',
    marginRight: theme.spacing(2),
    fontSize: '16px',
    transition: 'color 0.3s ease-in-out',
    '&:hover': {
      color: theme.palette.secondary.main,
    },
  },
  postImage: {
    maxWidth: '100%',
    height: 'auto',
    borderRadius: theme.spacing(1),
  },
  
  addToFavoritesButton: {
    backgroundColor: theme.palette.secondary.main,
    color: 'white',
    padding: theme.spacing(1, 2),
    borderRadius: theme.spacing(1),
    border: 'none',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease-in-out',
    '&:hover': {
      backgroundColor: theme.palette.secondary.dark,
    },
    '&:disabled': {
      backgroundColor: theme.palette.grey[300],
      color: theme.palette.grey[600],
      cursor: 'not-allowed',
    },
  },

  addToFavoritesButtonInPost: {
    backgroundColor: theme.palette.primary.main,
    color: 'white',
    padding: theme.spacing(1),
    borderRadius: theme.spacing(1),
    border: 'none',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease-in-out',
    '&:hover': {
      backgroundColor: theme.palette.primary.dark,
    },
    '&:disabled': {
      backgroundColor: theme.palette.grey[300],
      color: theme.palette.grey[600],
      cursor: 'not-allowed',
    },
  },
  pagination: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: theme.spacing(4),
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    backgroundColor: theme.palette.primary.main,
    color: 'white',
  },
  h1: {
    fontSize: '25px',
    fontWeight: 500,
    color: 'red',
    borderRight: `4px solid ${theme.palette.common.red}`,
    animation: '$cursor 1s infinite step-end, $typing 15s infinite steps(8)',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
  },
  '@keyframes cursor': {
    '0%, 100%': { borderColor: 'transparent' },
    '50%': { borderColor: theme.palette.common.black },
  },
  '@keyframes typing': {
    '0%': { width: '0ch' },
    '30%': { width: '16ch' }, 
    '80%': { width: '16ch' }, 
    '90%': { width: '0ch' }, 
    '100%': { width: '0ch' },
  },
  logo: {
    fontSize: '24px',
    fontWeight: 'bold',
    textDecoration: 'none',
    color: 'white',
  },
  favoritesContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  favoritesIcon: {
    marginRight: theme.spacing(1),
    color: 'white',
  },
  favoritesCount: {
    fontWeight: 'bold',
  },
}));

export default useStyles;
