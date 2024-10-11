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

// create an array with all weight
let allWeight = [];
// create a loop
for (let i = 0; i< bikeShop.length; i++){
    let singleWeight = bikeShop[i].weight;
    allWeight.push(singleWeight);
}

// find a smallest weight
let smallestWeight = Math.min(...allWeight); //spread operator
console.log(smallestWeight);
for (let i = 0; i< bikeShop.length; i++){
    if (bikeShop[i].weight === smallestWeight){
        const lightestBike = bikeShop[i]
        
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






// Snack 3 (Bonus)
// Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
// La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.