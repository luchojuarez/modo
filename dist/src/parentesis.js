"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validate = validate;
const openers = new Set(["{", "(", "["]);
const closers = new Set(["}", ")", "]"]);
const complements = new Map([
    [")", "("],
    ["}", "{"],
    ["[", "]"],
]);
function validate(input) {
    const openersStack = [];
    for (const char of input) {
        if (openers.has(char)) {
            openersStack.push(char);
        }
        else {
            if (closers.has(char)) {
                // pop
                let lastOpener = openersStack.pop();
                if (lastOpener == undefined) {
                    return false;
                }
                console.log("last opener: ", lastOpener);
                let desiredCloser = complements.get(lastOpener);
                console.log("comparando con ", desiredCloser);
                if (char !== desiredCloser) {
                    return false;
                }
            }
            console.log("ignoring: ", char);
        }
    }
    return sstack.length === 0;
}
//# sourceMappingURL=parentesis.js.map