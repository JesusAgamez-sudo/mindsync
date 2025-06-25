import React, { useState, useEffect } from 'react';
import AuthScreen from './components/AuthScreen';
import RegisterScreen from './components/RegisterScreen'; // Importar el nuevo componente
import EmotionEntryScreen from './components/EmotionEntryScreen';
import HistoryScreen from './components/HistoryScreen';
import ChatbotScreen from './components/ChatbotScreen';
import ExercisesScreen from './components/ExercisesScreen';
import LayoutHeader from './components/LayoutHeader';
import LayoutNavbar from './components/LayoutNavbar';
import { defaultEmotions } from './mock/emotions';
import { toggleDarkMode } from './utils/helpers';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentPage, setCurrentPage] = useState('login'); // Estado para controlar la vista de autenticación
  const [emotions, setEmotions] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Cargar emociones simuladas al inicio
    setEmotions(defaultEmotions);
    // Cargar preferencia de modo oscuro
    if (localStorage.getItem('theme') === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
      setIsDarkMode(true);
    } else {
      document.documentElement.classList.remove('dark');
      setIsDarkMode(false);
    }
  }, []);

  const handleAuthSuccess = () => {
    setIsAuthenticated(true);
    setCurrentPage('emotion'); // Redirigir a la pantalla principal después de autenticar
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setCurrentPage('login'); // Resetear a la página de login al cerrar sesión
  };

  const handleSaveEmotion = (newEmotion) => {
    setEmotions((prevEmotions) => [...prevEmotions, newEmotion]);
  };

  const handleToggleDarkMode = () => {
    toggleDarkMode(isDarkMode, setIsDarkMode);
    localStorage.setItem('theme', !isDarkMode ? 'dark' : 'light');
  };

  if (!isAuthenticated) {
    if (currentPage === 'login') {
      return <AuthScreen onAuthSuccess={handleAuthSuccess} onNavigateToRegister={() => setCurrentPage('register')} />;
    } else if (currentPage === 'register') {
      return <RegisterScreen onAuthSuccess={handleAuthSuccess} onNavigateToLogin={() => setCurrentPage('login')} />;
    }
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900">
      <LayoutHeader onToggleDarkMode={handleToggleDarkMode} isDarkMode={isDarkMode} onLogout={handleLogout} />
      <main className="flex-1 overflow-y-auto pb-20"> {/* Añadir padding-bottom para la navbar */}
        {currentPage === 'emotion' && <EmotionEntryScreen onSaveEmotion={handleSaveEmotion} />}
        {currentPage === 'history' && <HistoryScreen emotions={emotions} />}
        {currentPage === 'chatbot' && <ChatbotScreen />}
        {currentPage === 'exercises' && <ExercisesScreen />}
      </main>
      <LayoutNavbar currentPage={currentPage} onNavigate={setCurrentPage} />
    </div>
  );
}

export default App;

// DONE