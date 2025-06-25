import React, { useState } from 'react';

function EmotionEntryScreen({ onSaveEmotion }) {
  const [selectedEmotion, setSelectedEmotion] = useState(null);
  const [note, setNote] = useState('');

  const emotions = [
    { name: 'Feliz', emoji: '😊' },
    { name: 'Triste', emoji: '😔' },
    { name: 'Ansioso', emoji: '😟' },
    { name: 'Enojado', emoji: '😠' },
    { name: 'Cansado', emoji: '😴' },
  ];

  const handleSave = () => {
    if (selectedEmotion) {
      onSaveEmotion({ emotion: selectedEmotion.name, note, date: new Date().toISOString().split('T')[0] });
      setSelectedEmotion(null);
      setNote('');
      alert('Emoción guardada con éxito.');
    } else {
      alert('Por favor, selecciona una emoción.');
    }
  };

  return (
    <div className="p-6 bg-gray-50 dark:bg-gray-900 min-h-screen">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">¿Cómo te sientes hoy?</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mb-8">
        {emotions.map((emotion) => (
          <button
            key={emotion.name}
            onClick={() => setSelectedEmotion(emotion)}
            className={`flex flex-col items-center justify-center p-4 rounded-2xl transition-all duration-300 shadow-lg
              ${selectedEmotion && selectedEmotion.name === emotion.name
                ? 'bg-blue-600 text-white transform scale-105'
                : 'bg-white dark:bg-gray-800 text-gray-900 dark:text-white hover:bg-blue-100 dark:hover:bg-gray-700'
              }`}
          >
            <span className="text-5xl mb-2">{emotion.emoji}</span>
            <span className="text-lg font-semibold">{emotion.name}</span>
          </button>
        ))}
      </div>
      <textarea
        placeholder="Escribe algo opcional sobre cómo te sientes..."
        rows="4"
        className="w-full px-5 py-3 mb-6 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-xl text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 resize-none shadow-md"
        value={note}
        onChange={(e) => setNote(e.target.value)}
      ></textarea>
      <button
        onClick={handleSave}
        className="w-full bg-green-600 text-white py-3 rounded-xl font-semibold text-lg hover:bg-green-700 transition-all duration-300 shadow-lg"
      >
        Guardar Emoción
      </button>
    </div>
  );
}

export default EmotionEntryScreen;