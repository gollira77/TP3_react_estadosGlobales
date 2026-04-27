# 🚀 Gestor de Misiones Espaciales

Aplicación fullstack desarrollada para la materia **Taller de Lenguajes de Programación III**.

Este proyecto permite gestionar misiones espaciales mediante operaciones CRUD completas, implementando **Backend con Node.js + Express** y **Frontend con React**, incorporando además **estado global con Context API y useReducer**.

---

## 📌 Objetivo

El objetivo del proyecto es desarrollar una aplicación que permita:

- Crear misiones
- Listar misiones
- Buscar misiones
- Editar misiones
- Eliminar misiones

Además, se implementa manejo de **estado global** utilizando:

- `createContext`
- `Provider`
- `useContext`
- `useReducer`

---

## 🧠 Tecnologías utilizadas

### Backend
- Node.js
- Express
- CORS
- Nodemon

### Frontend
- React
- Vite
- Anime.js
- Context API
- useReducer
- useState
- useEffect
- useRef

### Control de versiones
- Git
- GitHub

---

## 📁 Estructura del proyecto

```text
gestor-misiones-espaciales/
│
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   ├── data/
│   │   ├── routes/
│   │   ├── utils/
│   │   └── app.js
│   └── server.js
│
├── frontend/
│   ├── src/
│   │   ├── api/
│   │   ├── components/
│   │   ├── context/
│   │   │   ├── MissionContext.jsx
│   │   │   └── missionReducer.js
│   │   ├── App.jsx
│   │   └── main.jsx
│
└── README.md
```

---

## ⚙️ Instalación y ejecución

---

### 1. Clonar repositorio

```bash
git clone URL_DEL_REPOSITORIO
```

---

### 2. Backend

```bash
cd backend
npm install
npm run dev
```

Servidor:

```text
http://localhost:3001
```

---

### 3. Frontend

```bash
cd frontend
npm install
npm run dev
```

Aplicación:

```text
http://localhost:5173
```

---

## 🌐 API REST

### Obtener todas las misiones

```http
GET /api/missions
```

---

### Obtener misión por ID

```http
GET /api/missions/:id
```

---

### Crear misión

```http
POST /api/missions
```

---

### Actualizar misión

```http
PUT /api/missions/:id
```

---

### Eliminar misión

```http
DELETE /api/missions/:id
```

---

## 🧠 Estado global

La aplicación implementa **Context API + useReducer** para centralizar la información principal del sistema.

### Estado inicial

```js
{
  missions: []
}
```

---

### Acciones implementadas

- `SET_MISSIONS`
- `ADD_MISSION`
- `UPDATE_MISSION`
- `DELETE_MISSION`

---

## 🎨 Características visuales

- Fondo espacial animado
- Diseño futurista
- Efectos visuales con Anime.js
- Transiciones suaves
- Animación de formularios
- Animación de edición

---

## 🧪 Funcionalidades

- Crear misión
- Buscar por nombre o destino
- Editar misión
- Eliminar misión
- Estado global
- Persistencia temporal en memoria
- Validaciones backend
- Manejo de errores

---


## 📚 Materia

**Taller de Lenguajes de Programación III**  
React / Node.js / Estado Global