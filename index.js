// Code your solution in this file!
//Takes in an argument of an array and returns the first two elements of the array
const returnFirstTwoDrivers = drivers => drivers.slice(0, 2);

//Takes in an argument of an array and returns the last two elements of the array
const returnLastTwoDrivers = drivers => drivers.slice(-2);

//An array containing the 2 previously defined functions that allows you to invoke either function from the array
let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

//returns a function that multiplies a given value using the created multiplier
const createFareMultiplier = multiplier => fare => multiplier * fare;

//function created using createFareMultiplier, that doubles the fare
const fareDoubler = (createFareMultiplier(2));

//function created using createFareMultiplier, that doubles the fare
const fareTripler = (createFareMultiplier(3));

//
const selectDifferentDrivers = (arrayOfDrivers, selectDrivers) => selectDrivers(arrayOfDrivers);