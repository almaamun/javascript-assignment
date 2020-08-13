 //====================Feet To Mile Converter===========
 function feetToMile(feet){
     var mile = 0;
     var mile = feet * 0.000189394;
     mile = mile.toFixed(2);
     return mile;
 }
 var convertFeetToMile = feetToMile(12000);
 console.log("The Converted Mile is :" ,convertFeetToMile ,"mile");

 // =================== Wood Calculator============
 function woodCalculator(chair , table, khat){
     var totalWood = 0;
     var woodOfchair = chair * 1;
     var woodOftable = table * 3;
     var woodOfkhat = khat * 5 ;
     totalWood = woodOfchair + woodOftable + woodOfkhat;
     return totalWood;
 }
 var calculateWood = woodCalculator(1, 1, 1);
 console.log("The total wood is: ", calculateWood ,"cubic feet");

 // =================== Wood Calculator============
 function brickCalculator(floor){
     var brick = 0;
    
     if( floor <= 10 ){
         brick = floor *15*1000;
     }
     else if( floor <= 20){
         brick = floor*12*1000;
     }
     else if( floor >= 21 ){
         brick = floor*10*1000;

     }
     return brick;
 }
 var floor3 = brickCalculator(3);
 var floor12= brickCalculator(12);
 var floor35 = brickCalculator(35);
 console.log("The amount of Brick is: ",  floor3);
 console.log("The amount of Brick is: ",  floor12);
 console.log("The amount of Brick is: ",  floor35);

// =================== Tiny Friends===================
function tinyFriend(friends){
    let smallest = friends[0];
    for(let i = 0 ; i < friends.length; i++ ){
        if( friends[i] > smallest ){
            smallest = friends[i];
        } 
        
    }
    return smallest;
}
var friends = [ "mamun", "HasibMuhammad", "Moudud"];
var result = tinyFriend(friends);
console.log("The smallest name is : ", result);
