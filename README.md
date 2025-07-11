# 🛠️ Dbuzzz Todo - Backend

This is the **backend** for the **Dbuzzz Todo Application**, built using **Node.js**, **Express.js**, and **MongoDB**. It provides APIs for user authentication and todo task management using JWT-based authorization.

---

## 🔧 Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/nilesh8795/Dbuzzz_backend.git
cd Dbuzzz_Backend


npm install


# Create a .env file at the root with the following values

PORT=5000
MONGODB_URI=mongodb://127.0.0.1:27017/dbuzzz
JWT_SECRET=your_jwt_secret_key
JWT_EXPIRES_IN=1d



# Start the Server

npm start


Dbuzzz_backend/
├── config/           # MongoDB connection setup
├── controllers/      # Logic for auth and todo routes
├── middleware/       # Auth and error middleware
├── models/           # Mongoose schemas
├── routes/           # Route declarations
├── example.env       # Sample .env template
├── index.js          # App entry point
├── package.json      # NPM scripts and dependencies
└── README.md


# next setup frontend
https://github.com/nilesh8795/Dbuzzz_frontend.git