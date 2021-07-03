const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?');

const personalMovieDB ={
    count:numberOfFilms,
    movies:{},
    actors:{},
    genres:[],
    privat:false
};
console.log(personalMovieDB);

const a = prompt("Один тз последнтх просмотреных фильмов?");
const a1 = prompt("Один тз последнтх просмотреных фильмов?");
const l = prompt("На сколько оцените его");
const l1 = prompt("На сколько оцените его");
personalMovieDB.movies[a] = l;
personalMovieDB.movies[a1] = l1;
console.log(personalMovieDB.movies);
