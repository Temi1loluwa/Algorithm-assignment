let readSentence = (str) => {
  const lengthCount = str.length;
  const wordsCount = str.split(" ").length;
  const vowelCount = str.match(/[aeiou]/gi).length;

  return `The Sentence is ${lengthCount} Characters long, consists of ${wordsCount} words, with ${vowelCount} vowels.`;
};
