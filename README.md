# Dbuzzz Frontend (React + Vite)

## Setup Instructions

### 🔧 Step 1: Backend Setup (Required First)

```bash
git clone https://github.com/nilesh8795/Dbuzzz_backend.git
cd Dbuzzz_backend
npm install
```

Create a `.env` file inside backend root:

```env
PORT=5000
MONGODB_URI=mongodb://127.0.0.1:27017/dbuzzz
JWT_SECRET=your_jwt_secret_key
JWT_EXPIRES_IN=1d
```

Start the backend server:

```bash
npm start
```

Your backend will run on: `http://localhost:5000`  
(Optional live backend: `https://dbuzzz-backend.onrender.com`)

---

### 🚀 Step 2: Frontend Setup

```bash
git clone https://github.com/nilesh8795/Dbuzzz_frontend.git
cd Dbuzzz_frontend
npm install
```

Create a `.env` file in frontend root:

```env
# For local backend
# VITE_API_URL=http://localhost:5000/api

# For hosted backend
VITE_API_URL=https://dbuzzz-backend.onrender.com/api
```

Now start the frontend:

```bash
npm run dev
```

Frontend will run at: `http://localhost:5173`

---

## 📡 API Endpoints

### 🔐 User Routes (`/api/users`)
| Method | Endpoint        | Description          | Auth Required |
|--------|------------------|----------------------|---------------|
| POST   | `/register`      | Register new user    | ❌            |
| POST   | `/login`         | Login user           | ❌            |
| GET    | `/me`            | Get logged in user profile | ✅       |

### ✅ Task Routes (`/api/tasks`)
| Method | Endpoint           | Description               | Auth Required |
|--------|--------------------|---------------------------|---------------|
| POST   | `/create`          | Create a task             | ✅            |
| GET    | `/get`             | Get all tasks by user     | ✅            |
| GET    | `/active`          | Get active tasks          | ✅            |
| GET    | `/pending`         | Get pending tasks         | ✅            |
| GET    | `/completed`       | Get completed tasks       | ✅            |
| PUT    | `/update/:id`      | Update a task by ID       | ✅            |
| DELETE | `/delete/:id`      | Delete a task by ID       | ✅            |

> 🛡️ All task routes require JWT authentication.

---

## 🛠️ Technologies Used

### Frontend:
- React
- Vite
- Tailwind CSS
- Redux Toolkit
- Axios
- React Router DOM

### Backend:
- Node.js
- Express.js
- MongoDB (with Mongoose)
- JWT (Authentication)
- dotenv
- CORS

---

## ☁️ Deployment (Bonus Points)

### ✅ Backend (Render):
1. Create a new Web Service on [https://render.com](https://render.com)
2. Connect your GitHub repo: `Dbuzzz_backend`
3. Add environment variables (same as `.env`)
4. Set build command: `npm install`
5. Start command: `npm start`

### ✅ Frontend (Vercel/Netlify):
1. Go to [https://vercel.com](https://vercel.com) or [https://netlify.com](https://netlify.com)
2. Import `Dbuzzz_frontend` GitHub repo
3. Add environment variable:
   - `VITE_API_URL=https://your-backend-url/api`
4. Build command: `npm run build`
5. Output directory: `dist`

---

✅ Everything is now ready to use and deploy!
