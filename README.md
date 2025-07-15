# URL Shortener Frontend

Интерфейс для сервиса сокращения ссылок, реализованный на Vue 3 + Vite. Позволяет сократить длинные URL и получить короткую ссылку.

## 🚀 Функциональность

- Отправка исходного URL на бэкенд
- Отображение сокращённой ссылки
- Копирование короткой ссылки в буфер обмена
- Простая и адаптивная верстка с использованием Tailwind CSS

## 🛠️ Стек технологий

- [Vue 3 (Composition API)](https://vuejs.org)
- [Vite](https://vitejs.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [Axios](https://axios-http.com)

## 🔧 Установка и запуск

1. Клонируй репозиторий:

```bash
git clone https://github.com/laz3rjenkins/url_shortener_frontend.git
cd url_shortener_frontend
```

2. Установи зависимости:

```bash
npm install
```

3. Создай `.env` файл и укажи адрес бэкенда:

```env
VITE_API_URL=http://localhost:8080
```

4. Запусти dev-сервер:

```bash
npm run dev
```

## 📁 Структура проекта

```
src/
├── assets/           # Стили и ресурсы
├── components/       # Компоненты
├── App.vue           # Корневой компонент
└── main.js           # Точка входа
```