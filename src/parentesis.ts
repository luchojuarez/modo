const openers = new Set<string>(["{","(","["])
const closers = new Set<string>(["}",")","]"])
const complements = new Map<string, string>([
    ["(",")"],
    ["{","}"],
    ["[","]"],
])

export function validate(input: string):boolean {
    const openersStack: string[] = []
    for (const char of input) {
        if (openers.has(char)){
            openersStack.push(char)
        } else {
            if(closers.has(char)){
                let lastOpener = openersStack.pop()
                if (lastOpener === undefined) {
                    return false
                }
                let desiredCloser = complements.get(lastOpener)
                if (char != desiredCloser) {
                    return false
                }
            } else {
                console.log("ignoring: ", char)
            }
        }
    }
    return openersStack.length === 0
}