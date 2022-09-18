## BACKEND INIT SETUP - SERVER

```
{
  "name": "server",
  "version": "1.0.0",
  "description": "",
  "main": "src/server.js",
  "scripts": {
    "build": "tsc",
    "dev": "ts-node-dev --exit-child src/server.ts"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "@prisma/client": "^4.3.1",
    "cors": "^2.8.5",
    "express": "^4.18.1"
  },
  "devDependencies": {
    "@types/cors": "^2.8.12",
    "@types/express": "^4.17.13",
    "prisma": "^4.3.1",
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
    "react-dom": "^18.2.0",
    "@radix-ui/react-dialog": "^1.0.0"
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
    "@react-navigation/native": "^6.0.12",
    "@react-navigation/native-stack": "^6.8.0",
    "expo": "~46.0.9",
    "expo-font": "~10.2.0",
    "expo-linear-gradient": "~11.4.0",
    "expo-status-bar": "~1.4.0",
    "phosphor-react-native": "^1.1.2",
    "react": "18.0.0",
    "react-dom": "18.0.0",
    "react-native": "0.69.5",
    "react-native-safe-area-context": "4.3.1",
    "react-native-screens": "~3.15.0",
    "react-native-web": "~0.18.7",
    "react-native-svg": "12.3.0"
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

```
npx prisma init -h     (-h shows help prisma command)

npx prisma init --datasource-provider SQLite

npx prisma migrate dev
```

## Data Validation

```
zod javascript
```

## Radix - Modal Dialog template

```
https://www.radix-ui.com

```

### Dialog template

```
https://www.radix-ui.com/docs/primitives/components/dialog
```
