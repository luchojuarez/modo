
import {groupAnagrams} from "./anagrams"

describe("parentesis validator", () => {
    it("valid cases", ()=> {
        expect(groupAnagrams(["eat","tea","tan","ate","nat","bat"])).toEqual([
            ["eat","tea","ate"],
            ["tan","nat"],
            ["bat"]
        ])
    
    })
})