import { appState } from "./modules/state.js";
import { loadFavorites, loadHistory } from "./modules/storage.js";
import UI from "./modules/ui.js";

// Загружаем сохранённые данные
appState.setFavorites(loadFavorites());
appState.setHistory(loadHistory());

// Запуск интерфейса
new UI();
