let studentScore = function(score,total){
    let percent=(100*score)/total;
    let grade='';
   if(percent>=90 && percent<=100){
       grade='A';
   } else if(percent>=80){
        grade='B';
   } else if(percent>=70){
       grade='C';
   } else if(percent>=60){
       grade='D';
   } else {
       grade='F';
   }
   
   //return 'You got an '+grade+' ('+percent+'%)!';
   return `You got ${grade} (${percent}%)!`;
}
let result = studentScore(18,20);
console.log(result);

