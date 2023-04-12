import AppProvider from './state-management/AppContext';
import Home from './components/Home';

export default function App() {
  return (
    <AppProvider>
      <Home />
    </AppProvider>
  );
}