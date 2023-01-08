import * as variables from './tasks/variables.js';
import * as numstrloops from './tasks/numstrloops.js';
import * as objarrays from './tasks/objarrays.js';
import * as functions from './tasks/functions.js';

const usersArray = [
    {
        name: "John",
        balance: '2000$',
        friends: [
            {
                name: "Robert",
                balance: '1000$'
            },
            {
                name: "Kate",
                balance: '0$'
            }
        ]
    },
    {
        name: "Isaac",
        balance: '20000$',
        friends: [
            {
                name: "Bob",
                balance: '2000$'
            },
            {
                name: "Robert",
                balance: '150000$'
            }
        ]
    },
    {
        name: "Jane",
        balance: '200$',
        friends: [
            {
                name: "Kate",
                balance: '5000$'
            },
            {
                name: "Anne",
                balance: '1234$'
            },
            {
                name: "Bob",
                balance: '300$'
            }
        ]
    },
    {
        name: "Russell",
        balance: '100$',
        friends: []
    }
]

const starWarCharacters = [
  {
    name: "Luke Skywalker",
    height: "172",
    mass: "77",
    hair_color: "blond",
    skin_color: "fair",
    eye_color: "blue",
    birth_year: "19BBY",
    gender: "male",
    films: ["2", "6", "3", "1", "7"],
  },
  {
    name: "C-3PO",
    height: "167",
    mass: "75",
    hair_color: "n/a",
    skin_color: "gold",
    eye_color: "yellow",
    birth_year: "112BBY",
    gender: "n/a",
    films: ["1", "2", "3", "4", "5", "6"],
  },
  {
    name: "Darth Vader",
    height: "202",
    mass: "136",
    hair_color: "none",
    skin_color: "white",
    eye_color: "yellow",
    birth_year: "41.9BBY",
    gender: "male",
    films: ["1", "2", "3", "6"],
  },
  {
    name: "Leia Organa",
    height: "150",
    mass: "49",
    hair_color: "brown",
    skin_color: "light",
    eye_color: "brown",
    birth_year: "19BBY",
    gender: "female",
    films: ["1", "2", "3", "6"],
  },
  {
    name: "Obi-Wan Kenobi",
    height: "182",
    mass: "77",
    hair_color: "auburn, white",
    skin_color: "fair",
    eye_color: "blue-gray",
    birth_year: "57BBY",
    gender: "male",
    films: ["1", "2", "3", "4", "5", "6"],
  },
];

//console.log(objarrays.getUsersWithMutualFriends(usersArray));
const arr1 = [10, 'a', '5', 5, 1]; 
const arr2 = [10, 'a', 5, 5, 1];

//console.log(objarrays.isEqualArrays(arr1, arr2));

//console.log(objarrays.isPalindrome('Was it a cat I saw'));

//console.log(objarrays.getFilmsWithAllHeroes(starWarCharacters));

//console.log(objarrays.deleteAllEntriesFromArray(starWarCharacters));

const strArr = ['hi', '', 'wow', null, ['I am not a string you are looking for'], 'I am', 123 ];

const numArr = [2, 4, NaN, 0, 5, 10];

console.log(functions.getSeconds(5));