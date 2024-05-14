import { createTheme } from '@mui/material/styles';
import { indigo ,blueGrey} from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      main: indigo[700],
    },
    secondary: {
      main: blueGrey[500]
    },
  },
});

export default theme;