// ANAGRAMS PART 2
//Find all the sets of 5 or more words within words.js that are anagrams of each other, and output each set to the DOM.
const destination = document.getElementById('destination')

function createNewElement(content){
    let newElement = document.createElement('div');
    let newText = document.createTextNode(content);
    newElement.appendChild(newText);
    destination.appendChild(newElement);
}

function alphabetize(a) {
    return String(a).toLowerCase().split("").sort().join("").trim();
}
const ArrayagramSets = {}

//dicitonary loop of words variable
    for (i = 0; i < words.length; i ++){
    const currentWord = alphabetize(words[i])
        if (ArrayagramSets[currentWord] === undefined) {
            ArrayagramSets[currentWord]= [words[i] + " "]
        } else {
            ArrayagramSets[currentWord].push(words[i] + " ")
        }
        console.log(ArrayagramSets)
    }

// use for in loop to pull the keys out of the arrayagram sets 
// when arraylength > 5

for (let sortedWord in ArrayagramSets){
    if(ArrayagramSets[sortedWord].length >= 5){
        document.write(ArrayagramSets[sortedWord])
        document.write("<br>")
        
    }
}
