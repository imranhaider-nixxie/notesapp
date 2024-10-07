# Notes App

## Overview
This is a simple Notes application that allows users to create, view, edit, and delete notes. It consists of a frontend built with React and Material UI, and a backend developed with Node.js, Express, and MongoDB.

## Tech Stack

### Frontend
- **React**: v17
- **Material UI**: v5

### Backend
- **Node.js**: v18 (can use v20)
- **Express**: v4
- **Mongoose**: v6 (for MongoDB object modeling)

### Database
- **MongoDB**: Recommended to use Docker for local instance.

## Getting Started

### Prerequisites
- Node.js (v18 or v20)
- npm (Node Package Manager)
- MongoDB (Docker recommended)

### Installation

1. **Clone the Repository**
   ```bash
   git clone https://github.com/YOUR_USERNAME/notesapp.git
   cd notesapp
2. **Set Up Backend**
    ```
    cd backend
    npm install
 
3. **Set up Frontend**
    ```
    cd ../frontend
    npm install
 
4. **Run MongoDB using Docker:**: If you haven't already set up MongoDB, run the following command in your terminal:
    ```
    docker run --name mongodb -d -p 27017:27017 mongo
 
5. **Run the backend server:**:
    ```
    cd ../backend
    npm run dev
 
6. **Run the Frontend server:**:
    ```
    cd ../frontend
    npm start
