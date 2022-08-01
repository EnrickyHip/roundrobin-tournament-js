import { Rounds } from "./types";

export default function createSecondRound<T>(firstHalf: Rounds<T>): Rounds<T> {
  const secondHalf = firstHalf.map((round) => {
    return round.map((match) => {
      const newMatch = [...match];
      newMatch.reverse();
      return newMatch;
    });
  });

  return secondHalf;
}
