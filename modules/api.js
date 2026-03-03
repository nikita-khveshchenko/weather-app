const API_KEY = "2cd3d12d128ef71817055caa2bc15e6c";
const BASE_URL = "https://api.openweathermap.org/data/2.5";

export async function fetchWeatherByCoords(lat, lon) {
  const response = await fetch(`${BASE_URL}/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`);
  if(!response.ok) throw new Error('Ошибка получения погоды');
  return await response.json();
}

export async function fetchForecastByCoords(lan, lon) {
  const response = await fetch(`${BASE_URL}/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`);
  if(!response.ok) throw new Error('Ошибка получения прогноза погоды');
  return await response.json();
}

export async function fetchWeatherByCityName(city) {
  const response = await fetch(`${BASE_URL}/weather?q=${city}&units=metric&appid=${API_KEY}`);
  if(!response.ok) throw new Error('Город не найден');
  return await response.json();
}

export async function fetchForecastByCityName(city) {
  const response = await fetch(`${BASE_URL}/forecast?q=${city}&units=metric&appid=${API_KEY}`);
  if(!response.ok) throw new Error('Город не найден');
  return await response.json();
}