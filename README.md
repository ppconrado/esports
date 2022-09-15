## BACKEND INIT SETUP - SERVER

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

## FRONTEND INIT SETUP - WEB

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
    "phosphor-react": "^1.4.1",
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  },
  "devDependencies": {
    "@types/react": "^18.0.17",
    "@types/react-dom": "^18.0.6",
    "@vitejs/plugin-react": "^2.1.0",
    "autoprefixer": "^10.4.11",
    "postcss": "^8.4.16",
    "tailwindcss": "^3.1.8",
    "typescript": "^4.6.4",
    "vite": "^3.1.0"
  }
}

```

## MOBILE INIT SETUP

```
expo init mobile
```

```
{
  "name": "mobile",
  "version": "1.0.0",
  "main": "node_modules/expo/AppEntry.js",
  "scripts": {
    "start": "expo start",
    "android": "expo start --android",
    "ios": "expo start --ios",
    "web": "expo start --web"
  },
  "dependencies": {
    "@expo-google-fonts/inter": "^0.2.2",
    "expo": "~46.0.9",
    "expo-font": "~10.2.0",
    "expo-status-bar": "~1.4.0",
    "react": "18.0.0",
    "react-dom": "18.0.0",
    "react-native": "0.69.5",
    "react-native-web": "~0.18.7",
    "react-native-safe-area-context": "4.3.1",
    "expo-linear-gradient": "~11.4.0"
  },
  "devDependencies": {
    "@babel/core": "^7.12.9",
    "@types/react": "~18.0.14",
    "@types/react-native": "~0.69.1",
    "typescript": "~4.3.5"
  },
  "private": true
}

```

### create "tailwind.config.cjs" and "postcss.config.cjs"

```
npx tailwindcss init -p
```

### create web\src\styles\main.css and add:

```
@tailwind base;
@tailwind components;
@tailwind utilities;
```
