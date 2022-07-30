"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function createSecondHalf(firstHalf) {
    const secondHalf = firstHalf.map((round) => {
        return round.map((match) => {
            const newMatch = [...match];
            newMatch.reverse();
            return newMatch;
        });
    });
    return secondHalf;
}
exports.default = createSecondHalf;
//# sourceMappingURL=createSecondHalf.js.map