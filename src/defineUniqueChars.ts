const defineUniqueChars = (allCharsArray: string[]): Record<string, number> => {
  const countedChars: Record<string, number> = {};

  for (let i = 0; i < allCharsArray.length; i++) {
    const letter = allCharsArray[i];

    if (countedChars[letter]) {
      countedChars[letter]++;
    } else {
      countedChars[letter] = 1;
    }
  }

  return countedChars;
};

export default defineUniqueChars;
