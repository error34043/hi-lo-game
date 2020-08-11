//Import of the prompt-sync and colors Node modules
//If you have both npm and Node.js, run 'npm install prompt-sync' in the terminal to install prompt-sync and 'npm install colors' to install colors
const prompt = require('prompt-sync')();
const colors = require('colors');

//Setting required arrays
const availableCards = ['A', 'K', 'Q', 'J', '10', '9', '8', '7', '6', '5', '4', '3', '2']; //length = 13
const cardValues = [13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
const Suits = ['Hearts', 'Clubs', 'Spades', 'Diamonds']; //length = 4

//Generates a random number for use in choosing the value of each card played.
const generateRandomCardIndex = () => {
    let index = 0;
    index = Math.floor(Math.random() * 13);
    return index;
};

//Generates a random number for use in choosing the suit of each card played
const generateRandomSuitIndex = () => {
    let index = 0;
    index = Math.floor(Math.random() * 4);
    return index;
};

//Returns a random card value using the availableCards and cardValues array. The array returned has the string for display to the user (eg: 'A') at its 0th index and the corresponding value of the card (eg: 13 for A) at its 1st index.
const getCard = () => {
    const card = [];
    let cardName = '';
    let cardValue = 0;
    cardIndex = generateRandomCardIndex();
    cardName = availableCards[cardIndex];
    card.push(cardName);
    cardValue = cardValues[cardIndex];
    card.push(cardValue);
    return card;
};

//Returns a random suit from the Suits array
const getSuit = () => {
    let suit = '';
    const suitIndex = generateRandomSuitIndex();
    suit = Suits[suitIndex];
    return suit;
};

//Checks whether the player wins or loses the round if the option chosen is 'higher'
const checkCardsHigher = (dealerCard, playerCard) => {
    let win = '';
    if (playerCard[1] > dealerCard[1]) {
        win = 'yes';
    } else if (playerCard[1] < dealerCard[1]) {
        win = 'no';
    } else {
        win = 'tie';
    };
    return win;
};

//Checks whether the player wins or loses the round if the option chosen is 'lower'
const checkCardsLower = (dealerCard, playerCard) => {
    let win ='';
    if (playerCard[1] < dealerCard[1]) {
        win = 'yes';
    } else if (playerCard[1] > dealerCard[1]) {
        win = 'no';
    } else {
        win = 'tie';
    };
    return win;
};

//The gameStart() function defines gameplay
const gameStart = () => {
    console.log('\n');
    let amountBet = prompt('How many dollars would you like to bet on this game? Please remember that the house only accepts amounts in multiples of 10. '.green);
    amountBet = Number(amountBet);

    //Technically speaking, any amount can be taken and used, but I wanted to make it resemble a casino as closely as possible.
    if (amountBet % 10 !== 0) {
        console.log(`\nThe house rules change for no one. Please enter a dollar amount that is a multiple of 10.`);
        gameStart();

    } else {
        const game = () => {
            const dealerCard = getCard();
            const dealerSuit = getSuit();

            const playerCard = getCard();
            const playerSuit = getSuit();

            let win = '';

            console.log(`\nThe dealer has chosen the ${dealerCard[0]} of ${dealerSuit}.\n`.green);

            let inp = prompt('Do you think your card will be higher or lower in value? [h/l] '.blue);
            inp = inp.toLowerCase();
            if (inp === 'higher' | inp === 'h' | inp === 'high' | inp === 'up') {
                win = checkCardsHigher(dealerCard, playerCard);
            } else if (inp === 'lower' | inp === 'l' | inp === 'low' | inp === 'down') {
                win = checkCardsLower(dealerCard, playerCard);
            } else {
                console.log(`\nNext time, please input one of the following commands:\n` + "'higher', 'h', 'high' or 'up'".cyan + ` to indicate that you expect your card to be of a higher value than the dealer's card, or\n` + "'lower', 'l', 'low' or 'down'".cyan + ` to indicate that you expect your card to be of a lower value than the dealer's card.`);
                game();
            };
            
            if (win === 'yes') {
                amountBet += 0.2 * amountBet;

                console.log(`\nYour card is the ${playerCard[0]} of ${playerSuit}.\n`.green);
                console.log(`You were right! The amount in the pot is currently: $${Math.floor(amountBet)}.`.green);

                const newRound = () => {
                    console.log('\nWould you like to play another round?\n'.green)
                    let inp = prompt('[y/n?]: '.blue);
                    inp = inp.toLowerCase();

                    if (inp === 'y' | inp === 'yes') {
                        game();
                    } else if (inp === 'n' | inp === 'no') {
                        const payOut = amountBet / 2;
                        console.log(`\nYour payout is ${Math.floor(payOut)}. Thank you for playing.`.green);
                    } else {
                        console.log(`\nPlease answer with ` + "'y' or 'yes'".cyan + ` to start the next round or ` + "'n' or 'no'".cyan + ` to end the game and collect your payout.`);
                        newRound();
                    };
                };

                newRound();

            } else if (win === 'no') {
                console.log(`\nYour card is the ${playerCard[0]} of ${playerSuit}.\n`.green);
                console.log(`You were wrong. You have lost the game and the entire pot worth $${Math.floor(amountBet)} goes to the dealer. Thank you for your patronage.`.green);
                
                const nextMatchChoice = () => {
                    console.log('\nWould you like to try again?\n'.green);
                    let nextRoundChoice = prompt('[y/n?]: '.blue);
                    nextRoundChoice = nextRoundChoice.toLowerCase();
                    if (nextRoundChoice === 'y' | nextRoundChoice === 'yes') {
                        gameStart();
                    } else if (nextRoundChoice === 'n' | nextRoundChoice === 'no') {
                        console.log('\nThank you for playing. We hope to see you again soon.'.green);
                    } else {
                        console.log(`\nPlease answer with ` + "'y' or 'yes'".cyan + ` to start the next round or ` + "'n' or 'no'".cyan + ` to end the game and collect your payout.`);
                        nextMatchChoice();
                    };
                };

                nextMatchChoice();

            } else if (win === 'tie') {
                console.log(`\nYour card is the ${playerCard[0]} of ${playerSuit}.\n`.green);
                console.log(`It was a tie. The pot rests at $${Math.floor(amountBet)}.`.green);

                game();
            };
        };

        game();
    };
    
    

    
};

//Game introduction
console.log("\nThe High Low game (sometimes referred to as the Hi-Lo game) is a popular card-based game that uses only a single deck of cards.\nIt is commonly played in gambling scenarios.\nThe game involves one player going up against luck made tangible in the form of the dealer. The dealer shuffles the deck and removes two cards, both face-down.\nOne is given to the player and the other retained by the dealer.\nThe dealer then proceeds to show his card to the player and the player is asked to make a choice:".bgGrey + "\nWill the value of the player's card prove to be higher or lower than the value of the dealer's card when it is flipped?".red + "\n\n" + "If the player's choice is correct, the amount in the pot goes up by 20% (a percentage determined by house rules).\nThe player can then choose whether or not to take on another round.\nIf the player chooses not to, 50% of the pot is paid out to the player.\n\nIf the player's choice is wrong, however, the entire pot is forfeit to the house.".bgGrey);

//Calling gameStart() function to begin the game
gameStart();