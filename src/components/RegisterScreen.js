import React, { useState } from 'react';

function RegisterScreen({ onAuthSuccess, onNavigateToLogin }) {
  const [formData, setFormData] = useState({
    firstName: '',
    secondName: '',
    lastName: '',
    secondLastName: '',
    dob: '',
    phone: '',
    docType: '',
    docNumber: '',
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // Clear error for the field as user types
    if (errors[name]) {
      setErrors((prevErrors) => {
        const newErrors = { ...prevErrors };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    for (const key in formData) {
      if (key !== 'secondName' && key !== 'secondLastName' && !formData[key]) { // Second name/last name are optional
        newErrors[key] = 'Este campo es obligatorio.';
      }
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setShowAlert(false);
    setAlertMessage('');

    if (!validateForm()) {
      setAlertMessage('Por favor, completa todos los campos obligatorios.');
      setShowAlert(true);
      return;
    }

    try {
      // Simulación de Firebase Auth
      // En un proyecto real, aquí iría la lógica de Firebase:
      // await createUserWithEmailAndPassword(auth, formData.email, formData.password);
      // await updateProfile(auth.currentUser, { displayName: `${formData.firstName} ${formData.lastName}` });
      // await setDoc(doc(db, "users", auth.currentUser.uid), formData);

      // Simulación de éxito
      setAlertMessage('¡Registro exitoso! Redirigiendo...');
      setShowAlert(true);
      setTimeout(() => onAuthSuccess(), 2000);

    } catch (err) {
      setAlertMessage(`Error al registrar: ${err.message}`);
      setShowAlert(true);
    }
  };

  const handleCancel = () => {
    setFormData({
      firstName: '', secondName: '', lastName: '', secondLastName: '',
      dob: '', phone: '', docType: '', docNumber: '', email: '', password: '',
    });
    setErrors({});
    setShowAlert(false);
    setAlertMessage('');
    onNavigateToLogin();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-purple-100 dark:from-gray-900 dark:to-gray-800 p-4">
      <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-2xl w-full max-w-2xl border border-gray-200 dark:border-gray-700 transform transition-all duration-500 scale-100 hover:scale-105">
        <h2 className="text-4xl font-extrabold text-center text-gray-900 dark:text-white mb-8">
          Crear Nueva Cuenta
        </h2>

        {showAlert && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-xl relative mb-4 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6 mr-2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.38 3.375 2.07 3.375h14.006c1.69 0 2.936-1.875 2.069-3.375L12.707 5.625c-.546-.956-1.953-.956-2.5 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
            </svg>
            <span className="block sm:inline font-bold">ERROR: </span>
            <span className="block sm:inline">{alertMessage}</span>
          </div>
        )}

        <form onSubmit={handleRegister} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <input
              type="text"
              name="firstName"
              placeholder="Primer Nombre"
              className={`w-full px-5 py-3 bg-gray-50 dark:bg-gray-700 border ${errors.firstName ? 'border-red-500' : 'border-gray-300'} dark:border-gray-600 rounded-xl text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 shadow-sm`}
              value={formData.firstName}
              onChange={handleChange}
            />
            {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>}
          </div>
          <div>
            <input
              type="text"
              name="secondName"
              placeholder="Segundo Nombre (Opcional)"
              className="w-full px-5 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-xl text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 shadow-sm"
              value={formData.secondName}
              onChange={handleChange}
            />
          </div>
          <div>
            <input
              type="text"
              name="lastName"
              placeholder="Apellido Paterno"
              className={`w-full px-5 py-3 bg-gray-50 dark:bg-gray-700 border ${errors.lastName ? 'border-red-500' : 'border-gray-300'} dark:border-gray-600 rounded-xl text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 shadow-sm`}
              value={formData.lastName}
              onChange={handleChange}
            />
            {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>}
          </div>
          <div>
            <input
              type="text"
              name="secondLastName"
              placeholder="Apellido Materno (Opcional)"
              className="w-full px-5 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-xl text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 shadow-sm"
              value={formData.secondLastName}
              onChange={handleChange}
            />
          </div>
          <div>
            <input
              type="date"
              name="dob"
              placeholder="Fecha de Nacimiento"
              className={`w-full px-5 py-3 bg-gray-50 dark:bg-gray-700 border ${errors.dob ? 'border-red-500' : 'border-gray-300'} dark:border-gray-600 rounded-xl text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 shadow-sm`}
              value={formData.dob}
              onChange={handleChange}
            />
            {errors.dob && <p className="text-red-500 text-sm mt-1">{errors.dob}</p>}
          </div>
          <div>
            <input
              type="tel"
              name="phone"
              placeholder="Número de Celular"
              className={`w-full px-5 py-3 bg-gray-50 dark:bg-gray-700 border ${errors.phone ? 'border-red-500' : 'border-gray-300'} dark:border-gray-600 rounded-xl text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 shadow-sm`}
              value={formData.phone}
              onChange={handleChange}
            />
            {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
          </div>
          <div>
            <select
              name="docType"
              className={`w-full px-5 py-3 bg-gray-50 dark:bg-gray-700 border ${errors.docType ? 'border-red-500' : 'border-gray-300'} dark:border-gray-600 rounded-xl text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 shadow-sm`}
              value={formData.docType}
              onChange={handleChange}
            >
              <option value="">Tipo de Documento</option>
              <option value="INE">INE</option>
              <option value="Pasaporte">Pasaporte</option>
              <option value="Licencia">Licencia de Conducir</option>
            </select>
            {errors.docType && <p className="text-red-500 text-sm mt-1">{errors.docType}</p>}
          </div>
          <div>
            <input
              type="text"
              name="docNumber"
              placeholder="Número de Documento"
              className={`w-full px-5 py-3 bg-gray-50 dark:bg-gray-700 border ${errors.docNumber ? 'border-red-500' : 'border-gray-300'} dark:border-gray-600 rounded-xl text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 shadow-sm`}
              value={formData.docNumber}
              onChange={handleChange}
            />
            {errors.docNumber && <p className="text-red-500 text-sm mt-1">{errors.docNumber}</p>}
          </div>
          <div className="md:col-span-2">
            <input
              type="email"
              name="email"
              placeholder="Correo Electrónico"
              className={`w-full px-5 py-3 bg-gray-50 dark:bg-gray-700 border ${errors.email ? 'border-red-500' : 'border-gray-300'} dark:border-gray-600 rounded-xl text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 shadow-sm`}
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>
          <div className="md:col-span-2 relative">
            <input
              type={showPassword ? 'text' : 'password'}
              name="password"
              placeholder="Contraseña"
              className={`w-full px-5 py-3 bg-gray-50 dark:bg-gray-700 border ${errors.password ? 'border-red-500' : 'border-gray-300'} dark:border-gray-600 rounded-xl text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 shadow-sm pr-12`}
              value={formData.password}
              onChange={handleChange}
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
            {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
          </div>

          <div className="md:col-span-2 flex justify-end space-x-4 mt-6">
            <button
              type="button"
              onClick={handleCancel}
              className="px-8 py-3 border border-red-500 text-red-500 rounded-xl font-extrabold text-lg hover:bg-red-500 hover:text-white transition-all duration-300 shadow-lg transform hover:-translate-y-1"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="px-8 py-3 border border-green-500 text-green-500 rounded-xl font-extrabold text-lg hover:bg-green-500 hover:text-white transition-all duration-300 shadow-lg transform hover:-translate-y-1"
            >
              Guardar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default RegisterScreen;