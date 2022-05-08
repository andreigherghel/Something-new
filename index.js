// Exercitiul 1
function firstExercise(nr) {
    if (nr % 2 == 1) {console.log (nr * 2)}
    
    else {console.log (nr - 2)}
}

firstExercise(18)
firstExercise(19)


// Exercitiul 2
const numere = [1,2,3,4,5,6,7,8,9,10];

const numerePrime = numere.filter (function (value) {for (let i = 2; i * i <= value; i++)
    if(value % i === 0) 
    return false; 
    return value > 1;
});

console.log (numerePrime)


