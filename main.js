var activePlayer, roundScore, scores,gamePlaying;

init();

//adding event to roll btn
document.querySelector('.btn-roll').addEventListener('click',function(){
   
    if(gamePlaying){
        //Generate Random number between 1 to 6
        var random = Math.floor(Math.random() * 6) + 1;

        //dice img 
        var diceDom = document.querySelector('.dice');
        
        //show the dice img after clicking the roll btn 
        diceDom.style.display = 'block';
        
        //change the dice img 
        diceDom.src = 'dice-' + random + '.png';

        if (random !== 1){
        
            roundScore += random;
            document.getElementById('current-' + activePlayer ).textContent = roundScore;
        
        }else{
            
            nextPlayer();
            
        }
    }
    
    

});

document.querySelector('.btn-hold').addEventListener('click',function(){
    if(gamePlaying){
        scores[activePlayer] += roundScore;
    // console.log(scores);

    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

    if(scores[activePlayer] >= 20){
        document.querySelector('#name-' + activePlayer).textContent = 'Winner';
        document.querySelector('.dice').style.display = 'none';
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
    
    document.querySelector('.dice').style.display = "none";
}

function init(){
    activePlayer = 0;
    scores = [0,0];
    roundScore = 0;
    gamePlaying = true;

    //Hidding the dice img after page refresh
    document.querySelector('.dice').style.display = 'none';

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
