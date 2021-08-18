/*
Map,filter,reduce are the higher oreder functions in Javascript

Map:

Map function is usually used to transform the array.
if we want to transform this array like doubling all the elements in the array.
we can done it by using map function.

const arr = [5,1,2,4,6];
function double(x)
{
    return x*2;
}
const output = arr.map(double)//basically we need to pass the function inside the map.

// it will run each element inside the array and stores in the output variable.

Map functions returns the new array.

console.log(output);

output:
[ 10, 2, 4, 8, 12 ]
/*

we can also pass the function inside the map method .
//Example

const arr = [1,2,3,4];

const output = arr.map(function(x){
    return x*3;
});
console.log(output);

output:
[ 3, 6, 9, 12 ]

we can also use Arrow functions inside the map method.

const arr = [5,4,3,2,1];

const output = arr.map(x => x.toString(2));
console.log(output);

we are transforming each and every element in the array to binary
and store it in the output variable.

Filter Function:

Filter function is basically used to filter the values inside the array.

we are trying to filter out the odd values inside the array.

const arr = [5,4,3,2,7]; 
function Isodd(x)
{
    return x%2 !==0;
}
const output = arr.filter(Isodd);
console.log(output);

Output:
[5,3,7]

Another example we are filtering the values greater than 5

const arr = [1,2,5,9,10,15,17];

const output = arr.filter(x => x>5);
console.log(output);

Output:
[ 9, 10, 15, 17 ]

Reduce Function:

Reduce function is basically used at a place where we have to take all the
elements of the array and come up with a single value out of them.

suppose if we want to find the total sum of the array, or may be a largest
number in the array we can use reduce method there.

This reduce function takes two parameters.
first one is the accumulator
second one is current.

The current parameter represents the value inside the arrays.
The accumulatar parameter passes the value next to it.
Accumulator will have a initial value needed for the function.

const arr = [1,2,3,4,5];

const output = arr.reduce(function(acc,cur)
{
 acc = acc + cur;
 return acc;
},0);

console.log(output);

output;
15

now we are using reduce method to find the max value inside the array.

const arr = [1,2,3,4,5];

const MaxVal = arr.reduce(function(acc,cur)
{
    if(cur > acc){
        acc = cur;
    }
    return acc;
},0);

console.log(MaxVal);

Output;
5

so let us try this methods on array of objects
so the task is to list the full names 
for eg: Akshay Kumar,Joseph Vijay etc...
so we have to use map method there


const user = [
    {firstname : 'Akshay',lastname:'kumar',age:'26'},
    {firstname : 'Joseph',lastname:'Vijay',age:'28'},
    {firstname : 'Elon',lastname:'Musk',age:'29'},
    {firstname : 'Deepika',lastname:'Padukone',age:'26'}

];

const output = user.map(x => x.firstname + ' '+ x.lastname);
console.log(output);

output:
[ 'Akshay kumar', 'Joseph Vijay', 'Elon Musk', 'Deepika Padukone' ]

Filter method Array of objects:
Task is to filter out all the values of age gretae than 25

const user = [
    {firstname : 'Akshay',lastname:'kumar',age:'15'},
    {firstname : 'Joseph',lastname:'Vijay',age:'28'},
    {firstname : 'Elon',lastname:'Musk',age:'29'},
    {firstname : 'Deepika',lastname:'Padukone',age:'26'}

];

const output = user.filter(x => x.age >25);
console.log(output);
output:
[
    { firstname: 'Joseph', lastname: 'Vijay', age: '28' },
    { firstname: 'Elon', lastname: 'Musk', age: '29' },
    { firstname: 'Deepika', lastname: 'Padukone', age: '26' }
]

//suppose if we want to displey only the first name where their age greater than 25.
//In that case we have a powerful technique called chaining.

*/

const user = [
    {firstname : 'Akshay',lastname:'kumar',age:'15'},
    {firstname : 'Joseph',lastname:'Vijay',age:'28'},
    {firstname : 'Elon',lastname:'Musk',age:'29'},
    {firstname : 'Deepika',lastname:'Padukone',age:'26'}

];

const output = user.filter(x => x.age>25)
                .map(x => x.firstname);
console.log(output);

