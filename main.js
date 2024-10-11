// console.log('test');


// Snack 1
// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore.

// create an array of objects
const bikeShop = [
    {
        name: 'pinco',
        weight: 80,
    },
    {
        name: 'pallo',
        weight: 60,
    },
    {
        name: 'panco',
        weight: 25,
    },
    {
        name: 'caio',
        weight: 90,
    },
    {
        name: 'zefiro',
        weight: 78,
    },
    {
        name: 'tornado',
        weight: 45,
    },
    {
        name: 'fulmine',
        weight: 32,
    },
    {
        name: 'saetta',
        weight: 68,
    },
    {
        name: 'vento',
        weight: 56,
    },
    {
        name: 'ombra',
        weight: 72,
    },
    {
        name: 'falco',
        weight: 38,
    },
    {
        name: 'dragone',
        weight: 83,
    },
    {
        name: 'fenice',
        weight: 41,
    },
    {
        name: 'griffone',
        weight: 50,
    },
    {
        name: 'levante',
        weight: 29,
    },
    {
        name: 'siluro',
        weight: 62,
    },
    {
        name: 'avvoltoio',
        weight: 95,
    },
    {
        name: 'lampo',
        weight: 36,
    },
    {
        name: 'tuono',
        weight: 70,
    },
    {
        name: 'zephyr',
        weight: 52,
    },
    {
        name: 'scorpione',
        weight: 46,
    },
    {
        name: 'pegaso',
        weight: 82,
    },
    {
        name: 'sirio',
        weight: 34,
    },
    {
        name: 'eolo',
        weight: 76,
    }
];


// create a loop take all the weight and then find the smallest number

// 1) Spread operator
// create an array with all weight
// let allWeight = [];
// // create a loop
// for (let i = 0; i< bikeShop.length; i++){
//     let singleWeight = bikeShop[i].weight;
//     allWeight.push(singleWeight);
// }
// find a smallest weight
// let smallestWeight = Math.min(...allWeight); 
// console.log(smallestWeight);
// for (let i = 0; i< bikeShop.length; i++){
//     if (bikeShop[i].weight === smallestWeight){
//         const lightestBike = bikeShop[i]
        
        // add markup
//         document.querySelector('.name').innerHTML = `${bikeShop[i].name}`
//         document.querySelector('.weight').innerHTML = `Peso: ${bikeShop[i].weight}kg`
//     }
// }

// 2) Loop solution
let lightestBike = bikeShop[0].weight;

for (let i = 1; i < bikeShop.length; i++){
    if (lightestBike > bikeShop[i].weight){
        lightestBike = bikeShop[i].weight

        // add markup 
        document.querySelector('.name').innerHTML = `${bikeShop[i].name}`
        document.querySelector('.weight').innerHTML = `Peso: ${bikeShop[i].weight}kg`
    }
}




// Snack2
// Creare un array di oggetti di squadre di calcio.
// Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
// Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

// create an array with objects
const footballTeams = [
    {
        name: 'Juventus',
        points: 0,
        fouls: 0
    },
    {
        name: 'AC Milan',
        points: 0,
        fouls: 0
    },
    {
        name: 'Inter Milan',
        points: 0,
        fouls: 0
    },
    {
        name: 'AS Roma',
        points: 0,
        fouls: 0
    },
    {
        name: 'Napoli',
        points: 0,
        fouls: 0
    },
    {
        name: 'Lazio',
        points: 0,
        fouls: 0
    },
    {
        name: 'Fiorentina',
        points: 0,
        fouls: 0
    },
    {
        name: 'Sampdoria',
        points: 0,
        fouls: 0
    },
    {
        name: 'Torino',
        points: 0,
        fouls: 0
    },
    {
        name: 'Bologna',
        points: 0,
        fouls: 0
    },
    {
        name: 'Atalanta',
        points: 0,
        fouls: 0
    },
    {
        name: 'Sassuolo',
        points: 0,
        fouls: 0
    },
    {
        name: 'Cagliari',
        points: 0,
        fouls: 0
    },
    {
        name: 'Genoa',
        points: 0,
        fouls: 0
    },
    {
        name: 'Empoli',
        points: 0,
        fouls: 0
    },
    {
        name: 'Verona',
        points: 0,
        fouls: 0
    },
    {
        name: 'Salernitana',
        points: 0,
        fouls: 0
    },
    {
        name: 'Monza',
        points: 0,
        fouls: 0
    },
    {
        name: 'Lecce',
        points: 0,
        fouls: 0
    },
    {
        name: 'Spezia',
        points: 0,
        fouls: 0
    },
    {
        name: 'Cremonese',
        points: 0,
        fouls: 0
    }
];

// function that generates random numbers
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

// Max points avaible 
const maxPoints = 3 * footballTeams.length;

// create an array without points
let footballTeamsNameFoulsOnly =[];
let key = 'points';




for(let i= 0; i<footballTeams.length; i++){
    let objectTeam = footballTeams[i];

    // raplace points value
    let randomPoints =  getRndInteger(0,maxPoints);
    // if the value is zero raplace else do nothing
    if (objectTeam['points'] === 0){
        objectTeam['points'] = randomPoints;
    };

    // replace fouls value 
    let randomFouls =  getRndInteger(0,100);
    // if the value is zero raplace else do nothing
    if (objectTeam['fouls'] === 0){
        objectTeam['fouls'] = randomFouls;
    };

    // delate the key points and push the objects into new array
    delete objectTeam[key];
    footballTeamsNameFoulsOnly.push(footballTeams[i])
}
 
// stamp the new array in console
console.log(footballTeamsNameFoulsOnly);








// Snack 3 (Bonus)
// Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
// La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.


function bonusFunction (array, a, b){
    if(a < b){
        return array.slice(a + 1, b); /* così escludo quello in posizione a */
    }else{
        console.log('il valore A deve essere inferiore a B');
    }
}

// test
const arr = [10, 11, 12, 13, 14, 15, 16];
const risultato = bonusFunction(arr, 2, 5); /* mi aspetto i valori agli indici compresi tra 2 e 5 ovvero 13, 14 */

console.log(risultato);
