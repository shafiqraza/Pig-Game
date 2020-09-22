var activePlayer, roundScore, scores,gamePlaying,lastDice;

init();

//adding event to roll btn
document.querySelector('.btn-roll').addEventListener('click',function(){
   
    if(gamePlaying){
       
        //Generate Random number between 1 to 6
        var random_1 = Math.floor(Math.random() * 6) + 1;
        var random_2 = Math.floor(Math.random() * 6) + 1;

        
        //dice img 
        var diceDom_1 = document.getElementById('dice-1');
        var diceDom_2 = document.getElementById('dice-2');
        
        //show the dice img after clicking the roll btn 
        diceDom_1.style.display = 'block';
        diceDom_2.style.display = 'block';
        
        //change the dice img 
        diceDom_1.src = 'dice-' + random_1 + '.png';
        diceDom_2.src = 'dice-' + random_2 + '.png';

        if (random_1 !== 1 && random_2 !== 1){
        
            roundScore += random_1 + random_2;
            document.getElementById('current-' + activePlayer ).textContent = roundScore;
        
        }else{
            
            nextPlayer();
            
        }

        // if(random === 6 && lastDice == 6){
        //     scores[activePlayer] = 0;
        //     document.getElementById('score-0').textContent = '0';
        //     nextPlayer();
           
        // }else if (random !== 1){
        
        //     roundScore += random;
        //     document.getElementById('current-' + activePlayer ).textContent = roundScore;
        
        // }else{
            
        //     nextPlayer();
            
        // }
        // lastDice = random;
    }
    
    

});

document.querySelector('.btn-hold').addEventListener('click',function(){
    if(gamePlaying){
        scores[activePlayer] += roundScore;
    // console.log(scores);

    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

    var input = document.querySelector('.final-score').value; 
    var winningScore ;

    if(input){
        winningScore = input;
    }else{
        winningScore = 100
    }

    if(scores[activePlayer] >= winningScore){
        document.querySelector('#name-' + activePlayer).textContent = 'Winner';
        document.getElementById('dice-1').style.display = "none";
        document.getElementById('dice-2').style.display = "none";
        document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
        document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
        gamePlaying = false;
    }else{
        nextPlayer();
    }
    }
    
});

document.querySelector('.btn-new').addEventListener('click',init);

function nextPlayer(){
    activePlayer === 1 ? activePlayer = 0 : activePlayer = 1;
    roundScore = 0;
    
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    
    document.getElementById('dice-1').style.display = "none";
    document.getElementById('dice-2').style.display = "none";
}

function init(){
    activePlayer = 0;
    scores = [0,0];
    roundScore = 0;
    gamePlaying = true;

    //Hidding the dice img after page refresh
    document.getElementById('dice-1').style.display = 'none';
    document.getElementById('dice-2').style.display = 'none';

    //This will set all the scores to 0 after refreshing the page
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';

    //removing the active class from both player's panels
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    
    //removing the winner class from both player's panels
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');

    //Changing name to default player 1 & 2
    document.querySelector('#name-0').textContent = 'Player 1';
    document.querySelector('#name-1').textContent = 'Player 2';

    //adding active class to player 1
    document.querySelector('.player-0-panel').classList.add('active');


}

// document.querySelector('#current-'+activePlayer).textContent = random;
