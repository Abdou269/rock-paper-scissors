let start = true
, score = 0
, random = Math.floor(Math.random() * 3)
, housePicked = document.querySelectorAll('.house .card')[random]
, user, computer, winner;

const game = document.getElementById('gameDiv')
, triangle = document.getElementById('tri')
, rock = document.getElementsByClassName('rock')[0]
, paper = document.getElementsByClassName('paper')[0]
, scissors = document.getElementsByClassName('scissors')[0]
, resetBtn = document.getElementById('reset')
, rulesBtn = document.getElementById('btn')
, bg = document.getElementsByClassName('bg')[0]
, rules = document.getElementById('rules')
, Close = document.getElementById('close')
, results = document.getElementById('results')
, scoreTxt = document.getElementById('score')
, resultTxt = document.getElementById('resultTxt');

rulesBtn.addEventListener('click', _ => {
    rules.style.display = 'flex';
})
Close.addEventListener('click', _ => {
    rules.style.display = 'none';
})

function play(e){
    if (start){
        player(e);
        shoot(housePicked);
    }
}

function player(e){
    start = false;
    if (Array.from(e.classList).includes('rock')){
        rock.classList.add('chosen');
        paper.style.display = 'none';
        scissors.style.display = 'none';
        user = 'rock';
    }
    else if (Array.from(e.classList).includes('paper')){
        rock.style.display = 'none';
        paper.classList.add('chosen');
        scissors.style.display = 'none';
        user = 'paper';
    }
    else if (Array.from(e.classList).includes('scissors')){
        rock.style.display = 'none';
        paper.style.display = 'none';
        scissors.classList.add('chosen');
        user = 'scissors';
    }
}

function shoot(housePicked){
    game.classList.add('play');
    for (let i = 0; i < 3; i++) document.getElementsByClassName('hide')[i].style.display = 'flex';
    setTimeout(_=> {
        bg.classList.add('hide');
        housePicked.classList.remove('hide');
        results.classList.remove('hide');
        game.classList.add('showResults');
        result();
    }, 800);    
    triangle.classList.add('hide');
    computer = housePicked.classList[0];
}

function result (){
    if ((user == 'rock' && computer == 'rock')||(user == 'paper' && computer == 'paper')||(user == 'scissors' && computer == 'scissors')){
        winner = 'draw';
    }
    else if ((user == 'rock' && computer == 'paper' )||(user == 'paper' && computer == 'scissors')||(user == 'scissors' && computer == 'rock')){
        winner = 'you lose';
        score > 0 && score--;
    }
    else if ((user == 'rock' && computer == 'scissors' )||(user == 'paper' && computer == 'rock')||(user == 'scissors' && computer == 'paper')){
        winner = 'you win';
        score++;
    }
    scoreTxt.innerText = score;
    resultTxt.innerText = winner;
}

function reset(){
    start = true;
    winner = null;
    random = Math.floor(Math.random() * 3);
    
    rock.style.display = 'flex';
    paper.style.display = 'flex';
    scissors.style.display = 'flex';
    rock.classList.remove('chosen');
    paper.classList.remove('chosen');
    scissors.classList.remove('chosen');
    triangle.classList.remove('hide');
    game.classList.remove('play', 'showResults');
    
    for (let i = 0; i < 3; i++) document.getElementsByClassName('hide')[i].style.display = 'none';
    
    bg.classList.remove('hide');
    results.classList.add('hide');
    housePicked.classList.add('hide');
    housePicked = document.querySelectorAll('.house .card')[random];
}