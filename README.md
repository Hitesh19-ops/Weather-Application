# 🌦️ Weather App

A modern and responsive **Weather Forecasting Web Application** built using **React.js**, **Vite**, and **Material UI**.  
The application fetches real-time weather data from the **OpenWeatherMap API** and dynamically displays weather information based on the searched city.

---

## 🔗 Live Demo

👉 https://weather-application-bay-psi.vercel.app/

---

## ✨ Features

- 🌍 Search weather by city name  
- 🌡️ Displays:
  - Current Temperature
  - Minimum & Maximum Temperature
  - Humidity
  - “Feels Like” Temperature
  - Weather Description
- ⛅ Dynamic Weather Icons (Sunny / Rainy / Cold)
- 🖼️ Dynamic Background Images based on temperature & humidity
- 🚫 Proper error handling for invalid city names
- 🎨 Clean and responsive UI using Material UI
- ⚡ Fast development & build powered by Vite

---

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|----------|
| React.js | Frontend Framework |
| Vite | Build Tool |
| Material UI (MUI) | UI Components |
| OpenWeatherMap API | Weather Data |
| JavaScript (ES6+) | Application Logic |
| CSS | Styling |

---

## 📂 Project Structure

```
mini-project-react/
│
├── public/
├── src/
│   ├── assets/
│   ├── App.jsx
│   ├── WeatherApp.jsx
│   ├── SearchBox.jsx
│   ├── InfoBox.jsx
│   ├── App.css
│   ├── WeatherApp.css
│   ├── SearchBox.css
│   ├── InfoBox.css
│   ├── index.css
│   └── main.jsx
│
├── .env (ignored)
├── .gitignore
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

---

## ⚙️ Installation & Setup

To run this project locally:

```bash
# Clone the repository
git clone https://github.com/Hitesh19-ops/Weather-Application.git

# Navigate into the project folder
cd mini-project-react

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will run at:

```
http://localhost:5173
```

---

## 🔐 Environment Variables

This project uses environment variables to secure the API key.

Create a `.env` file in the root directory:

```bash
VITE_API_KEY=your_api_key_here
```

⚠️ The `.env` file is ignored using `.gitignore` and is not pushed to GitHub.

---

## 🚀 Deployment

The application is deployed on **Vercel**.

To deploy your own version:

1. Push project to GitHub  
2. Connect repository to Vercel  
3. Add Environment Variable in Vercel:

```bash
VITE_API_KEY=your_api_key_here
```

4. Redeploy

---

## 📚 What I Learned

- Working with REST APIs using `fetch`
- Handling asynchronous operations with `async/await`
- Managing state using React `useState`
- Passing data between components using props
- Conditional rendering
- Environment variable security in frontend projects
- Deploying React apps using Vercel

---

## 👨‍💻 Author

**Hitesh Srivastava**  

GitHub: https://github.com/Hitesh19-ops
