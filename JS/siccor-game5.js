// getitem when we restart or log in to web and return if value is null
let score = JSON.parse(localStorage.getItem('score')) || { wins: 0, loses: 0, ties: 0 };

;
//set boolean
let IsAutoPlay = false;
let intervalID;

function AutoPlay() {
    if (!IsAutoPlay) {
        intervalID = setInterval(function () {
            const playermove = PickComputerMove();
            PlayerPick(playermove);

        }, 1000);
        IsAutoPlay = true;
    }
    else{
        clearInterval(intervalID);
        IsAutoPlay = false;
    }
}

function ResetScore() {
    score.wins = 0;
    score.loses = 0;
    score.ties = 0;
    document.querySelector('.Wins').innerHTML = `Wins: ${score.wins}`;
    document.querySelector('.Loses').innerHTML = `Loses: ${score.loses}`;
    document.querySelector('.Ties').innerHTML = `Ties: ${score.ties}`;
}
//Set Text H1's Value = score's Object Value
document.querySelector('.Wins').innerHTML = `Wins: ${score.wins}`;
document.querySelector('.Loses').innerHTML = `Loses: ${score.loses}`;
document.querySelector('.Ties').innerHTML = `Ties: ${score.ties}`;

/*player move*/
function PlayerPick(Player) {



    const computermove = PickComputerMove();
    let recult = '';
    if (Player === 'siccors') {
        if (computermove === 'rock') { recult = 'You Lose.'; }
        else if (computermove === 'paper') { recult = 'You Won.'; }
        else if (computermove === 'siccors') { recult = 'Tie.'; }
    }
    else if (Player === 'paper') {
        if (computermove === 'paper') { recult = 'Tie.'; }
        else if (computermove === 'scissors') { recult = 'You Lose.'; }
        else if (computermove === 'rock') { recult = 'You Won.'; }
    }
    else if (Player === 'rock') {
        if (computermove === 'rock') { recult = 'Tie.'; }
        else if (computermove === 'paper') { recult = 'You Lose.'; }
        else if (computermove === 'siccors') { recult = 'You Won.'; }
    }
    /* Result of score */
    if (recult === 'You Won.') {
        score.wins += 1;
        document.querySelector('.Wins').innerHTML = `Wins: ${score.wins}`;

    } else if (recult === 'You Lose.') {
        score.loses += 1;
        document.querySelector('.Loses').innerHTML = `Loses: ${score.loses}`;
    } else if (recult === 'Tie.') {
        score.ties += 1;
        document.querySelector('.Ties').innerHTML = `Ties: ${score.ties}`;
    }
    //setItem : Save Item or value 
    console.log(localStorage.setItem('score', JSON.stringify(score)));
    console.log(recult);

    alert(`You Pick ${Player}. Computer Pick ${computermove} . ${recult}
            wins: ${score.wins} loses: ${score.loses} ties: ${score.ties}`)
}
/*ComputerMove*/
function PickComputerMove() {
    const randomNumber = Math.random();
    let computermove = '';
    if (randomNumber >= 0 && randomNumber < 1 / 3) {
        computermove = 'rock';
    }
    else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) { computermove = 'paper'; }
    else if (randomNumber >= 2 / 3 && randomNumber < 1) { computermove = 'siccors'; }
    return computermove;
}
