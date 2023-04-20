/*  Module 6: DGenerics in TypeScript
    Lab Start */

/*  DataStore is a utility function that can store up to 10 string values in an array. 
    Rewrite the DataStore class so the array can store items of any type.

    TODO: Add and apply a type variable. */
// class DataStore {

//     private _data = new Array(10);
    
//     AddOrUpdate(index: number, item: string) {
//         if(index >=0 && index <10) {
//             this._data[index] = item;
//         } else {
//             alert('Index is greater than 10')
//         }
//     }
//     GetData(index: number) {
//         if(index >=0 && index < 10) {
//             return this._data[index];
//         } else {
//             return
//         }
//     }
// }

// let cities = new DataStore();

// cities.AddOrUpdate(0, "Mumbai");
// cities.AddOrUpdate(1, "Chicago");
// cities.AddOrUpdate(11, "London");       // item not added

// console.log(cities.GetData(1));         // returns 'Chicago'
// console.log(cities.GetData(12));        // returns 'undefined'

// TODO Test items as numbers.


// TODO Test items as objects.


class DataStore<T> {
    private _data: T[] = new Array(10);
    
    AddOrUpdate(index: number, item: T) {
        if(index >=0 && index <10) {
            this._data[index] = item;
        } else {
            alert('Index is greater than 10')
        }
    }
    
    GetData(index: number): T | undefined {
        if(index >=0 && index < 10) {
            return this._data[index];
        } else {
            return undefined;
        }
    }
}

let cities = new DataStore<string>();

cities.AddOrUpdate(0, "Mumbai");
cities.AddOrUpdate(1, "Chicago");
cities.AddOrUpdate(11, "London"); // item not added

console.log(cities.GetData(1)); // returns 'Chicago'
console.log(cities.GetData(12)); // returns 'undefined'

// Test items as numbers.
let numbers = new DataStore<number>();

numbers.AddOrUpdate(0, 1);
numbers.AddOrUpdate(1, 2);
numbers.AddOrUpdate(2, 3);

console.log(numbers.GetData(1)); // returns 2

// Test items as objects.
interface Person {
    name: string;
    age: number;
}

let people = new DataStore<Person>();

people.AddOrUpdate(0, { name: 'John', age: 30 });
people.AddOrUpdate(1, { name: 'Jane', age: 25 });
people.AddOrUpdate(2, { name: 'Bob', age: 40 });

console.log(people.GetData(1)); // returns { name: 'Jane', age: 25 }


/*

Notes for myself: 


In the modified code, we added the type variable T as a generic type parameter to the DataStore class declaration. 
This allows us to use the same class to store items of any type. 
We also changed the _data array from a string array to a generic type array T[].

In the AddOrUpdate method, we changed the item parameter from string to T, 
and in the GetData method, 
we changed the return type to T | undefined.

We tested the DataStore class with strings, numbers, and objects by creating three separate 
instances of the class with different types 
and calling the AddOrUpdate and GetData methods with different indexes */