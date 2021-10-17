// 1
var fav_movies = ["A New Hope", "The Empire Strikes Back", "Return of the Jedi", "The Force Awakens", "The Last Jedi"];
console.log(fav_movies[1]);

// 2
var movies = new Array(5);
movies[0] = "A New Hope";
movies[1] = "The Empire Strikes Back";
movies[2] = "Return of the Jedi";
movies[3] = "The Force Awakens";
movies[4] = "The Last Jedi";
console.log(movies[0]);

// 3
var movies_2 = new Array(5);
movies_2[0] = "A New Hope";
movies_2[1] = "The Empire Strikes Back";
movies_2[2] = "Return of the Jedi";
movies_2[3] = "The Force Awakens";
movies_2[4] = "The Last Jedi";
movies_2.splice(2,0,"The Rise of Skywalker");
console.log(movies_2.length);

// 4
var movies_3 = [];
movies_3[0] = "A New Hope";
movies_3[1] = "The Empire Strikes Back";
movies_3[2] = "Return of the Jedi";
movies_3[3] = "The Force Awakens";
movies_3[4] = "The Last Jedi";

delete movies_3[0];
console.log(movies_3);

// 5

var favMovies3 = [];
favMovies3[0] = "A New Hope";
favMovies3[1] = "The Empire Strikes Back";
favMovies3[2] = "Return of the Jedi";
favMovies3[3] = "The Force Awakens";
favMovies3[4] = "The Last Jedi";
favMovies3[5] = "The Rise of Skywalker";
favMovies3[6] = "Revenge of the Sith";

for (let index = 0; index < favMovies3.length; index++) {
    window.console.log(favMovies3[index]);
}

// 6
var favMovies4 = [];
favMovies4[0] = "A New Hope";
favMovies4[1] = "The Empire Strikes Back";
favMovies4[2] = "Return of the Jedi";
favMovies4[3] = "The Force Awakens";
favMovies4[4] = "The Last Jedi";
favMovies4[5] = "The Rise of Skywalker";
favMovies4[6] = "Revenge of the Sith";

for (index in favMovies4) {
    if (favMovies4.hasOwnProperty(index)) {
        window.console.log(favMovies4[index]);
    }
}

// 7
var favMovies5 = [];
favMovies5[0] = "A New Hope";
favMovies5[1] = "The Empire Strikes Back";
favMovies5[2] = "Return of the Jedi";
favMovies5[3] = "The Force Awakens";
favMovies5[4] = "The Last Jedi";
favMovies5[5] = "The Rise of Skywalker";
favMovies5[6] = "Revenge of the Sith";

favMovies5.sort();
for (index in favMovies5) {
    if (favMovies5.hasOwnProperty(index)) {
        window.console.log(favMovies5[index]);
    }
}

// 8
var favMovies6 = [];
favMovies6[0] = "A New Hope";
favMovies6[1] = "The Empire Strikes Back";
favMovies6[2] = "Return of the Jedi";
favMovies6[3] = "The Force Awakens";
favMovies6[4] = "The Last Jedi";
favMovies6[5] = "The Rise of Skywalker";
favMovies6[6] = "Revenge of the Sith";


var leastFavMovies = [];
leastFavMovies[0] = "The Phantom Menace";
leastFavMovies[1] = "Attack of the Clones";
leastFavMovies[2] = "Rogue One";

window.console.log("Movies I like:\n\n");
for (let index = 0; index < favMovies6.length; index++) {
    window.console.log(favMovies6[index]);
}
window.console.log("\n");

window.console.log("Movies I regret watching:\n\n");
for (let index = 0; index < leastFavMovies.length; index++) {
    window.console.log(leastFavMovies[index]);
}
window.console.log("\n");

// 9
var movies = favMovies6.concat(leastFavMovies);
movies.reverse();
for (let index = 0; index < movies.length; index++) {
    window.console.log(movies[index]);
}
window.console.log("\n");

// 10
var movies2 = favMovies6.concat(leastFavMovies);
window.console.log(movies.pop());