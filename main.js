"use strict";
// //++ first

// for (let i = 0; i <=10; i+=2) {
//     console.log(i);
    
   
// }


// for( let i=0;i<=10;i++){
//     if(i%2===0){
//         console.log(i);
        
//     }
// }






// // ++second

// function Mymultiplication(){
//     for( let i=1;i<=10;i++){
//       let  row=" ";

//         for( let x=1;x<=10;x++){
//             row+=i*x+" ";
            
//         }
//         console.log(row);
//     }
// }

// Mymultiplication();




// //  ++third

// function KilometrtoMil(){
//     let kilometr=5;
//  let mil= kilometr * 0.621371;
//  console.log(mil);
 
// }

// KilometrtoMil();


// // ++fourth

// let array=[10,20,30,25,87];

// function MySum(ary){
// let sum=0;
// for( let i=0;i<ary.length;i++){
//     sum+=ary[i];
// }
// console.log(sum);

// }

// MySum(array);


// // fifth

// let massiv=[10,20,30,25,87];
//  function Myreverse(msv){
//     let reverse=msv.reverse();
//     console.log(reverse);
    
//  }

//  Myreverse(massiv);


 

//  let ary=[10,20,30,25,87];

//  function myReverse (reverse){
//     for( let i=0;i<reverse.length/2;i++){
//         let temp=reverse[i];
//         reverse[i]=reverse[reverse.length-1-i];
//         reverse[reverse.length-1-i]=temp;
//     }
//     console.log(reverse);  
//  }

//  myReverse(ary);



// //   sixth

// let msv=[10,20,30,25,87];

// function Mysort(ary){
//     let sort=ary.sort();
//     console.log(sort);
    
// }

// Mysort(msv);


// // seventh

// let nmbr=[-4,-2,8,-1,6,10,-9];
//  function MyneqativNmbr(arr){
//  for( let i=0;i<arr.length;i++){
//      if(arr[i]<0){
//     let result=arr[i];
//     console.log(result);
//           }
// }
//  }

//  MyneqativNmbr(nmbr);




// //   eighth
 
// let name="Kazimova Lamiye";

// function Myspace (spc){
//     let space="";
 
//     for( let i=0;i<spc.length;i++){
//         if(spc[i]!==" "){
//             space+=spc[i];

            
//         }
//     }
//     console.log(space);
   
// }

// Myspace(name);


// //  ninth
// let number=90;

// function MyNumber(num){
//     if(num % 10===0){
//         console.log("true");
        
//     }else{
//         console.log("false");
        
//     }
//  }

// MyNumber(number);


// // tenth

// function countVowels(str) {
//     const vowels = 'aeiouAEIOU';
//     let count = 0;

//     for (let char of str) {
//         if (vowels.includes(char)) {
//             count++;
//         }
//     }

//     return count;
// }

// console.log(countVowels("Lamiye"))


// // ++ eleventh

// let value = 91;
// function grade(str) {
//   if (str < 50) {
//     console.log("kesr");
//   } else if (str > 50 && str < 90) {
//     console.log("orta");
//   } else if (str > 90 && str < 100) {
//     console.log("ela");
//   }
// }

// grade(value);

// //  ++twelfth
// function GetFullName(name, surname){

//     return name+"  "+surname;
// }

// console.log(GetFullName("Lamiye","Kazimova"));

// //  ++thirteenth

// function GetFullAdress(country,city){
//     return country+" , "+city;
// }

// console.log(GetFullAdress("Azerbaycan","Şamaxı"));




// //+++ addition

// //  one
// let num=[10,40,28,34,96];

// function Numberaverage(number){
//     let sum=0
//     let division;
// for(let i=0;i<number.length;i++){
//  sum+=number[i];
//  division=sum/number.length;
// }
// console.log(division);

// }

// Numberaverage(num);


// // two

// function Numbers(){
//     for( let i=1;i<=50;i++){

//      let kv=i*i;
//      console.log(kv);
//     }
// }

// Numbers();



// // three


// let numbers=[10,40,28,34,96];
//   function MyNumbers(ary){
//    let row;
//     for( let i=0;i<ary.length;i++){
//   row=Math.max(...ary);                     
//     }
//      console.log(row);
//   }

//   MyNumbers(numbers);


// //   ... bu operator massivden lazim olani cixarmaq ucun istifade olunur



// // four

// let nmbrs=[10,-40,28,34,96];
//   function Mynumbers(ary){
//     let row;
//     for( let i=0;i<ary.length;i++){
//    row=Math.min(...ary);                     
        
    
//     }
//     console.log(row);
//   }

//   Mynumbers(nmbrs);




// // five
// // six


// let none=[10,28,34,96];

// function MyInvers(src){
//   let row=[];
//   for( let i=0;i<src.length;i++){
//      row[i]=1/src[i];
//   }
//   console.log(row);
// }

// MyInvers(none);


// //  seven

// let increase=[10,13,76,19];
//  function MyIncrease(inc){
//   let sum=[];
//   for( let i=0;i<inc.length;i++){
//     sum.push(inc[i]+2);
      
//   }
//   console.log(sum);
//  }

//  MyIncrease(increase);

// //  eight

//  function single(){
//   for( let i=1;i<=50;i++){
//     if(i%2===1){
//       console.log(i);
      
//     }
//   }
//  }

//  single();



// // nine

// let any=[8,7,9,12,17,15,13,21,27];

// function NewMassiv(ary){
//     let neww=[];
//   for( let i=0;i<ary.length;i++){
//     if(ary[i]%3==0){
//       neww.push(ary[i]);
//     }  
//   }
//   console.log(neww); 
// }

// NewMassiv(any);


////ten

let big=[1,2,3,5,7,8];

function BIgNumber(number){
  let sum=0
  for( let i=0;i<number.length;i++){
    sum+=number[i];
   if(sum==10){
    console.log("true");
    
   }else{
    console.log("false");
   }
  }
}

BIgNumber(big);