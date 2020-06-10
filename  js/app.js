'use strict';
var correctAnswer = 0;
var userName;
function guessName(){
    userName = prompt('please tell me  your name');
    alert('Hi ' + userName + ' , welcome to my small guessing game!');
    alert(' play with me  to guess the following five questions by answering y/yes or n/no')
}

function guessAge(){
    var Age = prompt('I am in my 20s, yes or no ?');
    if(Age.toLowerCase() == 'yes' || Age.toLowerCase() =='y'){
        alert('NO, wrong answer! I am in my 20s');
        //console.log('no wrong answer');
        correctAnswer++ ;
    }else if (Age.toLowerCase() == 'no' || Age.toLowerCase() =='n'){
        alert('yes, that is correct! I am in my 20s');
                //console.log('yes correct answer');

    }// end if 1
}

function guessStudies(){
    var Studies = prompt('Am I an software engineer?');

    if(Studies.toLowerCase() == 'yes' || Studies.toLowerCase() == 'y'){
        alert('yes, that is correct answer :)');
            //console.log('yes correct answer');

        correctAnswer ++ ;

    } else if (Studies.toLowerCase() == 'no' || Studies.toLowerCase() =='n'){
        alert('no, wrong answer! I am an engineer');
                //console.log('no wrong answer');

    }// end if 2
}

function guessWork(){

    var lastWork = prompt('Did I work in health-products?');

    if(lastWork.toLowerCase() == 'yes' || lastWork.toLowerCase() == 'y'){
        alert('yes, that is correct :)')
            //console.log('yes correct answer');

        correctAnswer++ ;
    
    }else if (lastWork.toLowerCase() == 'no' || lastWork.toLowerCase() == 'n'){
        alert('NO, wrong answer! I did')
                //console.log('no wrong answer');

       
    }// end if 3
}

function guessOther(){

    var OtherlastWork = prompt('Do I know about makeup?');

    if(OtherlastWork.toLowerCase() == 'yes' || OtherlastWork.toLowerCase() == 'y'){
        alert('yes, that is correct :)')
                    //console.log('yes correct answer');

        correctAnswer++ ;
    
    }else if (OtherlastWork.toLowerCase() == 'no' || OtherlastWork.toLowerCase() =='n'){
        alert('NO, wrong answer! I did')
                //console.log('no wrong answer');

    }// end if 4
}

function guessYear(){

    var programmingStartingYear = prompt('Did I start studying programming in 2019?');

    if(programmingStartingYear.toLowerCase() == 'yes' || programmingStartingYear.toLowerCase() == 'y'){
        alert('NO, wrong answer! I started in 2017');
        correctAnswer++ ;
                        //console.log('no wrong answer');

    
    }else if (programmingStartingYear.toLowerCase() == 'no' || programmingStartingYear.toLowerCase() == 'n'){
        alert('yes, that is correct :)')
                    //console.log('yes correct answer');

    }// end if 5
}

function guessNum(){
    for (var i =0; i<4 ; i++){
        var guessNumber = prompt('would you guess the correct number? you have four attempts');
    if (guessNumber > 7){
        alert('it`s too high');
    }else if(guessNumber < 7){
        alert('it`s too low')
    }else {
        alert('that is correct');
        correctAnswer++ ;
    }
    }// end for 6
        
    alert('The right number is 7');
}

function guessFood(){
    var x = 0;
    var foodArray = ['pizza', 'burger', ' pasta', 'maftool '];
    var foodChoice = prompt('Can you guess one of my favourite food? , you have six attempts');
    while ( x < 5 && foodChoice != foodArray[0] && foodChoice != foodArray[1] && foodChoice != foodArray[2] && foodChoice != foodArray[3]) {
        foodChoice = prompt('Can you guess one of my favourite food? , you have six attempts');
        x++
    }

    if (x<5){
        alert('That is correct, nice guessing');
        correctAnswer++ ;
        alert('Here is the list of my favourite food ' + foodArray)
    }else {
        alert('You run out of attempets and here is the list of my favourite food'+ foodArray)
    }
}

function score(){
    
    alert('Thank you ' + userName + ' ,you are great ');
    alert('your answer is  : ' + correctAnswer);
}


guessName();
guessAge();
guessYear();
guessStudies();
guessWork();
guessOther();
guessNum();
guessFood();
score();

