# express-ai-endpoint-bkinc

A lightweight AI-powered Express.js server by BK Inc. 🔥
Accepts user input via API, returns OpenAI-style responses.
Built to showcase API structuring, scalability, and clean server setup.

## 🔧 Stack
- Node.js
- Express
- dotenv
- OpenAI SDK (optional)
- CORS (AWS compatibility)

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
3. Create a `.env` file with your OpenAI key and NODE_ENV=production
4. Start the server: `npm start`

POST to `/api/ai-response` with `{ "prompt": "your question" }`

## ☁️ AWS Deployment Notes
- Ensure `NODE_ENV=production` in `.env`
- Static client files must be built in `/client/build`
- Make sure security group rules allow traffic on the specified port
- Use a process manager like `pm2` for production stability
