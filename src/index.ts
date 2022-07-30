import createSecondHalf from "./createSecondHalf";
import { Rounds } from "./types";
import shuffle from "easy-shuffle";

/**
 * Genereates a Round-Robin schedule.
 * @param array Array of teams or elements to schedule.
 * @param repeat If true, it will generate a second half of the same matches generated, but with reversed home. It will be included in the returned array of rounds.
 * @returns An array with every created round.
 */

function roundrobin<T>(array: (T | null)[], repeat?: boolean): Rounds<T> {
  const rounds: Rounds<T> = [];
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
        if (round % 2 === 1 && i === 0) match.reverse();
        rounds[round].push(match);
      }

      rounds[round] = shuffle(rounds[round]); //randomize the order of the matches in the round
    }

    //* these next lines changes the position of the last element to the second (index 1) element of the array.
    const lastElement = array.pop();
    if (lastElement !== undefined) {
      array.splice(1, 0, lastElement);
    }
  }

  const shuffledRounds = shuffle(rounds); //randomize the order of the rounds to prevent many matches away or home.

  // create the second half
  if (repeat) {
    const secondHalf = createSecondHalf(shuffledRounds);
    shuffledRounds.push(...secondHalf);
  }

  return shuffledRounds;
}

export = roundrobin;
