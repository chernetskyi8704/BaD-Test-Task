import defineFirstUniqueChars from "./defineFirstUniqueChars";
import defineUniqueChars from "./defineUniqueChars";

type stringArray = string[];

const defineFirstUniqueChar = (text: string) => {
  const allFirstUniqueSymbols: stringArray = [];

  text.split(/\s+/).forEach((word: string) => {
    if (word === "") return;
    let allCharsOfTheWord: stringArray = word.split("");

    const allCountedChars = defineUniqueChars(allCharsOfTheWord);

    defineFirstUniqueChars(allCountedChars);

    if (Object.keys(allCountedChars).length) {
      const [[firstUniqLetter]] = Object.entries(allCountedChars);
      allFirstUniqueSymbols.push(firstUniqLetter);
    }
  });

  if (!allFirstUniqueSymbols.length) {
    alert("Provided text does not contain unique symbols");
    return;
  }

  const allUniqueCountedChars = defineUniqueChars(allFirstUniqueSymbols);
  defineFirstUniqueChars(allUniqueCountedChars);

  const [[firstUniqueChar]] = Object.entries(allUniqueCountedChars);
  alert(`The first unique char is: ${firstUniqueChar}`);
};

export default defineFirstUniqueChar;
