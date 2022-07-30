import { Rounds } from "./types";
/**
 * Genereates a Round-Robin schedule.
 * @param array Array of teams or elements to schedule.
 * @param repeat If true, it will generate a second half of the same matches generated, but with reversed home. It will be included in the returned array of rounds.
 * @returns An array with every created round.
 */
declare function roundrobin<T>(array: (T | null)[], repeat?: boolean): Rounds<T>;
export = roundrobin;
