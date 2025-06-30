# express-ai-endpoint-bkinc

A lightweight AI-powered Express.js server by BK Inc. 🔥
Accepts user input via API, returns OpenAI-style responses.

## 🔧 Stack
- Node.js
- Express
- dotenv
- OpenAI SDK (optional)

## 📁 Structure
```
express-ai-endpoint-bkinc/
├── index.js
├── .env.example
├── routes/
│   └── ai.js
├── controllers/
│   └── aiController.js
└── README.md
```

## 🚀 How to Use
1. Clone the repo
2. Run `npm install`
3. Create a `.env` file with your OpenAI key
4. Start the server: `npm start`

POST to `/api/ai-response` with `{ "prompt": "your question" }`
