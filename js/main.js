"use strict";

let numberOfFilms;

const personalMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
  start: function () {
    numberOfFilms = +prompt("Сколько фильмов вы посмотрели??", "");

    while (
      personalMovieDB.count == "" ||
      personalMovieDB.count == null ||
      isNaN(personalMovieDB.count)
    ) {
      personalMovieDB.count = +prompt("Сколько фильмов вы посмотрели??", "");
    }
  },
  rememberMyFilms: function () {
    for (let i = 0; i < 2; i++) {
      const a = prompt("Какой последний фильм вы посмотрели?", ""),
        b = prompt("Какова его оценка?", "");

      if (a != null && b != null && a != "" && b != "" && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log("done!");
      } else {
        console.log("error!");
        i--;
      }
    }
  },
  myMovieSkills: function () {
    if (personalMovieDB.count < 10) {
      console.log("Слишком мало");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
      console.log("Достаточно");
    } else if (personalMovieDB.count > 30) {
      console.log("Вы киноман");
    } else {
      console.log("Ошибка");
    }
  },
  showMyDb: function () {
    if (personalMovieDB.privat == false) {
      console.log(personalMovieDB);
    }
  },
  toggleVisibleMyDB: function () {
    if (personalMovieDB.privat) {
      personalMovieDB.privat == false;
    } else {
      personalMovieDB.privat == true;
    }
  },
  writeYourGenres: function () {
    for (let i = 1; i <= 3; i++) {
      let genre = prompt(`Ваш любимый жанр под номером ${i}`);

      if (genre === "" || genre == null) {
        console.log("Вы ввели неверные данные или не ввели их вообще");
        i--;
      } else {
        personalMovieDB.genres[i - 1] = genre;
      }
    }
    personalMovieDB.genres.forEach((item, i) => {
      console.log(`Любимый жанр ${i+1} - это ${item}`);
    });
  }
};
