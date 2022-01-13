var ISA1=30;
var ISA2=90;
var ESA=60;

var marks=ISA1+ISA2+ESA;
var average=marks/3;

if(average >= 90)
{
    grade=0;
}
else if(average >= 80 && average <= 89)
    {
        grade = 1;
    }
else if(average >= 60 && average <= 79)
{
    grade = 2;
}
else if(average >= 33 && average <= 59)
{
    grade = 3;
}
else
{
    grade = 4;
}

switch(grade) {
    case 0: console.log("A : Excellent"); 
    break;
    case 1: console.log( "B : Very Good"); 
    break;
    case 2: console.log( "C : Good");
    break;
    case 3: console.log( "D : Pass"); 
    break;
    case 4: console.log( "F : Fail"); 
    break;
    default : console.log("Invalid");
}  
