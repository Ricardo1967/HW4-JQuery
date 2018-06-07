$(document).ready(function () {

    var targetScore;
    var crystals = [];
    var wins = 0;
    var losses = 0;
    var gameStatus;
 
    function reset() {
        targetScore = Math.floor((Math.random() * 101) + 19);
        crystals=[];
        for (i = 0; i < 4; i++) {
            crystals.push(Math.floor((Math.random() * 11) + 1));
        };
        currentScore = 0;
        gameStatus = true;
        $('#message').text('Click a crystal to start playing');
        $('#targetScore').text(targetScore);
        $('#currentScore').text(currentScore);
        $('#wins').text('wins: ' + wins);
        $('#losses').text('losses: ' + losses);
        console.log(crystals[0], crystals[1], crystals[2], crystals[3]);
    };
 
    function playGame(value) {
        currentScore += value;
        if (gameStatus) {
            $('#currentScore').text(currentScore);
            if (currentScore >= targetScore) {
                gameStatus = false;
                setTimeout(function () {
                    reset();
                }, 2000);
                if (currentScore === targetScore) {
                    wins++;
                    $('#message').text('You win');
                } else if (currentScore > targetScore) {
                    losses++;
                    $('#message').text('You lost');
                };
            };
        };
    };
 
    reset();
    $('.red-crystal').on('click', function () {
        playGame(crystals[0]);
    });
    $('.blue-crystal').on('click', function () {
        playGame(crystals[1]);
    });
    $('.yellow-crystal').on('click', function () {
        playGame(crystals[2]);
    });
    $('.mag-crystal').on('click', function () {
        playGame(crystals[3]);
    });
 });