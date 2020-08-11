# The High Low Game

Herein lie two files containing the JavaScript code to run the High Low game in our terminal. Both have the same functionality but slightly different appearances and dependencies.

### What is the High Low Game?

The High Low game (sometimes referred to as the Hi-Lo game) is a popular card-based game that uses only a single deck of cards. It is commonly played in gambling scenarios. The game involves one player going up against luck made tangible in the form of the dealer. The dealer shuffles the deck and removes two cards, both face-down. One is given to the player and the other retained by the dealer. The dealer then proceeds to show his card to the player and the player is asked to make a choice: **Will the value of the player's card prove to be higher or lower than the value of the dealer's card when it is flipped?**

If the player's choice is correct, the amount in the pot goes up by 20% (a percentage determined by house rules or, in this case, the code's author). The player can then choose whether or not to take on another round. If the player chooses not to, 50% of the pot is paid out to the player and the oher 50% is retained by the house to cover upkeep costs.

If the player's choice is wrong, however, the entire pot is forfeit to the house.

### Dependencies and Which File to Run

There are three required dependencies:
1. Node.js
2. npm
3. The prompt-sync Node module

There is also a fourth optional dependency, the colors Node module. **If you would rather not install colors, please run the file hiLoNoColors.js file.**

**If you don't mind installing colors.js, please run the hiLo.js file.**

The colors Node module is only used to change colors on strings in the console. Its sole purpose is to improve readability and it is not essential to the functioning of the game itself.

### How to install the prompt-sync Node module

After installing npm and Node.js, run `npm install prompt-sync` in the terminal.

Refer [their site](https://www.npmjs.com/package/prompt-sync) for more.

### How to install the colors Node module (optional)

After installing npm and Node.js, run `npm install colors` in the terminal.

Refer [their site](https://www.npmjs.com/package/colors) for more.