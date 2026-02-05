import './App.css';
import Dashboard from './components/dashboard';
import ResponsiveAppBar from './components/responsive-app-bar';

function App() {
  return (
    <>
      <header>
        <ResponsiveAppBar />
      </header>

      <main className='px-8 py-4'>
        <Dashboard />
      </main>
    </>
  );
}

export default App;
