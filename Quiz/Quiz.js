

//Question bank
var questionBank= [
    //question one
    {
        question : 'What was the first video game?',
        option : ['Tetris','Pong','Mario','Sonic'],
        answer : 'Pong'
    },
    //question two
    {
        question : 'What is the best-selling video game of all time?',
        option : ['Minecraft','Fortnite','GTA V','Super Mario Bros'],
        answer : 'Minecraft',
    },
    //question three
    {
        question : 'Who created the game Fortnite?',
        option : ['Epic Games','Activision','EA Sports','Ubisoft'],
        answer : 'Epic Games',
    },
    //question four
    {
        question : 'What is the best-selling game console of all time?',
        option : ['PS2','Xbox 360','Nintendo Wii','GameCube'],
        answer : 'PS2',
    },
    //question five
    {
        question : 'What is the highest-grossing mobile game of all time?',
        option : ['Candy Crush','Pokemon Go','PUBG','Clash of Clans'],
        answer : 'PUBG',
    },
    //question six
    {
        question : 'Which of the following game series is developed by Blizzard Entertainment?',
        option : ['Assassins Creed','Overwatch','GTA V','Uncharted'],
        answer : 'Overwatch',
    },
    //question seven
    {
        question : 'What is the name of the yellow, circular character that eats dots in a popular arcade game?',
        option : ['Mario','Luigi','Pac-Man','Steve'],
        answer : 'Pac-Man',
    },
    //question eight
    {
        question : 'What is the name of the classic board game where players move their pieces around a board and try to capture their opponents pieces?',
        option : ['Monopoly','Minecraft','Roblox','Chess'],
        answer : 'Chess',
    },
    //question nine
    {
        question : 'Which of the following is NOT a character in the "Mario Kart" series?',
        option : ['Mario','Luigi','Bowser','Sonic'],
        answer : 'Sonic',
    },
    //question ten
    {
        question : 'In what game do players control a character named Kratos and battle gods and mythical creatures?',
        option : ['God of War',' Devil May Cry','Bayonetta','Nioh'],
        answer : 'God of War',
    }
]
var messageArea=[
    {
        message : 'Welldone',
    },
    {
        message : 'Good Job',
    },
    {
        message : 'Nice Try',
    },
    {
        message : 'Better luck next time ',
    },
]

var question= document.getElementById('question');
var quizContainer= document.getElementById('quiz-container');
var scorecard= document.getElementById('scorecard');
var option0= document.getElementById('option0');
var option1= document.getElementById('option1');
var option2= document.getElementById('option2');
var option3= document.getElementById('option3');
var next= document.querySelector('.next');
var points= document.getElementById('score');
var message= document.getElementById('message')
var span= document.querySelectorAll('span');
var i=0;
var score= 0;

//function to display questions
function displayQuestion(){
    for(var a=0;a<span.length;a++){
        span[a].style.background='none';
    }
    question.innerHTML= 'Q.'+(i+1)+' '+questionBank[i].question;
    option0.innerHTML= questionBank[i].option[0];
    option1.innerHTML= questionBank[i].option[1];
    option2.innerHTML= questionBank[i].option[2];
    option3.innerHTML= questionBank[i].option[3];
    stat.innerHTML= "Question"+' '+(i+1)+' '+'of'+' '+questionBank.length;
}

//function to calculate scores
function calcScore(e){
    if(e.innerHTML===questionBank[i].answer && score<questionBank.length)
    {
        score= score+1;
        document.getElementById(e.id).style.background= 'limegreen';
    }
    else{
        document.getElementById(e.id).style.background= 'tomato';
    }
    setTimeout(nextQuestion,300);
}

//message for user depending on how they did depending on their score it will display a different message
function messagedecider(){
    if(score >= 0 && score<=3){
        message.innerHTML= messageArea[3].message;
    }
    else if(score<=4&&score<=6){
        message.innerHTML= messageArea[2].message;
    }
    else if(score<=7&&score<=9){
        message.innerHTML= messageArea[1].message;
    }
    else{
        message.innerHTML= messageArea[0].message;
    }
}
//function to display next question
function nextQuestion(){
    if(i<questionBank.length-1)
    {
        i=i+1;
        displayQuestion();
    }
    else{
        points.innerHTML= score+ '/'+ questionBank.length;
        quizContainer.style.display= 'none';
        scoreboard.style.display= 'block'
        messagedecider();
    }
}


//click events to next button
next.addEventListener('click',nextQuestion);

//Back to Quiz button event
function backToQuiz(){
    location.reload();
}

//function to check Answers
function checkAnswer(){
    var answerBank= document.getElementById('answerBank');
    var answers= document.getElementById('answers');
    answerBank.style.display= 'block';
    scoreboard.style.display= 'none';
    for(var a=0;a<questionBank.length;a++)
    {
        var list= document.createElement('li');
        list.innerHTML= questionBank[a].answer;
        answers.appendChild(list);
    }
}


displayQuestion();