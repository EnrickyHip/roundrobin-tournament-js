"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const createSecondHalf_1 = __importDefault(require("./createSecondHalf"));
const easy_shuffle_1 = __importDefault(require("easy-shuffle"));
/**
 * Genereates a Round-Robin schedule.
 * @param array Array of teams or elements to schedule.
 * @param repeat If true, it will generate a second half of the same matches generated, but with reversed home. It will be included in the returned array of rounds.
 * @returns An array with every created round.
 */
function roundrobin(array, repeat) {
    const rounds = [];
    let elementsNumber = array.length;
    // this allow the creation of rounds with odd number of teams
    if (elementsNumber % 2 === 1) {
        array.push(null);
        elementsNumber++;
    }
    for (let round = 0; round < elementsNumber - 1; round++) {
        rounds[round] = [];
        for (let i = 0; i < elementsNumber / 2; i++) {
            const other = elementsNumber - i - 1;
            const team1 = array[i];
            const team2 = array[other];
            if (team1 !== null && team2 !== null) {
                const match = [team1, team2];
                if (round % 2 === 1 && i === 0)
                    match.reverse();
                rounds[round].push(match);
            }
            rounds[round] = (0, easy_shuffle_1.default)(rounds[round]); //randomize the order of the matches in the round
        }
        //* these next lines changes the position of the last element to the second (index 1) element of the array.
        const lastElement = array.pop();
        if (lastElement !== undefined) {
            array.splice(1, 0, lastElement);
        }
    }
    const shuffledRounds = (0, easy_shuffle_1.default)(rounds); //randomize the order of the rounds to prevent many matches away or home.
    // create the second half
    if (repeat) {
        const secondHalf = (0, createSecondHalf_1.default)(shuffledRounds);
        shuffledRounds.push(...secondHalf);
    }
    return shuffledRounds;
}
module.exports = roundrobin;
//# sourceMappingURL=index.js.map