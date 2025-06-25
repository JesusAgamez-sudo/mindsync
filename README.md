# 🧘 MindSync – App de Autoayuda y Registro Emocional

MindSync es una aplicación web desarrollada en React y TailwindCSS, integrada con Firebase, diseñada para que los usuarios registren sus emociones, realicen ejercicios de relajación y reciban acompañamiento emocional a través de un chatbot empático.

## 🚀 Características principales

- Registro diario de emociones con emojis y texto.
- Historial emocional con visualización por días/semana.
- Chatbot empático con respuestas automáticas.
- Ejercicios guiados: respiración, afirmaciones, meditación.
- Autenticación con correo y contraseña (Firebase Auth).
- Validaciones de formularios y manejo de errores visuales.
- Estética minimalista, moderna y adaptable.

## 🛠️ Tecnologías utilizadas

- **React** – Librería para construir interfaces.
- **TailwindCSS** – Framework de estilos CSS.
- **Firebase** – Autenticación y base de datos (Firestore).
- **JavaScript (ES6+)** – Lógica del lado cliente.

## 📁 Estructura del proyecto

project/
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── public/
│   └── index.html
└── src/
    ├── App.js
    ├── index.js
    ├── styles.css
    ├── components/
    │   ├── EmotionEntryScreen.js
    │   ├── HistoryScreen.js
    │   ├── ChatbotScreen.js
    │   ├── ExercisesScreen.js
    │   ├── LayoutHeader.js
    │   ├── LayoutNavbar.js
    │   ├── AuthScreen.js
    │   └── RegisterScreen.js
    ├── mock/
    │   └── emotions.js
    └── utils/
        └── helpers.js

    
## ▶️ Instalación y ejecución

```bash
# Clona el repositorio
git remote add origin https://github.com/JesusAgamez-sudo/mindsync.git
cd mindsync

# Instala las dependencias
npm install

# Corre la aplicación localmente
npm start
