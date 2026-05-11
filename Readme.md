# Venture Launcher – Founder API

A simple REST API built with **Node.js** and **Express** to manage startup founders.  
Uses an in-memory array as the data store (no database required).

---

## Project Structure

```
venture-launcher-beginner-task/
  package.json
  server.js
  routes/
    founders.js
  README.md
```

---

## How to Install

1. Make sure you have [Node.js](https://nodejs.org/) installed.
2. Clone or download this project.
3. Open a terminal in the project folder and run:

```bash
npm install
```

---

## How to Run

```bash
npm start
```

The server will start at: `http://localhost:3000`

---

## API Endpoints

### 1. Create a Founder
**POST** `/founders`

**Request Body (JSON):**
```json
{
  "name": "Abhi Korepilla",
  "email": "abhi@example.com",
  "stage": "mvp"
}
```

**Success Response – 201 Created:**
```json
{
  "id": "a1b2c3d4-...",
  "name": "Abhi Korepilla",
  "email": "abhi@example.com",
  "stage": "mvp"
}
```

**Error Response – 400 Bad Request:**
```json
{ "error": "Stage must be one of: idea, mvp, revenue" }
```

---

### 2. List All Founders
**GET** `/founders`

**Success Response – 200 OK:**
```json
[
  {
    "id": "a1b2c3d4-...",
    "name": "Abhi Korepilla",
    "email": "abhi@example.com",
    "stage": "mvp"
  }
]
```

---

### 3. Get a Founder by ID
**GET** `/founders/:id`

**Example:** `GET /founders/a1b2c3d4-...`

**Success Response – 200 OK:**
```json
{
  "id": "a1b2c3d4-...",
  "name": "Abhi Korepilla",
  "email": "abhi@example.com",
  "stage": "mvp"
}
```

**Error Response – 404 Not Found:**
```json
{ "error": "Founder not found" }
```

---

## Valid Stage Values

| Stage   | Meaning                    |
|---------|----------------------------|
| idea    | Just an idea, not built yet |
| mvp     | Minimum viable product ready |
| revenue | Generating revenue          |