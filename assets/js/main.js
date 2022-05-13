// Functions 1.1

// function intro() {
//     console.log("Hello World");
// } 

// intro();

// intro = () => {
//     console.log("Hello World");
// }

// intro();

// intro(); // Uncaught ReferenceError: intro is not defined

// intro = () => {
//     return "Hello World";
// }

// Functions 1.2

// function hello() {
//     console.log("Hallo");
// }

// hello();

// hello = () => console.log("Hallo");

// hello();

// let sum = (x, y) => console.log(x + y); 

// sum(2, 3);

// let multiply = (x, y) => console.log(x * y);

// multiply(2, 3);

// const dataType = (data) => console.log(typeof data);
// dataType(true)
// dataType('hi')
// dataType(1)
// dataType({ name: 'John' })
// dataType([0, 1])

// LEVEL 1.4

// let hero = function(heroName, heroPower, heroEnemy) {
//     let name = 'Mein Lieblingsheld aus Marvel ist:'
//     let power = 'Er/Sie hat die Fähigkeit:'
//     let enemy = 'Sein/Ihr größter Gegner ist:'
//     console.log(`${name} ${heroName},${power} ${heroPower},${enemy} ${heroEnemy} `);
// }

// hero('Spiderman', 'Netze zu schießen', 'Venom');

// LEVEL 1.6

// let returnOne = function() {
//     return 1;
// }
// let x = 1
// let y = returnOne();
// if (x === y) {
//     console.log('Wird das gedruckt');
// }

// LEVEL 1.7

// let multiply = (x) => {return x * 2};
// console.log(multiply(3));
// console.log(multiply(12));
// console.log(multiply(16));
// console.log(multiply(4));

// LEVEL 1.8 

// let yearBorn = (x) => {return x - 2022};
// console.log(yearBorn(1993));

// Level 1.9 

let person = (firstName, lastName, age, birthPlace, location) => {
    return 'Mein name ist ' + firstName + '' + lastName + '.' + 'Ich bin in ' + age + ' geboren. Ich lerne Coden bei SuperCode.Ich bin ' + birthPlace + ' Jahre alt. Ich wohne in ' + location + '.'
}
console.log(person('Alex', 'Schiwe', 'Düsseldorf', 36, 'Düsseldorf'));