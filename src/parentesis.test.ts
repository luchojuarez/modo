
import {validate} from "./parentesis"

describe("parentesis validator", () => {
    it("valid cases", ()=> {
        expect(validate("")).toBe(true)
        expect(validate("[(){{}}]")).toBe(true)
        expect(validate("[({hola()})]")).toBe(true)
        expect(validate("[hola]")).toBe(true)
    })

    it("invalid cases", ()=> {
        expect(validate("[")).toBe(false)
        expect(validate("]][[")).toBe(false)
        expect(validate("]][[")).toBe(false)
    })
})