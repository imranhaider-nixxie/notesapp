# Notes App Backend

This is the backend part of the Notes App built using Node.js, Express, and MongoDB.

## Tech Stack
- **Node.js**: v18 or v20
- **Express**: v4
- **Mongoose**: v6 (for database object structure)
- **MongoDB**: Recommended to run with Docker

## Getting Started

### Prerequisites
Make sure you have the following installed on your machine:
- Node.js (v18 or v20)
- npm (comes with Node.js)
- Docker (for MongoDB)

### Installation Steps

1. **Clone the repository**:
   ```bash
   git clone https://github.com/YOUR_USERNAME/notesapp.git
   cd notesapp/backend
2. **Install the dependencies:**:
    npm install
3. **Run MongoDB using Docker:**: If you haven't already set up MongoDB, run the following command in your terminal:
    docker run --name mongodb -d -p 27017:27017 mongo
4. **Run the backend server:**:
   npm run dev
5. **Access the API**: The API will be available at http://localhost:5000/api/notes

## API Endpoints
* GET /api/notes: Retrieve all notes.
* POST /api/notes: Create a new note.
* PUT /api/notes/:id: Update an existing note.
* DELETE /api/notes/:id: Delete a note.

```
backend
├── models
│   └── Note.js           # Mongoose model for the note
├── routes
│   └── notes.js          # Route handlers for note-related API
├── server.js             # Main server file
├── package.json          # Project dependencies and scripts
└── README.md             # Documentation for the backend

```