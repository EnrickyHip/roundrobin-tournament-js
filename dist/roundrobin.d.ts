import { Rounds } from "./types";
/**
 * Genereates a Round-Robin schedule.
 * @param array Array of teams or elements to schedule.
 * @param secondRound If true, it will generate a second half of the same matches generated, but with reversed home. It will be included in the returned array of rounds.
 * @returns An array with every created round.
 */
declare const roundrobin: <T>(array: (T | null)[], secondRound?: boolean) => Rounds<T>;
export default roundrobin;
