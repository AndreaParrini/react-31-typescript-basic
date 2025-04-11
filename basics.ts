// Primitives: number, string, boolean
// More complex types: arrays, objects
// Function types, parameters

// Primitives
// impostaiamo la variabile con il suo tipo, cosi che nella ssegnazioni fututre potrà accettare solo valori di quel tipo là.

let age: number;

age=12;

let userName: string;

userName= 'Moffopacco';

let isInstructor: boolean;

isInstructor=true;

//More complex types

let hobbies: string[];

hobbies=['sport', 'book'];

let person: {
    name: string;
    age: number;
}

person={
    name: 'Andrea',
    age: 25
}

// in questo caso non possiamo assegnare questo valore in quanto non è consentito, 
// perche in fase di dichiarazione non gli abbiamo detto che può accettare questo valore.
// e quuindi darebbe errore

/* person={
    isEmployee: true
} */

// in questo caso stiaom un creano un arry di oggetti.
let people: {
    name: string;
    age: number;
}[];

// Type inference

// typescript permette di scrivere meno codice ed assegna il tipo di valore direttamente quando viene fatta un assegnazione 
// senza che ci sia il bisogno di specificare il tipo
let course = 'React - The Complet Guide';

// in questo caso non permette di assegnare il valore numerico in quanto la variabile è di tipo stringa
// course = 1234

// si possono assegnare più tipi di valori dichiarandoli con una pipe |
// nell'esempio di seguito si accetta sia una stringa che un numero

let course2: string | number = 'React - The Complet Guide';

// in questo modo a differenza di prima accetta sia numeri che stringhe
course2 = 1234;

// è possibile creare un alias per i tipi di variabili, cosi da poterli riutillizare, 
// come nell'esempio sopra delle persone dove si usa la stessa dichiarazione più volte
// basterà creare il tuipo come di seguito per poterlo riutilizzare

type Person = {
    name: string;
    age: number;
};

// e poi riutilizzare questo tipo al posto della doppia dichiarazione come di seguito

let person2: Person;

let people2: Person[];

// Function and Types


// Generics 

function insertAtBeginning(array: any[], value:any){
    const newArray=[value, ...array];
    return newArray;
}

const demoArray = [1, 2, 3];

// in questo caso l'array che viene creato dalla funzione che richiamamia sarà di tipo any 
// in quanto in fase di dichiarazione della funzione, abbiamo detto che può accettare qualsiasi tipo di array e di valore
const updateArray = insertAtBeginning(demoArray, -1);

// per evitare questo ocon typescript si può utilizzare un sinsttassi particolare 
// per dire alla funzione che può accettare un qualsiasi tipo di valore, cosi che capisce cosa sia e quando la restituisce
// assegna al nuovo array il giusto tipo di valore 
// la sintassi è <T>, T sta per type, ma si pu inserire quello che si vuole

function insertAtBeginning2<T>(array: T[], value: T){
    const newArray=[value, ...array];
    return newArray;
}

const demoArray2 = [1, 2, 3];
// in questo modo richiamando la funzion con la sintassi particolare si riesce a capire il tipo del valore 
// e assegnare al nuovo array il giusto tipo
const updateArray2 = insertAtBeginning2(demoArray2, -1);
