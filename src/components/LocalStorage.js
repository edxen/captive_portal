const LocalStorage = () => {
  const key = 'demo_connection';

  const save = (data) => localStorage.setItem(key, JSON.stringify(data));

  const load = () => {
    const savedData = localStorage.getItem(key);
    if (savedData !== null) return JSON.parse(savedData);
    return null;
  };

  const deleteKey = () => localStorage.removeItem(key);

  return { deleteKey, save, load };
};

export default LocalStorage;