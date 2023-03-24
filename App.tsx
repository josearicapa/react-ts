import * as React from 'react';
import './style.css';

const ThemeContext = React.createContext('light');

const ThemeToggle = () => {
  const theme = React.useContext(ThemeContext);

  return (
    <React.Fragment>
      <button>Toggle Theme: {theme} </button>
    </React.Fragment>
  );
};

export default function App() {
  const [theme, setTheme] = React.useState('light');
  return (
    <React.Fragment>
      <ThemeContext.Provider value={theme}>
        <ThemeToggle />
      </ThemeContext.Provider>
      <button onClick={() => setTheme('Dark')}>Change</button>
    </React.Fragment>
  );
}
