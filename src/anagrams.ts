export function groupAnagrams(words: string[]): string[][] {
    // all anagram stored by, unique quey (anagram alphabetic sorted)
    let anagramsByKeys = new Map<string, string[]>()

    words.forEach(word => {
        let key = sortString(word)
        if(anagramsByKeys.has(key)){
            anagramsByKeys.get(key)?.push(word)
        } else {
            let wwords: string[] = [word]
            anagramsByKeys.set(key,wwords)
        }
    })

    let toReturn: string[][] = []
    for (let  value of anagramsByKeys.values()){
        toReturn.push(value)
    }

    return toReturn
}


function sortString(input:string):string{
    return Array.from(input).sort().join("")
}