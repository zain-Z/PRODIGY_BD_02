
# Task 02 – Persistent Storage with MongoDB (NestJS)

This project is the second task completed as part of the **Backend Web Development Internship at Prodigy InfoTech**.

## 🚀 Task Overview

Extend the basic REST API (Task 01) by integrating **MongoDB** to enable persistent storage of user data.

## 📦 Tech Stack

- **Framework:** NestJS (Node.js + TypeScript)
- **Database:** MongoDB
- **ODM:** Mongoose
- **Validation:** class-validator + DTOs
- **Environment Config:** @nestjs/config, .env
- **Tooling:** Postman (for testing)

## 📁 Features

- ✅ Create, Read, Update, Delete (CRUD) operations on user data.
- ✅ MongoDB database integration using Mongoose.
- ✅ Environment-based configuration using `.env` file.
- ✅ Input validation using DTOs (`class-validator`).
- ✅ Proper error handling and status codes.
- ✅ Modular architecture with controllers, services, and schema.

## 🛠️ Installation

```bash
# Clone the repository
git clone https://github.com/zain-Z/PRODIGY_BD_02.git
cd PRODIGY_BD_02

# Install dependencies
npm install

# Copy .env.example to .env and update MongoDB URI
cp .env.example .env

# Start the server
npm run start:dev
```

## 🌐 API Endpoints

| Method | Endpoint        | Description          |
|--------|------------------|----------------------|
| POST   | /users           | Create a new user    |
| GET    | /users           | Get all users        |
| GET    | /users/:id       | Get a single user    |
| PUT    | /users/:id       | Update user details  |
| DELETE | /users/:id       | Delete a user        |

## 📄 Sample .env File

```
MONGO_URI=mongodb://localhost:27017/prodigy-users
```

## 🧪 Testing

Use **Postman** to test the above routes.

---

✅ **Successfully completed as part of the Prodigy InfoTech Internship**  
🔗 [#ProdigyInfoTech](https://www.linkedin.com/company/prodigy-infotech)
