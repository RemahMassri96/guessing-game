'use strict';

var correctAnswerCounter = 0;

var userName = prompt(' enter your name');
alert('Hello ' + userName + ' , welcome to my personal website');
alert('Please try to guess the following five questions by answering y/yes or n/no')

var Age = prompt('I am in my 30s, yes or no ?');

if(Age.toLowerCase() == 'yes' || Age.toLowerCase() =='y'){
    aleAgert('oops, wrong answer! I am in my 20s');
    console.log('I am in my 30s, yes or no ?');
    console.log('you answered yes, but I am not, I am in my 20s');
    correctAnswerCounter++ ;

}else if (Age.toLowerCase() == 'no' || Age.toLowerCase() =='n'){
    alert('yes, that is correct! I am in my 20s');
    console.log('I am in my 30s, yes or no ?');
    console.log('yes that is correct');
}// end if 1

var Studies = prompt('Am I an engineer?');

if(Studies.toLowerCase() == 'yes' || Studies.toLowerCase() == 'y'){
    alert('yes, that is correct answer :)');
    console.log('Am I an engineer?');
    console.log('you answered yes and that is correct')
    correctAnswerCounter ++ ;

} else if (Studies.toLowerCase() == 'no' || Studies.toLowerCase() =='n'){
    alert('oops, wrong answer! I am an engineer')
    console.log('Am I an engineer?');
    console.log('you answered No, but I am an engineer');
}// end if 2

var lastWork = prompt('Did I work in e-commerce bussines?');

if(lastWork.toLowerCase() == 'yes' || lastWork.toLowerCase() == 'y'){
    alert('yes, that is correct :)')
    console.log('Did I work in e-commerce bussines?')
    console.log('you answered yes and that is correct')
    correctAnswerCounter++ ;

}else if (lastWork.toLowerCase() == 'no' || lastWork.toLowerCase() == 'n'){
    alert('oops, wrong answer! I did')
    console.log('Did I work in e-commerce bussines?')
    console.log('you answered No, but I did');
}// end if 3

var OtherlastWork = prompt('Do I know about photographing?');

if(OtherlastWork.toLowerCase() == 'yes' || OtherlastWork.toLowerCase() == 'y'){
    alert('yes, that is correct :)')
    console.log('Do I know about photographing?')
    console.log('you answered yes and that is correct')
    correctAnswerCounter++ ;

}else if (OtherlastWork.toLowerCase() == 'no' || OtherlastWork.toLowerCase() =='n'){
    alert('oops, wrong answer! I do')
    console.log('Do I know about photographing?')
    console.log('you answered No, but I do');
}// end if 4

var programmingStartingYear = prompt('Did I start studying programming in 2019?');

if(programmingStartingYear.toLowerCase() == 'yes' || programmingStartingYear.toLowerCase() == 'y'){
    alert('oops, wrong answer! I started in 2020');
    console.log('Did I start studying programming in 2019?');
    console.log('you answered yes, but I did');
    correctAnswerCounter++ ;

}else if (programmingStartingYear.toLowerCase() == 'no' || programmingStartingYear.toLowerCase() == 'n'){
    alert('yes, that is correct :)')
    console.log('Did I start studying programming in 2019?');
    console.log('you answered no and that is correct')
}// end if 5

for (var i =0; i<4 ; i++){
    var guessNumber = prompt('would you guess the correct number? you have four attempts');
if (guessNumber > 7){
    alert('it`s too high');
}else if(guessNumber < 7){
    alert('it`s too low')
}else {
    alert('that is correct');
    correctAnswerCounter++ ;
}
}// end for 
console.log('The right number is 7');
alert('The right number is 7');


var x = 0;
var foodArray = ['pizza', 'burger', ' pasta', 'mlukieh '];
var foodChoice = prompt('Can you guess one of my favourite food? , you have six attempts');
 while ( x < 5 && foodChoice != foodArray[0] && foodChoice != foodArray[1] && foodChoice != foodArray[2] && foodChoice != foodArray[3]) {
    foodChoice = prompt('Can you guess one of my favourite food? , you have six attempts');
    x++
}

if (x<5){
    alert('That is correct, nice guessing');
    correctAnswerCounter++ ;
    alert('Here is the list of my favourite food ' + foodArray)
}else {
    alert('You run out of attempets and here is the list of my favourite food'+ foodArray)
}

alert('Thank you ' + userName + ' ,you have tried your best');
alert('The number of your correct answers is : ' + correctAnswerCounter);
console.log('The number of your correct answers is : ' + correctAnswerCounter);