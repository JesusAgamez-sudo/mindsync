export const toggleDarkMode = (isDarkMode, setIsDarkMode) => {
  setIsDarkMode(!isDarkMode);
  if (document.documentElement.classList.contains('dark')) {
    document.documentElement.classList.remove('dark');
  } else {
    document.documentElement.classList.add('dark');
  }
};