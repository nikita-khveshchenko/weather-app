class AppState {
  constructor() {
    this.data = {
      currentCity: null,
      weather: null,
      forecast: null,
      favorites: [],
      history: [],
      loading: false,
      error: null
    }
    this.listeners = []
  }

  // Подписка на изменения
  subscribe(callback) {
    this.listeners.forEach(listener => listener(this.data));
  }

  // Уведомление всех подписчиков
  notify() {
    this.listeners.forEach(listener => listener(this.data));
  }

  // Метод для обновления состояния
  setLoading(loading) {
    this.data.loading = loading;
    this.notify();
  }

  setError(error) {
    this.data.error = error;
    this.notify();
  }

  setWeatherData(city, weather, forecast) {
    this.data.currentCity = city;
    this.data.weather = weather;
    this.data.forecast = forecast;
    this.data.error = null;
    this.notify();
  }

  setFavorites(favorites) {
    this.data.favorites = favorites;
    this.notify();
  }

  setHistory(history) {
    this.data.history = history;
    this.notify();
  }
}

export const appState = new AppState();