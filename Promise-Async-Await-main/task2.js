// Guessing Game

//  User can enter a number
//  The system picks a random number from 1 to 6
//  If user number is equal to a random number, user gets 2 points
//  If the user number is different from the random number by 1,
//   the user gets 1 point. Otherwise, user gets 0.
// User can decide to play the game as long as they want to

const enterNumber = () => {
    return new Promise((resolve, reject) => {
        const userNumber = Number(window.prompt('Enter a number (1-6):'));
        const randomNumber = Math.floor(Math.random() * 6 + 1);

        console.log(`Your number: ${userNumber}.\nRandom number: ${randomNumber}.`);

        if (isNaN(userNumber)) {
            reject(new Error('Wrong Input Type'));
        } else if (userNumber === randomNumber) {
            resolve({
                points: 2,
                randomNumber
            });
        } else if (
            userNumber - 1 === randomNumber || 
            userNumber + 1 === randomNumber
        ) {
            resolve({
                points: 1,
                randomNumber
            }); 
        } else {
            console.log('0');
            reject(new Error('No match! 0 points given!'));
        }
    });
};

const continueGame = () => {
    return new Promise((resolve, reject) => {
        if (window.confirm('Do you want to continue?')) {
            resolve(true);
        } else {
            resolve(false);
        }
    });
};

const restartGame = () => {
    return continueGame()
            .then(result => {
                if (result) {
                    handleGuess();
                } else {
                    alert('Thanks for playing!');
                }
            });
};

const handleGuess = () => {
    enterNumber()
        .then(result => {
            alert(`Dice: ${result.randomNumber} - you got ${result.points} points!`);
            restartGame();
        })
        .catch(error => {
            alert(error);
            restartGame();
        });
};

const start = () => {
    handleGuess();
};

start();