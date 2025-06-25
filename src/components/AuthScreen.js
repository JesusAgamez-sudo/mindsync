import React, { useState } from 'react';

function AuthScreen({ onAuthSuccess, onNavigateToRegister }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (!email || !password) {
      setError('Por favor, ingresa tu correo/usuario y contraseña.');
      return;
    }

    try {
      // Simulación de Firebase Auth
      // En un proyecto real, aquí iría la lógica de Firebase:
      // await signInWithEmailAndPassword(auth, email, password);
      
      // Simulación de éxito/error
      if (email === 'test@example.com' && password === 'password123') {
        setSuccess('Inicio de sesión exitoso.');
        setTimeout(() => onAuthSuccess(), 1500);
      } else {
        setError('Credenciales incorrectas o usuario no existe.');
      }

    } catch (err) {
      setError(err.message);
    }
  };

  const handleSocialLogin = (provider) => {
    setError('');
    setSuccess('');
    // Simulación de Firebase Social Auth
    // Aquí iría la lógica para signInWithPopup(auth, provider)
    setSuccess(`Iniciando sesión con ${provider}...`);
    setTimeout(() => onAuthSuccess(), 1500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-purple-100 dark:from-gray-900 dark:to-gray-800 p-4">
      <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-2xl w-full max-w-md border border-gray-200 dark:border-gray-700 transform transition-all duration-500 scale-100 hover:scale-105">
        <h2 className="text-4xl font-extrabold text-center text-gray-900 dark:text-white mb-8">
          Iniciar Sesión
        </h2>

        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-xl relative mb-4 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6 mr-2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.38 3.375 2.07 3.375h14.006c1.69 0 2.936-1.875 2.069-3.375L12.707 5.625c-.546-.956-1.953-.956-2.5 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
            </svg>
            <span className="block sm:inline">{error}</span>
          </div>
        )}
        {success && (
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-xl relative mb-4 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6 mr-2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="block sm:inline">{success}</span>
          </div>
        )}

        <form onSubmit={handleLogin}>
          <input
            type="text" // Puede ser email o usuario
            placeholder="Correo electrónico o Usuario"
            className={`w-full px-5 py-3 mb-4 bg-gray-50 dark:bg-gray-700 border ${error && !email ? 'border-red-500' : 'border-gray-300'} dark:border-gray-600 rounded-xl text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 shadow-sm`}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <div className="relative mb-6">
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Contraseña"
              className={`w-full px-5 py-3 bg-gray-50 dark:bg-gray-700 border ${error && !password ? 'border-red-500' : 'border-gray-300'} dark:border-gray-600 rounded-xl text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 shadow-sm pr-12`}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
            >
              {showPassword ? (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.622A44.032 44.032 0 003 12c0 2.83.584 5.504 1.602 7.928m-1.342-1.342L2.25 19.5m1.39-1.391c.335.016.666.031 1 .046 2.777.37 5.45.995 7.122 1.752M4.785 4.785A44.083 44.083 0 0112 3c2.83 0 5.504.584 7.928 1.602m-1.342 1.342L21.75 4.5m-1.39 1.391c-.335.016-.666.031-1 .046-2.777.37-5.45.995-7.122 1.752M4.785 19.215L19.215 4.785" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              )}
            </button>
          </div>
          
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-xl font-extrabold text-lg hover:bg-blue-700 transition-all duration-300 shadow-lg transform hover:-translate-y-1"
          >
            Iniciar Sesión
          </button>
        </form>

        <div className="my-6 text-center text-gray-600 dark:text-gray-400">
          <span className="relative inline-block">
            <span className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-gray-300 dark:border-gray-600"></span>
            </span>
            <span className="relative bg-white dark:bg-gray-800 px-3">O</span>
          </span>
        </div>

        <button
          onClick={() => handleSocialLogin('Google')}
          className="w-full flex items-center justify-center bg-red-500 text-white py-3 rounded-xl font-semibold text-lg hover:bg-red-600 transition-all duration-300 shadow-lg mb-3"
        >
          <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12.24 10.285V11.69h4.735c-.207 1.172-.783 2.15-1.68 2.818l3.52 2.72c2.047-1.9 3.24-4.65 3.24-8.945 0-.82-.11-1.61-.303-2.36H12.24v4.59z" fill="#4285F4"/>
            <path d="M12.24 19.31c3.24 0 5.93-1.07 7.91-2.92l-3.52-2.72c-.97.67-2.23 1.06-4.39 1.06-3.38 0-6.22-2.27-7.25-5.33H1.89v2.89c1.98 3.91 5.92 6.68 10.35 6.68z" fill="#34A853"/>
            <path d="M4.99 12.005c0-1.05.18-2.06.5-3.01V6.105H1.89c-.98 1.93-1.57 4.09-1.57 6.09s.59 4.16 1.57 6.09h3.6c-.32-.95-.5-1.96-.5-3.01z" fill="#FBBC05"/>
            <path d="M12.24 4.69c1.8-.08 3.4-.73 4.68-1.92l3.15-3.15c-2.04-1.89-4.73-3.02-7.83-3.02-4.43 0-8.37 2.77-10.35 6.68l3.6 2.89c1.03-3.06 3.87-5.33 7.25-5.33z" fill="#EA4335"/>
          </svg>
          Continuar con Google
        </button>
        <button
          onClick={() => handleSocialLogin('Apple')}
          className="w-full flex items-center justify-center bg-gray-900 text-white py-3 rounded-xl font-semibold text-lg hover:bg-gray-700 transition-all duration-300 shadow-lg"
        >
          <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12.001 2.002c.001 0 .001 0 .001 0 2.002 0 3.998 1.001 5.001 2.001 1.001 1.001 2.001 2.001 2.001 4.001 0 2.001-1.001 4.001-2.001 5.001-1.001 1.001-2.001 2.001-4.001 2.001-2.001 0-4.001-1.001-5.001-2.001-1.001-1.001-2.001-2.001-2.001-4.001 0-2.001 1.001-4.001 2.001-5.001 1.001-1.001 2.001-2.001 4.001-2.001zm-1.001 1.001c-1.001 0-2.001.5-2.001 1.001 0 .5.5 1.001 1.001 1.001 1.001 0 2.001-.5 2.001-1.001 0-.5-.5-1.001-1.001-1.001zm-1.001 2.001c-1.001 0-2.001.5-2.001 1.001 0 .5.5 1.001 1.001 1.001 1.001 0 2.001-.5 2.001-1.001 0-.5-.5-1.001-1.001-1.001zm-1.001 2.001c-1.001 0-2.001.5-2.001 1.001 0 .5.5 1.001 1.001 1.001 1.001 0 2.001-.5 2.001-1.001 0-.5-.5-1.001-1.001-1.001zm-1.001 2.001c-1.001 0-2.001.5-2.001 1.001 0 .5.5 1.001 1.001 1.001 1.001 0 2.001-.5 2.001-1.001 0-.5-.5-1.001-1.001-1.001zm-1.001 2.001c-1.001 0-2.001.5-2.001 1.001 0 .5.5 1.001 1.001 1.001 1.001 0 2.001-.5 2.001-1.001 0-.5-.5-1.001-1.001-1.001zm-1.001 2.001c-1.001 0-2.001.5-2.001 1.001 0 .5.5 1.001 1.001 1.001 1.001 0 2.001-.5 2.001-1.001 0-.5-.5-1.001-1.001-1.001z"/>
          </svg>
          Continuar con Apple
        </button>

        <p className="text-center text-gray-600 dark:text-gray-400 mt-6">
          ¿No tienes cuenta?
          <button
            onClick={onNavigateToRegister}
            className="text-blue-600 hover:underline ml-2 font-semibold"
          >
            Regístrate aquí
          </button>
        </p>
      </div>
    </div>
  );
}

export default AuthScreen;