function findWords(words, chars) {
    const result = [];

  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    let total = true;
    let sumAsci = 0;

    for (let j = 0; j < word.length; j++) {
        const char = word[j];
        sumAsci += char.charCodeAt(0);
      if (chars.indexOf(word[j]) === -1) {
        total = false;
        break;
      }
    }

    if (total) {
        result.push({ word, sumAsci});
    }
  }

    result.sort((a, b) => b.sumAsci - a.sumAsci);
    return result.map(item => item.word);
}


const words = ["cherry", "date",  "honeydew",   "orange", "papaya"];
const characters = ['o', 'r', 'a', 'n', 'g', 'e', 'h', 'y', 'd', 'w', 't'];

const result = findWords(words, characters);
console.log(result);

const words2 = ["date","fig","mango"];
const characters2 = ['a', 't', 'e', 'm', 'n', 'g', 'o', 'f', 'i'];

const result2 = findWords(words2, characters2);
console.log(result2);


const words3 = ["apple", "banana", "orange","kiwi"];
const characters3 = ['a', 'p', 'l', 'e', 'o', 'r', 'n', 'g'];

const result3 = findWords(words3, characters3);
console.log(result3);


module.exports = { findWords };