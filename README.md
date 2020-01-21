<h2 align="center">
  PokéDex
</h4>

<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/edscaylart/pokedex-rn-gcv">

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/edscaylart/pokedex-rn-gcv">
</p>

<p align="center">
  <a href="#technologies">Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#installation">Installation</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-configuration">Configuration</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
</p>

## Technologies

This project was developed with the following technologies:

- [AdonisJs](https://adonisjs.com/)
- [React Native](https://facebook.github.io/react-native/)
- [Expo](https://expo.io/)
- [Google Vision API](https://cloud.google.com/vision/)
- [PokéAPI](https://pokeapi.co/)

## Installation

Make a clone of this repository

```bash
git clone https://github.com/edscaylart/pokedex-rn-gcv.git
```

Install all the dependences on both server and PokeDex

```bash
cd ./server && npm install
cd ..
cd ./PokeDex && yarn
```

## Configuration

Copy the file `.env.example` into `.env`

```bash
cp .env.example .env
```

Before you continue, make sure you already have made this steps:

1.  [Select or create a Cloud Platform project][projects].
1.  [Enable billing for your project][billing].
1.  [Enable the Google Cloud Vision API API][enable_api].
1.  [Set up authentication with a service account][auth] so you can access the
    API from your local workstation.

After you done `step 4` and download a JSON file, open your `.env` and fill this

```
GCV_CREDENTIAL_CLIENT_EMAIL=
GCV_CREDENTIAL_PRIVATE_KEY=
GCV_CREDENTIAL_PROJECT_ID=
```

Now you can initiate your server:

```bash
npm run start
```

## Start your PokéDex

Go to the PokeDex folder and initiate

```bash
yarn start
```

[projects]: https://console.cloud.google.com/project
[billing]: https://support.google.com/cloud/answer/6293499#enable-billing
[enable_api]: https://console.cloud.google.com/flows/enableapi?apiid=vision.googleapis.com
[auth]: https://cloud.google.com/docs/authentication/getting-started
