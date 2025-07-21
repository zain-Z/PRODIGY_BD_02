
# Task 01 – Basic REST API with CRUD Operations (NestJS)

This project is part of the Prodigy InfoTech Backend Internship. It implements a basic REST API using **NestJS** to perform CRUD operations on a `User` resource using in-memory storage.

## 🛠 Tech Stack

- Node.js
- NestJS
- TypeScript
- Postman (for testing)

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/zain-Z/PRODIGY_BD_01.git
cd PRODIGY_BD_01
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run start:dev
```

## 🚀 API Endpoints

| Method | Endpoint         | Description          |
|--------|------------------|----------------------|
| GET    | `/users`         | Get all users        |
| GET    | `/users/:id`     | Get user by ID       |
| POST   | `/users`         | Create new user      |
| PUT    | `/users/:id`     | Update user by ID    |
| DELETE | `/users/:id`     | Delete user by ID    |

## 🧪 Testing the API

Use **Postman** to interact with the endpoints:

### Sample User Object:
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "age": 25
}
```

- Make sure the email is valid.
- `id` is automatically generated (UUID).

## 📄 DTO Explanation

In NestJS, a DTO (**Data Transfer Object**) defines the shape of the data sent over the network.  
We use it to **validate** and **type-check** incoming request bodies.

Example: `create-user.dto.ts`
```ts
export class CreateUserDto {
  name: string;
  email: string;
  age: number;
}
```

DTOs help ensure clean and safe data flow between client and server.

## ⚙ Error Handling & Validation

- Returns `400 Bad Request` for invalid inputs.
- Returns `404 Not Found` if user ID does not exist.
- Returns `201 Created`, `200 OK`, and `204 No Content` as appropriate.

## 📚 Learning

This project helped understand:
- NestJS fundamentals (modules, controllers, services)
- DTOs and validation
- In-memory CRUD operations
- RESTful routing

---

© 2025 Prodigy InfoTech Internship | Task 01
