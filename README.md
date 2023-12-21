# Netflix Clone

A Netflix clone using TMDB's API. Made with React and NodeJS.

## Demo

The app is available at : https://streaming-clone-6ad69.firebaseapp.com

## Installation

To install the project's dependencies run this command :

```bash
  npm install
```

## Available Scripts

In the project directory, you can run :

```bash
  npm start
```

## API Reference

### Get item

```http
  GET https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=${ID}&with_=${ID}
```

#### Parameters

| Parameter       | Type     | value                        |
| :-------------- | :------- | :--------------------------- |
| `api_key`       | `string` | YOUR TMDB API KEY            |
| `with_genres`   | `number` | ex : 28 (Action movies)      |
| `with_networks` | `number` | ex : 213 (Netflix originals) |
