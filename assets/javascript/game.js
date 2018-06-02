$(document).ready(function() {
 
    var targetScore = 0;
    var currentScore = 0;
    var redCrystal = 0;
    var blueCrystal = 0;
    var yellowCrystal = 0;
    var magCrystal = 0;
    var wins = 0;
    var losses = 0;
    var gameStatus = true;
 
    function reset() {
        //target random number
        targetScore = Math.floor((Math.random() * 101) + 19);
        //Getting values for the buttons
        redCrystal = Math.floor((Math.random() * 11) + 1);
        blueCrystal = Math.floor((Math.random() * 11) + 1);
        yellowCrystal = Math.floor((Math.random() * 11) + 1);
        magCrystal = Math.floor((Math.random() * 11) + 1);
 
 
        console.log(targetScore , redCrystal , blueCrystal , yellowCrystal , magCrystal)
 
    };
    reset(); 
    // action for the buttns
    $(".red-crystal").on('click', function(){
        currentScore = currentScore + redCrystal;
        console.log(currentScore);
        $("#currentScore").html(currentScore);
    })
    $(".blue-crystal").on('click', function(){
        currentScore = currentScore + blueCrystal ;
        $("#currentScore").html(currentScore);
    })
    $(".mag-crystal").on('click', function(){
        currentScore = currentScore + magCrystal ;
        $("#currentScore").html(currentScore);
    })
    $(".yellow-crystal").on('click', function(){
        currentScore = currentScore + yellowCrystal ;
        $("#currentScore").html(currentScore);
    })
    //when user wins
    if(currentScore == targetScore){

    }
 
   
 });