import React from 'react';

function LayoutNavbar({ currentPage, onNavigate }) {
  const navItems = [
    { name: 'Emoción', page: 'emotion', icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75h.008v.008H9.75V9.75zm4.5 0h.008v.008H14.25V9.75z" />
      </svg>
    )},
    { name: 'Historial', page: 'history', icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )},
    { name: 'Chatbot', page: 'chatbot', icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.75 9.75 0 01-1.62-.108V21a.75.75 0 00.97.75 5.25 5.25 0 003.68-1.021 9.552 9.552 0 003.53-3.108A9 9 0 0021 12z" />
      </svg>
    )},
    { name: 'Ejercicios', page: 'exercises', icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6.75H12a3 3 0 00-3 3v9.75M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m-9 9h10.5a2.25 2.25 0 002.25-2.25V6.75" />
      </svg>
    )},
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 shadow-lg z-10">
      <div className="flex justify-around py-3">
        {navItems.map((item) => (
          <button
            key={item.page}
            onClick={() => onNavigate(item.page)}
            className={`flex flex-col items-center text-sm font-medium transition-all duration-300
              ${currentPage === item.page
                ? 'text-blue-600 dark:text-blue-400'
                : 'text-gray-500 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-300'
              }`}
          >
            {item.icon}
            <span className="mt-1">{item.name}</span>
          </button>
        ))}
      </div>
    </nav>
  );
}

export default LayoutNavbar;