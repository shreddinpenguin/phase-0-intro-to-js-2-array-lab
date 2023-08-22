const cats = [
    "Milo", 
    "Otis", 
    "Garfield"
]
beforeEach(function (cats) {
    cats.length = 0
    
    cats.push("Milo", "Otis", "Garfield")
})
function destructivelyAppendCat() {
    return cats.push("Ralph")
}
function destructivelyPrependCat() {
    return cats.unshift("Bob")
}
function destructivelyRemoveLastCat() {
    return cats.pop()
}
function destructivelyRemoveFirstCat() {
    return cats.shift()
}
function appendCat() {
    return appendCat = [...cats, "Broom"]
}
function prependCat() {
    return prependCat = ["Arnold", ...cats]
}
function removeLastCat() {
    return removeLastCat = cats.slice(0,2)
}
function removeFirstCat() {
    return removeFirstCat = cats.slice(1,3)
}