var player_score=0;
var computer_score=0;
var message;
var Choices=["R","P","C"]

function RPC(){
    
    var player_choice=(prompt("please inter your choice, R for Rock, P for Paper, C for cesar")).toUpperCase();
    var computer_choice=Choices[Math.floor(Math.random()*3)];
    if(player_choice=="R" && computer_choice=="P"){
        computer_score++;
        message="the Computer is the winner, its choic was "+computer_choice+ ", do you want to play again";
        if(confirm(message)){
            RPC();
        }
        else{
            if(player_score>computer_score){
                alert("the final result is:\n The Player\n Score: "+player_score);
            }
            if(player_score<computer_score){
                alert("the final result is:\n The computer\n Score: "+computer_score);
            }
            else{
                alert("The final result is even");
            }
        }
    }
    else if(player_choice=="R" && computer_choice=="C"){
        player_score++;
        message="the Player is the winner, its choic was "+computer_choice+ ",  do you want to play again";
        if(confirm(message)){
            RPC();
        }
        else{
            if(player_score>computer_score){
                alert("the final result is:\n The Player\n Score: "+player_score);
            }
            if(player_score<computer_score){
                alert("the final result is:\n The computer\n Score: "+computer_score);
            }
            else{
                alert("The final result is even");
            }
        }
    }
    else if(player_choice=="P" && computer_choice=="R"){
        player_score++;
        message="the Player is the winner, its choic was "+computer_choice+ ",  do you want to play again";
        if(confirm(message)){
            RPC();
        }
        else{
            if(player_score>computer_score){
                alert("the final result is:\n The Player\n Score: "+player_score);
            }
            if(player_score<computer_score){
                alert("the final result is:\n The computer\n Score: "+computer_score);
            }
            else{
                alert("The final result is even");
            }
        }
    }
    else if(player_choice=="P" && computer_choice=="C"){
        computer_score++;
        message="the Computer is the winner, its choic was "+computer_choice+ ",  do you want to play again";
        if(confirm(message)){
            RPC();
        }
        else{
            if(player_score>computer_score){
                alert("the final result is:\n The Player\n Score: "+player_score);
            }
            if(player_score<computer_score){
                alert("the final result is:\n The computer\n Score: "+computer_score);
            }
            else{
                alert("The final result is even");
            }
        }
    }
    else if(player_choice=="C" && computer_choice=="R"){
        computer_score++;
        message="the Computer is the winner, its choic was "+computer_choice+ ",  do you want to play again";
        if(confirm(message)){
            RPC();
        }
        else{
            if(player_score>computer_score){
                alert("the final result is:\n The Player\n Score: "+player_score);
            }
            if(player_score<computer_score){
                alert("the final result is:\n The computer\n Score: "+computer_score);
            }
            else{
                alert("The final result is even");
            }
        }
    }
    else if(player_choice=="C" && computer_choice=="P"){
        player_score++;
        message="the player is the winner, its choic was "+computer_choice+ ",  do you want to play again";
        if(confirm(message)){
            RPC();
        }
        else{
            if(player_score>computer_score){
                alert("the final result is:\n The Player\n Score: "+player_score);
            }
            if(player_score<computer_score){
                alert("the final result is:\n The computer\n Score: "+computer_score);
            }
            else{
                alert("The final result is even");
            }
        }
    }
    else {
        message="Even Result!, do you want to play again"
        if(confirm(message)){
            RPC();
        }
        else {
            if(player_score>computer_score){
                alert("the final result is:\n The Player\n Score: "+player_score);
            }
            if(player_score<computer_score){
                alert("the final result is:\n The computer\n Score: "+computer_score);
            }
            else{
                alert("The final result is even");
            }
        }
    }
}
RPC();