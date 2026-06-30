# 🤖 SigmaGPT - AI Powered Chat Application

SigmaGPT is a modern AI-powered chatbot application built using the MERN ecosystem. It provides users with a clean and interactive chat interface to communicate with an AI assistant powered by the OpenAI API. The application stores chat history in MongoDB, allowing users to continue conversations seamlessly.

---

## 📖 Project Overview

SigmaGPT is designed to demonstrate the integration of modern web technologies with Artificial Intelligence. The application follows a client-server architecture where the React frontend communicates with an Express backend. The backend securely interacts with the OpenAI API and stores conversation data in MongoDB.

The project showcases full-stack development concepts including REST APIs, state management, asynchronous communication, secure API handling, and database integration.

---

## ✨ Features

- 💬 AI-powered conversational chatbot
- 🤖 Integration with OpenAI API
- 📝 Persistent chat history stored in MongoDB
- ⚡ Fast and responsive React interface
- 🎨 Modern and clean UI
- 🔄 Real-time communication between frontend and backend
- 📂 Organized conversation threads
- 🌐 RESTful API architecture
- 🔒 Secure environment variable management
- 📱 Responsive design

---

## 🛠️ Tech Stack

### Frontend
- React.js
- Vite
- JavaScript
- HTML5
- CSS3

### Backend
- Node.js
- Express.js

### Database
- MongoDB
- Mongoose

### AI Integration
- OpenAI API

### Tools
- Git
- GitHub
- VS Code
- npm

---

## 📁 Project Structure

```
SigmaGPT
│
├── Backend
│   ├── models
│   ├── routes
│   ├── utils
│   ├── server.js
│   ├── package.json
│   └── .env
│
├── Frontend
│   ├── public
│   ├── src
│   ├── package.json
│   └── vite.config.js
│
├── README.md
└── .gitignore
```

---

## ⚙️ Installation

### 1. Clone Repository

```bash
git clone https://github.com/samarthboraganve/SigmaGPT.git
```

Move into the project folder.

```bash
cd SigmaGPT
```

---

### 2. Backend Setup

```bash
cd Backend
npm install
```

Create a `.env` file inside the Backend folder.

Example:

```env
OPENAI_API_KEY=your_openai_api_key
MONGODB_URI=your_mongodb_connection_string
PORT=5000
```

Start the backend server.

```bash
npm start
```

---

### 3. Frontend Setup

Open another terminal.

```bash
cd Frontend
npm install
npm run dev
```

The frontend will start on:

```
http://localhost:5173
```

---

## 🔗 API Flow

```
React Frontend
        │
        ▼
Express REST API
        │
        ▼
OpenAI API
        │
        ▼
MongoDB Database
```

---

## 🧠 How It Works

1. User enters a message in the React interface.
2. The frontend sends the request to the Express backend.
3. The backend forwards the prompt to the OpenAI API.
4. OpenAI generates an intelligent response.
5. The response is stored in MongoDB.
6. The frontend displays the AI response instantly.
7. Previous conversations can be retrieved from the database.

---


---

## 🚀 Future Enhancements


- Image Generation
- File Upload Support
- Code Syntax Highlighting
- Multiple AI Models
- Chat Export
- Markdown Rendering
- Conversation Search
- Mobile Optimization

---

## 📚 Learning Outcomes

This project helped in understanding:

- MERN Stack Development
- REST API Design
- React Component Architecture
- Express Middleware
- MongoDB CRUD Operations
- OpenAI API Integration
- Environment Variable Management
- Asynchronous Programming
- State Management
- Git & GitHub Workflow

---

## 📈 Project Highlights

- Full Stack AI Application
- Clean Project Structure
- RESTful API
- MongoDB Integration
- Modern React UI
- Secure API Key Handling
- Scalable Architecture

---

## 🤝 Contributing

Contributions are welcome.

1. Fork the repository
2. Create a feature branch

```bash
git checkout -b feature-name
```

3. Commit your changes

```bash
git commit -m "Add new feature"
```

4. Push your branch

```bash
git push origin feature-name
```

5. Open a Pull Request

---

## 👨‍💻 Author

**Samarth Boraganve**

Java Full Stack Developer | MERN Stack Developer

GitHub: https://github.com/samarthboraganve

LinkedIn: www.linkedin.com/in/samarth-boraganve

---

## ⭐ Support

If you found this project useful, consider giving it a ⭐ on GitHub.

Your support motivates me to build more open-source projects.

---

## 📄 License

This project is licensed under the MIT License.
