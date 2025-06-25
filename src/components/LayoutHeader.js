import React from 'react';

function LayoutHeader({ onToggleDarkMode, isDarkMode, onLogout }) {
  return (
    <header className="flex items-center justify-between p-4 bg-white dark:bg-gray-800 shadow-md border-b border-gray-200 dark:border-gray-700 sticky top-0 z-10">
      <h1 className="text-2xl font-bold text-gray-900 dark:text-white">MindSync</h1>
      <div className="flex items-center space-x-4">
        <button
          onClick={onToggleDarkMode}
          className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 transition-all duration-300"
        >
          {isDarkMode ? (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.364-.386l1.591-1.591M3 12H5.25m-.386-6.364l1.591 1.591M12 12.75a.75.75 0 100-1.5.75.75 0 000 1.5z" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0112 21.75c-5.567 0-10.14-4.38-10.412-9.002a9.75 9.75 0 0110.412-10.998 9.75 9.75 0 019.75 9.75c0 1.57-.413 3.043-1.118 4.31z" />
            </svg>
          )}
        </button>
        <button
          onClick={onLogout}
          className="bg-red-500 text-white py-2 px-4 rounded-xl font-semibold hover:bg-red-600 transition-all duration-300 shadow-md"
        >
          Salir
        </button>
      </div>
    </header>
  );
}

export default LayoutHeader;