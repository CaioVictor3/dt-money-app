# DT Money App

Aplicativo mobile do DT Money desenvolvido com Expo, React Native, TypeScript, NativeWind e React Navigation.

## Tecnologias

- Expo SDK 56
- React Native 0.85
- TypeScript
- NativeWind
- React Navigation
- React Hook Form
- Yup
- Axios
- AsyncStorage

## Funcionalidades atuais

- Fluxo de rotas públicas e privadas.
- Login de usuário via API.
- Cadastro de usuário via API.
- Persistência de sessão com AsyncStorage.
- Restauração de sessão ao abrir o app.
- Tela de loading inicial.
- Logout temporário na Home.
- Validação de formulários com Yup.
- Mensagens de erro nos inputs.
- Tratamento padronizado de erros com AppError e interceptor do Axios.
- Contexto global inicial para snackbar.

## Requisitos

- Node.js compatível com Expo SDK 56.
- iOS Simulator ou Android Emulator.
- Backend do DT Money rodando na porta `3001`.

## Instalação

```bash
npm install
```

## Executando o app

Para iOS:

```bash
npx expo run:ios
```

Para Android:

```bash
npx expo run:android
```

## API

A configuração da API fica em:

```txt
src/shared/api/dtmoney.ts
```

No iOS Simulator, o app usa:

```txt
http://localhost:3001
```

No Android Emulator, use:

```txt
http://10.0.2.2:3001
```

## Scripts

```bash
npm run start
npm run ios
npm run android
npm run web
```

## Validação

Para checar TypeScript:

```bash
npx tsc --noEmit
```

Para validar dependências compatíveis com Expo:

```bash
npm exec expo install -- --check
```
