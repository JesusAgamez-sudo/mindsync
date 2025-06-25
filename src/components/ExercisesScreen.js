import React, { useState } from 'react';

function ExercisesScreen() {
  const [activeExercise, setActiveExercise] = useState(null);

  const exercises = [
    {
      name: 'Respiración Profunda',
      description: 'Inhala lentamente por la nariz, siente cómo tu abdomen se expande. Exhala lentamente por la boca, vaciando tus pulmones. Repite 5 veces.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-10 h-10 text-blue-600">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18m-9-9h18" />
        </svg>
      ),
    },
    {
      name: 'Meditación Guiada',
      description: 'Encuentra un lugar tranquilo. Cierra los ojos y concéntrate en tu respiración. Deja que los pensamientos pasen sin juzgarlos. Duración: 5 minutos.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-10 h-10 text-green-600">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      name: 'Afirmaciones Positivas',
      description: 'Repite en voz alta: "Soy capaz", "Soy fuerte", "Me amo y me acepto". Siente la verdad en cada palabra.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-10 h-10 text-purple-600">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
  ];

  return (
    <div className="p-6 bg-gray-50 dark:bg-gray-900 min-h-screen">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">Ejercicios para tu Bienestar</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {exercises.map((exercise, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 flex flex-col items-center text-center transition-all duration-300 hover:scale-105"
          >
            <div className="mb-4">{exercise.icon}</div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{exercise.name}</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">{exercise.description}</p>
            <button
              onClick={() => setActiveExercise(exercise.name)}
              className="bg-blue-600 text-white py-2 px-6 rounded-xl font-semibold hover:bg-blue-700 transition-all duration-300 shadow-lg"
            >
              Comenzar
            </button>
          </div>
        ))}
      </div>

      {activeExercise && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-2xl max-w-md w-full text-center relative border border-gray-200 dark:border-gray-700">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{activeExercise}</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              {exercises.find(ex => ex.name === activeExercise)?.description}
            </p>
            <button
              onClick={() => setActiveExercise(null)}
              className="bg-red-600 text-white py-2 px-6 rounded-xl font-semibold hover:bg-red-700 transition-all duration-300 shadow-lg"
            >
              Cerrar
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ExercisesScreen;