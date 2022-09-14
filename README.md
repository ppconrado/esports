## BACKEND INIT SETUP

```
{
  "name": "server",
  "version": "1.0.0",
  "description": "",
  "main": "src/server.js",
  "scripts": {
    "build": "tsc",
    "dev": "ts-node-dev src/server.ts"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "express": "^4.18.1"
  },
  "devDependencies": {
    "@types/express": "^4.17.13",
    "ts-node-dev": "^2.0.0",
    "typescript": "^4.8.3"
  }
}
```

#### npx tsc --init --> tsconfig.json + setup diretorios

## FRONTEND INIT SETUP

```
{
  "name": "web",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  },
  "devDependencies": {
    "@types/react": "^18.0.17",
    "@types/react-dom": "^18.0.6",
    "@vitejs/plugin-react": "^2.1.0",
    "typescript": "^4.6.4",
    "vite": "^3.1.0"
  }
}
```
