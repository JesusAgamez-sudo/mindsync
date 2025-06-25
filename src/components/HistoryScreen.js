import React from 'react';

function HistoryScreen({ emotions }) {
  // Simulación de datos para el gráfico
  const getEmotionCounts = () => {
    const counts = {};
    emotions.forEach(entry => {
      counts[entry.emotion] = (counts[entry.emotion] || 0) + 1;
    });
    return counts;
  };

  const emotionCounts = getEmotionCounts();
  const totalEntries = emotions.length;

  return (
    <div className="p-6 bg-gray-50 dark:bg-gray-900 min-h-screen">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">Tu Historial de Emociones</h2>

      {emotions.length === 0 ? (
        <p className="text-center text-gray-600 dark:text-gray-400 text-lg">Aún no has registrado emociones. ¡Anímate a empezar!</p>
      ) : (
        <>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-xl mb-8 border border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Resumen Semanal</h3>
            <div className="flex flex-col space-y-3">
              {Object.entries(emotionCounts).map(([emotion, count]) => (
                <div key={emotion} className="flex items-center">
                  <span className="text-lg font-medium text-gray-700 dark:text-gray-300 w-24">{emotion}:</span>
                  <div className="flex-grow bg-gray-200 dark:bg-gray-700 rounded-full h-4">
                    <div
                      className="bg-blue-500 h-full rounded-full transition-all duration-500"
                      style={{ width: `${(count / totalEntries) * 100}%` }}
                    ></div>
                  </div>
                  <span className="ml-3 text-gray-700 dark:text-gray-300">{count}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            {emotions.map((entry, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 p-5 rounded-2xl shadow-md border border-gray-200 dark:border-gray-700 flex items-start space-x-4"
              >
                <span className="text-4xl">{
                  entry.emotion === 'Feliz' ? '😊' :
                  entry.emotion === 'Triste' ? '😔' :
                  entry.emotion === 'Ansioso' ? '😟' :
                  entry.emotion === 'Enojado' ? '😠' :
                  entry.emotion === 'Cansado' ? '😴' : ''
                }</span>
                <div className="flex-1">
                  <p className="text-lg font-semibold text-gray-900 dark:text-white">{entry.emotion}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{entry.date}</p>
                  {entry.note && (
                    <p className="text-gray-700 dark:text-gray-300 text-base italic">"{entry.note}"</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default HistoryScreen;