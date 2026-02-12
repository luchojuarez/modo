"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const parentesis_1 = require("./parentesis");
describe("parentesis validator", () => {
    it("valid cases", () => {
        expect((0, parentesis_1.validate)("")).toBe(true);
        expect((0, parentesis_1.validate)("[]")).toBe(true);
    });
    it("invalid cases", () => {
        expect((0, parentesis_1.validate)("[")).toBe(false);
        expect((0, parentesis_1.validate)("]][[")).toBe(false);
    });
});
//# sourceMappingURL=parentesis.test.js.map