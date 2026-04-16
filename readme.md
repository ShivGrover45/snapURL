# SnapURL — Backend

A fast, lightweight URL shortener API built with Node.js, Express, and MongoDB. Generates short IDs, handles redirects, and tracks visit analytics.

---

## Live API

```
https://snapurl-hf8u.onrender.com
```

---

## Tech Stack

- **Runtime** — Node.js
- **Framework** — Express.js
- **Database** — MongoDB (via Mongoose)
- **Hosting** — Render
- **Short ID generation** — nanoid / shortid

---

## API Endpoints

### POST `/api/link`
Shorten a long URL.

**Request body:**
```json
{
  "url": "https://example.com"
}
```

**Response:**
```json
{
  "shortID": "kPDoCpnR",
  "link": "https://snapurl-hf8u.onrender.com/api/kPDoCpnR"
}
```

---

### GET `/api/:shortID`
Redirects to the original URL and records a visit timestamp.

```
GET https://snapurl-hf8u.onrender.com/api/kPDoCpnR
→ 302 Redirect to https://example.com
```

---

### GET `/api/analytics/:shortID`
Returns visit count and full visit history for a short URL.

**Response:**
```json
{
  "totalVisits": 3,
  "analytics": [
    { "timestamp": 1776341689084, "_id": "..." },
    { "timestamp": 1776341712000, "_id": "..." }
  ]
}
```

---

## Getting Started Locally

### Prerequisites
- Node.js v18+
- MongoDB Atlas account (or local MongoDB)

### Installation

```bash
git clone https://github.com/yourusername/snapurl-backend.git
cd snapurl-backend
npm install
```

### Environment Variables

Create a `.env` file in the root:

```env
MONGO_URI=your_mongodb_connection_string
BASE_URL=http://localhost:8000
PORT=8000
```

### Run the server

```bash
node server.js
```

The API will be available at `http://localhost:8000`.

---

## Project Structure

```
snapurl-backend/
├── controller/
│   └── url.controller.js    # generateShortUrl, getShortUrl, getAnalytics
├── routes/
│   └── url.router.js        # Route definitions
├── models/
│   └── url.model.js         # Mongoose schema
├── app.js                   # Express app setup (CORS, middleware, routes)
└── server.js                # Server entry point
```

---

## Deployment (Render)

1. Push your code to GitHub
2. Go to [render.com](https://render.com) → New Web Service → Connect your repo
3. Set the following environment variables in the Render dashboard:

| Key | Value |
|-----|-------|
| `MONGO_URI` | Your MongoDB Atlas connection string |
| `BASE_URL` | `https://your-app.onrender.com` |
| `PORT` | `8000` |

Render redeploys automatically on every push to `main`.

---

## Notes

- The router must define `/analytics/:shortID` **before** `/:shortID` — otherwise Express matches analytics requests as short IDs.
- `BASE_URL` must be set in the Render environment dashboard, not just in the local `.env` file (`.env` is gitignored and never pushed).