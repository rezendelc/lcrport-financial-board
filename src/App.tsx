import { ThemeProvider } from '@emotion/react';
import './App.css';
import Dashboard from './components/dashboard';
import ResponsiveAppBar from './components/responsive-app-bar';
import theme from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <header>
        <ResponsiveAppBar />
      </header>

      <main className='px-8 py-4'>
        <Dashboard />
      </main>
    </ThemeProvider>
  );
}

export default App;
