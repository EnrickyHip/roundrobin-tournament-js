"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function createSecondRound(firstHalf) {
    const secondHalf = firstHalf.map((round) => {
        return round.map((match) => {
            const newMatch = [...match];
            newMatch.reverse();
            return newMatch;
        });
    });
    return secondHalf;
}
exports.default = createSecondRound;
//# sourceMappingURL=createSecondRound.js.map