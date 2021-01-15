// Write a function to remove a value from array?
removeItem = (arr, val)=>{
//using filter function
return arr= arr.filter((item)=> item!=val)
}

//Write a function to get Max value of a number Array?
getMax = (arr)=>{
//using spred operator
return Math.max(...arr);
}

//Write a function to find indexes of value from a sorted array.
indexOfSortedArray=(arr,val)=>{
//using sort function
return arr.sort((a,b)=>{a-b}).indexOf(val);
}

/*Write a function to find average marks by subject. Given Data is in following format.
data = [{
id: "Unique String Value",
subject: "Any String Value",
marks: number value
}]
*/
getMarksAvg = (marks)=>{
using reduce function
return marks.reduce((total, next) => total + next.marks, 0)/marks.length
}

//Write a method to check whether 2 strings are made up of same characters
checkSameChar=(string1, string2)=>{
var char1=[...string1];
var char2=[...string2];
 char1.sort((a,b)=>a-b);
char2.sort((a,b)=>a-b);
return JSON.stringify(char1)==JSON.stringify(char2);
}

//Write a function to sort date and time column in a table

sortDateArray=(arr)=>{
//using sort function
return arr.sort((a,b)=>{
    newDate(a.date)-new Date(b.date);
});
}

//Write a method to reverse an Array of n integers

reverseArray=(arr)=>{
  return arr.reverse();
}
