"use strict";

let numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?");

let MovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genters: [],
    privat: false

};

const a = prompt("Один из последних фильмов?");
const b = prompt("На сколько оцените его?");
const c = prompt("Один из последних фильмов?");
const d = prompt("На сколько оцените его?");

MovieDB.movies[a]=b;
MovieDB.movies[c]=d;

console.log(MovieDB);