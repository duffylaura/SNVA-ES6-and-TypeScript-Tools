/*  Module 5: Declare and instantiate classes in TypeScript
    Lab Start  */

/* EXERCISE 1 */

class BuildArray {
    // TODO Define the properties
   
    private items: number;
    
    private sortOrder: 'ascending' | 'descending';
// TODO Define the constructor
constructor(items: number, sortOrder: 'ascending' | 'descending') {
    this.items = items;
    this.sortOrder = sortOrder;
}

// TODO Define the accessors
get Items(): number {
    return this.items;
}

set Items(value: number) {
    this.items = value;
}

get SortOrder(): 'ascending' | 'descending' {
    return this.sortOrder;
}

set SortOrder(value: 'ascending' | 'descending') {
    this.sortOrder = value;
}

// TODO Define the methods
buildArray(): number[] {
    let randomNumbers: number[] = [];
    let nextNumber: number;
    for (let counter = 0; counter < this.items; counter++) {
        nextNumber = Math.ceil(Math.random() * (100 - 1));
        if (randomNumbers.indexOf(nextNumber) === -1) {
            randomNumbers.push(nextNumber);
        } else {
            counter--;
        }
    }
    if (this.sortOrder === 'ascending') {
        return randomNumbers.sort(sortAscending);
    } else {
        return randomNumbers.sort(sortDescending);
    }
}

}

/* sortDescending is a comparison function that tells the sort method how to sort numbers
in descending order. */
let sortDescending = (a: number, b: number) => {
if (a > b) {
return -1;
} else if (b > a) {
return 1;
} else {
return 0; }
}

/* sortAscending is a comparison function that tells the sort method how to sort numbers
in ascending order. */
let sortAscending = (a: number, b: number) => {
if (a > b) {
return 1;
} else if (b > a) {
return -1;
} else {
return 0;
}
}

/* buildArray builds an array of unique random numbers containing the number of items
based on the number passed to it. The sortOrder parameter determines whether to sort
the array in ascending or descending order. */
function buildArray(items: number, sortOrder: 'ascending' | 'descending'): number[] {
let randomNumbers: number[] = [];
let nextNumber: number;
for (let counter = 0; counter < items; counter++) {
nextNumber = Math.ceil(Math.random() * (100 - 1));
if (randomNumbers.indexOf(nextNumber) === -1) {
randomNumbers.push(nextNumber);
} else {
counter--;
}
}
if (sortOrder === 'ascending') {
return randomNumbers.sort(sortAscending);
} else {
return randomNumbers.sort(sortDescending);
}
}

/* Instantiate the BuildArray objects. */
let myArray1 = new BuildArray(12, 'ascending');
let myArray2 = new BuildArray(8, 'descending');

console.log(myArray1.buildArray());
console.log(myArray2.buildArray());




