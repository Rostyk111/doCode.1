const arr1 = ['Car','Mango','Table','Mouse']
const arr2 = ['Hand','Mango','Phone','Mouse']
const arr3 = arr1.concat(arr2);
//console.log(arr3); 

const arr3Set = new Set (arr3)
const arr4 =  [...arr3Set]
//console.log(arr4);

for (let i = 0; i < arr4.length; i++){
arr4[i] = arr4[i].split('').reverse().join('');
}
//console.log(arr4);

const arr5 = arr4.join (' -')
arr5.split ('- ')
console.log (arr5);

