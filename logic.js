// Rock, Paper, Scissor Game:Task 5

// Game Rules
// 1) Rock and Paper = Paper Wins
// 2) Rock and Scissor = Rock Wins
// 3) Paper and Scissor = Scissor Wins

// Steps
// 1) Ask users to play the game or quit, if they press start, then step 2 or quit
// 2) Take User and Computer Input 
// 3) Show them what they choose and who wins as per the Game Rules
// 4) Again ask them do they like to play again


/* declaring variable */

let items = ['Rock','Paper','Scissor']
let playerChoice = 0;
let computerChoice = 0;
let winner = '';
let gamePlay = true;


while(gamePlay){

    /* ask user to play*/
    const play = confirm('Do You want to play?');
    console.log({play});
    
    /* user will quit if he don't want to play */
    if(!play){

        gameplay = false;
        break;
    }

    /* get user input */

    playerChoice = prompt("Enter your choice:(1)Rock (2)Paper (3)Scissor");
    playerChoice = Number(playerChoice)
    //console.log({playerChoice:playerChoice});
    console.log('playerChoice: ' + playerChoice);

    /*check for valid entry or show error message*/

    while( playerChoice < 1  ||  playerChoice > 3 || isNaN(playerChoice)){
    {

        alert(`Error:Enter valid number between 1 to 3`)
    };
    playerChoice = prompt("Enter your choice:(1)Rock (2)Paper (3)Scissor");
}

/*get computer input*/
computerChoice =  Math.floor(Math.random() * 3 + 1);
console.log({computerChoice:computerChoice});

/*game logic*/

winner = function(){
    if(items[playerChoice - 1] === items[computerChoice - 1])
    {
        return "It's a tie";
    }
    if(items[playerChoice - 1] !== items[computerChoice - 1]) {
        if( items[playerChoice - 1] === 'Rock' && 
            items[computerChoice - 1] === 'Paper'
        ){
            return "Computer wins";  
        }else if(
            
            items[playerChoice - 1] === 'Paper' &&
            items[computerChoice - 1] === 'Rock'
        ){
            return"You are winner";
        }


        if( items[playerChoice - 1] === 'Rock' && 
        items[computerChoice - 1] === 'Scissor'
        ){
            return "You are winner";  
        }else if(
        
            items[playerChoice - 1] === 'Scissor' &&
            items[computerChoice - 1] === 'Rock'
         ){
            return"Computer wins";
        }

        if( items[playerChoice - 1] === 'Paper' && 
        items[computerChoice - 1] === 'Scissor'
        ){
            return "Computer wins";  
        }else if(
        
            items[playerChoice - 1] === 'Scissor' &&
            items[computerChoice - 1] === 'Paper'
         ){
            return"You are winner";
        }

    }
}

/*final result*/

alert(`RESULT:You choose ${items[playerChoice-1]} and Computer choose ${items[computerChoice-1]}.So ${winner()}!!`);

}



 










